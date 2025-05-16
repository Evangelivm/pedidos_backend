-- MySQL Schema for Order Management System
-- This script creates all necessary tables and relationships

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- -----------------------------------------------------
-- Table `categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `presentaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `presentaciones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `descripcion` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `codigo` VARCHAR(20) NOT NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  `categoria_id` INT NOT NULL,
  `presentacion_id` INT NOT NULL,
  `precio_sugerido` DECIMAL(10,2) NULL,
  `precio_minimo` DECIMAL(10,2) NULL,
  `stock` INT NOT NULL DEFAULT 0,
  `stock_minimo` INT NOT NULL DEFAULT 5,
  `imagen` VARCHAR(255) NULL,
  `activo` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_productos_categorias_idx` (`categoria_id` ASC),
  INDEX `fk_productos_presentaciones_idx` (`presentacion_id` ASC),
  CONSTRAINT `fk_productos_categorias`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `categorias` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_productos_presentaciones`
    FOREIGN KEY (`presentacion_id`)
    REFERENCES `presentaciones` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `tipo_documento` ENUM('DNI', 'RUC', 'CE', 'PASAPORTE') NOT NULL DEFAULT 'DNI',
  `numero_documento` VARCHAR(20) NULL,
  `direccion` VARCHAR(255) NULL,
  `telefono` VARCHAR(20) NULL,
  `email` VARCHAR(100) NULL,
  `notas` TEXT NULL,
  `activo` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `numero_documento_UNIQUE` (`numero_documento` ASC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `proveedores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proveedores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `ruc` VARCHAR(20) NULL,
  `direccion` VARCHAR(255) NULL,
  `telefono` VARCHAR(20) NULL,
  `email` VARCHAR(100) NULL,
  `contacto` VARCHAR(100) NULL,
  `notas` TEXT NULL,
  `activo` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `ruc_UNIQUE` (`ruc` ASC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `numero` VARCHAR(20) NOT NULL,
  `fecha` DATE NOT NULL,
  `cliente_id` INT NOT NULL,
  `subtotal` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `igv` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `total` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `estado` ENUM('PENDIENTE', 'PAGADO', 'DESPACHADO', 'ANULADO') NOT NULL DEFAULT 'PENDIENTE',
  `notas` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `numero_UNIQUE` (`numero` ASC),
  INDEX `fk_pedidos_clientes_idx` (`cliente_id` ASC),
  CONSTRAINT `fk_pedidos_clientes`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `clientes` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `detalle_pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `detalle_pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pedido_id` INT NOT NULL,
  `producto_id` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `precio_unitario` DECIMAL(10,2) NOT NULL,
  `subtotal` DECIMAL(10,2) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_detalle_pedidos_pedidos_idx` (`pedido_id` ASC),
  INDEX `fk_detalle_pedidos_productos_idx` (`producto_id` ASC),
  CONSTRAINT `fk_detalle_pedidos_pedidos`
    FOREIGN KEY (`pedido_id`)
    REFERENCES `pedidos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_detalle_pedidos_productos`
    FOREIGN KEY (`producto_id`)
    REFERENCES `productos` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `pagos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pagos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pedido_id` INT NOT NULL,
  `fecha` DATE NOT NULL,
  `monto` DECIMAL(10,2) NOT NULL,
  `metodo_pago` ENUM('EFECTIVO', 'TRANSFERENCIA', 'TARJETA', 'YAPE', 'PLIN', 'OTRO') NOT NULL DEFAULT 'EFECTIVO',
  `referencia` VARCHAR(100) NULL,
  `notas` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_pagos_pedidos_idx` (`pedido_id` ASC),
  CONSTRAINT `fk_pagos_pedidos`
    FOREIGN KEY (`pedido_id`)
    REFERENCES `pedidos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `despachos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `despachos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pedido_id` INT NOT NULL,
  `fecha` DATE NOT NULL,
  `direccion_entrega` VARCHAR(255) NOT NULL,
  `contacto_entrega` VARCHAR(100) NULL,
  `telefono_entrega` VARCHAR(20) NULL,
  `estado` ENUM('PENDIENTE', 'EN_RUTA', 'ENTREGADO', 'CANCELADO') NOT NULL DEFAULT 'PENDIENTE',
  `notas` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_despachos_pedidos_idx` (`pedido_id` ASC),
  CONSTRAINT `fk_despachos_pedidos`
    FOREIGN KEY (`pedido_id`)
    REFERENCES `pedidos` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `entradas_mercaderia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `entradas_mercaderia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `proveedor_id` INT NOT NULL,
  `numero_factura` VARCHAR(50) NULL,
  `total` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `notas` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_entradas_mercaderia_proveedores_idx` (`proveedor_id` ASC),
  CONSTRAINT `fk_entradas_mercaderia_proveedores`
    FOREIGN KEY (`proveedor_id`)
    REFERENCES `proveedores` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `detalle_entradas_mercaderia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `detalle_entradas_mercaderia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `entrada_id` INT NOT NULL,
  `producto_id` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `precio_unitario` DECIMAL(10,2) NOT NULL,
  `subtotal` DECIMAL(10,2) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_detalle_entradas_entradas_idx` (`entrada_id` ASC),
  INDEX `fk_detalle_entradas_productos_idx` (`producto_id` ASC),
  CONSTRAINT `fk_detalle_entradas_entradas`
    FOREIGN KEY (`entrada_id`)
    REFERENCES `entradas_mercaderia` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_detalle_entradas_productos`
    FOREIGN KEY (`producto_id`)
    REFERENCES `productos` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `gastos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gastos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `concepto` VARCHAR(255) NOT NULL,
  `monto` DECIMAL(10,2) NOT NULL,
  `tipo` ENUM('FIJO', 'VARIABLE') NOT NULL DEFAULT 'VARIABLE',
  `categoria` VARCHAR(100) NULL,
  `comprobante` VARCHAR(100) NULL,
  `notas` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `caja_diaria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `caja_diaria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `apertura` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `cierre` DECIMAL(10,2) NULL,
  `total_ventas` DECIMAL(10,2) NULL DEFAULT 0.00,
  `total_gastos` DECIMAL(10,2) NULL DEFAULT 0.00,
  `diferencia` DECIMAL(10,2) NULL DEFAULT 0.00,
  `estado` ENUM('ABIERTA', 'CERRADA') NOT NULL DEFAULT 'ABIERTA',
  `notas` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `fecha_UNIQUE` (`fecha` ASC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `movimientos_caja`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movimientos_caja` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `caja_id` INT NOT NULL,
  `fecha_hora` DATETIME NOT NULL,
  `tipo` ENUM('INGRESO', 'EGRESO') NOT NULL,
  `concepto` VARCHAR(255) NOT NULL,
  `monto` DECIMAL(10,2) NOT NULL,
  `referencia_id` INT NULL,
  `referencia_tipo` ENUM('VENTA', 'GASTO', 'OTRO') NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_movimientos_caja_caja_idx` (`caja_id` ASC),
  CONSTRAINT `fk_movimientos_caja_caja`
    FOREIGN KEY (`caja_id`)
    REFERENCES `caja_diaria` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Table `vendedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vendedor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `numero_ruc` VARCHAR(20) NULL,
  `direccion` VARCHAR(255) NULL,
  `telefono` VARCHAR(20) NULL,
  `email` VARCHAR(100) NULL,
  `notas` TEXT NULL,
  `activo` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `numero_ruc_UNIQUE` (`numero_ruc` ASC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -----------------------------------------------------
-- Insertar datos iniciales
-- -----------------------------------------------------

-- Insertar categorías
INSERT INTO `categorias` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Abarrotes', 'Productos básicos de alimentación y consumo diario'),
(2, 'Trigos, harinas y hojuelas', 'Productos derivados de cereales y granos'),
(3, 'Condimentos y especias', 'Productos para sazonar y dar sabor a las comidas'),
(4, 'Frutos secos', 'Nueces, semillas y frutas deshidratadas'),
(5, 'Productos para panificacion', 'Insumos para panadería y repostería'),
(6, 'Hierbas, aromaticas y semillas', 'Hierbas medicinales y aromáticas'),
(7, 'Legumbres y cereales', 'Granos, menestras y cereales'),
(8, 'Alimentos balanceados para mascotas', 'Comida para perros, gatos y otras mascotas');

-- Insertar presentaciones
INSERT INTO `presentaciones` (`id`, `nombre`, `descripcion`) VALUES
(1, 'CAJA', 'Producto empaquetado en caja'),
(2, 'SACO', 'Producto empaquetado en saco'),
(3, 'PAQUETE', 'Producto empaquetado en paquete'),
(4, 'BOLSA', 'Producto empaquetado en bolsa'),
(5, 'KILO', 'Producto vendido por kilo'),
(6, 'DOCENA', 'Producto vendido por docena'),
(7, 'DISPLAY', 'Producto en display para exhibición'),
(8, 'UNIDAD', 'Producto vendido por unidad'),
(9, 'PLANCHA', 'Producto empaquetado en plancha'),
(10, '50 KILOS', 'Producto empaquetado en sacos de 50 kilos'),
(11, 'HARINAS', 'Presentación específica para harinas');

-- Insertar cliente por defecto
INSERT INTO `clientes` (`nombre`, `tipo_documento`, `numero_documento`, `direccion`, `telefono`) 
VALUES ('Cliente General', 'DNI', '00000000', 'Sin dirección', '999999999');

-- Insertar proveedor por defecto
INSERT INTO `proveedores` (`nombre`, `ruc`, `direccion`, `telefono`) 
VALUES ('Proveedor General', '20000000000', 'Sin dirección', '999999999');

SET FOREIGN_KEY_CHECKS = 1;


-- Inserción de productos con IDs de categoría y presentación
-- Categorías:
-- 1: abarrotes
-- 2: trigos, harinas y hojuelas
-- 3: condimentos y especias
-- 4: frutos secos
-- 5: productos para panificacion
-- 6: hierbas, aromaticas y semillas
-- 7: legumbres y cereales
-- 8: alimentos balanceados para mascotas

-- Presentaciones:
-- 1: CAJA
-- 2: SACO
-- 3: PAQUETE
-- 4: BOLSA
-- 5: KILO
-- 6: DOCENA
-- 7: DISPLAY
-- 8: UNIDAD
-- 9: PLANCHA
-- 10: 50 KILOS
-- 11: HARINAS

-- Insertar productos
INSERT INTO `productos` (`codigo`, `descripcion`, `categoria_id`, `presentacion_id`, `precio_sugerido`, `precio_minimo`, `stock`) VALUES
-- Abarrotes
('2065', 'DURAZNO EN MITADES EN ALMIBAR X 82O GR X 12 UNIDADES AKER', 1, 1, 77.00, 78.00, 0),
('2257', 'ARROZ GRAN CHALAN SUPERIOR X 49 KG', 1, 2, 199.00, 198.00, 0),
('2321', 'ARROZ GRAN CHALAN EXTRA 12 UNID X 750 GR', 1, 3, 47.00, 46.00, 0),
('2258', 'ARROZ GRAN CHALAN EXTRA X 5 KG', 1, 3, 28.00, 27.00, 0),
('2259', 'ARROZ GRAN CHALAN EXTRA X 10 KG', 1, 3, 50.00, 49.00, 0),
('2260', 'ARROZ GRAN CHALAN EXTRA X 50 KG', 1, 2, 215.00, 214.00, 0),
('2261', 'ARROZ GRAN CHALAN GOURMET X 5 KG', 1, 3, 28.00, 27.00, 0),
('2262', 'ARROZ GRAN CHALAN GOURMET X 50 KG', 1, 2, 225.00, 224.00, 0),
('2263', 'ARROZ CUSI CUSA X 49 KG', 1, 2, 181.00, 180.00, 0),
('2254', 'TROZOS DE CABALLA FRESCOMAR X 48 UNI', 1, 1, 169.00, 168.00, 0),
('2255', 'TROZOS DE JUREL FRESCOMAR X 48 UND', 1, 1, 212.50, 211.50, 0),
('2400', 'TROZOS DE ATUN FRESCOMAR X 48 UND', 1, 1, 164.00, 163.00, 0),
('2401', 'FILETE DE ATUN FRESCOMAR X 48 UND', 1, 1, 216.50, 215.50, 0),
('2402', 'FILETE DE BONITO FRESCOMAR X 48 UND', 1, 1, 183.60, 182.60, 0),
('2207', 'HARINA GRANO DE ORO INTEGRAL 6 X 1 KG', 1, 4, 28.00, 28.30, 0),
('2195', 'HARINA GRANO DE ORO SIN PREPARAR 6 X 1KG', 1, 3, 24.60, 24.90, 0),
('2201', 'HARINA GRANO DE ORO PREPARADA 6 UNI X 1 KG', 1, 11, 25.00, 26.00, 0),
('2196', 'HARINA GRANO DE ORO SIN PREPARAR 18 UND X 180GR', 1, 3, 12.20, 12.00, 0),
('1992', 'AVENA GRANO DE ORO 10 X 1 KG', 1, 3, 52.00, 50.00, 0),
('580', 'AVENA GRANO DE ORO X 10KG', 1, 3, 47.50, 45.50, 0),
('1878', 'AVENA GRANO DE ORO 24X145GR', 1, 3, 18.80, 19.30, 0),
('2165', 'AVENA GRANO DE ORO 20X500GR', 1, 3, 56.60, 58.10, 0),
('2342', 'AVENA QUINUA GRANO DE ORO 12 X 370 GR', 1, 3, 27.60, 26.60, 0),
('2160', 'AVENA GRANO DE ORO INTEGRAL 20X500GR', 1, 3, 58.30, 57.30, 0),
('2312', 'AVENA INTEGRAL GRANO DE ORO 10 X 1KG', 1, 4, 58.00, 63.00, 0),
('2162', 'FIDEOS SPAGUETTI 20X500GR', 1, 3, 34.50, 34.00, 0),
('2159', 'FIDEOS TALLARIN 20X500GR', 1, 3, 34.50, 34.00, 0),
('2168', 'FIDEOS CABELLO DE ÁNGEL 40X250GR', 1, 3, 34.50, 34.00, 0),
('2161', 'FIDEO SUPER COMBO (CAN+COD+TOR+CAR)', 1, 3, 18.00, 17.50, 0),
('2216', 'FIDEO MUNICION GRANO DE ORO 20 X250 GR', 1, 3, 17.50, 17.00, 0),
('2169', 'FIDEO CANUTO GRANO DE ORO 20X250GR', 1, 3, 17.50, 17.00, 0),
('2163', 'FIDEO TORNILLO GRANO DE ORO 20X250GR', 1, 3, 17.50, 17.00, 0),
('2157', 'FIDEO CODITO GRANO DE ORO 20X250GR', 1, 3, 17.50, 17.00, 0),
('2164', 'FIDEO CARACOL GRANO DE ORO 20X250GR', 1, 3, 17.50, 17.00, 0),
('2170', 'FIDEO PLUMILLA GRANO DE ORO 20X250GR', 1, 3, 17.50, 17.00, 0),
('2166', 'FIDEO RIGATONI GRANO DE ORO 20X250GR', 1, 3, 17.50, 17.00, 0),
('2158', 'FIDEO MACARRON GRANO DE ORO 20X250GR', 1, 3, 16.00, 16.00, 0),
('1525', 'SEMOLA GRANO DE ORO X25KG', 1, 4, 94.00, 93.00, 0),
('487', 'AVENA 3 OSITOS GRANEL X 10KG', 1, 4, 62.00, 60.00, 0),
('2199', 'AVENA 3 OSITOS CLASICA 24 X 100 GR', 1, 3, 21.50, 21.00, 0),
('2153', 'AVENA QUINUA 3 OSITOS 12 X 150 GR', 1, 3, 17.50, 17.00, 0),
('2151', 'AVENA MACA 3 OSITOS 12 X 150 GR', 1, 3, 17.50, 17.00, 0),
('514', 'AVENA SANTA CATALINA X 5KG', 1, 4, 24.50, 23.50, 0),
('513', 'AVENA SANTA CATALINA X 10KG', 1, 4, 47.00, 46.00, 0),
('2209', 'AVENA TRADICIONAL X 25 KG', 1, 3, 4.00, 88.50, 0),
('778', 'ANDINA 7 SEMILLAS PALMEL 180 GR X 12UND', 1, 6, 23.50, 22.50, 0),
('2102', 'ARROZ COSTEÑO DE 20 UNI X 750GR', 1, 3, 82.00, 80.00, 0),
('1470', 'ANDINA HARINA DE HABAS PALMEL 180GR X 12', 1, 3, 26.50, 254.00, 0),
('1727', 'LECHE EN POLVO MOLFINO X 25 KG', 1, 2, 570.00, 570.00, 0),
('1727', 'LECHE EN POLVO MOLFINO X 25 KG', 1, 5, 26.00, 26.00, 0),
('1472', 'ANDINA HARINA DE SOYA PALMEL 180 GR X 12UND', 1, 3, 24.90, 230.00, 0),
('1471', 'ANDINA HARINA DE ARVERJA PALMEL 180 GR X 12UND', 1, 3, 26.50, 236.00, 0),
('2056', 'ANDINA HARINA DE MACA PALMEL 180 GR X 12UND', 1, 3, 33.50, 316.00, 0),
('888', 'AVENA COLORES X 50', 1, 5, 6.00, 5.80, 0),
('1325', 'AZUCAR DULCEÑITA X 5 KG FINA (IMPALPABLE)', 1, 4, 29.00, 27.00, 0),
('1658', 'AZUCAR RUBIA BOLSA X 10 KG', 1, 4, 34.50, 33.50, 0),
('1786', 'AZUCAR CARTAVIO X 50 KG', 1, 4, 153.50, 152.50, 0),
('1716', 'AZUCAR DULCE OLMOS RAFIA X 50G', 1, 2, 149.00, 149.00, 0),
('2211', 'AZUCAR CARTAVIO 1KG X 10 BOL', 1, 4, 39.60, 40.20, 0),
('1717', 'AZUCAR CARTAVIO RUBIA X 1 KG X 25 UNID', 1, 9, 100.00, 100.00, 0),
('1279', 'SAL MARINA DE COCINA 1 KG X 25 UND', 1, 3, 29.70, 30.70, 0),
('1280', 'SAL MARINA DE MESA 1 KG X 25 UND', 1, 3, 29.70, 30.70, 0),
('2369', 'CHOCOLATE ORO X 6 DISPLAY X 12 UND', 1, 9, 66.00, 65.00, 0),
('2369', 'CHOCOLATE ORO DISPLAY X 12 UND', 1, 7, 12.30, 12.30, 0),
('2131', 'GELATINA X 5 KG DULCERIN FRESA', 1, 4, 34.00, 33.00, 0),
('2134', 'GELATINA X 5 KG DULCERIN MENTA', 1, 4, 34.00, 33.00, 0),
('2132', 'GELATINA X 5 KG DULCERIN NARANJA', 1, 4, 34.00, 33.00, 0),
('2133', 'GELATINA X 5 KG DULCERIN PIÑA', 1, 4, 34.00, 33.00, 0),
('2152', 'GELATINA X 5 KG DULCERIN COCO', 1, 4, 34.00, 33.50, 0),
('2155', 'GELATINA X 5 KG DULCERIN LIMON', 1, 4, 34.00, 33.50, 0),
('2135', 'GELATINA DULCERIN X 5 KG TUTIFRUTI', 1, 4, 34.00, 33.00, 0),
('2150', 'FLAN DULCERIN X 5 KG', 1, 4, 34.00, 33.00, 0),

-- Trigos, harinas y hojuelas
('735', 'CREMA DE ARVERJA ANDINA X 5 KG', 2, 4, 25.50, 24.50, 0),
('785', 'HARINA (DEMSA) MAIN HARINA DE MAIZ-BS25-DM3260 X 25 KG', 2, 4, 73.00, 71.00, 0),
('647', 'HARINA DE MAIZ AMARILLO #2 X 25 KG (CORINA)', 2, 4, 65.00, 63.00, 0),
('1355', 'HARINA PAN BLANCA COLOMBIA PRECOCIDA x 1 KL (PLANCHA X 20)', 2, 3, 113.00, 112.00, 0),
('1809', 'HOJUELAS DE AVENA X 25 KG', 2, 2, 89.50, 88.50, 0),
('1306', 'HOJUELAS DE QUINUA', 2, 5, NULL, NULL, 0),
('1304', 'HOJUELAS DE KIWICHA', 2, 5, NULL, NULL, 0),
('1096', 'HARINA DE TRIGO ESPECIAL GRAN PANADERO X 50 KG', 2, 2, 127.00, 126.00, 0),
('720', 'MAIZENA DEMSA X 25 KG', 2, 5, 81.00, 79.00, 0),
('2210', 'CHUÑO A GRANEL', 2, 5, NULL, NULL, 0),
('2208', 'CHUÑO X 25 KG MARCA EAGLE', 2, 4, 149.00, 147.00, 0),
('683', 'FECULA DE PAPA AVEBE PAPEL X 25 KG (CHUÑO)', 2, 4, 155.00, 153.00, 0),
('505', 'FECULA DE PAPA AVEBE POLIPROPILENO X 25KG (CHUÑO)', 2, 4, 179.00, 177.00, 0),
('1025', 'HARINA DE TAMAL', 2, 10, NULL, 7.10, 0),
('991', 'HARINA DE MAIZ BLANCO', 2, 10, NULL, 6.90, 0),
('815', 'HARINA DE ARVERJA', 2, 10, NULL, 4.90, 0),
('2328', 'HARINA DE MACA PURA', 2, 10, NULL, NULL, 0),
('891', 'HARINA DE MACA', 2, 10, NULL, 4.70, 0),
('1339', 'PONCHE DE HABAS', 2, 10, NULL, 6.70, 0),
('1737', 'HARINA DE ALGARROBO', 2, 10, NULL, 6.40, 0),
('1108', 'HARINA DE CHOCHOCA', 2, 10, NULL, 7.50, 0),
('812', 'HARINA DE HABAS', 2, 10, NULL, 7.30, 0),
('811', 'HARINA 7 SEMILLAS', 2, 10, NULL, 3.30, 0),
('1101', 'HARINA DE MACHICA', 2, 10, NULL, 4.40, 0),
('814', 'HARINA DE SOYA', 2, 10, NULL, 5.60, 0),
('1317', 'HARINA DE CAÑIHUA', 2, 10, NULL, 13.60, 0),
('959', 'HARINA DE KIWICHA', 2, 10, NULL, 9.10, 0),
('944', 'HARINA DE PLATANO', 2, 10, NULL, 5.90, 0),
('964', 'HARINA DE QUINUA', 2, 10, NULL, 9.50, 0),
('947', 'CHUÑO PAPA CHICA', 2, 10, NULL, 8.20, 0),
('809', 'CHUÑO PAPA GRANDE', 2, 10, NULL, 9.20, 0),
('805', 'TRIGO CENIZA', 2, 10, NULL, 7.10, 0),
('804', 'TRIGO HUARAZ', 2, 10, NULL, 7.10, 0),
('941', 'TRIGO PARTIDO', 2, 10, NULL, 4.10, 0),
('806', 'TRIGO MOTE PINTADO', 2, 10, NULL, 4.00, 0),
('827', 'TRIGO RESBALADO', 2, 10, NULL, 4.00, 0),

-- Condimentos y especias
('1011', 'ACHIOTE ENTERO', 3, 5, 19.50, 18.50, 0),
('1742', 'ACHIOTE MOLIDO', 3, 5, 6.50, 5.50, 0),
('1050', 'AJI MIRASOL (SIN SEMILLA)', 3, 5, 27.00, 26.00, 0),
('962', 'AJI PANCA CON SEMILLA', 3, 5, 19.50, 18.50, 0),
('1313', 'AJI PAPRIKA', 3, 5, 27.50, 26.50, 0),
('966', 'AJI PANCA SIN SEMILLA', 3, 5, 33.50, 32.50, 0),
('567', 'ANIS IMPORTADO', 3, 5, 24.50, 23.50, 0),
('636', 'BICARBONATO DE SODIO', 3, 5, 8.00, 7.00, 0),
('1885', 'ROMERO MOLIDO', 3, 5, 14.50, 12.50, 0),
('1457', 'PIMENTON MOLIDO', 3, 5, 8.00, 6.00, 0),
('1075', 'PIMIENTA ENTERA NEGRA', 3, 5, 39.00, 38.00, 0),
('967', 'PIMIENTA MOLIDA', 3, 5, 43.50, 42.50, 0),
('1433', 'ROMERO', 3, 5, 18.50, 16.50, 0),
('1124', 'HONGO SECO ENTERO', 3, 5, 23.00, 22.50, 0),
('558', 'COMINO ENTERO', 3, 5, 21.50, 20.50, 0),
('657', 'COMINO MOLIDO', 3, 5, 22.20, 22.00, 0),
('996', 'PALILLO', 3, 5, 6.50, 6.00, 0),
('1321', 'ANIS ESTRELLA', 3, 5, 50.00, 49.00, 0),
('997', 'CANELA MOLIDA', 3, 5, 50.00, 49.00, 0),
('2187', 'CANELA ENTERA H1 X CAJA 10 KG', 3, 1, 697.00, 695.00, 0),
('2188', 'CANELA ENTERA H1 X KILO', 3, 5, 73.00, 71.00, 0),
('2189', 'CANELA ENTERA H2 X CAJA 10 KG', 3, 1, 677.00, 675.00, 0),
('2190', 'CANELA ENTERA H2 X KILO', 3, 5, 71.00, 69.00, 0),
('1180', 'CHANCACA CHICA X 40 TIRAS', 3, 2, 6.00, 222.00, 0),
('1181', 'CHANCACA GRANDE X 18 TIRAS', 3, 2, 13.00, 222.00, 0),
('783', 'CLAVO DE OLOR DE MADAGASCAR', 3, 5, 47.00, 46.00, 0),
('1572', 'CLAVO MOLIDO', 3, 5, 47.00, 45.00, 0),
('1459', 'FLOR DE JAMAICA', 3, 5, 12.70, 12.50, 0),
('656', 'LAUREL', 3, 5, 87.00, 86.00, 0),
('511', 'OREGANO NACIONAL SEMI EXTRA', 3, 5, 25.00, 24.50, 0),
('1702', 'OREGANO MOLIDO', 3, 5, 16.00, 15.50, 0),
('1661', 'OREGANO FINO', 3, 5, 19.50, 18.50, 0),
('1284', 'GLUTAMATO MONOSODICO X 25KG', 3, 4, 6.00, 136.00, 0),

-- Frutos secos
('1426', 'CASTAÑA', 4, 5, 67.00, 66.00, 0),
('755', 'NUECES PELADAS', 4, 5, 47.00, 46.00, 0),
('1462', 'NUEZ CAJU TOSTADA', 4, 5, 48.00, 47.00, 0),
('1482', 'NUEZ MOSCADA', 4, 5, 64.00, 63.00, 0),
('982', 'PECANA PELADA', 4, 5, 70.00, 69.00, 0),
('981', 'PECANA SIN PELAR', 4, 5, 27.00, 26.00, 0),
('1461', 'PISTACHO', 4, 5, 52.50, 51.50, 0),
('1460', 'ARANDANO DESHIDRATADO', 4, 5, 35.50, 34.00, 0),
('1634', 'DAMASCO APRICOT', 4, 5, 41.00, 40.00, 0),
('945', 'MANI MOLIDO', 4, 5, 7.30, 7.10, 0),
('2320', 'MANI PELADO', 4, 5, 10.40, 10.20, 0),
('1026', 'MANI TOSTADO', 4, 5, 14.50, 13.50, 0),
('796', 'MANI CASMA', 4, 5, 9.60, 9.40, 0),
('1052', 'PASAS NACIONALES', 4, 5, 9.60, 9.30, 0),
('2193', 'PASAS IMPORTADA', 4, 5, 17.00, 16.00, 0),
('529', 'ALMENDRA', 4, 5, 36.00, 35.00, 0),
('515', 'GUINDONES 100/120', 4, 5, 15.00, 14.00, 0),
('2194', 'GUINDONES 40/50', 4, 5, 20.00, 19.00, 0),
('1542', 'COCO FINO', 4, 5, 17.00, 16.00, 0),
('1449', 'COCO RAYADO NACIONAL', 4, 5, 27.50, 26.50, 0),
('1066', 'HIGO', 4, 5, 19.00, 18.00, 0),
('1490', 'HUESILLO', 4, 5, NULL, NULL, 0),
('517', 'NUECES CON CASCARA', 4, 5, 23.50, 22.50, 0),

-- Productos para panificación
('1684', 'CACAO EN POLVO', 5, 5, 33.00, 32.00, 0),
('1458', 'CASCARA DE CACAO', 5, 5, 6.00, 5.50, 0),
('1677', 'COBERTURA BITTER X 10 DISP X 1 KG', 5, 7, 17.00, 16.50, 0),
('1678', 'GOTAS SABOR A CHOCOLATE BOLSA BITTER X 1 KG', 5, 8, 18.00, 17.00, 0),
('985', 'GRAJEA CHICA', 5, 5, 9.00, 8.00, 0),
('1570', 'GRAJEA ESTRELLA', 5, 5, 10.50, 9.50, 0),
('980', 'GRAJEA GRANDE', 5, 5, 9.00, 8.00, 0),
('1569', 'GRAJEA GUSANO', 5, 5, 13.00, 12.00, 0),
('1024', 'PAN MOLIDO', 5, 5, 3.80, 3.30, 0),
('1679', 'PANELA GRANULADA X 1 KG (ECO PANELA)', 5, 8, 12.00, 11.00, 0),

-- Hierbas, aromáticas y semillas
('1931', 'ALPISTE CANADA 45.36 KG', 6, 2, 228.00, 227.00, 0),
('516', 'AJONJOLI NACIONAL', 6, 5, NULL, 9.40, 0),
('2032', 'SEMILLA GIRASOL 22/64 X 22.68 KG (GRANDE)', 6, 5, 126.00, 124.00, 0),
('987', 'LINAZA IMPORTADA X 45.36 KG', 6, 2, 194.00, 192.00, 0),
('2058', 'SEMILLA GIRASOL 20/64 X 22.68 KG (PEQUEÑA)', 6, 5, 122.00, 120.00, 0),
('681', 'TE A GRANEL NACIONAL', 6, 5, NULL, NULL, 0),
('1660', 'SEMILLA DE GIRASOL (PELADA)', 6, 5, NULL, 12.50, 0),
('807', 'LINAZA NACIONAL', 6, 10, NULL, 10.90, 0),

-- Legumbres y cereales
('2213', 'ARROZ COOPAR X 50 KG', 7, 2, 190.00, 188.00, 0),
('2319', 'LENTEJA ESTON 45.36 KG', 7, 5, 211.00, 209.00, 0),
('1394', 'LENTEJA ESTON 45.36 KG', 7, 2, 211.01, 209.01, 0),
('2287', 'LENTEJA CANADA CRIMSON X 45.36 KG', 7, 2, 222.00, 220.00, 0),
('768', 'LENTEJA RICHELEA 45.36 KG', 7, 2, 236.00, 234.00, 0),
('2178', 'LENTEJA RICHELEA 45.36 KG', 7, 2, 236.01, 234.01, 0),
('2332', 'LENTEJA RICHELEA 45.36 KG', 7, 2, 236.02, 234.02, 0),
('571', 'ARVERJA VERDE PARTIDA RUMBA N°1 X 45.36 KG', 7, 2, 189.00, 187.00, 0),
('1391', 'MAIZ POP CORN REQUENA S/M X 22,68 KG', 7, 2, 86.00, 84.00, 0),
('2006', 'MAIZ POP CORN D'' GRANEL X 22.68 KG', 7, 4, 78.00, 76.00, 0),
('770', 'GARBANZO MEXICANO 12MM', 7, 10, NULL, 6.70, 0),
('1341', 'GARBANZO N° 9', 7, 10, NULL, 5.80, 0),
('848', 'FREJOL CABALLERO', 7, 10, NULL, 7.60, 0),
('1405', 'FREJOL CAMANEJO', 7, 10, NULL, 6.50, 0),
('591', 'FREJOL CAMANEJO #1', 7, 10, NULL, 7.50, 0),
('824', 'FREJOL GUINDA', 7, 10, NULL, 6.60, 0),
('547', 'FREJOL CANARIO NORTE', 7, 10, NULL, 7.10, 0),
('850', 'FREJOL CAPSULA', 7, 10, NULL, 7.50, 0),
('1299', 'FREJOL CARAOTAS', 7, 10, NULL, 5.00, 0),
('2345', 'FREJOL CASTILLA NEGRA #1', 7, 10, NULL, 4.10, 0),
('730', 'FREJOL PANAMITO', 7, 10, NULL, 5.60, 0),
('773', 'FREJOL SOYA NACIONAL', 7, 10, NULL, 5.70, 0),
('544', 'FREJOL SOYA EN GRANO S/M', 7, 10, NULL, 4.20, 0),
('952', 'FREJOL RECLINER', 7, 10, NULL, 6.20, 0),
('863', 'FREJOL CHINO', 7, 10, NULL, 9.50, 0),
('1056', 'FREJOL ÑUÑA', 7, 10, NULL, 12.50, 0),
('799', 'FREJOL SARANDAJA', 7, 10, NULL, 4.90, 0),
('861', 'HABAS ENTERA VERDE', 7, 10, NULL, 5.60, 0),
('849', 'HABAS PARTIDA AMARILLA', 7, 10, NULL, 7.70, 0),
('876', 'KIWICHA', 7, 10, NULL, 9.60, 0),
('803', 'MAIZ CHISPA', 7, 10, NULL, 5.90, 0),
('828', 'MAIZ CUZCO', 7, 10, NULL, 9.40, 0),
('853', 'MAIZ CHULPE', 7, 10, NULL, 7.10, 0),
('1334', 'MAIZ CHULLPE CUZCO', 7, 10, NULL, 9.70, 0),
('882', 'MAIZ MONTAÑA NORMAL', 7, 10, NULL, 4.70, 0),
('831', 'MAIZ PROVINCIA PUNTA ROJA', 7, 10, NULL, 3.20, 0),
('857', 'MAIZ PUNTA ROJA EXTRA', 7, 10, NULL, 4.10, 0),
('822', 'MORON ENTERO', 7, 10, NULL, 3.60, 0),
('823', 'MORON PARTIDO', 7, 10, NULL, 3.60, 0),
('818', 'MOTE ANDAHUAYLAS EXTRA', 7, 10, NULL, 6.80, 0),
('820', 'MOTE ANDAHUAYLAS NORMAL', 7, 10, NULL, 5.60, 0),
('1703', 'MOTE # 2 ANDAHUAYLAS', 7, 10, NULL, 4.80, 0),
('808', 'MOTE TAMALERO AMARILLO', 7, 10, NULL, 4.30, 0),
('852', 'PALLAR BEBE', 7, 10, NULL, 3.80, 0),
('825', 'PALLAR ICA', 7, 10, NULL, 7.00, 0),
('1352', 'PAPA GRANULADA AMARILLA', 7, 10, NULL, 5.20, 0),
('1037', 'PAPA GRANULADA JAUJA', 7, 10, NULL, 5.10, 0),
('833', 'PAPA ICA', 7, 10, NULL, 5.60, 0),
('854', 'PAPA NORTE', 7, 10, NULL, 5.20, 0),
('2177', 'PAPA NORTE GRANULADA', 7, 10, NULL, 5.20, 0),
('1301', 'CAÑIHUA', 7, 5, NULL, 8.40, 0),
('816', 'QUINUA EXTRA', 7, 10, NULL, 10.20, 0),
('1649', 'QUINUA MEDIANA', 7, 10, NULL, 9.20, 0),
('795', 'CEBADA CRUDA', 7, 10, NULL, 2.60, 0),
('798', 'CEBADA TOSTADA', 7, 10, NULL, 2.70, 0),
('904', 'CEBADA CAFÉ', 7, 10, NULL, 3.20, 0),
('707', 'CHIA EN GRANO', 7, 10, NULL, 13.70, 0),
('858', 'HABAS ENTERA AMARILLA', 7, 10, NULL, 6.90, 0),
('859', 'HABAS ENTERA EXTRA', 7, 10, NULL, 9.10, 0),
('862', 'HABAS SEÑORITA', 7, 10, NULL, 5.90, 0),
('929', 'HABAS RAYADA', 7, 10, NULL, 5.30, 0),
('797', 'JORA BLANCA', 7, 10, NULL, 3.70, 0),
('756', 'JORA NEGRA', 7, 10, NULL, 4.10, 0),
('810', 'MORON TOSTADO', 7, 10, NULL, 4.00, 0),
('821', 'MOTE BROZA', 7, 10, NULL, 8.90, 0),
('819', 'MOTE CUZCO', 7, 10, NULL, 9.90, 0),

-- Alimentos balanceados para mascotas
('489', 'MIMASKOT CARNE/CEREAL/VEG 15KG NE - AZUL', 8, 4, 86.00, 87.00, 0),
('1105', 'MIMASKOT EN SALSA CARNE 15KG', 8, 4, 86.00, 87.00, 0),
('1136', 'MIMASKOT CORDERO/CER. 15KG NE', 8, 4, 86.00, 87.00, 0),
('627', 'MIMASKOT ADULTOS RAZA PEQUEÑA 15KG - VERDE', 8, 4, 86.00, 87.00, 0),
('2403', 'MIMASKOT CARNE/CEREAL/VEG 22KG - AZUL', 8, 4, 122.50, 123.50, 0),
('2404', 'MIMASKOT ADULTO RAZA PEQUEÑA 22KG - VERDE', 8, 4, 122.50, 123.50, 0),
('2419', 'MIMASKOT CARNE/CEREAL/VEG 6X1KG NE - AZUL', 8, 4, 9.50, 10.00, 0),
('2405', 'MIMASKOT ADULTOS RAZA PEQUEÑA 6X1KG - VERDE', 8, 4, 9.50, 10.00, 0),
('649', 'NVO NUTRICAN ADULTOS RAF 25KG', 8, 4, 99.50, 100.50, 0),
('648', 'NVO NUTRICAN CACHORROS RAF 25KG', 8, 4, 115.00, 116.00, 0),
('2406', 'ZEUS ADULTO RAF 25 KG', 8, 4, 83.50, 84.50, 0),
('2407', 'ZEUS CACHORROS RAF 25KG', 8, 4, 93.00, 94.00, 0),
('1487', 'MIMASKOT GATOS POLLO CARNE 9 KG', 8, 4, 73.00, 74.00, 0),
('1488', 'MIMASKOT GATITO BB POLLO CARNE 9 KG', 8, 4, 79.00, 80.00, 0),
('1364', 'MIMASKOT GATOS SALMÓN ATÚN 9 KG', 8, 4, 73.00, 74.00, 0),
('2408', 'MIMASKOT GATOS SALMON ATÚN 6X1 KG', 8, 4, 11.50, 12.00, 0),
('2409', 'MIMASKOT GATOS POLLO CARNE 6X1 KG', 8, 4, 11.50, 12.00, 0),
('2410', 'MIMASKOT GATITO BB POLLO CARNE 6X1 KG', 8, 4, 12.50, 13.00, 0);


