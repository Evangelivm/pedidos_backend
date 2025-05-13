import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
// import { ProductosModule } from './productos/productos.module';
// import { CategoriasModule } from './categorias/categorias.module';
// import { PresentacionesModule } from './presentaciones/presentaciones.module';
// import { ClientesModule } from './clientes/clientes.module';
// import { ProveedoresModule } from './proveedores/proveedores.module';
// import { PedidosModule } from './pedidos/pedidos.module';
// import { DespachosModule } from './despachos/despachos.module';
// import { PagosModule } from './pagos/pagos.module';
// import { GastosModule } from './gastos/gastos.module';
// import { CajaDiariaModule } from './caja-diaria/caja-diaria.module';
// import { EntradasMercaderiaModule } from './entradas-mercaderia/entradas-mercaderia.module';
import { CategoriasModule } from './categorias/categorias.module';
import { PresentacionesModule } from './presentaciones/presentaciones.module';
import { ProductosModule } from './productos/productos.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { DespachosModule } from './despachos/despachos.module';
import { PagosModule } from './pagos/pagos.module';
import { GastosModule } from './gastos/gastos.module';
import { CajaDiariaModule } from './caja-diaria/caja-diaria.module';
import { EntradasMercaderiaModule } from './entradas-mercaderia/entradas-mercaderia.module';

@Module({
  imports: [
    PrismaModule,
    CategoriasModule,
    PresentacionesModule,
    ProductosModule,
    ClientesModule,
    ProveedoresModule,
    PedidosModule,
    DespachosModule,
    PagosModule,
    GastosModule,
    CajaDiariaModule,
    EntradasMercaderiaModule,
    // ProductosModule,
    // CategoriasModule,
    // PresentacionesModule,
    // ClientesModule,
    // ProveedoresModule,
    // PedidosModule,
    // DespachosModule,
    // PagosModule,
    // GastosModule,
    // CajaDiariaModule,
    // EntradasMercaderiaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
