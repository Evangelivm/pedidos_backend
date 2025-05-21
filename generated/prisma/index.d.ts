
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model caja_diaria
 * 
 */
export type caja_diaria = $Result.DefaultSelection<Prisma.$caja_diariaPayload>
/**
 * Model categorias
 * 
 */
export type categorias = $Result.DefaultSelection<Prisma.$categoriasPayload>
/**
 * Model clientes
 * 
 */
export type clientes = $Result.DefaultSelection<Prisma.$clientesPayload>
/**
 * Model despachos
 * 
 */
export type despachos = $Result.DefaultSelection<Prisma.$despachosPayload>
/**
 * Model detalle_entradas_mercaderia
 * 
 */
export type detalle_entradas_mercaderia = $Result.DefaultSelection<Prisma.$detalle_entradas_mercaderiaPayload>
/**
 * Model detalle_pedidos
 * 
 */
export type detalle_pedidos = $Result.DefaultSelection<Prisma.$detalle_pedidosPayload>
/**
 * Model entradas_mercaderia
 * 
 */
export type entradas_mercaderia = $Result.DefaultSelection<Prisma.$entradas_mercaderiaPayload>
/**
 * Model gastos
 * 
 */
export type gastos = $Result.DefaultSelection<Prisma.$gastosPayload>
/**
 * Model movimientos_caja
 * 
 */
export type movimientos_caja = $Result.DefaultSelection<Prisma.$movimientos_cajaPayload>
/**
 * Model pagos
 * 
 */
export type pagos = $Result.DefaultSelection<Prisma.$pagosPayload>
/**
 * Model pedidos
 * 
 */
export type pedidos = $Result.DefaultSelection<Prisma.$pedidosPayload>
/**
 * Model presentaciones
 * 
 */
export type presentaciones = $Result.DefaultSelection<Prisma.$presentacionesPayload>
/**
 * Model productos
 * 
 */
export type productos = $Result.DefaultSelection<Prisma.$productosPayload>
/**
 * Model proveedores
 * 
 */
export type proveedores = $Result.DefaultSelection<Prisma.$proveedoresPayload>
/**
 * Model vendedores
 * 
 */
export type vendedores = $Result.DefaultSelection<Prisma.$vendedoresPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const clientes_tipo_documento: {
  DNI: 'DNI',
  RUC: 'RUC',
  CE: 'CE',
  PASAPORTE: 'PASAPORTE',
  SD: 'SD'
};

export type clientes_tipo_documento = (typeof clientes_tipo_documento)[keyof typeof clientes_tipo_documento]


export const movimientos_caja_tipo: {
  INGRESO: 'INGRESO',
  EGRESO: 'EGRESO'
};

export type movimientos_caja_tipo = (typeof movimientos_caja_tipo)[keyof typeof movimientos_caja_tipo]


export const gastos_tipo: {
  FIJO: 'FIJO',
  VARIABLE: 'VARIABLE'
};

export type gastos_tipo = (typeof gastos_tipo)[keyof typeof gastos_tipo]


export const pagos_metodo_pago: {
  EFECTIVO: 'EFECTIVO',
  TRANSFERENCIA: 'TRANSFERENCIA',
  TARJETA: 'TARJETA',
  YAPE: 'YAPE',
  PLIN: 'PLIN',
  OTRO: 'OTRO'
};

export type pagos_metodo_pago = (typeof pagos_metodo_pago)[keyof typeof pagos_metodo_pago]


export const despachos_estado: {
  PENDIENTE: 'PENDIENTE',
  EN_RUTA: 'EN_RUTA',
  ENTREGADO: 'ENTREGADO',
  CANCELADO: 'CANCELADO'
};

export type despachos_estado = (typeof despachos_estado)[keyof typeof despachos_estado]


export const caja_diaria_estado: {
  ABIERTA: 'ABIERTA',
  CERRADA: 'CERRADA'
};

export type caja_diaria_estado = (typeof caja_diaria_estado)[keyof typeof caja_diaria_estado]


export const movimientos_caja_referencia_tipo: {
  VENTA: 'VENTA',
  GASTO: 'GASTO',
  OTRO: 'OTRO'
};

export type movimientos_caja_referencia_tipo = (typeof movimientos_caja_referencia_tipo)[keyof typeof movimientos_caja_referencia_tipo]


export const pedidos_estado: {
  PENDIENTE: 'PENDIENTE',
  PAGADO: 'PAGADO',
  DESPACHADO: 'DESPACHADO',
  ANULADO: 'ANULADO'
};

export type pedidos_estado = (typeof pedidos_estado)[keyof typeof pedidos_estado]

}

export type clientes_tipo_documento = $Enums.clientes_tipo_documento

export const clientes_tipo_documento: typeof $Enums.clientes_tipo_documento

export type movimientos_caja_tipo = $Enums.movimientos_caja_tipo

export const movimientos_caja_tipo: typeof $Enums.movimientos_caja_tipo

export type gastos_tipo = $Enums.gastos_tipo

export const gastos_tipo: typeof $Enums.gastos_tipo

export type pagos_metodo_pago = $Enums.pagos_metodo_pago

export const pagos_metodo_pago: typeof $Enums.pagos_metodo_pago

export type despachos_estado = $Enums.despachos_estado

export const despachos_estado: typeof $Enums.despachos_estado

export type caja_diaria_estado = $Enums.caja_diaria_estado

export const caja_diaria_estado: typeof $Enums.caja_diaria_estado

export type movimientos_caja_referencia_tipo = $Enums.movimientos_caja_referencia_tipo

export const movimientos_caja_referencia_tipo: typeof $Enums.movimientos_caja_referencia_tipo

export type pedidos_estado = $Enums.pedidos_estado

export const pedidos_estado: typeof $Enums.pedidos_estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Caja_diarias
 * const caja_diarias = await prisma.caja_diaria.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Caja_diarias
   * const caja_diarias = await prisma.caja_diaria.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.caja_diaria`: Exposes CRUD operations for the **caja_diaria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caja_diarias
    * const caja_diarias = await prisma.caja_diaria.findMany()
    * ```
    */
  get caja_diaria(): Prisma.caja_diariaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorias`: Exposes CRUD operations for the **categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.categoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientes`: Exposes CRUD operations for the **clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.clientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.despachos`: Exposes CRUD operations for the **despachos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Despachos
    * const despachos = await prisma.despachos.findMany()
    * ```
    */
  get despachos(): Prisma.despachosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalle_entradas_mercaderia`: Exposes CRUD operations for the **detalle_entradas_mercaderia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalle_entradas_mercaderias
    * const detalle_entradas_mercaderias = await prisma.detalle_entradas_mercaderia.findMany()
    * ```
    */
  get detalle_entradas_mercaderia(): Prisma.detalle_entradas_mercaderiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalle_pedidos`: Exposes CRUD operations for the **detalle_pedidos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalle_pedidos
    * const detalle_pedidos = await prisma.detalle_pedidos.findMany()
    * ```
    */
  get detalle_pedidos(): Prisma.detalle_pedidosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entradas_mercaderia`: Exposes CRUD operations for the **entradas_mercaderia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entradas_mercaderias
    * const entradas_mercaderias = await prisma.entradas_mercaderia.findMany()
    * ```
    */
  get entradas_mercaderia(): Prisma.entradas_mercaderiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gastos`: Exposes CRUD operations for the **gastos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gastos
    * const gastos = await prisma.gastos.findMany()
    * ```
    */
  get gastos(): Prisma.gastosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimientos_caja`: Exposes CRUD operations for the **movimientos_caja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movimientos_cajas
    * const movimientos_cajas = await prisma.movimientos_caja.findMany()
    * ```
    */
  get movimientos_caja(): Prisma.movimientos_cajaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagos`: Exposes CRUD operations for the **pagos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pagos.findMany()
    * ```
    */
  get pagos(): Prisma.pagosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidos`: Exposes CRUD operations for the **pedidos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedidos.findMany()
    * ```
    */
  get pedidos(): Prisma.pedidosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.presentaciones`: Exposes CRUD operations for the **presentaciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presentaciones
    * const presentaciones = await prisma.presentaciones.findMany()
    * ```
    */
  get presentaciones(): Prisma.presentacionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productos`: Exposes CRUD operations for the **productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.productos.findMany()
    * ```
    */
  get productos(): Prisma.productosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proveedores`: Exposes CRUD operations for the **proveedores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proveedores
    * const proveedores = await prisma.proveedores.findMany()
    * ```
    */
  get proveedores(): Prisma.proveedoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendedores`: Exposes CRUD operations for the **vendedores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendedores
    * const vendedores = await prisma.vendedores.findMany()
    * ```
    */
  get vendedores(): Prisma.vendedoresDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    caja_diaria: 'caja_diaria',
    categorias: 'categorias',
    clientes: 'clientes',
    despachos: 'despachos',
    detalle_entradas_mercaderia: 'detalle_entradas_mercaderia',
    detalle_pedidos: 'detalle_pedidos',
    entradas_mercaderia: 'entradas_mercaderia',
    gastos: 'gastos',
    movimientos_caja: 'movimientos_caja',
    pagos: 'pagos',
    pedidos: 'pedidos',
    presentaciones: 'presentaciones',
    productos: 'productos',
    proveedores: 'proveedores',
    vendedores: 'vendedores'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "caja_diaria" | "categorias" | "clientes" | "despachos" | "detalle_entradas_mercaderia" | "detalle_pedidos" | "entradas_mercaderia" | "gastos" | "movimientos_caja" | "pagos" | "pedidos" | "presentaciones" | "productos" | "proveedores" | "vendedores"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      caja_diaria: {
        payload: Prisma.$caja_diariaPayload<ExtArgs>
        fields: Prisma.caja_diariaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.caja_diariaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caja_diariaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.caja_diariaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caja_diariaPayload>
          }
          findFirst: {
            args: Prisma.caja_diariaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caja_diariaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.caja_diariaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caja_diariaPayload>
          }
          findMany: {
            args: Prisma.caja_diariaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caja_diariaPayload>[]
          }
          create: {
            args: Prisma.caja_diariaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caja_diariaPayload>
          }
          createMany: {
            args: Prisma.caja_diariaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.caja_diariaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caja_diariaPayload>
          }
          update: {
            args: Prisma.caja_diariaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caja_diariaPayload>
          }
          deleteMany: {
            args: Prisma.caja_diariaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.caja_diariaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.caja_diariaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caja_diariaPayload>
          }
          aggregate: {
            args: Prisma.Caja_diariaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaja_diaria>
          }
          groupBy: {
            args: Prisma.caja_diariaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Caja_diariaGroupByOutputType>[]
          }
          count: {
            args: Prisma.caja_diariaCountArgs<ExtArgs>
            result: $Utils.Optional<Caja_diariaCountAggregateOutputType> | number
          }
        }
      }
      categorias: {
        payload: Prisma.$categoriasPayload<ExtArgs>
        fields: Prisma.categoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findFirst: {
            args: Prisma.categoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findMany: {
            args: Prisma.categoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          create: {
            args: Prisma.categoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          createMany: {
            args: Prisma.categoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          update: {
            args: Prisma.categoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          deleteMany: {
            args: Prisma.categoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.categoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      clientes: {
        payload: Prisma.$clientesPayload<ExtArgs>
        fields: Prisma.clientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findFirst: {
            args: Prisma.clientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findMany: {
            args: Prisma.clientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          create: {
            args: Prisma.clientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          createMany: {
            args: Prisma.clientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          update: {
            args: Prisma.clientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          deleteMany: {
            args: Prisma.clientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.clientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      despachos: {
        payload: Prisma.$despachosPayload<ExtArgs>
        fields: Prisma.despachosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.despachosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despachosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.despachosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despachosPayload>
          }
          findFirst: {
            args: Prisma.despachosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despachosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.despachosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despachosPayload>
          }
          findMany: {
            args: Prisma.despachosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despachosPayload>[]
          }
          create: {
            args: Prisma.despachosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despachosPayload>
          }
          createMany: {
            args: Prisma.despachosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.despachosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despachosPayload>
          }
          update: {
            args: Prisma.despachosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despachosPayload>
          }
          deleteMany: {
            args: Prisma.despachosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.despachosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.despachosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$despachosPayload>
          }
          aggregate: {
            args: Prisma.DespachosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDespachos>
          }
          groupBy: {
            args: Prisma.despachosGroupByArgs<ExtArgs>
            result: $Utils.Optional<DespachosGroupByOutputType>[]
          }
          count: {
            args: Prisma.despachosCountArgs<ExtArgs>
            result: $Utils.Optional<DespachosCountAggregateOutputType> | number
          }
        }
      }
      detalle_entradas_mercaderia: {
        payload: Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>
        fields: Prisma.detalle_entradas_mercaderiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detalle_entradas_mercaderiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_entradas_mercaderiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detalle_entradas_mercaderiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_entradas_mercaderiaPayload>
          }
          findFirst: {
            args: Prisma.detalle_entradas_mercaderiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_entradas_mercaderiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detalle_entradas_mercaderiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_entradas_mercaderiaPayload>
          }
          findMany: {
            args: Prisma.detalle_entradas_mercaderiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_entradas_mercaderiaPayload>[]
          }
          create: {
            args: Prisma.detalle_entradas_mercaderiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_entradas_mercaderiaPayload>
          }
          createMany: {
            args: Prisma.detalle_entradas_mercaderiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.detalle_entradas_mercaderiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_entradas_mercaderiaPayload>
          }
          update: {
            args: Prisma.detalle_entradas_mercaderiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_entradas_mercaderiaPayload>
          }
          deleteMany: {
            args: Prisma.detalle_entradas_mercaderiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detalle_entradas_mercaderiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.detalle_entradas_mercaderiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_entradas_mercaderiaPayload>
          }
          aggregate: {
            args: Prisma.Detalle_entradas_mercaderiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalle_entradas_mercaderia>
          }
          groupBy: {
            args: Prisma.detalle_entradas_mercaderiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detalle_entradas_mercaderiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.detalle_entradas_mercaderiaCountArgs<ExtArgs>
            result: $Utils.Optional<Detalle_entradas_mercaderiaCountAggregateOutputType> | number
          }
        }
      }
      detalle_pedidos: {
        payload: Prisma.$detalle_pedidosPayload<ExtArgs>
        fields: Prisma.detalle_pedidosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detalle_pedidosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detalle_pedidosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidosPayload>
          }
          findFirst: {
            args: Prisma.detalle_pedidosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detalle_pedidosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidosPayload>
          }
          findMany: {
            args: Prisma.detalle_pedidosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidosPayload>[]
          }
          create: {
            args: Prisma.detalle_pedidosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidosPayload>
          }
          createMany: {
            args: Prisma.detalle_pedidosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.detalle_pedidosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidosPayload>
          }
          update: {
            args: Prisma.detalle_pedidosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidosPayload>
          }
          deleteMany: {
            args: Prisma.detalle_pedidosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detalle_pedidosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.detalle_pedidosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalle_pedidosPayload>
          }
          aggregate: {
            args: Prisma.Detalle_pedidosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalle_pedidos>
          }
          groupBy: {
            args: Prisma.detalle_pedidosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detalle_pedidosGroupByOutputType>[]
          }
          count: {
            args: Prisma.detalle_pedidosCountArgs<ExtArgs>
            result: $Utils.Optional<Detalle_pedidosCountAggregateOutputType> | number
          }
        }
      }
      entradas_mercaderia: {
        payload: Prisma.$entradas_mercaderiaPayload<ExtArgs>
        fields: Prisma.entradas_mercaderiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.entradas_mercaderiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradas_mercaderiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.entradas_mercaderiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradas_mercaderiaPayload>
          }
          findFirst: {
            args: Prisma.entradas_mercaderiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradas_mercaderiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.entradas_mercaderiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradas_mercaderiaPayload>
          }
          findMany: {
            args: Prisma.entradas_mercaderiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradas_mercaderiaPayload>[]
          }
          create: {
            args: Prisma.entradas_mercaderiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradas_mercaderiaPayload>
          }
          createMany: {
            args: Prisma.entradas_mercaderiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.entradas_mercaderiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradas_mercaderiaPayload>
          }
          update: {
            args: Prisma.entradas_mercaderiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradas_mercaderiaPayload>
          }
          deleteMany: {
            args: Prisma.entradas_mercaderiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.entradas_mercaderiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.entradas_mercaderiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entradas_mercaderiaPayload>
          }
          aggregate: {
            args: Prisma.Entradas_mercaderiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntradas_mercaderia>
          }
          groupBy: {
            args: Prisma.entradas_mercaderiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Entradas_mercaderiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.entradas_mercaderiaCountArgs<ExtArgs>
            result: $Utils.Optional<Entradas_mercaderiaCountAggregateOutputType> | number
          }
        }
      }
      gastos: {
        payload: Prisma.$gastosPayload<ExtArgs>
        fields: Prisma.gastosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gastosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gastosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastosPayload>
          }
          findFirst: {
            args: Prisma.gastosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gastosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastosPayload>
          }
          findMany: {
            args: Prisma.gastosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastosPayload>[]
          }
          create: {
            args: Prisma.gastosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastosPayload>
          }
          createMany: {
            args: Prisma.gastosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.gastosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastosPayload>
          }
          update: {
            args: Prisma.gastosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastosPayload>
          }
          deleteMany: {
            args: Prisma.gastosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gastosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gastosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gastosPayload>
          }
          aggregate: {
            args: Prisma.GastosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGastos>
          }
          groupBy: {
            args: Prisma.gastosGroupByArgs<ExtArgs>
            result: $Utils.Optional<GastosGroupByOutputType>[]
          }
          count: {
            args: Prisma.gastosCountArgs<ExtArgs>
            result: $Utils.Optional<GastosCountAggregateOutputType> | number
          }
        }
      }
      movimientos_caja: {
        payload: Prisma.$movimientos_cajaPayload<ExtArgs>
        fields: Prisma.movimientos_cajaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.movimientos_cajaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_cajaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.movimientos_cajaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_cajaPayload>
          }
          findFirst: {
            args: Prisma.movimientos_cajaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_cajaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.movimientos_cajaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_cajaPayload>
          }
          findMany: {
            args: Prisma.movimientos_cajaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_cajaPayload>[]
          }
          create: {
            args: Prisma.movimientos_cajaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_cajaPayload>
          }
          createMany: {
            args: Prisma.movimientos_cajaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.movimientos_cajaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_cajaPayload>
          }
          update: {
            args: Prisma.movimientos_cajaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_cajaPayload>
          }
          deleteMany: {
            args: Prisma.movimientos_cajaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.movimientos_cajaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.movimientos_cajaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientos_cajaPayload>
          }
          aggregate: {
            args: Prisma.Movimientos_cajaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimientos_caja>
          }
          groupBy: {
            args: Prisma.movimientos_cajaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Movimientos_cajaGroupByOutputType>[]
          }
          count: {
            args: Prisma.movimientos_cajaCountArgs<ExtArgs>
            result: $Utils.Optional<Movimientos_cajaCountAggregateOutputType> | number
          }
        }
      }
      pagos: {
        payload: Prisma.$pagosPayload<ExtArgs>
        fields: Prisma.pagosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          findFirst: {
            args: Prisma.pagosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          findMany: {
            args: Prisma.pagosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>[]
          }
          create: {
            args: Prisma.pagosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          createMany: {
            args: Prisma.pagosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pagosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          update: {
            args: Prisma.pagosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          deleteMany: {
            args: Prisma.pagosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pagosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          aggregate: {
            args: Prisma.PagosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagos>
          }
          groupBy: {
            args: Prisma.pagosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagosGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagosCountArgs<ExtArgs>
            result: $Utils.Optional<PagosCountAggregateOutputType> | number
          }
        }
      }
      pedidos: {
        payload: Prisma.$pedidosPayload<ExtArgs>
        fields: Prisma.pedidosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>
          }
          findFirst: {
            args: Prisma.pedidosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>
          }
          findMany: {
            args: Prisma.pedidosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>[]
          }
          create: {
            args: Prisma.pedidosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>
          }
          createMany: {
            args: Prisma.pedidosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pedidosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>
          }
          update: {
            args: Prisma.pedidosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>
          }
          deleteMany: {
            args: Prisma.pedidosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedidosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pedidosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidosPayload>
          }
          aggregate: {
            args: Prisma.PedidosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidos>
          }
          groupBy: {
            args: Prisma.pedidosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidosGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidosCountArgs<ExtArgs>
            result: $Utils.Optional<PedidosCountAggregateOutputType> | number
          }
        }
      }
      presentaciones: {
        payload: Prisma.$presentacionesPayload<ExtArgs>
        fields: Prisma.presentacionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.presentacionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presentacionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.presentacionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presentacionesPayload>
          }
          findFirst: {
            args: Prisma.presentacionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presentacionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.presentacionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presentacionesPayload>
          }
          findMany: {
            args: Prisma.presentacionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presentacionesPayload>[]
          }
          create: {
            args: Prisma.presentacionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presentacionesPayload>
          }
          createMany: {
            args: Prisma.presentacionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.presentacionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presentacionesPayload>
          }
          update: {
            args: Prisma.presentacionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presentacionesPayload>
          }
          deleteMany: {
            args: Prisma.presentacionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.presentacionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.presentacionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$presentacionesPayload>
          }
          aggregate: {
            args: Prisma.PresentacionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresentaciones>
          }
          groupBy: {
            args: Prisma.presentacionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresentacionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.presentacionesCountArgs<ExtArgs>
            result: $Utils.Optional<PresentacionesCountAggregateOutputType> | number
          }
        }
      }
      productos: {
        payload: Prisma.$productosPayload<ExtArgs>
        fields: Prisma.productosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findFirst: {
            args: Prisma.productosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findMany: {
            args: Prisma.productosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          create: {
            args: Prisma.productosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          createMany: {
            args: Prisma.productosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          update: {
            args: Prisma.productosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          deleteMany: {
            args: Prisma.productosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          aggregate: {
            args: Prisma.ProductosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos>
          }
          groupBy: {
            args: Prisma.productosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductosGroupByOutputType>[]
          }
          count: {
            args: Prisma.productosCountArgs<ExtArgs>
            result: $Utils.Optional<ProductosCountAggregateOutputType> | number
          }
        }
      }
      proveedores: {
        payload: Prisma.$proveedoresPayload<ExtArgs>
        fields: Prisma.proveedoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.proveedoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.proveedoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>
          }
          findFirst: {
            args: Prisma.proveedoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.proveedoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>
          }
          findMany: {
            args: Prisma.proveedoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>[]
          }
          create: {
            args: Prisma.proveedoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>
          }
          createMany: {
            args: Prisma.proveedoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.proveedoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>
          }
          update: {
            args: Prisma.proveedoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>
          }
          deleteMany: {
            args: Prisma.proveedoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.proveedoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.proveedoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proveedoresPayload>
          }
          aggregate: {
            args: Prisma.ProveedoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProveedores>
          }
          groupBy: {
            args: Prisma.proveedoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProveedoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.proveedoresCountArgs<ExtArgs>
            result: $Utils.Optional<ProveedoresCountAggregateOutputType> | number
          }
        }
      }
      vendedores: {
        payload: Prisma.$vendedoresPayload<ExtArgs>
        fields: Prisma.vendedoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vendedoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vendedoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>
          }
          findFirst: {
            args: Prisma.vendedoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vendedoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>
          }
          findMany: {
            args: Prisma.vendedoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>[]
          }
          create: {
            args: Prisma.vendedoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>
          }
          createMany: {
            args: Prisma.vendedoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vendedoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>
          }
          update: {
            args: Prisma.vendedoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>
          }
          deleteMany: {
            args: Prisma.vendedoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vendedoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vendedoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendedoresPayload>
          }
          aggregate: {
            args: Prisma.VendedoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendedores>
          }
          groupBy: {
            args: Prisma.vendedoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendedoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.vendedoresCountArgs<ExtArgs>
            result: $Utils.Optional<VendedoresCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    caja_diaria?: caja_diariaOmit
    categorias?: categoriasOmit
    clientes?: clientesOmit
    despachos?: despachosOmit
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaOmit
    detalle_pedidos?: detalle_pedidosOmit
    entradas_mercaderia?: entradas_mercaderiaOmit
    gastos?: gastosOmit
    movimientos_caja?: movimientos_cajaOmit
    pagos?: pagosOmit
    pedidos?: pedidosOmit
    presentaciones?: presentacionesOmit
    productos?: productosOmit
    proveedores?: proveedoresOmit
    vendedores?: vendedoresOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Caja_diariaCountOutputType
   */

  export type Caja_diariaCountOutputType = {
    movimientos_caja: number
  }

  export type Caja_diariaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimientos_caja?: boolean | Caja_diariaCountOutputTypeCountMovimientos_cajaArgs
  }

  // Custom InputTypes
  /**
   * Caja_diariaCountOutputType without action
   */
  export type Caja_diariaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caja_diariaCountOutputType
     */
    select?: Caja_diariaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Caja_diariaCountOutputType without action
   */
  export type Caja_diariaCountOutputTypeCountMovimientos_cajaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimientos_cajaWhereInput
  }


  /**
   * Count Type CategoriasCountOutputType
   */

  export type CategoriasCountOutputType = {
    productos: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriasCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
  }


  /**
   * Count Type ClientesCountOutputType
   */

  export type ClientesCountOutputType = {
    pedidos: number
  }

  export type ClientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | ClientesCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientesCountOutputType
     */
    select?: ClientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidosWhereInput
  }


  /**
   * Count Type Entradas_mercaderiaCountOutputType
   */

  export type Entradas_mercaderiaCountOutputType = {
    detalle_entradas_mercaderia: number
  }

  export type Entradas_mercaderiaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_entradas_mercaderia?: boolean | Entradas_mercaderiaCountOutputTypeCountDetalle_entradas_mercaderiaArgs
  }

  // Custom InputTypes
  /**
   * Entradas_mercaderiaCountOutputType without action
   */
  export type Entradas_mercaderiaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entradas_mercaderiaCountOutputType
     */
    select?: Entradas_mercaderiaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Entradas_mercaderiaCountOutputType without action
   */
  export type Entradas_mercaderiaCountOutputTypeCountDetalle_entradas_mercaderiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_entradas_mercaderiaWhereInput
  }


  /**
   * Count Type PedidosCountOutputType
   */

  export type PedidosCountOutputType = {
    despachos: number
    detalle_pedidos: number
    pagos: number
  }

  export type PedidosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    despachos?: boolean | PedidosCountOutputTypeCountDespachosArgs
    detalle_pedidos?: boolean | PedidosCountOutputTypeCountDetalle_pedidosArgs
    pagos?: boolean | PedidosCountOutputTypeCountPagosArgs
  }

  // Custom InputTypes
  /**
   * PedidosCountOutputType without action
   */
  export type PedidosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidosCountOutputType
     */
    select?: PedidosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidosCountOutputType without action
   */
  export type PedidosCountOutputTypeCountDespachosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: despachosWhereInput
  }

  /**
   * PedidosCountOutputType without action
   */
  export type PedidosCountOutputTypeCountDetalle_pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_pedidosWhereInput
  }

  /**
   * PedidosCountOutputType without action
   */
  export type PedidosCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagosWhereInput
  }


  /**
   * Count Type PresentacionesCountOutputType
   */

  export type PresentacionesCountOutputType = {
    productos: number
  }

  export type PresentacionesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | PresentacionesCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * PresentacionesCountOutputType without action
   */
  export type PresentacionesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresentacionesCountOutputType
     */
    select?: PresentacionesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PresentacionesCountOutputType without action
   */
  export type PresentacionesCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
  }


  /**
   * Count Type ProductosCountOutputType
   */

  export type ProductosCountOutputType = {
    detalle_entradas_mercaderia: number
    detalle_pedidos: number
  }

  export type ProductosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_entradas_mercaderia?: boolean | ProductosCountOutputTypeCountDetalle_entradas_mercaderiaArgs
    detalle_pedidos?: boolean | ProductosCountOutputTypeCountDetalle_pedidosArgs
  }

  // Custom InputTypes
  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductosCountOutputType
     */
    select?: ProductosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountDetalle_entradas_mercaderiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_entradas_mercaderiaWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountDetalle_pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_pedidosWhereInput
  }


  /**
   * Count Type ProveedoresCountOutputType
   */

  export type ProveedoresCountOutputType = {
    entradas_mercaderia: number
  }

  export type ProveedoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entradas_mercaderia?: boolean | ProveedoresCountOutputTypeCountEntradas_mercaderiaArgs
  }

  // Custom InputTypes
  /**
   * ProveedoresCountOutputType without action
   */
  export type ProveedoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProveedoresCountOutputType
     */
    select?: ProveedoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProveedoresCountOutputType without action
   */
  export type ProveedoresCountOutputTypeCountEntradas_mercaderiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entradas_mercaderiaWhereInput
  }


  /**
   * Count Type VendedoresCountOutputType
   */

  export type VendedoresCountOutputType = {
    pedidos: number
  }

  export type VendedoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | VendedoresCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * VendedoresCountOutputType without action
   */
  export type VendedoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendedoresCountOutputType
     */
    select?: VendedoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendedoresCountOutputType without action
   */
  export type VendedoresCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model caja_diaria
   */

  export type AggregateCaja_diaria = {
    _count: Caja_diariaCountAggregateOutputType | null
    _avg: Caja_diariaAvgAggregateOutputType | null
    _sum: Caja_diariaSumAggregateOutputType | null
    _min: Caja_diariaMinAggregateOutputType | null
    _max: Caja_diariaMaxAggregateOutputType | null
  }

  export type Caja_diariaAvgAggregateOutputType = {
    id: number | null
    apertura: Decimal | null
    cierre: Decimal | null
    total_ventas: Decimal | null
    total_gastos: Decimal | null
    diferencia: Decimal | null
  }

  export type Caja_diariaSumAggregateOutputType = {
    id: number | null
    apertura: Decimal | null
    cierre: Decimal | null
    total_ventas: Decimal | null
    total_gastos: Decimal | null
    diferencia: Decimal | null
  }

  export type Caja_diariaMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    apertura: Decimal | null
    cierre: Decimal | null
    total_ventas: Decimal | null
    total_gastos: Decimal | null
    diferencia: Decimal | null
    estado: $Enums.caja_diaria_estado | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Caja_diariaMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    apertura: Decimal | null
    cierre: Decimal | null
    total_ventas: Decimal | null
    total_gastos: Decimal | null
    diferencia: Decimal | null
    estado: $Enums.caja_diaria_estado | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Caja_diariaCountAggregateOutputType = {
    id: number
    fecha: number
    apertura: number
    cierre: number
    total_ventas: number
    total_gastos: number
    diferencia: number
    estado: number
    notas: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Caja_diariaAvgAggregateInputType = {
    id?: true
    apertura?: true
    cierre?: true
    total_ventas?: true
    total_gastos?: true
    diferencia?: true
  }

  export type Caja_diariaSumAggregateInputType = {
    id?: true
    apertura?: true
    cierre?: true
    total_ventas?: true
    total_gastos?: true
    diferencia?: true
  }

  export type Caja_diariaMinAggregateInputType = {
    id?: true
    fecha?: true
    apertura?: true
    cierre?: true
    total_ventas?: true
    total_gastos?: true
    diferencia?: true
    estado?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type Caja_diariaMaxAggregateInputType = {
    id?: true
    fecha?: true
    apertura?: true
    cierre?: true
    total_ventas?: true
    total_gastos?: true
    diferencia?: true
    estado?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type Caja_diariaCountAggregateInputType = {
    id?: true
    fecha?: true
    apertura?: true
    cierre?: true
    total_ventas?: true
    total_gastos?: true
    diferencia?: true
    estado?: true
    notas?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Caja_diariaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caja_diaria to aggregate.
     */
    where?: caja_diariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caja_diarias to fetch.
     */
    orderBy?: caja_diariaOrderByWithRelationInput | caja_diariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: caja_diariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caja_diarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caja_diarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned caja_diarias
    **/
    _count?: true | Caja_diariaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Caja_diariaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Caja_diariaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Caja_diariaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Caja_diariaMaxAggregateInputType
  }

  export type GetCaja_diariaAggregateType<T extends Caja_diariaAggregateArgs> = {
        [P in keyof T & keyof AggregateCaja_diaria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaja_diaria[P]>
      : GetScalarType<T[P], AggregateCaja_diaria[P]>
  }




  export type caja_diariaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: caja_diariaWhereInput
    orderBy?: caja_diariaOrderByWithAggregationInput | caja_diariaOrderByWithAggregationInput[]
    by: Caja_diariaScalarFieldEnum[] | Caja_diariaScalarFieldEnum
    having?: caja_diariaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Caja_diariaCountAggregateInputType | true
    _avg?: Caja_diariaAvgAggregateInputType
    _sum?: Caja_diariaSumAggregateInputType
    _min?: Caja_diariaMinAggregateInputType
    _max?: Caja_diariaMaxAggregateInputType
  }

  export type Caja_diariaGroupByOutputType = {
    id: number
    fecha: Date
    apertura: Decimal
    cierre: Decimal | null
    total_ventas: Decimal | null
    total_gastos: Decimal | null
    diferencia: Decimal | null
    estado: $Enums.caja_diaria_estado
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Caja_diariaCountAggregateOutputType | null
    _avg: Caja_diariaAvgAggregateOutputType | null
    _sum: Caja_diariaSumAggregateOutputType | null
    _min: Caja_diariaMinAggregateOutputType | null
    _max: Caja_diariaMaxAggregateOutputType | null
  }

  type GetCaja_diariaGroupByPayload<T extends caja_diariaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Caja_diariaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Caja_diariaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Caja_diariaGroupByOutputType[P]>
            : GetScalarType<T[P], Caja_diariaGroupByOutputType[P]>
        }
      >
    >


  export type caja_diariaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    apertura?: boolean
    cierre?: boolean
    total_ventas?: boolean
    total_gastos?: boolean
    diferencia?: boolean
    estado?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
    movimientos_caja?: boolean | caja_diaria$movimientos_cajaArgs<ExtArgs>
    _count?: boolean | Caja_diariaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caja_diaria"]>



  export type caja_diariaSelectScalar = {
    id?: boolean
    fecha?: boolean
    apertura?: boolean
    cierre?: boolean
    total_ventas?: boolean
    total_gastos?: boolean
    diferencia?: boolean
    estado?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type caja_diariaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "apertura" | "cierre" | "total_ventas" | "total_gastos" | "diferencia" | "estado" | "notas" | "created_at" | "updated_at", ExtArgs["result"]["caja_diaria"]>
  export type caja_diariaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimientos_caja?: boolean | caja_diaria$movimientos_cajaArgs<ExtArgs>
    _count?: boolean | Caja_diariaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $caja_diariaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "caja_diaria"
    objects: {
      movimientos_caja: Prisma.$movimientos_cajaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      apertura: Prisma.Decimal
      cierre: Prisma.Decimal | null
      total_ventas: Prisma.Decimal | null
      total_gastos: Prisma.Decimal | null
      diferencia: Prisma.Decimal | null
      estado: $Enums.caja_diaria_estado
      notas: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["caja_diaria"]>
    composites: {}
  }

  type caja_diariaGetPayload<S extends boolean | null | undefined | caja_diariaDefaultArgs> = $Result.GetResult<Prisma.$caja_diariaPayload, S>

  type caja_diariaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<caja_diariaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Caja_diariaCountAggregateInputType | true
    }

  export interface caja_diariaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['caja_diaria'], meta: { name: 'caja_diaria' } }
    /**
     * Find zero or one Caja_diaria that matches the filter.
     * @param {caja_diariaFindUniqueArgs} args - Arguments to find a Caja_diaria
     * @example
     * // Get one Caja_diaria
     * const caja_diaria = await prisma.caja_diaria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends caja_diariaFindUniqueArgs>(args: SelectSubset<T, caja_diariaFindUniqueArgs<ExtArgs>>): Prisma__caja_diariaClient<$Result.GetResult<Prisma.$caja_diariaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Caja_diaria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {caja_diariaFindUniqueOrThrowArgs} args - Arguments to find a Caja_diaria
     * @example
     * // Get one Caja_diaria
     * const caja_diaria = await prisma.caja_diaria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends caja_diariaFindUniqueOrThrowArgs>(args: SelectSubset<T, caja_diariaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__caja_diariaClient<$Result.GetResult<Prisma.$caja_diariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caja_diaria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caja_diariaFindFirstArgs} args - Arguments to find a Caja_diaria
     * @example
     * // Get one Caja_diaria
     * const caja_diaria = await prisma.caja_diaria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends caja_diariaFindFirstArgs>(args?: SelectSubset<T, caja_diariaFindFirstArgs<ExtArgs>>): Prisma__caja_diariaClient<$Result.GetResult<Prisma.$caja_diariaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caja_diaria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caja_diariaFindFirstOrThrowArgs} args - Arguments to find a Caja_diaria
     * @example
     * // Get one Caja_diaria
     * const caja_diaria = await prisma.caja_diaria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends caja_diariaFindFirstOrThrowArgs>(args?: SelectSubset<T, caja_diariaFindFirstOrThrowArgs<ExtArgs>>): Prisma__caja_diariaClient<$Result.GetResult<Prisma.$caja_diariaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Caja_diarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caja_diariaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caja_diarias
     * const caja_diarias = await prisma.caja_diaria.findMany()
     * 
     * // Get first 10 Caja_diarias
     * const caja_diarias = await prisma.caja_diaria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caja_diariaWithIdOnly = await prisma.caja_diaria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends caja_diariaFindManyArgs>(args?: SelectSubset<T, caja_diariaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caja_diariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Caja_diaria.
     * @param {caja_diariaCreateArgs} args - Arguments to create a Caja_diaria.
     * @example
     * // Create one Caja_diaria
     * const Caja_diaria = await prisma.caja_diaria.create({
     *   data: {
     *     // ... data to create a Caja_diaria
     *   }
     * })
     * 
     */
    create<T extends caja_diariaCreateArgs>(args: SelectSubset<T, caja_diariaCreateArgs<ExtArgs>>): Prisma__caja_diariaClient<$Result.GetResult<Prisma.$caja_diariaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Caja_diarias.
     * @param {caja_diariaCreateManyArgs} args - Arguments to create many Caja_diarias.
     * @example
     * // Create many Caja_diarias
     * const caja_diaria = await prisma.caja_diaria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends caja_diariaCreateManyArgs>(args?: SelectSubset<T, caja_diariaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Caja_diaria.
     * @param {caja_diariaDeleteArgs} args - Arguments to delete one Caja_diaria.
     * @example
     * // Delete one Caja_diaria
     * const Caja_diaria = await prisma.caja_diaria.delete({
     *   where: {
     *     // ... filter to delete one Caja_diaria
     *   }
     * })
     * 
     */
    delete<T extends caja_diariaDeleteArgs>(args: SelectSubset<T, caja_diariaDeleteArgs<ExtArgs>>): Prisma__caja_diariaClient<$Result.GetResult<Prisma.$caja_diariaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Caja_diaria.
     * @param {caja_diariaUpdateArgs} args - Arguments to update one Caja_diaria.
     * @example
     * // Update one Caja_diaria
     * const caja_diaria = await prisma.caja_diaria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends caja_diariaUpdateArgs>(args: SelectSubset<T, caja_diariaUpdateArgs<ExtArgs>>): Prisma__caja_diariaClient<$Result.GetResult<Prisma.$caja_diariaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Caja_diarias.
     * @param {caja_diariaDeleteManyArgs} args - Arguments to filter Caja_diarias to delete.
     * @example
     * // Delete a few Caja_diarias
     * const { count } = await prisma.caja_diaria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends caja_diariaDeleteManyArgs>(args?: SelectSubset<T, caja_diariaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caja_diarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caja_diariaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caja_diarias
     * const caja_diaria = await prisma.caja_diaria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends caja_diariaUpdateManyArgs>(args: SelectSubset<T, caja_diariaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Caja_diaria.
     * @param {caja_diariaUpsertArgs} args - Arguments to update or create a Caja_diaria.
     * @example
     * // Update or create a Caja_diaria
     * const caja_diaria = await prisma.caja_diaria.upsert({
     *   create: {
     *     // ... data to create a Caja_diaria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caja_diaria we want to update
     *   }
     * })
     */
    upsert<T extends caja_diariaUpsertArgs>(args: SelectSubset<T, caja_diariaUpsertArgs<ExtArgs>>): Prisma__caja_diariaClient<$Result.GetResult<Prisma.$caja_diariaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Caja_diarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caja_diariaCountArgs} args - Arguments to filter Caja_diarias to count.
     * @example
     * // Count the number of Caja_diarias
     * const count = await prisma.caja_diaria.count({
     *   where: {
     *     // ... the filter for the Caja_diarias we want to count
     *   }
     * })
    **/
    count<T extends caja_diariaCountArgs>(
      args?: Subset<T, caja_diariaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Caja_diariaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caja_diaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Caja_diariaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Caja_diariaAggregateArgs>(args: Subset<T, Caja_diariaAggregateArgs>): Prisma.PrismaPromise<GetCaja_diariaAggregateType<T>>

    /**
     * Group by Caja_diaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caja_diariaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends caja_diariaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: caja_diariaGroupByArgs['orderBy'] }
        : { orderBy?: caja_diariaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, caja_diariaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaja_diariaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the caja_diaria model
   */
  readonly fields: caja_diariaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for caja_diaria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__caja_diariaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movimientos_caja<T extends caja_diaria$movimientos_cajaArgs<ExtArgs> = {}>(args?: Subset<T, caja_diaria$movimientos_cajaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientos_cajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the caja_diaria model
   */
  interface caja_diariaFieldRefs {
    readonly id: FieldRef<"caja_diaria", 'Int'>
    readonly fecha: FieldRef<"caja_diaria", 'DateTime'>
    readonly apertura: FieldRef<"caja_diaria", 'Decimal'>
    readonly cierre: FieldRef<"caja_diaria", 'Decimal'>
    readonly total_ventas: FieldRef<"caja_diaria", 'Decimal'>
    readonly total_gastos: FieldRef<"caja_diaria", 'Decimal'>
    readonly diferencia: FieldRef<"caja_diaria", 'Decimal'>
    readonly estado: FieldRef<"caja_diaria", 'caja_diaria_estado'>
    readonly notas: FieldRef<"caja_diaria", 'String'>
    readonly created_at: FieldRef<"caja_diaria", 'DateTime'>
    readonly updated_at: FieldRef<"caja_diaria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * caja_diaria findUnique
   */
  export type caja_diariaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja_diaria
     */
    select?: caja_diariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja_diaria
     */
    omit?: caja_diariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caja_diariaInclude<ExtArgs> | null
    /**
     * Filter, which caja_diaria to fetch.
     */
    where: caja_diariaWhereUniqueInput
  }

  /**
   * caja_diaria findUniqueOrThrow
   */
  export type caja_diariaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja_diaria
     */
    select?: caja_diariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja_diaria
     */
    omit?: caja_diariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caja_diariaInclude<ExtArgs> | null
    /**
     * Filter, which caja_diaria to fetch.
     */
    where: caja_diariaWhereUniqueInput
  }

  /**
   * caja_diaria findFirst
   */
  export type caja_diariaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja_diaria
     */
    select?: caja_diariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja_diaria
     */
    omit?: caja_diariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caja_diariaInclude<ExtArgs> | null
    /**
     * Filter, which caja_diaria to fetch.
     */
    where?: caja_diariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caja_diarias to fetch.
     */
    orderBy?: caja_diariaOrderByWithRelationInput | caja_diariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caja_diarias.
     */
    cursor?: caja_diariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caja_diarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caja_diarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caja_diarias.
     */
    distinct?: Caja_diariaScalarFieldEnum | Caja_diariaScalarFieldEnum[]
  }

  /**
   * caja_diaria findFirstOrThrow
   */
  export type caja_diariaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja_diaria
     */
    select?: caja_diariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja_diaria
     */
    omit?: caja_diariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caja_diariaInclude<ExtArgs> | null
    /**
     * Filter, which caja_diaria to fetch.
     */
    where?: caja_diariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caja_diarias to fetch.
     */
    orderBy?: caja_diariaOrderByWithRelationInput | caja_diariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caja_diarias.
     */
    cursor?: caja_diariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caja_diarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caja_diarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caja_diarias.
     */
    distinct?: Caja_diariaScalarFieldEnum | Caja_diariaScalarFieldEnum[]
  }

  /**
   * caja_diaria findMany
   */
  export type caja_diariaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja_diaria
     */
    select?: caja_diariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja_diaria
     */
    omit?: caja_diariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caja_diariaInclude<ExtArgs> | null
    /**
     * Filter, which caja_diarias to fetch.
     */
    where?: caja_diariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caja_diarias to fetch.
     */
    orderBy?: caja_diariaOrderByWithRelationInput | caja_diariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing caja_diarias.
     */
    cursor?: caja_diariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caja_diarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caja_diarias.
     */
    skip?: number
    distinct?: Caja_diariaScalarFieldEnum | Caja_diariaScalarFieldEnum[]
  }

  /**
   * caja_diaria create
   */
  export type caja_diariaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja_diaria
     */
    select?: caja_diariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja_diaria
     */
    omit?: caja_diariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caja_diariaInclude<ExtArgs> | null
    /**
     * The data needed to create a caja_diaria.
     */
    data: XOR<caja_diariaCreateInput, caja_diariaUncheckedCreateInput>
  }

  /**
   * caja_diaria createMany
   */
  export type caja_diariaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many caja_diarias.
     */
    data: caja_diariaCreateManyInput | caja_diariaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * caja_diaria update
   */
  export type caja_diariaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja_diaria
     */
    select?: caja_diariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja_diaria
     */
    omit?: caja_diariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caja_diariaInclude<ExtArgs> | null
    /**
     * The data needed to update a caja_diaria.
     */
    data: XOR<caja_diariaUpdateInput, caja_diariaUncheckedUpdateInput>
    /**
     * Choose, which caja_diaria to update.
     */
    where: caja_diariaWhereUniqueInput
  }

  /**
   * caja_diaria updateMany
   */
  export type caja_diariaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update caja_diarias.
     */
    data: XOR<caja_diariaUpdateManyMutationInput, caja_diariaUncheckedUpdateManyInput>
    /**
     * Filter which caja_diarias to update
     */
    where?: caja_diariaWhereInput
    /**
     * Limit how many caja_diarias to update.
     */
    limit?: number
  }

  /**
   * caja_diaria upsert
   */
  export type caja_diariaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja_diaria
     */
    select?: caja_diariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja_diaria
     */
    omit?: caja_diariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caja_diariaInclude<ExtArgs> | null
    /**
     * The filter to search for the caja_diaria to update in case it exists.
     */
    where: caja_diariaWhereUniqueInput
    /**
     * In case the caja_diaria found by the `where` argument doesn't exist, create a new caja_diaria with this data.
     */
    create: XOR<caja_diariaCreateInput, caja_diariaUncheckedCreateInput>
    /**
     * In case the caja_diaria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<caja_diariaUpdateInput, caja_diariaUncheckedUpdateInput>
  }

  /**
   * caja_diaria delete
   */
  export type caja_diariaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja_diaria
     */
    select?: caja_diariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja_diaria
     */
    omit?: caja_diariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caja_diariaInclude<ExtArgs> | null
    /**
     * Filter which caja_diaria to delete.
     */
    where: caja_diariaWhereUniqueInput
  }

  /**
   * caja_diaria deleteMany
   */
  export type caja_diariaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caja_diarias to delete
     */
    where?: caja_diariaWhereInput
    /**
     * Limit how many caja_diarias to delete.
     */
    limit?: number
  }

  /**
   * caja_diaria.movimientos_caja
   */
  export type caja_diaria$movimientos_cajaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_caja
     */
    select?: movimientos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientos_caja
     */
    omit?: movimientos_cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_cajaInclude<ExtArgs> | null
    where?: movimientos_cajaWhereInput
    orderBy?: movimientos_cajaOrderByWithRelationInput | movimientos_cajaOrderByWithRelationInput[]
    cursor?: movimientos_cajaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Movimientos_cajaScalarFieldEnum | Movimientos_cajaScalarFieldEnum[]
  }

  /**
   * caja_diaria without action
   */
  export type caja_diariaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja_diaria
     */
    select?: caja_diariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caja_diaria
     */
    omit?: caja_diariaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: caja_diariaInclude<ExtArgs> | null
  }


  /**
   * Model categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriasMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriasCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    id?: true
  }

  export type CategoriasSumAggregateInputType = {
    id?: true
  }

  export type CategoriasMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriasMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriasCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to aggregate.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type categoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriasWhereInput
    orderBy?: categoriasOrderByWithAggregationInput | categoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends categoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type categoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    created_at?: boolean
    updated_at?: boolean
    productos?: boolean | categorias$productosArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>



  export type categoriasSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type categoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "created_at" | "updated_at", ExtArgs["result"]["categorias"]>
  export type categoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | categorias$productosArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorias"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type categoriasGetPayload<S extends boolean | null | undefined | categoriasDefaultArgs> = $Result.GetResult<Prisma.$categoriasPayload, S>

  type categoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface categoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorias'], meta: { name: 'categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {categoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriasFindUniqueArgs>(args: SelectSubset<T, categoriasFindUniqueArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriasFindFirstArgs>(args?: SelectSubset<T, categoriasFindFirstArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriasWithIdOnly = await prisma.categorias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriasFindManyArgs>(args?: SelectSubset<T, categoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias.
     * @param {categoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends categoriasCreateArgs>(args: SelectSubset<T, categoriasCreateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriasCreateManyArgs>(args?: SelectSubset<T, categoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categorias.
     * @param {categoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends categoriasDeleteArgs>(args: SelectSubset<T, categoriasDeleteArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias.
     * @param {categoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriasUpdateArgs>(args: SelectSubset<T, categoriasUpdateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriasDeleteManyArgs>(args?: SelectSubset<T, categoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriasUpdateManyArgs>(args: SelectSubset<T, categoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorias.
     * @param {categoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends categoriasUpsertArgs>(args: SelectSubset<T, categoriasUpsertArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriasCountArgs>(
      args?: Subset<T, categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriasGroupByArgs['orderBy'] }
        : { orderBy?: categoriasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorias model
   */
  readonly fields: categoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends categorias$productosArgs<ExtArgs> = {}>(args?: Subset<T, categorias$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categorias model
   */
  interface categoriasFieldRefs {
    readonly id: FieldRef<"categorias", 'Int'>
    readonly nombre: FieldRef<"categorias", 'String'>
    readonly descripcion: FieldRef<"categorias", 'String'>
    readonly created_at: FieldRef<"categorias", 'DateTime'>
    readonly updated_at: FieldRef<"categorias", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categorias findUnique
   */
  export type categoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findUniqueOrThrow
   */
  export type categoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findFirst
   */
  export type categoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findFirstOrThrow
   */
  export type categoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findMany
   */
  export type categoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias create
   */
  export type categoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a categorias.
     */
    data: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
  }

  /**
   * categorias createMany
   */
  export type categoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias update
   */
  export type categoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a categorias.
     */
    data: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
    /**
     * Choose, which categorias to update.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias updateMany
   */
  export type categoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias upsert
   */
  export type categoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the categorias to update in case it exists.
     */
    where: categoriasWhereUniqueInput
    /**
     * In case the categorias found by the `where` argument doesn't exist, create a new categorias with this data.
     */
    create: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
    /**
     * In case the categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
  }

  /**
   * categorias delete
   */
  export type categoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter which categorias to delete.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias deleteMany
   */
  export type categoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categorias.productos
   */
  export type categorias$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    cursor?: productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * categorias without action
   */
  export type categoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
  }


  /**
   * Model clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientesSumAggregateOutputType = {
    id: number | null
  }

  export type ClientesMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo_documento: $Enums.clientes_tipo_documento | null
    numero_documento: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
    notas: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClientesMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo_documento: $Enums.clientes_tipo_documento | null
    numero_documento: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
    notas: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClientesCountAggregateOutputType = {
    id: number
    nombre: number
    tipo_documento: number
    numero_documento: number
    direccion: number
    telefono: number
    email: number
    notas: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    id?: true
  }

  export type ClientesSumAggregateInputType = {
    id?: true
  }

  export type ClientesMinAggregateInputType = {
    id?: true
    nombre?: true
    tipo_documento?: true
    numero_documento?: true
    direccion?: true
    telefono?: true
    email?: true
    notas?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type ClientesMaxAggregateInputType = {
    id?: true
    nombre?: true
    tipo_documento?: true
    numero_documento?: true
    direccion?: true
    telefono?: true
    email?: true
    notas?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type ClientesCountAggregateInputType = {
    id?: true
    nombre?: true
    tipo_documento?: true
    numero_documento?: true
    direccion?: true
    telefono?: true
    email?: true
    notas?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to aggregate.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type clientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientesWhereInput
    orderBy?: clientesOrderByWithAggregationInput | clientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: clientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    id: number
    nombre: string
    tipo_documento: $Enums.clientes_tipo_documento
    numero_documento: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
    notas: string | null
    activo: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends clientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type clientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    notas?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    pedidos?: boolean | clientes$pedidosArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>



  export type clientesSelectScalar = {
    id?: boolean
    nombre?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    notas?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type clientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "tipo_documento" | "numero_documento" | "direccion" | "telefono" | "email" | "notas" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["clientes"]>
  export type clientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | clientes$pedidosArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $clientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clientes"
    objects: {
      pedidos: Prisma.$pedidosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      tipo_documento: $Enums.clientes_tipo_documento
      numero_documento: string | null
      direccion: string | null
      telefono: string | null
      email: string | null
      notas: string | null
      activo: boolean
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type clientesGetPayload<S extends boolean | null | undefined | clientesDefaultArgs> = $Result.GetResult<Prisma.$clientesPayload, S>

  type clientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface clientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clientes'], meta: { name: 'clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {clientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientesFindUniqueArgs>(args: SelectSubset<T, clientesFindUniqueArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientesFindUniqueOrThrowArgs>(args: SelectSubset<T, clientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientesFindFirstArgs>(args?: SelectSubset<T, clientesFindFirstArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientesFindFirstOrThrowArgs>(args?: SelectSubset<T, clientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientesWithIdOnly = await prisma.clientes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clientesFindManyArgs>(args?: SelectSubset<T, clientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clientes.
     * @param {clientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends clientesCreateArgs>(args: SelectSubset<T, clientesCreateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientesCreateManyArgs>(args?: SelectSubset<T, clientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clientes.
     * @param {clientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends clientesDeleteArgs>(args: SelectSubset<T, clientesDeleteArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clientes.
     * @param {clientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientesUpdateArgs>(args: SelectSubset<T, clientesUpdateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientesDeleteManyArgs>(args?: SelectSubset<T, clientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientesUpdateManyArgs>(args: SelectSubset<T, clientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientes.
     * @param {clientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends clientesUpsertArgs>(args: SelectSubset<T, clientesUpsertArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clientesCountArgs>(
      args?: Subset<T, clientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientesGroupByArgs['orderBy'] }
        : { orderBy?: clientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clientes model
   */
  readonly fields: clientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends clientes$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, clientes$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clientes model
   */
  interface clientesFieldRefs {
    readonly id: FieldRef<"clientes", 'Int'>
    readonly nombre: FieldRef<"clientes", 'String'>
    readonly tipo_documento: FieldRef<"clientes", 'clientes_tipo_documento'>
    readonly numero_documento: FieldRef<"clientes", 'String'>
    readonly direccion: FieldRef<"clientes", 'String'>
    readonly telefono: FieldRef<"clientes", 'String'>
    readonly email: FieldRef<"clientes", 'String'>
    readonly notas: FieldRef<"clientes", 'String'>
    readonly activo: FieldRef<"clientes", 'Boolean'>
    readonly created_at: FieldRef<"clientes", 'DateTime'>
    readonly updated_at: FieldRef<"clientes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * clientes findUnique
   */
  export type clientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findUniqueOrThrow
   */
  export type clientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findFirst
   */
  export type clientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findFirstOrThrow
   */
  export type clientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findMany
   */
  export type clientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes create
   */
  export type clientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to create a clientes.
     */
    data: XOR<clientesCreateInput, clientesUncheckedCreateInput>
  }

  /**
   * clientes createMany
   */
  export type clientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clientesCreateManyInput | clientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientes update
   */
  export type clientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to update a clientes.
     */
    data: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
    /**
     * Choose, which clientes to update.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes updateMany
   */
  export type clientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * clientes upsert
   */
  export type clientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The filter to search for the clientes to update in case it exists.
     */
    where: clientesWhereUniqueInput
    /**
     * In case the clientes found by the `where` argument doesn't exist, create a new clientes with this data.
     */
    create: XOR<clientesCreateInput, clientesUncheckedCreateInput>
    /**
     * In case the clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
  }

  /**
   * clientes delete
   */
  export type clientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter which clientes to delete.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes deleteMany
   */
  export type clientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * clientes.pedidos
   */
  export type clientes$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedidos
     */
    omit?: pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidosInclude<ExtArgs> | null
    where?: pedidosWhereInput
    orderBy?: pedidosOrderByWithRelationInput | pedidosOrderByWithRelationInput[]
    cursor?: pedidosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidosScalarFieldEnum | PedidosScalarFieldEnum[]
  }

  /**
   * clientes without action
   */
  export type clientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
  }


  /**
   * Model despachos
   */

  export type AggregateDespachos = {
    _count: DespachosCountAggregateOutputType | null
    _avg: DespachosAvgAggregateOutputType | null
    _sum: DespachosSumAggregateOutputType | null
    _min: DespachosMinAggregateOutputType | null
    _max: DespachosMaxAggregateOutputType | null
  }

  export type DespachosAvgAggregateOutputType = {
    id: number | null
    pedido_id: number | null
  }

  export type DespachosSumAggregateOutputType = {
    id: number | null
    pedido_id: number | null
  }

  export type DespachosMinAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    fecha: Date | null
    direccion_entrega: string | null
    contacto_entrega: string | null
    telefono_entrega: string | null
    estado: $Enums.despachos_estado | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DespachosMaxAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    fecha: Date | null
    direccion_entrega: string | null
    contacto_entrega: string | null
    telefono_entrega: string | null
    estado: $Enums.despachos_estado | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DespachosCountAggregateOutputType = {
    id: number
    pedido_id: number
    fecha: number
    direccion_entrega: number
    contacto_entrega: number
    telefono_entrega: number
    estado: number
    notas: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DespachosAvgAggregateInputType = {
    id?: true
    pedido_id?: true
  }

  export type DespachosSumAggregateInputType = {
    id?: true
    pedido_id?: true
  }

  export type DespachosMinAggregateInputType = {
    id?: true
    pedido_id?: true
    fecha?: true
    direccion_entrega?: true
    contacto_entrega?: true
    telefono_entrega?: true
    estado?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type DespachosMaxAggregateInputType = {
    id?: true
    pedido_id?: true
    fecha?: true
    direccion_entrega?: true
    contacto_entrega?: true
    telefono_entrega?: true
    estado?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type DespachosCountAggregateInputType = {
    id?: true
    pedido_id?: true
    fecha?: true
    direccion_entrega?: true
    contacto_entrega?: true
    telefono_entrega?: true
    estado?: true
    notas?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DespachosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which despachos to aggregate.
     */
    where?: despachosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of despachos to fetch.
     */
    orderBy?: despachosOrderByWithRelationInput | despachosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: despachosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` despachos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` despachos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned despachos
    **/
    _count?: true | DespachosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DespachosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DespachosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DespachosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DespachosMaxAggregateInputType
  }

  export type GetDespachosAggregateType<T extends DespachosAggregateArgs> = {
        [P in keyof T & keyof AggregateDespachos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDespachos[P]>
      : GetScalarType<T[P], AggregateDespachos[P]>
  }




  export type despachosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: despachosWhereInput
    orderBy?: despachosOrderByWithAggregationInput | despachosOrderByWithAggregationInput[]
    by: DespachosScalarFieldEnum[] | DespachosScalarFieldEnum
    having?: despachosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DespachosCountAggregateInputType | true
    _avg?: DespachosAvgAggregateInputType
    _sum?: DespachosSumAggregateInputType
    _min?: DespachosMinAggregateInputType
    _max?: DespachosMaxAggregateInputType
  }

  export type DespachosGroupByOutputType = {
    id: number
    pedido_id: number
    fecha: Date
    direccion_entrega: string
    contacto_entrega: string | null
    telefono_entrega: string | null
    estado: $Enums.despachos_estado
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: DespachosCountAggregateOutputType | null
    _avg: DespachosAvgAggregateOutputType | null
    _sum: DespachosSumAggregateOutputType | null
    _min: DespachosMinAggregateOutputType | null
    _max: DespachosMaxAggregateOutputType | null
  }

  type GetDespachosGroupByPayload<T extends despachosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DespachosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DespachosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DespachosGroupByOutputType[P]>
            : GetScalarType<T[P], DespachosGroupByOutputType[P]>
        }
      >
    >


  export type despachosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedido_id?: boolean
    fecha?: boolean
    direccion_entrega?: boolean
    contacto_entrega?: boolean
    telefono_entrega?: boolean
    estado?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
    pedidos?: boolean | pedidosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["despachos"]>



  export type despachosSelectScalar = {
    id?: boolean
    pedido_id?: boolean
    fecha?: boolean
    direccion_entrega?: boolean
    contacto_entrega?: boolean
    telefono_entrega?: boolean
    estado?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type despachosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedido_id" | "fecha" | "direccion_entrega" | "contacto_entrega" | "telefono_entrega" | "estado" | "notas" | "created_at" | "updated_at", ExtArgs["result"]["despachos"]>
  export type despachosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | pedidosDefaultArgs<ExtArgs>
  }

  export type $despachosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "despachos"
    objects: {
      pedidos: Prisma.$pedidosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedido_id: number
      fecha: Date
      direccion_entrega: string
      contacto_entrega: string | null
      telefono_entrega: string | null
      estado: $Enums.despachos_estado
      notas: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["despachos"]>
    composites: {}
  }

  type despachosGetPayload<S extends boolean | null | undefined | despachosDefaultArgs> = $Result.GetResult<Prisma.$despachosPayload, S>

  type despachosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<despachosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DespachosCountAggregateInputType | true
    }

  export interface despachosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['despachos'], meta: { name: 'despachos' } }
    /**
     * Find zero or one Despachos that matches the filter.
     * @param {despachosFindUniqueArgs} args - Arguments to find a Despachos
     * @example
     * // Get one Despachos
     * const despachos = await prisma.despachos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends despachosFindUniqueArgs>(args: SelectSubset<T, despachosFindUniqueArgs<ExtArgs>>): Prisma__despachosClient<$Result.GetResult<Prisma.$despachosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Despachos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {despachosFindUniqueOrThrowArgs} args - Arguments to find a Despachos
     * @example
     * // Get one Despachos
     * const despachos = await prisma.despachos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends despachosFindUniqueOrThrowArgs>(args: SelectSubset<T, despachosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__despachosClient<$Result.GetResult<Prisma.$despachosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Despachos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despachosFindFirstArgs} args - Arguments to find a Despachos
     * @example
     * // Get one Despachos
     * const despachos = await prisma.despachos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends despachosFindFirstArgs>(args?: SelectSubset<T, despachosFindFirstArgs<ExtArgs>>): Prisma__despachosClient<$Result.GetResult<Prisma.$despachosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Despachos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despachosFindFirstOrThrowArgs} args - Arguments to find a Despachos
     * @example
     * // Get one Despachos
     * const despachos = await prisma.despachos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends despachosFindFirstOrThrowArgs>(args?: SelectSubset<T, despachosFindFirstOrThrowArgs<ExtArgs>>): Prisma__despachosClient<$Result.GetResult<Prisma.$despachosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Despachos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despachosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Despachos
     * const despachos = await prisma.despachos.findMany()
     * 
     * // Get first 10 Despachos
     * const despachos = await prisma.despachos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const despachosWithIdOnly = await prisma.despachos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends despachosFindManyArgs>(args?: SelectSubset<T, despachosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$despachosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Despachos.
     * @param {despachosCreateArgs} args - Arguments to create a Despachos.
     * @example
     * // Create one Despachos
     * const Despachos = await prisma.despachos.create({
     *   data: {
     *     // ... data to create a Despachos
     *   }
     * })
     * 
     */
    create<T extends despachosCreateArgs>(args: SelectSubset<T, despachosCreateArgs<ExtArgs>>): Prisma__despachosClient<$Result.GetResult<Prisma.$despachosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Despachos.
     * @param {despachosCreateManyArgs} args - Arguments to create many Despachos.
     * @example
     * // Create many Despachos
     * const despachos = await prisma.despachos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends despachosCreateManyArgs>(args?: SelectSubset<T, despachosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Despachos.
     * @param {despachosDeleteArgs} args - Arguments to delete one Despachos.
     * @example
     * // Delete one Despachos
     * const Despachos = await prisma.despachos.delete({
     *   where: {
     *     // ... filter to delete one Despachos
     *   }
     * })
     * 
     */
    delete<T extends despachosDeleteArgs>(args: SelectSubset<T, despachosDeleteArgs<ExtArgs>>): Prisma__despachosClient<$Result.GetResult<Prisma.$despachosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Despachos.
     * @param {despachosUpdateArgs} args - Arguments to update one Despachos.
     * @example
     * // Update one Despachos
     * const despachos = await prisma.despachos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends despachosUpdateArgs>(args: SelectSubset<T, despachosUpdateArgs<ExtArgs>>): Prisma__despachosClient<$Result.GetResult<Prisma.$despachosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Despachos.
     * @param {despachosDeleteManyArgs} args - Arguments to filter Despachos to delete.
     * @example
     * // Delete a few Despachos
     * const { count } = await prisma.despachos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends despachosDeleteManyArgs>(args?: SelectSubset<T, despachosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Despachos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despachosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Despachos
     * const despachos = await prisma.despachos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends despachosUpdateManyArgs>(args: SelectSubset<T, despachosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Despachos.
     * @param {despachosUpsertArgs} args - Arguments to update or create a Despachos.
     * @example
     * // Update or create a Despachos
     * const despachos = await prisma.despachos.upsert({
     *   create: {
     *     // ... data to create a Despachos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Despachos we want to update
     *   }
     * })
     */
    upsert<T extends despachosUpsertArgs>(args: SelectSubset<T, despachosUpsertArgs<ExtArgs>>): Prisma__despachosClient<$Result.GetResult<Prisma.$despachosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Despachos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despachosCountArgs} args - Arguments to filter Despachos to count.
     * @example
     * // Count the number of Despachos
     * const count = await prisma.despachos.count({
     *   where: {
     *     // ... the filter for the Despachos we want to count
     *   }
     * })
    **/
    count<T extends despachosCountArgs>(
      args?: Subset<T, despachosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DespachosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Despachos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DespachosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DespachosAggregateArgs>(args: Subset<T, DespachosAggregateArgs>): Prisma.PrismaPromise<GetDespachosAggregateType<T>>

    /**
     * Group by Despachos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {despachosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends despachosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: despachosGroupByArgs['orderBy'] }
        : { orderBy?: despachosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, despachosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDespachosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the despachos model
   */
  readonly fields: despachosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for despachos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__despachosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends pedidosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidosDefaultArgs<ExtArgs>>): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the despachos model
   */
  interface despachosFieldRefs {
    readonly id: FieldRef<"despachos", 'Int'>
    readonly pedido_id: FieldRef<"despachos", 'Int'>
    readonly fecha: FieldRef<"despachos", 'DateTime'>
    readonly direccion_entrega: FieldRef<"despachos", 'String'>
    readonly contacto_entrega: FieldRef<"despachos", 'String'>
    readonly telefono_entrega: FieldRef<"despachos", 'String'>
    readonly estado: FieldRef<"despachos", 'despachos_estado'>
    readonly notas: FieldRef<"despachos", 'String'>
    readonly created_at: FieldRef<"despachos", 'DateTime'>
    readonly updated_at: FieldRef<"despachos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * despachos findUnique
   */
  export type despachosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despachos
     */
    select?: despachosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despachos
     */
    omit?: despachosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despachosInclude<ExtArgs> | null
    /**
     * Filter, which despachos to fetch.
     */
    where: despachosWhereUniqueInput
  }

  /**
   * despachos findUniqueOrThrow
   */
  export type despachosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despachos
     */
    select?: despachosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despachos
     */
    omit?: despachosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despachosInclude<ExtArgs> | null
    /**
     * Filter, which despachos to fetch.
     */
    where: despachosWhereUniqueInput
  }

  /**
   * despachos findFirst
   */
  export type despachosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despachos
     */
    select?: despachosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despachos
     */
    omit?: despachosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despachosInclude<ExtArgs> | null
    /**
     * Filter, which despachos to fetch.
     */
    where?: despachosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of despachos to fetch.
     */
    orderBy?: despachosOrderByWithRelationInput | despachosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for despachos.
     */
    cursor?: despachosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` despachos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` despachos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of despachos.
     */
    distinct?: DespachosScalarFieldEnum | DespachosScalarFieldEnum[]
  }

  /**
   * despachos findFirstOrThrow
   */
  export type despachosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despachos
     */
    select?: despachosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despachos
     */
    omit?: despachosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despachosInclude<ExtArgs> | null
    /**
     * Filter, which despachos to fetch.
     */
    where?: despachosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of despachos to fetch.
     */
    orderBy?: despachosOrderByWithRelationInput | despachosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for despachos.
     */
    cursor?: despachosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` despachos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` despachos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of despachos.
     */
    distinct?: DespachosScalarFieldEnum | DespachosScalarFieldEnum[]
  }

  /**
   * despachos findMany
   */
  export type despachosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despachos
     */
    select?: despachosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despachos
     */
    omit?: despachosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despachosInclude<ExtArgs> | null
    /**
     * Filter, which despachos to fetch.
     */
    where?: despachosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of despachos to fetch.
     */
    orderBy?: despachosOrderByWithRelationInput | despachosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing despachos.
     */
    cursor?: despachosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` despachos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` despachos.
     */
    skip?: number
    distinct?: DespachosScalarFieldEnum | DespachosScalarFieldEnum[]
  }

  /**
   * despachos create
   */
  export type despachosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despachos
     */
    select?: despachosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despachos
     */
    omit?: despachosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despachosInclude<ExtArgs> | null
    /**
     * The data needed to create a despachos.
     */
    data: XOR<despachosCreateInput, despachosUncheckedCreateInput>
  }

  /**
   * despachos createMany
   */
  export type despachosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many despachos.
     */
    data: despachosCreateManyInput | despachosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * despachos update
   */
  export type despachosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despachos
     */
    select?: despachosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despachos
     */
    omit?: despachosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despachosInclude<ExtArgs> | null
    /**
     * The data needed to update a despachos.
     */
    data: XOR<despachosUpdateInput, despachosUncheckedUpdateInput>
    /**
     * Choose, which despachos to update.
     */
    where: despachosWhereUniqueInput
  }

  /**
   * despachos updateMany
   */
  export type despachosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update despachos.
     */
    data: XOR<despachosUpdateManyMutationInput, despachosUncheckedUpdateManyInput>
    /**
     * Filter which despachos to update
     */
    where?: despachosWhereInput
    /**
     * Limit how many despachos to update.
     */
    limit?: number
  }

  /**
   * despachos upsert
   */
  export type despachosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despachos
     */
    select?: despachosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despachos
     */
    omit?: despachosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despachosInclude<ExtArgs> | null
    /**
     * The filter to search for the despachos to update in case it exists.
     */
    where: despachosWhereUniqueInput
    /**
     * In case the despachos found by the `where` argument doesn't exist, create a new despachos with this data.
     */
    create: XOR<despachosCreateInput, despachosUncheckedCreateInput>
    /**
     * In case the despachos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<despachosUpdateInput, despachosUncheckedUpdateInput>
  }

  /**
   * despachos delete
   */
  export type despachosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despachos
     */
    select?: despachosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despachos
     */
    omit?: despachosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despachosInclude<ExtArgs> | null
    /**
     * Filter which despachos to delete.
     */
    where: despachosWhereUniqueInput
  }

  /**
   * despachos deleteMany
   */
  export type despachosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which despachos to delete
     */
    where?: despachosWhereInput
    /**
     * Limit how many despachos to delete.
     */
    limit?: number
  }

  /**
   * despachos without action
   */
  export type despachosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despachos
     */
    select?: despachosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despachos
     */
    omit?: despachosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despachosInclude<ExtArgs> | null
  }


  /**
   * Model detalle_entradas_mercaderia
   */

  export type AggregateDetalle_entradas_mercaderia = {
    _count: Detalle_entradas_mercaderiaCountAggregateOutputType | null
    _avg: Detalle_entradas_mercaderiaAvgAggregateOutputType | null
    _sum: Detalle_entradas_mercaderiaSumAggregateOutputType | null
    _min: Detalle_entradas_mercaderiaMinAggregateOutputType | null
    _max: Detalle_entradas_mercaderiaMaxAggregateOutputType | null
  }

  export type Detalle_entradas_mercaderiaAvgAggregateOutputType = {
    id: number | null
    entrada_id: number | null
    producto_id: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
    subtotal: Decimal | null
  }

  export type Detalle_entradas_mercaderiaSumAggregateOutputType = {
    id: number | null
    entrada_id: number | null
    producto_id: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
    subtotal: Decimal | null
  }

  export type Detalle_entradas_mercaderiaMinAggregateOutputType = {
    id: number | null
    entrada_id: number | null
    producto_id: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
    subtotal: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Detalle_entradas_mercaderiaMaxAggregateOutputType = {
    id: number | null
    entrada_id: number | null
    producto_id: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
    subtotal: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Detalle_entradas_mercaderiaCountAggregateOutputType = {
    id: number
    entrada_id: number
    producto_id: number
    cantidad: number
    precio_unitario: number
    subtotal: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Detalle_entradas_mercaderiaAvgAggregateInputType = {
    id?: true
    entrada_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
  }

  export type Detalle_entradas_mercaderiaSumAggregateInputType = {
    id?: true
    entrada_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
  }

  export type Detalle_entradas_mercaderiaMinAggregateInputType = {
    id?: true
    entrada_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
    created_at?: true
    updated_at?: true
  }

  export type Detalle_entradas_mercaderiaMaxAggregateInputType = {
    id?: true
    entrada_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
    created_at?: true
    updated_at?: true
  }

  export type Detalle_entradas_mercaderiaCountAggregateInputType = {
    id?: true
    entrada_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Detalle_entradas_mercaderiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_entradas_mercaderia to aggregate.
     */
    where?: detalle_entradas_mercaderiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_entradas_mercaderias to fetch.
     */
    orderBy?: detalle_entradas_mercaderiaOrderByWithRelationInput | detalle_entradas_mercaderiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detalle_entradas_mercaderiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_entradas_mercaderias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_entradas_mercaderias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detalle_entradas_mercaderias
    **/
    _count?: true | Detalle_entradas_mercaderiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detalle_entradas_mercaderiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detalle_entradas_mercaderiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detalle_entradas_mercaderiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detalle_entradas_mercaderiaMaxAggregateInputType
  }

  export type GetDetalle_entradas_mercaderiaAggregateType<T extends Detalle_entradas_mercaderiaAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalle_entradas_mercaderia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalle_entradas_mercaderia[P]>
      : GetScalarType<T[P], AggregateDetalle_entradas_mercaderia[P]>
  }




  export type detalle_entradas_mercaderiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_entradas_mercaderiaWhereInput
    orderBy?: detalle_entradas_mercaderiaOrderByWithAggregationInput | detalle_entradas_mercaderiaOrderByWithAggregationInput[]
    by: Detalle_entradas_mercaderiaScalarFieldEnum[] | Detalle_entradas_mercaderiaScalarFieldEnum
    having?: detalle_entradas_mercaderiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detalle_entradas_mercaderiaCountAggregateInputType | true
    _avg?: Detalle_entradas_mercaderiaAvgAggregateInputType
    _sum?: Detalle_entradas_mercaderiaSumAggregateInputType
    _min?: Detalle_entradas_mercaderiaMinAggregateInputType
    _max?: Detalle_entradas_mercaderiaMaxAggregateInputType
  }

  export type Detalle_entradas_mercaderiaGroupByOutputType = {
    id: number
    entrada_id: number
    producto_id: number
    cantidad: number
    precio_unitario: Decimal
    subtotal: Decimal
    created_at: Date | null
    updated_at: Date | null
    _count: Detalle_entradas_mercaderiaCountAggregateOutputType | null
    _avg: Detalle_entradas_mercaderiaAvgAggregateOutputType | null
    _sum: Detalle_entradas_mercaderiaSumAggregateOutputType | null
    _min: Detalle_entradas_mercaderiaMinAggregateOutputType | null
    _max: Detalle_entradas_mercaderiaMaxAggregateOutputType | null
  }

  type GetDetalle_entradas_mercaderiaGroupByPayload<T extends detalle_entradas_mercaderiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detalle_entradas_mercaderiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detalle_entradas_mercaderiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detalle_entradas_mercaderiaGroupByOutputType[P]>
            : GetScalarType<T[P], Detalle_entradas_mercaderiaGroupByOutputType[P]>
        }
      >
    >


  export type detalle_entradas_mercaderiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entrada_id?: boolean
    producto_id?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    subtotal?: boolean
    created_at?: boolean
    updated_at?: boolean
    entradas_mercaderia?: boolean | entradas_mercaderiaDefaultArgs<ExtArgs>
    productos?: boolean | productosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_entradas_mercaderia"]>



  export type detalle_entradas_mercaderiaSelectScalar = {
    id?: boolean
    entrada_id?: boolean
    producto_id?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    subtotal?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type detalle_entradas_mercaderiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entrada_id" | "producto_id" | "cantidad" | "precio_unitario" | "subtotal" | "created_at" | "updated_at", ExtArgs["result"]["detalle_entradas_mercaderia"]>
  export type detalle_entradas_mercaderiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entradas_mercaderia?: boolean | entradas_mercaderiaDefaultArgs<ExtArgs>
    productos?: boolean | productosDefaultArgs<ExtArgs>
  }

  export type $detalle_entradas_mercaderiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detalle_entradas_mercaderia"
    objects: {
      entradas_mercaderia: Prisma.$entradas_mercaderiaPayload<ExtArgs>
      productos: Prisma.$productosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entrada_id: number
      producto_id: number
      cantidad: number
      precio_unitario: Prisma.Decimal
      subtotal: Prisma.Decimal
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["detalle_entradas_mercaderia"]>
    composites: {}
  }

  type detalle_entradas_mercaderiaGetPayload<S extends boolean | null | undefined | detalle_entradas_mercaderiaDefaultArgs> = $Result.GetResult<Prisma.$detalle_entradas_mercaderiaPayload, S>

  type detalle_entradas_mercaderiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detalle_entradas_mercaderiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detalle_entradas_mercaderiaCountAggregateInputType | true
    }

  export interface detalle_entradas_mercaderiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detalle_entradas_mercaderia'], meta: { name: 'detalle_entradas_mercaderia' } }
    /**
     * Find zero or one Detalle_entradas_mercaderia that matches the filter.
     * @param {detalle_entradas_mercaderiaFindUniqueArgs} args - Arguments to find a Detalle_entradas_mercaderia
     * @example
     * // Get one Detalle_entradas_mercaderia
     * const detalle_entradas_mercaderia = await prisma.detalle_entradas_mercaderia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detalle_entradas_mercaderiaFindUniqueArgs>(args: SelectSubset<T, detalle_entradas_mercaderiaFindUniqueArgs<ExtArgs>>): Prisma__detalle_entradas_mercaderiaClient<$Result.GetResult<Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalle_entradas_mercaderia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detalle_entradas_mercaderiaFindUniqueOrThrowArgs} args - Arguments to find a Detalle_entradas_mercaderia
     * @example
     * // Get one Detalle_entradas_mercaderia
     * const detalle_entradas_mercaderia = await prisma.detalle_entradas_mercaderia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detalle_entradas_mercaderiaFindUniqueOrThrowArgs>(args: SelectSubset<T, detalle_entradas_mercaderiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detalle_entradas_mercaderiaClient<$Result.GetResult<Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_entradas_mercaderia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_entradas_mercaderiaFindFirstArgs} args - Arguments to find a Detalle_entradas_mercaderia
     * @example
     * // Get one Detalle_entradas_mercaderia
     * const detalle_entradas_mercaderia = await prisma.detalle_entradas_mercaderia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detalle_entradas_mercaderiaFindFirstArgs>(args?: SelectSubset<T, detalle_entradas_mercaderiaFindFirstArgs<ExtArgs>>): Prisma__detalle_entradas_mercaderiaClient<$Result.GetResult<Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_entradas_mercaderia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_entradas_mercaderiaFindFirstOrThrowArgs} args - Arguments to find a Detalle_entradas_mercaderia
     * @example
     * // Get one Detalle_entradas_mercaderia
     * const detalle_entradas_mercaderia = await prisma.detalle_entradas_mercaderia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detalle_entradas_mercaderiaFindFirstOrThrowArgs>(args?: SelectSubset<T, detalle_entradas_mercaderiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__detalle_entradas_mercaderiaClient<$Result.GetResult<Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalle_entradas_mercaderias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_entradas_mercaderiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalle_entradas_mercaderias
     * const detalle_entradas_mercaderias = await prisma.detalle_entradas_mercaderia.findMany()
     * 
     * // Get first 10 Detalle_entradas_mercaderias
     * const detalle_entradas_mercaderias = await prisma.detalle_entradas_mercaderia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalle_entradas_mercaderiaWithIdOnly = await prisma.detalle_entradas_mercaderia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detalle_entradas_mercaderiaFindManyArgs>(args?: SelectSubset<T, detalle_entradas_mercaderiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalle_entradas_mercaderia.
     * @param {detalle_entradas_mercaderiaCreateArgs} args - Arguments to create a Detalle_entradas_mercaderia.
     * @example
     * // Create one Detalle_entradas_mercaderia
     * const Detalle_entradas_mercaderia = await prisma.detalle_entradas_mercaderia.create({
     *   data: {
     *     // ... data to create a Detalle_entradas_mercaderia
     *   }
     * })
     * 
     */
    create<T extends detalle_entradas_mercaderiaCreateArgs>(args: SelectSubset<T, detalle_entradas_mercaderiaCreateArgs<ExtArgs>>): Prisma__detalle_entradas_mercaderiaClient<$Result.GetResult<Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalle_entradas_mercaderias.
     * @param {detalle_entradas_mercaderiaCreateManyArgs} args - Arguments to create many Detalle_entradas_mercaderias.
     * @example
     * // Create many Detalle_entradas_mercaderias
     * const detalle_entradas_mercaderia = await prisma.detalle_entradas_mercaderia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detalle_entradas_mercaderiaCreateManyArgs>(args?: SelectSubset<T, detalle_entradas_mercaderiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Detalle_entradas_mercaderia.
     * @param {detalle_entradas_mercaderiaDeleteArgs} args - Arguments to delete one Detalle_entradas_mercaderia.
     * @example
     * // Delete one Detalle_entradas_mercaderia
     * const Detalle_entradas_mercaderia = await prisma.detalle_entradas_mercaderia.delete({
     *   where: {
     *     // ... filter to delete one Detalle_entradas_mercaderia
     *   }
     * })
     * 
     */
    delete<T extends detalle_entradas_mercaderiaDeleteArgs>(args: SelectSubset<T, detalle_entradas_mercaderiaDeleteArgs<ExtArgs>>): Prisma__detalle_entradas_mercaderiaClient<$Result.GetResult<Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalle_entradas_mercaderia.
     * @param {detalle_entradas_mercaderiaUpdateArgs} args - Arguments to update one Detalle_entradas_mercaderia.
     * @example
     * // Update one Detalle_entradas_mercaderia
     * const detalle_entradas_mercaderia = await prisma.detalle_entradas_mercaderia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detalle_entradas_mercaderiaUpdateArgs>(args: SelectSubset<T, detalle_entradas_mercaderiaUpdateArgs<ExtArgs>>): Prisma__detalle_entradas_mercaderiaClient<$Result.GetResult<Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalle_entradas_mercaderias.
     * @param {detalle_entradas_mercaderiaDeleteManyArgs} args - Arguments to filter Detalle_entradas_mercaderias to delete.
     * @example
     * // Delete a few Detalle_entradas_mercaderias
     * const { count } = await prisma.detalle_entradas_mercaderia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detalle_entradas_mercaderiaDeleteManyArgs>(args?: SelectSubset<T, detalle_entradas_mercaderiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_entradas_mercaderias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_entradas_mercaderiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalle_entradas_mercaderias
     * const detalle_entradas_mercaderia = await prisma.detalle_entradas_mercaderia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detalle_entradas_mercaderiaUpdateManyArgs>(args: SelectSubset<T, detalle_entradas_mercaderiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Detalle_entradas_mercaderia.
     * @param {detalle_entradas_mercaderiaUpsertArgs} args - Arguments to update or create a Detalle_entradas_mercaderia.
     * @example
     * // Update or create a Detalle_entradas_mercaderia
     * const detalle_entradas_mercaderia = await prisma.detalle_entradas_mercaderia.upsert({
     *   create: {
     *     // ... data to create a Detalle_entradas_mercaderia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalle_entradas_mercaderia we want to update
     *   }
     * })
     */
    upsert<T extends detalle_entradas_mercaderiaUpsertArgs>(args: SelectSubset<T, detalle_entradas_mercaderiaUpsertArgs<ExtArgs>>): Prisma__detalle_entradas_mercaderiaClient<$Result.GetResult<Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalle_entradas_mercaderias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_entradas_mercaderiaCountArgs} args - Arguments to filter Detalle_entradas_mercaderias to count.
     * @example
     * // Count the number of Detalle_entradas_mercaderias
     * const count = await prisma.detalle_entradas_mercaderia.count({
     *   where: {
     *     // ... the filter for the Detalle_entradas_mercaderias we want to count
     *   }
     * })
    **/
    count<T extends detalle_entradas_mercaderiaCountArgs>(
      args?: Subset<T, detalle_entradas_mercaderiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detalle_entradas_mercaderiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalle_entradas_mercaderia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_entradas_mercaderiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detalle_entradas_mercaderiaAggregateArgs>(args: Subset<T, Detalle_entradas_mercaderiaAggregateArgs>): Prisma.PrismaPromise<GetDetalle_entradas_mercaderiaAggregateType<T>>

    /**
     * Group by Detalle_entradas_mercaderia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_entradas_mercaderiaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detalle_entradas_mercaderiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detalle_entradas_mercaderiaGroupByArgs['orderBy'] }
        : { orderBy?: detalle_entradas_mercaderiaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detalle_entradas_mercaderiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_entradas_mercaderiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detalle_entradas_mercaderia model
   */
  readonly fields: detalle_entradas_mercaderiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detalle_entradas_mercaderia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detalle_entradas_mercaderiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entradas_mercaderia<T extends entradas_mercaderiaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, entradas_mercaderiaDefaultArgs<ExtArgs>>): Prisma__entradas_mercaderiaClient<$Result.GetResult<Prisma.$entradas_mercaderiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productos<T extends productosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productosDefaultArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detalle_entradas_mercaderia model
   */
  interface detalle_entradas_mercaderiaFieldRefs {
    readonly id: FieldRef<"detalle_entradas_mercaderia", 'Int'>
    readonly entrada_id: FieldRef<"detalle_entradas_mercaderia", 'Int'>
    readonly producto_id: FieldRef<"detalle_entradas_mercaderia", 'Int'>
    readonly cantidad: FieldRef<"detalle_entradas_mercaderia", 'Int'>
    readonly precio_unitario: FieldRef<"detalle_entradas_mercaderia", 'Decimal'>
    readonly subtotal: FieldRef<"detalle_entradas_mercaderia", 'Decimal'>
    readonly created_at: FieldRef<"detalle_entradas_mercaderia", 'DateTime'>
    readonly updated_at: FieldRef<"detalle_entradas_mercaderia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * detalle_entradas_mercaderia findUnique
   */
  export type detalle_entradas_mercaderiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_entradas_mercaderia
     */
    select?: detalle_entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_entradas_mercaderia
     */
    omit?: detalle_entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * Filter, which detalle_entradas_mercaderia to fetch.
     */
    where: detalle_entradas_mercaderiaWhereUniqueInput
  }

  /**
   * detalle_entradas_mercaderia findUniqueOrThrow
   */
  export type detalle_entradas_mercaderiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_entradas_mercaderia
     */
    select?: detalle_entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_entradas_mercaderia
     */
    omit?: detalle_entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * Filter, which detalle_entradas_mercaderia to fetch.
     */
    where: detalle_entradas_mercaderiaWhereUniqueInput
  }

  /**
   * detalle_entradas_mercaderia findFirst
   */
  export type detalle_entradas_mercaderiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_entradas_mercaderia
     */
    select?: detalle_entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_entradas_mercaderia
     */
    omit?: detalle_entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * Filter, which detalle_entradas_mercaderia to fetch.
     */
    where?: detalle_entradas_mercaderiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_entradas_mercaderias to fetch.
     */
    orderBy?: detalle_entradas_mercaderiaOrderByWithRelationInput | detalle_entradas_mercaderiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_entradas_mercaderias.
     */
    cursor?: detalle_entradas_mercaderiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_entradas_mercaderias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_entradas_mercaderias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_entradas_mercaderias.
     */
    distinct?: Detalle_entradas_mercaderiaScalarFieldEnum | Detalle_entradas_mercaderiaScalarFieldEnum[]
  }

  /**
   * detalle_entradas_mercaderia findFirstOrThrow
   */
  export type detalle_entradas_mercaderiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_entradas_mercaderia
     */
    select?: detalle_entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_entradas_mercaderia
     */
    omit?: detalle_entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * Filter, which detalle_entradas_mercaderia to fetch.
     */
    where?: detalle_entradas_mercaderiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_entradas_mercaderias to fetch.
     */
    orderBy?: detalle_entradas_mercaderiaOrderByWithRelationInput | detalle_entradas_mercaderiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_entradas_mercaderias.
     */
    cursor?: detalle_entradas_mercaderiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_entradas_mercaderias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_entradas_mercaderias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_entradas_mercaderias.
     */
    distinct?: Detalle_entradas_mercaderiaScalarFieldEnum | Detalle_entradas_mercaderiaScalarFieldEnum[]
  }

  /**
   * detalle_entradas_mercaderia findMany
   */
  export type detalle_entradas_mercaderiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_entradas_mercaderia
     */
    select?: detalle_entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_entradas_mercaderia
     */
    omit?: detalle_entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * Filter, which detalle_entradas_mercaderias to fetch.
     */
    where?: detalle_entradas_mercaderiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_entradas_mercaderias to fetch.
     */
    orderBy?: detalle_entradas_mercaderiaOrderByWithRelationInput | detalle_entradas_mercaderiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detalle_entradas_mercaderias.
     */
    cursor?: detalle_entradas_mercaderiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_entradas_mercaderias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_entradas_mercaderias.
     */
    skip?: number
    distinct?: Detalle_entradas_mercaderiaScalarFieldEnum | Detalle_entradas_mercaderiaScalarFieldEnum[]
  }

  /**
   * detalle_entradas_mercaderia create
   */
  export type detalle_entradas_mercaderiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_entradas_mercaderia
     */
    select?: detalle_entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_entradas_mercaderia
     */
    omit?: detalle_entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * The data needed to create a detalle_entradas_mercaderia.
     */
    data: XOR<detalle_entradas_mercaderiaCreateInput, detalle_entradas_mercaderiaUncheckedCreateInput>
  }

  /**
   * detalle_entradas_mercaderia createMany
   */
  export type detalle_entradas_mercaderiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detalle_entradas_mercaderias.
     */
    data: detalle_entradas_mercaderiaCreateManyInput | detalle_entradas_mercaderiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detalle_entradas_mercaderia update
   */
  export type detalle_entradas_mercaderiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_entradas_mercaderia
     */
    select?: detalle_entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_entradas_mercaderia
     */
    omit?: detalle_entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * The data needed to update a detalle_entradas_mercaderia.
     */
    data: XOR<detalle_entradas_mercaderiaUpdateInput, detalle_entradas_mercaderiaUncheckedUpdateInput>
    /**
     * Choose, which detalle_entradas_mercaderia to update.
     */
    where: detalle_entradas_mercaderiaWhereUniqueInput
  }

  /**
   * detalle_entradas_mercaderia updateMany
   */
  export type detalle_entradas_mercaderiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detalle_entradas_mercaderias.
     */
    data: XOR<detalle_entradas_mercaderiaUpdateManyMutationInput, detalle_entradas_mercaderiaUncheckedUpdateManyInput>
    /**
     * Filter which detalle_entradas_mercaderias to update
     */
    where?: detalle_entradas_mercaderiaWhereInput
    /**
     * Limit how many detalle_entradas_mercaderias to update.
     */
    limit?: number
  }

  /**
   * detalle_entradas_mercaderia upsert
   */
  export type detalle_entradas_mercaderiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_entradas_mercaderia
     */
    select?: detalle_entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_entradas_mercaderia
     */
    omit?: detalle_entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * The filter to search for the detalle_entradas_mercaderia to update in case it exists.
     */
    where: detalle_entradas_mercaderiaWhereUniqueInput
    /**
     * In case the detalle_entradas_mercaderia found by the `where` argument doesn't exist, create a new detalle_entradas_mercaderia with this data.
     */
    create: XOR<detalle_entradas_mercaderiaCreateInput, detalle_entradas_mercaderiaUncheckedCreateInput>
    /**
     * In case the detalle_entradas_mercaderia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detalle_entradas_mercaderiaUpdateInput, detalle_entradas_mercaderiaUncheckedUpdateInput>
  }

  /**
   * detalle_entradas_mercaderia delete
   */
  export type detalle_entradas_mercaderiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_entradas_mercaderia
     */
    select?: detalle_entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_entradas_mercaderia
     */
    omit?: detalle_entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * Filter which detalle_entradas_mercaderia to delete.
     */
    where: detalle_entradas_mercaderiaWhereUniqueInput
  }

  /**
   * detalle_entradas_mercaderia deleteMany
   */
  export type detalle_entradas_mercaderiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_entradas_mercaderias to delete
     */
    where?: detalle_entradas_mercaderiaWhereInput
    /**
     * Limit how many detalle_entradas_mercaderias to delete.
     */
    limit?: number
  }

  /**
   * detalle_entradas_mercaderia without action
   */
  export type detalle_entradas_mercaderiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_entradas_mercaderia
     */
    select?: detalle_entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_entradas_mercaderia
     */
    omit?: detalle_entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_entradas_mercaderiaInclude<ExtArgs> | null
  }


  /**
   * Model detalle_pedidos
   */

  export type AggregateDetalle_pedidos = {
    _count: Detalle_pedidosCountAggregateOutputType | null
    _avg: Detalle_pedidosAvgAggregateOutputType | null
    _sum: Detalle_pedidosSumAggregateOutputType | null
    _min: Detalle_pedidosMinAggregateOutputType | null
    _max: Detalle_pedidosMaxAggregateOutputType | null
  }

  export type Detalle_pedidosAvgAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    producto_id: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
    subtotal: Decimal | null
  }

  export type Detalle_pedidosSumAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    producto_id: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
    subtotal: Decimal | null
  }

  export type Detalle_pedidosMinAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    producto_id: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
    subtotal: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Detalle_pedidosMaxAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    producto_id: number | null
    cantidad: number | null
    precio_unitario: Decimal | null
    subtotal: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Detalle_pedidosCountAggregateOutputType = {
    id: number
    pedido_id: number
    producto_id: number
    cantidad: number
    precio_unitario: number
    subtotal: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Detalle_pedidosAvgAggregateInputType = {
    id?: true
    pedido_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
  }

  export type Detalle_pedidosSumAggregateInputType = {
    id?: true
    pedido_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
  }

  export type Detalle_pedidosMinAggregateInputType = {
    id?: true
    pedido_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
    created_at?: true
    updated_at?: true
  }

  export type Detalle_pedidosMaxAggregateInputType = {
    id?: true
    pedido_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
    created_at?: true
    updated_at?: true
  }

  export type Detalle_pedidosCountAggregateInputType = {
    id?: true
    pedido_id?: true
    producto_id?: true
    cantidad?: true
    precio_unitario?: true
    subtotal?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Detalle_pedidosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_pedidos to aggregate.
     */
    where?: detalle_pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_pedidos to fetch.
     */
    orderBy?: detalle_pedidosOrderByWithRelationInput | detalle_pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detalle_pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detalle_pedidos
    **/
    _count?: true | Detalle_pedidosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detalle_pedidosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detalle_pedidosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detalle_pedidosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detalle_pedidosMaxAggregateInputType
  }

  export type GetDetalle_pedidosAggregateType<T extends Detalle_pedidosAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalle_pedidos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalle_pedidos[P]>
      : GetScalarType<T[P], AggregateDetalle_pedidos[P]>
  }




  export type detalle_pedidosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalle_pedidosWhereInput
    orderBy?: detalle_pedidosOrderByWithAggregationInput | detalle_pedidosOrderByWithAggregationInput[]
    by: Detalle_pedidosScalarFieldEnum[] | Detalle_pedidosScalarFieldEnum
    having?: detalle_pedidosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detalle_pedidosCountAggregateInputType | true
    _avg?: Detalle_pedidosAvgAggregateInputType
    _sum?: Detalle_pedidosSumAggregateInputType
    _min?: Detalle_pedidosMinAggregateInputType
    _max?: Detalle_pedidosMaxAggregateInputType
  }

  export type Detalle_pedidosGroupByOutputType = {
    id: number
    pedido_id: number
    producto_id: number
    cantidad: number
    precio_unitario: Decimal
    subtotal: Decimal
    created_at: Date | null
    updated_at: Date | null
    _count: Detalle_pedidosCountAggregateOutputType | null
    _avg: Detalle_pedidosAvgAggregateOutputType | null
    _sum: Detalle_pedidosSumAggregateOutputType | null
    _min: Detalle_pedidosMinAggregateOutputType | null
    _max: Detalle_pedidosMaxAggregateOutputType | null
  }

  type GetDetalle_pedidosGroupByPayload<T extends detalle_pedidosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detalle_pedidosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detalle_pedidosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detalle_pedidosGroupByOutputType[P]>
            : GetScalarType<T[P], Detalle_pedidosGroupByOutputType[P]>
        }
      >
    >


  export type detalle_pedidosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedido_id?: boolean
    producto_id?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    subtotal?: boolean
    created_at?: boolean
    updated_at?: boolean
    pedidos?: boolean | pedidosDefaultArgs<ExtArgs>
    productos?: boolean | productosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_pedidos"]>



  export type detalle_pedidosSelectScalar = {
    id?: boolean
    pedido_id?: boolean
    producto_id?: boolean
    cantidad?: boolean
    precio_unitario?: boolean
    subtotal?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type detalle_pedidosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedido_id" | "producto_id" | "cantidad" | "precio_unitario" | "subtotal" | "created_at" | "updated_at", ExtArgs["result"]["detalle_pedidos"]>
  export type detalle_pedidosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | pedidosDefaultArgs<ExtArgs>
    productos?: boolean | productosDefaultArgs<ExtArgs>
  }

  export type $detalle_pedidosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detalle_pedidos"
    objects: {
      pedidos: Prisma.$pedidosPayload<ExtArgs>
      productos: Prisma.$productosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedido_id: number
      producto_id: number
      cantidad: number
      precio_unitario: Prisma.Decimal
      subtotal: Prisma.Decimal
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["detalle_pedidos"]>
    composites: {}
  }

  type detalle_pedidosGetPayload<S extends boolean | null | undefined | detalle_pedidosDefaultArgs> = $Result.GetResult<Prisma.$detalle_pedidosPayload, S>

  type detalle_pedidosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detalle_pedidosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detalle_pedidosCountAggregateInputType | true
    }

  export interface detalle_pedidosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detalle_pedidos'], meta: { name: 'detalle_pedidos' } }
    /**
     * Find zero or one Detalle_pedidos that matches the filter.
     * @param {detalle_pedidosFindUniqueArgs} args - Arguments to find a Detalle_pedidos
     * @example
     * // Get one Detalle_pedidos
     * const detalle_pedidos = await prisma.detalle_pedidos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detalle_pedidosFindUniqueArgs>(args: SelectSubset<T, detalle_pedidosFindUniqueArgs<ExtArgs>>): Prisma__detalle_pedidosClient<$Result.GetResult<Prisma.$detalle_pedidosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalle_pedidos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detalle_pedidosFindUniqueOrThrowArgs} args - Arguments to find a Detalle_pedidos
     * @example
     * // Get one Detalle_pedidos
     * const detalle_pedidos = await prisma.detalle_pedidos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detalle_pedidosFindUniqueOrThrowArgs>(args: SelectSubset<T, detalle_pedidosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detalle_pedidosClient<$Result.GetResult<Prisma.$detalle_pedidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_pedidosFindFirstArgs} args - Arguments to find a Detalle_pedidos
     * @example
     * // Get one Detalle_pedidos
     * const detalle_pedidos = await prisma.detalle_pedidos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detalle_pedidosFindFirstArgs>(args?: SelectSubset<T, detalle_pedidosFindFirstArgs<ExtArgs>>): Prisma__detalle_pedidosClient<$Result.GetResult<Prisma.$detalle_pedidosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle_pedidos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_pedidosFindFirstOrThrowArgs} args - Arguments to find a Detalle_pedidos
     * @example
     * // Get one Detalle_pedidos
     * const detalle_pedidos = await prisma.detalle_pedidos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detalle_pedidosFindFirstOrThrowArgs>(args?: SelectSubset<T, detalle_pedidosFindFirstOrThrowArgs<ExtArgs>>): Prisma__detalle_pedidosClient<$Result.GetResult<Prisma.$detalle_pedidosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalle_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_pedidosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalle_pedidos
     * const detalle_pedidos = await prisma.detalle_pedidos.findMany()
     * 
     * // Get first 10 Detalle_pedidos
     * const detalle_pedidos = await prisma.detalle_pedidos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalle_pedidosWithIdOnly = await prisma.detalle_pedidos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detalle_pedidosFindManyArgs>(args?: SelectSubset<T, detalle_pedidosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_pedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalle_pedidos.
     * @param {detalle_pedidosCreateArgs} args - Arguments to create a Detalle_pedidos.
     * @example
     * // Create one Detalle_pedidos
     * const Detalle_pedidos = await prisma.detalle_pedidos.create({
     *   data: {
     *     // ... data to create a Detalle_pedidos
     *   }
     * })
     * 
     */
    create<T extends detalle_pedidosCreateArgs>(args: SelectSubset<T, detalle_pedidosCreateArgs<ExtArgs>>): Prisma__detalle_pedidosClient<$Result.GetResult<Prisma.$detalle_pedidosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalle_pedidos.
     * @param {detalle_pedidosCreateManyArgs} args - Arguments to create many Detalle_pedidos.
     * @example
     * // Create many Detalle_pedidos
     * const detalle_pedidos = await prisma.detalle_pedidos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detalle_pedidosCreateManyArgs>(args?: SelectSubset<T, detalle_pedidosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Detalle_pedidos.
     * @param {detalle_pedidosDeleteArgs} args - Arguments to delete one Detalle_pedidos.
     * @example
     * // Delete one Detalle_pedidos
     * const Detalle_pedidos = await prisma.detalle_pedidos.delete({
     *   where: {
     *     // ... filter to delete one Detalle_pedidos
     *   }
     * })
     * 
     */
    delete<T extends detalle_pedidosDeleteArgs>(args: SelectSubset<T, detalle_pedidosDeleteArgs<ExtArgs>>): Prisma__detalle_pedidosClient<$Result.GetResult<Prisma.$detalle_pedidosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalle_pedidos.
     * @param {detalle_pedidosUpdateArgs} args - Arguments to update one Detalle_pedidos.
     * @example
     * // Update one Detalle_pedidos
     * const detalle_pedidos = await prisma.detalle_pedidos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detalle_pedidosUpdateArgs>(args: SelectSubset<T, detalle_pedidosUpdateArgs<ExtArgs>>): Prisma__detalle_pedidosClient<$Result.GetResult<Prisma.$detalle_pedidosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalle_pedidos.
     * @param {detalle_pedidosDeleteManyArgs} args - Arguments to filter Detalle_pedidos to delete.
     * @example
     * // Delete a few Detalle_pedidos
     * const { count } = await prisma.detalle_pedidos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detalle_pedidosDeleteManyArgs>(args?: SelectSubset<T, detalle_pedidosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_pedidosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalle_pedidos
     * const detalle_pedidos = await prisma.detalle_pedidos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detalle_pedidosUpdateManyArgs>(args: SelectSubset<T, detalle_pedidosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Detalle_pedidos.
     * @param {detalle_pedidosUpsertArgs} args - Arguments to update or create a Detalle_pedidos.
     * @example
     * // Update or create a Detalle_pedidos
     * const detalle_pedidos = await prisma.detalle_pedidos.upsert({
     *   create: {
     *     // ... data to create a Detalle_pedidos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalle_pedidos we want to update
     *   }
     * })
     */
    upsert<T extends detalle_pedidosUpsertArgs>(args: SelectSubset<T, detalle_pedidosUpsertArgs<ExtArgs>>): Prisma__detalle_pedidosClient<$Result.GetResult<Prisma.$detalle_pedidosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalle_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_pedidosCountArgs} args - Arguments to filter Detalle_pedidos to count.
     * @example
     * // Count the number of Detalle_pedidos
     * const count = await prisma.detalle_pedidos.count({
     *   where: {
     *     // ... the filter for the Detalle_pedidos we want to count
     *   }
     * })
    **/
    count<T extends detalle_pedidosCountArgs>(
      args?: Subset<T, detalle_pedidosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detalle_pedidosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalle_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_pedidosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detalle_pedidosAggregateArgs>(args: Subset<T, Detalle_pedidosAggregateArgs>): Prisma.PrismaPromise<GetDetalle_pedidosAggregateType<T>>

    /**
     * Group by Detalle_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalle_pedidosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detalle_pedidosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detalle_pedidosGroupByArgs['orderBy'] }
        : { orderBy?: detalle_pedidosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detalle_pedidosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_pedidosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detalle_pedidos model
   */
  readonly fields: detalle_pedidosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detalle_pedidos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detalle_pedidosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends pedidosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidosDefaultArgs<ExtArgs>>): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productos<T extends productosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productosDefaultArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detalle_pedidos model
   */
  interface detalle_pedidosFieldRefs {
    readonly id: FieldRef<"detalle_pedidos", 'Int'>
    readonly pedido_id: FieldRef<"detalle_pedidos", 'Int'>
    readonly producto_id: FieldRef<"detalle_pedidos", 'Int'>
    readonly cantidad: FieldRef<"detalle_pedidos", 'Int'>
    readonly precio_unitario: FieldRef<"detalle_pedidos", 'Decimal'>
    readonly subtotal: FieldRef<"detalle_pedidos", 'Decimal'>
    readonly created_at: FieldRef<"detalle_pedidos", 'DateTime'>
    readonly updated_at: FieldRef<"detalle_pedidos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * detalle_pedidos findUnique
   */
  export type detalle_pedidosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedidos
     */
    select?: detalle_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedidos
     */
    omit?: detalle_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which detalle_pedidos to fetch.
     */
    where: detalle_pedidosWhereUniqueInput
  }

  /**
   * detalle_pedidos findUniqueOrThrow
   */
  export type detalle_pedidosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedidos
     */
    select?: detalle_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedidos
     */
    omit?: detalle_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which detalle_pedidos to fetch.
     */
    where: detalle_pedidosWhereUniqueInput
  }

  /**
   * detalle_pedidos findFirst
   */
  export type detalle_pedidosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedidos
     */
    select?: detalle_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedidos
     */
    omit?: detalle_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which detalle_pedidos to fetch.
     */
    where?: detalle_pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_pedidos to fetch.
     */
    orderBy?: detalle_pedidosOrderByWithRelationInput | detalle_pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_pedidos.
     */
    cursor?: detalle_pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_pedidos.
     */
    distinct?: Detalle_pedidosScalarFieldEnum | Detalle_pedidosScalarFieldEnum[]
  }

  /**
   * detalle_pedidos findFirstOrThrow
   */
  export type detalle_pedidosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedidos
     */
    select?: detalle_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedidos
     */
    omit?: detalle_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which detalle_pedidos to fetch.
     */
    where?: detalle_pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_pedidos to fetch.
     */
    orderBy?: detalle_pedidosOrderByWithRelationInput | detalle_pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalle_pedidos.
     */
    cursor?: detalle_pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalle_pedidos.
     */
    distinct?: Detalle_pedidosScalarFieldEnum | Detalle_pedidosScalarFieldEnum[]
  }

  /**
   * detalle_pedidos findMany
   */
  export type detalle_pedidosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedidos
     */
    select?: detalle_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedidos
     */
    omit?: detalle_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which detalle_pedidos to fetch.
     */
    where?: detalle_pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalle_pedidos to fetch.
     */
    orderBy?: detalle_pedidosOrderByWithRelationInput | detalle_pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detalle_pedidos.
     */
    cursor?: detalle_pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalle_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalle_pedidos.
     */
    skip?: number
    distinct?: Detalle_pedidosScalarFieldEnum | Detalle_pedidosScalarFieldEnum[]
  }

  /**
   * detalle_pedidos create
   */
  export type detalle_pedidosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedidos
     */
    select?: detalle_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedidos
     */
    omit?: detalle_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidosInclude<ExtArgs> | null
    /**
     * The data needed to create a detalle_pedidos.
     */
    data: XOR<detalle_pedidosCreateInput, detalle_pedidosUncheckedCreateInput>
  }

  /**
   * detalle_pedidos createMany
   */
  export type detalle_pedidosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detalle_pedidos.
     */
    data: detalle_pedidosCreateManyInput | detalle_pedidosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detalle_pedidos update
   */
  export type detalle_pedidosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedidos
     */
    select?: detalle_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedidos
     */
    omit?: detalle_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidosInclude<ExtArgs> | null
    /**
     * The data needed to update a detalle_pedidos.
     */
    data: XOR<detalle_pedidosUpdateInput, detalle_pedidosUncheckedUpdateInput>
    /**
     * Choose, which detalle_pedidos to update.
     */
    where: detalle_pedidosWhereUniqueInput
  }

  /**
   * detalle_pedidos updateMany
   */
  export type detalle_pedidosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detalle_pedidos.
     */
    data: XOR<detalle_pedidosUpdateManyMutationInput, detalle_pedidosUncheckedUpdateManyInput>
    /**
     * Filter which detalle_pedidos to update
     */
    where?: detalle_pedidosWhereInput
    /**
     * Limit how many detalle_pedidos to update.
     */
    limit?: number
  }

  /**
   * detalle_pedidos upsert
   */
  export type detalle_pedidosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedidos
     */
    select?: detalle_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedidos
     */
    omit?: detalle_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidosInclude<ExtArgs> | null
    /**
     * The filter to search for the detalle_pedidos to update in case it exists.
     */
    where: detalle_pedidosWhereUniqueInput
    /**
     * In case the detalle_pedidos found by the `where` argument doesn't exist, create a new detalle_pedidos with this data.
     */
    create: XOR<detalle_pedidosCreateInput, detalle_pedidosUncheckedCreateInput>
    /**
     * In case the detalle_pedidos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detalle_pedidosUpdateInput, detalle_pedidosUncheckedUpdateInput>
  }

  /**
   * detalle_pedidos delete
   */
  export type detalle_pedidosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedidos
     */
    select?: detalle_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedidos
     */
    omit?: detalle_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidosInclude<ExtArgs> | null
    /**
     * Filter which detalle_pedidos to delete.
     */
    where: detalle_pedidosWhereUniqueInput
  }

  /**
   * detalle_pedidos deleteMany
   */
  export type detalle_pedidosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalle_pedidos to delete
     */
    where?: detalle_pedidosWhereInput
    /**
     * Limit how many detalle_pedidos to delete.
     */
    limit?: number
  }

  /**
   * detalle_pedidos without action
   */
  export type detalle_pedidosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedidos
     */
    select?: detalle_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedidos
     */
    omit?: detalle_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidosInclude<ExtArgs> | null
  }


  /**
   * Model entradas_mercaderia
   */

  export type AggregateEntradas_mercaderia = {
    _count: Entradas_mercaderiaCountAggregateOutputType | null
    _avg: Entradas_mercaderiaAvgAggregateOutputType | null
    _sum: Entradas_mercaderiaSumAggregateOutputType | null
    _min: Entradas_mercaderiaMinAggregateOutputType | null
    _max: Entradas_mercaderiaMaxAggregateOutputType | null
  }

  export type Entradas_mercaderiaAvgAggregateOutputType = {
    id: number | null
    proveedor_id: number | null
    total: Decimal | null
  }

  export type Entradas_mercaderiaSumAggregateOutputType = {
    id: number | null
    proveedor_id: number | null
    total: Decimal | null
  }

  export type Entradas_mercaderiaMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    proveedor_id: number | null
    numero_factura: string | null
    total: Decimal | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Entradas_mercaderiaMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    proveedor_id: number | null
    numero_factura: string | null
    total: Decimal | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Entradas_mercaderiaCountAggregateOutputType = {
    id: number
    fecha: number
    proveedor_id: number
    numero_factura: number
    total: number
    notas: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Entradas_mercaderiaAvgAggregateInputType = {
    id?: true
    proveedor_id?: true
    total?: true
  }

  export type Entradas_mercaderiaSumAggregateInputType = {
    id?: true
    proveedor_id?: true
    total?: true
  }

  export type Entradas_mercaderiaMinAggregateInputType = {
    id?: true
    fecha?: true
    proveedor_id?: true
    numero_factura?: true
    total?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type Entradas_mercaderiaMaxAggregateInputType = {
    id?: true
    fecha?: true
    proveedor_id?: true
    numero_factura?: true
    total?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type Entradas_mercaderiaCountAggregateInputType = {
    id?: true
    fecha?: true
    proveedor_id?: true
    numero_factura?: true
    total?: true
    notas?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Entradas_mercaderiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entradas_mercaderia to aggregate.
     */
    where?: entradas_mercaderiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entradas_mercaderias to fetch.
     */
    orderBy?: entradas_mercaderiaOrderByWithRelationInput | entradas_mercaderiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: entradas_mercaderiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entradas_mercaderias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entradas_mercaderias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned entradas_mercaderias
    **/
    _count?: true | Entradas_mercaderiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Entradas_mercaderiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Entradas_mercaderiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Entradas_mercaderiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Entradas_mercaderiaMaxAggregateInputType
  }

  export type GetEntradas_mercaderiaAggregateType<T extends Entradas_mercaderiaAggregateArgs> = {
        [P in keyof T & keyof AggregateEntradas_mercaderia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntradas_mercaderia[P]>
      : GetScalarType<T[P], AggregateEntradas_mercaderia[P]>
  }




  export type entradas_mercaderiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entradas_mercaderiaWhereInput
    orderBy?: entradas_mercaderiaOrderByWithAggregationInput | entradas_mercaderiaOrderByWithAggregationInput[]
    by: Entradas_mercaderiaScalarFieldEnum[] | Entradas_mercaderiaScalarFieldEnum
    having?: entradas_mercaderiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Entradas_mercaderiaCountAggregateInputType | true
    _avg?: Entradas_mercaderiaAvgAggregateInputType
    _sum?: Entradas_mercaderiaSumAggregateInputType
    _min?: Entradas_mercaderiaMinAggregateInputType
    _max?: Entradas_mercaderiaMaxAggregateInputType
  }

  export type Entradas_mercaderiaGroupByOutputType = {
    id: number
    fecha: Date
    proveedor_id: number
    numero_factura: string | null
    total: Decimal
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Entradas_mercaderiaCountAggregateOutputType | null
    _avg: Entradas_mercaderiaAvgAggregateOutputType | null
    _sum: Entradas_mercaderiaSumAggregateOutputType | null
    _min: Entradas_mercaderiaMinAggregateOutputType | null
    _max: Entradas_mercaderiaMaxAggregateOutputType | null
  }

  type GetEntradas_mercaderiaGroupByPayload<T extends entradas_mercaderiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Entradas_mercaderiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Entradas_mercaderiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Entradas_mercaderiaGroupByOutputType[P]>
            : GetScalarType<T[P], Entradas_mercaderiaGroupByOutputType[P]>
        }
      >
    >


  export type entradas_mercaderiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    proveedor_id?: boolean
    numero_factura?: boolean
    total?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
    detalle_entradas_mercaderia?: boolean | entradas_mercaderia$detalle_entradas_mercaderiaArgs<ExtArgs>
    proveedores?: boolean | proveedoresDefaultArgs<ExtArgs>
    _count?: boolean | Entradas_mercaderiaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entradas_mercaderia"]>



  export type entradas_mercaderiaSelectScalar = {
    id?: boolean
    fecha?: boolean
    proveedor_id?: boolean
    numero_factura?: boolean
    total?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type entradas_mercaderiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "proveedor_id" | "numero_factura" | "total" | "notas" | "created_at" | "updated_at", ExtArgs["result"]["entradas_mercaderia"]>
  export type entradas_mercaderiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_entradas_mercaderia?: boolean | entradas_mercaderia$detalle_entradas_mercaderiaArgs<ExtArgs>
    proveedores?: boolean | proveedoresDefaultArgs<ExtArgs>
    _count?: boolean | Entradas_mercaderiaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $entradas_mercaderiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "entradas_mercaderia"
    objects: {
      detalle_entradas_mercaderia: Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>[]
      proveedores: Prisma.$proveedoresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      proveedor_id: number
      numero_factura: string | null
      total: Prisma.Decimal
      notas: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["entradas_mercaderia"]>
    composites: {}
  }

  type entradas_mercaderiaGetPayload<S extends boolean | null | undefined | entradas_mercaderiaDefaultArgs> = $Result.GetResult<Prisma.$entradas_mercaderiaPayload, S>

  type entradas_mercaderiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<entradas_mercaderiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Entradas_mercaderiaCountAggregateInputType | true
    }

  export interface entradas_mercaderiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['entradas_mercaderia'], meta: { name: 'entradas_mercaderia' } }
    /**
     * Find zero or one Entradas_mercaderia that matches the filter.
     * @param {entradas_mercaderiaFindUniqueArgs} args - Arguments to find a Entradas_mercaderia
     * @example
     * // Get one Entradas_mercaderia
     * const entradas_mercaderia = await prisma.entradas_mercaderia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends entradas_mercaderiaFindUniqueArgs>(args: SelectSubset<T, entradas_mercaderiaFindUniqueArgs<ExtArgs>>): Prisma__entradas_mercaderiaClient<$Result.GetResult<Prisma.$entradas_mercaderiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entradas_mercaderia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {entradas_mercaderiaFindUniqueOrThrowArgs} args - Arguments to find a Entradas_mercaderia
     * @example
     * // Get one Entradas_mercaderia
     * const entradas_mercaderia = await prisma.entradas_mercaderia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends entradas_mercaderiaFindUniqueOrThrowArgs>(args: SelectSubset<T, entradas_mercaderiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__entradas_mercaderiaClient<$Result.GetResult<Prisma.$entradas_mercaderiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entradas_mercaderia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entradas_mercaderiaFindFirstArgs} args - Arguments to find a Entradas_mercaderia
     * @example
     * // Get one Entradas_mercaderia
     * const entradas_mercaderia = await prisma.entradas_mercaderia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends entradas_mercaderiaFindFirstArgs>(args?: SelectSubset<T, entradas_mercaderiaFindFirstArgs<ExtArgs>>): Prisma__entradas_mercaderiaClient<$Result.GetResult<Prisma.$entradas_mercaderiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entradas_mercaderia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entradas_mercaderiaFindFirstOrThrowArgs} args - Arguments to find a Entradas_mercaderia
     * @example
     * // Get one Entradas_mercaderia
     * const entradas_mercaderia = await prisma.entradas_mercaderia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends entradas_mercaderiaFindFirstOrThrowArgs>(args?: SelectSubset<T, entradas_mercaderiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__entradas_mercaderiaClient<$Result.GetResult<Prisma.$entradas_mercaderiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entradas_mercaderias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entradas_mercaderiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entradas_mercaderias
     * const entradas_mercaderias = await prisma.entradas_mercaderia.findMany()
     * 
     * // Get first 10 Entradas_mercaderias
     * const entradas_mercaderias = await prisma.entradas_mercaderia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entradas_mercaderiaWithIdOnly = await prisma.entradas_mercaderia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends entradas_mercaderiaFindManyArgs>(args?: SelectSubset<T, entradas_mercaderiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entradas_mercaderiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entradas_mercaderia.
     * @param {entradas_mercaderiaCreateArgs} args - Arguments to create a Entradas_mercaderia.
     * @example
     * // Create one Entradas_mercaderia
     * const Entradas_mercaderia = await prisma.entradas_mercaderia.create({
     *   data: {
     *     // ... data to create a Entradas_mercaderia
     *   }
     * })
     * 
     */
    create<T extends entradas_mercaderiaCreateArgs>(args: SelectSubset<T, entradas_mercaderiaCreateArgs<ExtArgs>>): Prisma__entradas_mercaderiaClient<$Result.GetResult<Prisma.$entradas_mercaderiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entradas_mercaderias.
     * @param {entradas_mercaderiaCreateManyArgs} args - Arguments to create many Entradas_mercaderias.
     * @example
     * // Create many Entradas_mercaderias
     * const entradas_mercaderia = await prisma.entradas_mercaderia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends entradas_mercaderiaCreateManyArgs>(args?: SelectSubset<T, entradas_mercaderiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entradas_mercaderia.
     * @param {entradas_mercaderiaDeleteArgs} args - Arguments to delete one Entradas_mercaderia.
     * @example
     * // Delete one Entradas_mercaderia
     * const Entradas_mercaderia = await prisma.entradas_mercaderia.delete({
     *   where: {
     *     // ... filter to delete one Entradas_mercaderia
     *   }
     * })
     * 
     */
    delete<T extends entradas_mercaderiaDeleteArgs>(args: SelectSubset<T, entradas_mercaderiaDeleteArgs<ExtArgs>>): Prisma__entradas_mercaderiaClient<$Result.GetResult<Prisma.$entradas_mercaderiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entradas_mercaderia.
     * @param {entradas_mercaderiaUpdateArgs} args - Arguments to update one Entradas_mercaderia.
     * @example
     * // Update one Entradas_mercaderia
     * const entradas_mercaderia = await prisma.entradas_mercaderia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends entradas_mercaderiaUpdateArgs>(args: SelectSubset<T, entradas_mercaderiaUpdateArgs<ExtArgs>>): Prisma__entradas_mercaderiaClient<$Result.GetResult<Prisma.$entradas_mercaderiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entradas_mercaderias.
     * @param {entradas_mercaderiaDeleteManyArgs} args - Arguments to filter Entradas_mercaderias to delete.
     * @example
     * // Delete a few Entradas_mercaderias
     * const { count } = await prisma.entradas_mercaderia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends entradas_mercaderiaDeleteManyArgs>(args?: SelectSubset<T, entradas_mercaderiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entradas_mercaderias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entradas_mercaderiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entradas_mercaderias
     * const entradas_mercaderia = await prisma.entradas_mercaderia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends entradas_mercaderiaUpdateManyArgs>(args: SelectSubset<T, entradas_mercaderiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entradas_mercaderia.
     * @param {entradas_mercaderiaUpsertArgs} args - Arguments to update or create a Entradas_mercaderia.
     * @example
     * // Update or create a Entradas_mercaderia
     * const entradas_mercaderia = await prisma.entradas_mercaderia.upsert({
     *   create: {
     *     // ... data to create a Entradas_mercaderia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entradas_mercaderia we want to update
     *   }
     * })
     */
    upsert<T extends entradas_mercaderiaUpsertArgs>(args: SelectSubset<T, entradas_mercaderiaUpsertArgs<ExtArgs>>): Prisma__entradas_mercaderiaClient<$Result.GetResult<Prisma.$entradas_mercaderiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entradas_mercaderias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entradas_mercaderiaCountArgs} args - Arguments to filter Entradas_mercaderias to count.
     * @example
     * // Count the number of Entradas_mercaderias
     * const count = await prisma.entradas_mercaderia.count({
     *   where: {
     *     // ... the filter for the Entradas_mercaderias we want to count
     *   }
     * })
    **/
    count<T extends entradas_mercaderiaCountArgs>(
      args?: Subset<T, entradas_mercaderiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Entradas_mercaderiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entradas_mercaderia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Entradas_mercaderiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Entradas_mercaderiaAggregateArgs>(args: Subset<T, Entradas_mercaderiaAggregateArgs>): Prisma.PrismaPromise<GetEntradas_mercaderiaAggregateType<T>>

    /**
     * Group by Entradas_mercaderia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entradas_mercaderiaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends entradas_mercaderiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: entradas_mercaderiaGroupByArgs['orderBy'] }
        : { orderBy?: entradas_mercaderiaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, entradas_mercaderiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntradas_mercaderiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the entradas_mercaderia model
   */
  readonly fields: entradas_mercaderiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for entradas_mercaderia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__entradas_mercaderiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle_entradas_mercaderia<T extends entradas_mercaderia$detalle_entradas_mercaderiaArgs<ExtArgs> = {}>(args?: Subset<T, entradas_mercaderia$detalle_entradas_mercaderiaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proveedores<T extends proveedoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proveedoresDefaultArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the entradas_mercaderia model
   */
  interface entradas_mercaderiaFieldRefs {
    readonly id: FieldRef<"entradas_mercaderia", 'Int'>
    readonly fecha: FieldRef<"entradas_mercaderia", 'DateTime'>
    readonly proveedor_id: FieldRef<"entradas_mercaderia", 'Int'>
    readonly numero_factura: FieldRef<"entradas_mercaderia", 'String'>
    readonly total: FieldRef<"entradas_mercaderia", 'Decimal'>
    readonly notas: FieldRef<"entradas_mercaderia", 'String'>
    readonly created_at: FieldRef<"entradas_mercaderia", 'DateTime'>
    readonly updated_at: FieldRef<"entradas_mercaderia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * entradas_mercaderia findUnique
   */
  export type entradas_mercaderiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entradas_mercaderia
     */
    select?: entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entradas_mercaderia
     */
    omit?: entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * Filter, which entradas_mercaderia to fetch.
     */
    where: entradas_mercaderiaWhereUniqueInput
  }

  /**
   * entradas_mercaderia findUniqueOrThrow
   */
  export type entradas_mercaderiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entradas_mercaderia
     */
    select?: entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entradas_mercaderia
     */
    omit?: entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * Filter, which entradas_mercaderia to fetch.
     */
    where: entradas_mercaderiaWhereUniqueInput
  }

  /**
   * entradas_mercaderia findFirst
   */
  export type entradas_mercaderiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entradas_mercaderia
     */
    select?: entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entradas_mercaderia
     */
    omit?: entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * Filter, which entradas_mercaderia to fetch.
     */
    where?: entradas_mercaderiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entradas_mercaderias to fetch.
     */
    orderBy?: entradas_mercaderiaOrderByWithRelationInput | entradas_mercaderiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entradas_mercaderias.
     */
    cursor?: entradas_mercaderiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entradas_mercaderias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entradas_mercaderias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entradas_mercaderias.
     */
    distinct?: Entradas_mercaderiaScalarFieldEnum | Entradas_mercaderiaScalarFieldEnum[]
  }

  /**
   * entradas_mercaderia findFirstOrThrow
   */
  export type entradas_mercaderiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entradas_mercaderia
     */
    select?: entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entradas_mercaderia
     */
    omit?: entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * Filter, which entradas_mercaderia to fetch.
     */
    where?: entradas_mercaderiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entradas_mercaderias to fetch.
     */
    orderBy?: entradas_mercaderiaOrderByWithRelationInput | entradas_mercaderiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entradas_mercaderias.
     */
    cursor?: entradas_mercaderiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entradas_mercaderias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entradas_mercaderias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entradas_mercaderias.
     */
    distinct?: Entradas_mercaderiaScalarFieldEnum | Entradas_mercaderiaScalarFieldEnum[]
  }

  /**
   * entradas_mercaderia findMany
   */
  export type entradas_mercaderiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entradas_mercaderia
     */
    select?: entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entradas_mercaderia
     */
    omit?: entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * Filter, which entradas_mercaderias to fetch.
     */
    where?: entradas_mercaderiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entradas_mercaderias to fetch.
     */
    orderBy?: entradas_mercaderiaOrderByWithRelationInput | entradas_mercaderiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing entradas_mercaderias.
     */
    cursor?: entradas_mercaderiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entradas_mercaderias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entradas_mercaderias.
     */
    skip?: number
    distinct?: Entradas_mercaderiaScalarFieldEnum | Entradas_mercaderiaScalarFieldEnum[]
  }

  /**
   * entradas_mercaderia create
   */
  export type entradas_mercaderiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entradas_mercaderia
     */
    select?: entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entradas_mercaderia
     */
    omit?: entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * The data needed to create a entradas_mercaderia.
     */
    data: XOR<entradas_mercaderiaCreateInput, entradas_mercaderiaUncheckedCreateInput>
  }

  /**
   * entradas_mercaderia createMany
   */
  export type entradas_mercaderiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many entradas_mercaderias.
     */
    data: entradas_mercaderiaCreateManyInput | entradas_mercaderiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entradas_mercaderia update
   */
  export type entradas_mercaderiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entradas_mercaderia
     */
    select?: entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entradas_mercaderia
     */
    omit?: entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * The data needed to update a entradas_mercaderia.
     */
    data: XOR<entradas_mercaderiaUpdateInput, entradas_mercaderiaUncheckedUpdateInput>
    /**
     * Choose, which entradas_mercaderia to update.
     */
    where: entradas_mercaderiaWhereUniqueInput
  }

  /**
   * entradas_mercaderia updateMany
   */
  export type entradas_mercaderiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update entradas_mercaderias.
     */
    data: XOR<entradas_mercaderiaUpdateManyMutationInput, entradas_mercaderiaUncheckedUpdateManyInput>
    /**
     * Filter which entradas_mercaderias to update
     */
    where?: entradas_mercaderiaWhereInput
    /**
     * Limit how many entradas_mercaderias to update.
     */
    limit?: number
  }

  /**
   * entradas_mercaderia upsert
   */
  export type entradas_mercaderiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entradas_mercaderia
     */
    select?: entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entradas_mercaderia
     */
    omit?: entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * The filter to search for the entradas_mercaderia to update in case it exists.
     */
    where: entradas_mercaderiaWhereUniqueInput
    /**
     * In case the entradas_mercaderia found by the `where` argument doesn't exist, create a new entradas_mercaderia with this data.
     */
    create: XOR<entradas_mercaderiaCreateInput, entradas_mercaderiaUncheckedCreateInput>
    /**
     * In case the entradas_mercaderia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<entradas_mercaderiaUpdateInput, entradas_mercaderiaUncheckedUpdateInput>
  }

  /**
   * entradas_mercaderia delete
   */
  export type entradas_mercaderiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entradas_mercaderia
     */
    select?: entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entradas_mercaderia
     */
    omit?: entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradas_mercaderiaInclude<ExtArgs> | null
    /**
     * Filter which entradas_mercaderia to delete.
     */
    where: entradas_mercaderiaWhereUniqueInput
  }

  /**
   * entradas_mercaderia deleteMany
   */
  export type entradas_mercaderiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entradas_mercaderias to delete
     */
    where?: entradas_mercaderiaWhereInput
    /**
     * Limit how many entradas_mercaderias to delete.
     */
    limit?: number
  }

  /**
   * entradas_mercaderia.detalle_entradas_mercaderia
   */
  export type entradas_mercaderia$detalle_entradas_mercaderiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_entradas_mercaderia
     */
    select?: detalle_entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_entradas_mercaderia
     */
    omit?: detalle_entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_entradas_mercaderiaInclude<ExtArgs> | null
    where?: detalle_entradas_mercaderiaWhereInput
    orderBy?: detalle_entradas_mercaderiaOrderByWithRelationInput | detalle_entradas_mercaderiaOrderByWithRelationInput[]
    cursor?: detalle_entradas_mercaderiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_entradas_mercaderiaScalarFieldEnum | Detalle_entradas_mercaderiaScalarFieldEnum[]
  }

  /**
   * entradas_mercaderia without action
   */
  export type entradas_mercaderiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entradas_mercaderia
     */
    select?: entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entradas_mercaderia
     */
    omit?: entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradas_mercaderiaInclude<ExtArgs> | null
  }


  /**
   * Model gastos
   */

  export type AggregateGastos = {
    _count: GastosCountAggregateOutputType | null
    _avg: GastosAvgAggregateOutputType | null
    _sum: GastosSumAggregateOutputType | null
    _min: GastosMinAggregateOutputType | null
    _max: GastosMaxAggregateOutputType | null
  }

  export type GastosAvgAggregateOutputType = {
    id: number | null
    monto: Decimal | null
  }

  export type GastosSumAggregateOutputType = {
    id: number | null
    monto: Decimal | null
  }

  export type GastosMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    concepto: string | null
    monto: Decimal | null
    tipo: $Enums.gastos_tipo | null
    categoria: string | null
    comprobante: string | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GastosMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    concepto: string | null
    monto: Decimal | null
    tipo: $Enums.gastos_tipo | null
    categoria: string | null
    comprobante: string | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GastosCountAggregateOutputType = {
    id: number
    fecha: number
    concepto: number
    monto: number
    tipo: number
    categoria: number
    comprobante: number
    notas: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GastosAvgAggregateInputType = {
    id?: true
    monto?: true
  }

  export type GastosSumAggregateInputType = {
    id?: true
    monto?: true
  }

  export type GastosMinAggregateInputType = {
    id?: true
    fecha?: true
    concepto?: true
    monto?: true
    tipo?: true
    categoria?: true
    comprobante?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type GastosMaxAggregateInputType = {
    id?: true
    fecha?: true
    concepto?: true
    monto?: true
    tipo?: true
    categoria?: true
    comprobante?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type GastosCountAggregateInputType = {
    id?: true
    fecha?: true
    concepto?: true
    monto?: true
    tipo?: true
    categoria?: true
    comprobante?: true
    notas?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GastosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gastos to aggregate.
     */
    where?: gastosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastos to fetch.
     */
    orderBy?: gastosOrderByWithRelationInput | gastosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gastosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gastos
    **/
    _count?: true | GastosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GastosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GastosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GastosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GastosMaxAggregateInputType
  }

  export type GetGastosAggregateType<T extends GastosAggregateArgs> = {
        [P in keyof T & keyof AggregateGastos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGastos[P]>
      : GetScalarType<T[P], AggregateGastos[P]>
  }




  export type gastosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gastosWhereInput
    orderBy?: gastosOrderByWithAggregationInput | gastosOrderByWithAggregationInput[]
    by: GastosScalarFieldEnum[] | GastosScalarFieldEnum
    having?: gastosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GastosCountAggregateInputType | true
    _avg?: GastosAvgAggregateInputType
    _sum?: GastosSumAggregateInputType
    _min?: GastosMinAggregateInputType
    _max?: GastosMaxAggregateInputType
  }

  export type GastosGroupByOutputType = {
    id: number
    fecha: Date
    concepto: string
    monto: Decimal
    tipo: $Enums.gastos_tipo
    categoria: string | null
    comprobante: string | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: GastosCountAggregateOutputType | null
    _avg: GastosAvgAggregateOutputType | null
    _sum: GastosSumAggregateOutputType | null
    _min: GastosMinAggregateOutputType | null
    _max: GastosMaxAggregateOutputType | null
  }

  type GetGastosGroupByPayload<T extends gastosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GastosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GastosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GastosGroupByOutputType[P]>
            : GetScalarType<T[P], GastosGroupByOutputType[P]>
        }
      >
    >


  export type gastosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    concepto?: boolean
    monto?: boolean
    tipo?: boolean
    categoria?: boolean
    comprobante?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["gastos"]>



  export type gastosSelectScalar = {
    id?: boolean
    fecha?: boolean
    concepto?: boolean
    monto?: boolean
    tipo?: boolean
    categoria?: boolean
    comprobante?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type gastosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "concepto" | "monto" | "tipo" | "categoria" | "comprobante" | "notas" | "created_at" | "updated_at", ExtArgs["result"]["gastos"]>

  export type $gastosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gastos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      concepto: string
      monto: Prisma.Decimal
      tipo: $Enums.gastos_tipo
      categoria: string | null
      comprobante: string | null
      notas: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["gastos"]>
    composites: {}
  }

  type gastosGetPayload<S extends boolean | null | undefined | gastosDefaultArgs> = $Result.GetResult<Prisma.$gastosPayload, S>

  type gastosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gastosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GastosCountAggregateInputType | true
    }

  export interface gastosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gastos'], meta: { name: 'gastos' } }
    /**
     * Find zero or one Gastos that matches the filter.
     * @param {gastosFindUniqueArgs} args - Arguments to find a Gastos
     * @example
     * // Get one Gastos
     * const gastos = await prisma.gastos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gastosFindUniqueArgs>(args: SelectSubset<T, gastosFindUniqueArgs<ExtArgs>>): Prisma__gastosClient<$Result.GetResult<Prisma.$gastosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gastos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gastosFindUniqueOrThrowArgs} args - Arguments to find a Gastos
     * @example
     * // Get one Gastos
     * const gastos = await prisma.gastos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gastosFindUniqueOrThrowArgs>(args: SelectSubset<T, gastosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gastosClient<$Result.GetResult<Prisma.$gastosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastosFindFirstArgs} args - Arguments to find a Gastos
     * @example
     * // Get one Gastos
     * const gastos = await prisma.gastos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gastosFindFirstArgs>(args?: SelectSubset<T, gastosFindFirstArgs<ExtArgs>>): Prisma__gastosClient<$Result.GetResult<Prisma.$gastosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gastos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastosFindFirstOrThrowArgs} args - Arguments to find a Gastos
     * @example
     * // Get one Gastos
     * const gastos = await prisma.gastos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gastosFindFirstOrThrowArgs>(args?: SelectSubset<T, gastosFindFirstOrThrowArgs<ExtArgs>>): Prisma__gastosClient<$Result.GetResult<Prisma.$gastosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gastos
     * const gastos = await prisma.gastos.findMany()
     * 
     * // Get first 10 Gastos
     * const gastos = await prisma.gastos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gastosWithIdOnly = await prisma.gastos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gastosFindManyArgs>(args?: SelectSubset<T, gastosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gastosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gastos.
     * @param {gastosCreateArgs} args - Arguments to create a Gastos.
     * @example
     * // Create one Gastos
     * const Gastos = await prisma.gastos.create({
     *   data: {
     *     // ... data to create a Gastos
     *   }
     * })
     * 
     */
    create<T extends gastosCreateArgs>(args: SelectSubset<T, gastosCreateArgs<ExtArgs>>): Prisma__gastosClient<$Result.GetResult<Prisma.$gastosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gastos.
     * @param {gastosCreateManyArgs} args - Arguments to create many Gastos.
     * @example
     * // Create many Gastos
     * const gastos = await prisma.gastos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gastosCreateManyArgs>(args?: SelectSubset<T, gastosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gastos.
     * @param {gastosDeleteArgs} args - Arguments to delete one Gastos.
     * @example
     * // Delete one Gastos
     * const Gastos = await prisma.gastos.delete({
     *   where: {
     *     // ... filter to delete one Gastos
     *   }
     * })
     * 
     */
    delete<T extends gastosDeleteArgs>(args: SelectSubset<T, gastosDeleteArgs<ExtArgs>>): Prisma__gastosClient<$Result.GetResult<Prisma.$gastosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gastos.
     * @param {gastosUpdateArgs} args - Arguments to update one Gastos.
     * @example
     * // Update one Gastos
     * const gastos = await prisma.gastos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gastosUpdateArgs>(args: SelectSubset<T, gastosUpdateArgs<ExtArgs>>): Prisma__gastosClient<$Result.GetResult<Prisma.$gastosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gastos.
     * @param {gastosDeleteManyArgs} args - Arguments to filter Gastos to delete.
     * @example
     * // Delete a few Gastos
     * const { count } = await prisma.gastos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gastosDeleteManyArgs>(args?: SelectSubset<T, gastosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gastos
     * const gastos = await prisma.gastos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gastosUpdateManyArgs>(args: SelectSubset<T, gastosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gastos.
     * @param {gastosUpsertArgs} args - Arguments to update or create a Gastos.
     * @example
     * // Update or create a Gastos
     * const gastos = await prisma.gastos.upsert({
     *   create: {
     *     // ... data to create a Gastos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gastos we want to update
     *   }
     * })
     */
    upsert<T extends gastosUpsertArgs>(args: SelectSubset<T, gastosUpsertArgs<ExtArgs>>): Prisma__gastosClient<$Result.GetResult<Prisma.$gastosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastosCountArgs} args - Arguments to filter Gastos to count.
     * @example
     * // Count the number of Gastos
     * const count = await prisma.gastos.count({
     *   where: {
     *     // ... the filter for the Gastos we want to count
     *   }
     * })
    **/
    count<T extends gastosCountArgs>(
      args?: Subset<T, gastosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GastosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GastosAggregateArgs>(args: Subset<T, GastosAggregateArgs>): Prisma.PrismaPromise<GetGastosAggregateType<T>>

    /**
     * Group by Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gastosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gastosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gastosGroupByArgs['orderBy'] }
        : { orderBy?: gastosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gastosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGastosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gastos model
   */
  readonly fields: gastosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gastos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gastosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gastos model
   */
  interface gastosFieldRefs {
    readonly id: FieldRef<"gastos", 'Int'>
    readonly fecha: FieldRef<"gastos", 'DateTime'>
    readonly concepto: FieldRef<"gastos", 'String'>
    readonly monto: FieldRef<"gastos", 'Decimal'>
    readonly tipo: FieldRef<"gastos", 'gastos_tipo'>
    readonly categoria: FieldRef<"gastos", 'String'>
    readonly comprobante: FieldRef<"gastos", 'String'>
    readonly notas: FieldRef<"gastos", 'String'>
    readonly created_at: FieldRef<"gastos", 'DateTime'>
    readonly updated_at: FieldRef<"gastos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * gastos findUnique
   */
  export type gastosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos
     */
    select?: gastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gastos
     */
    omit?: gastosOmit<ExtArgs> | null
    /**
     * Filter, which gastos to fetch.
     */
    where: gastosWhereUniqueInput
  }

  /**
   * gastos findUniqueOrThrow
   */
  export type gastosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos
     */
    select?: gastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gastos
     */
    omit?: gastosOmit<ExtArgs> | null
    /**
     * Filter, which gastos to fetch.
     */
    where: gastosWhereUniqueInput
  }

  /**
   * gastos findFirst
   */
  export type gastosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos
     */
    select?: gastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gastos
     */
    omit?: gastosOmit<ExtArgs> | null
    /**
     * Filter, which gastos to fetch.
     */
    where?: gastosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastos to fetch.
     */
    orderBy?: gastosOrderByWithRelationInput | gastosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gastos.
     */
    cursor?: gastosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gastos.
     */
    distinct?: GastosScalarFieldEnum | GastosScalarFieldEnum[]
  }

  /**
   * gastos findFirstOrThrow
   */
  export type gastosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos
     */
    select?: gastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gastos
     */
    omit?: gastosOmit<ExtArgs> | null
    /**
     * Filter, which gastos to fetch.
     */
    where?: gastosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastos to fetch.
     */
    orderBy?: gastosOrderByWithRelationInput | gastosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gastos.
     */
    cursor?: gastosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gastos.
     */
    distinct?: GastosScalarFieldEnum | GastosScalarFieldEnum[]
  }

  /**
   * gastos findMany
   */
  export type gastosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos
     */
    select?: gastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gastos
     */
    omit?: gastosOmit<ExtArgs> | null
    /**
     * Filter, which gastos to fetch.
     */
    where?: gastosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gastos to fetch.
     */
    orderBy?: gastosOrderByWithRelationInput | gastosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gastos.
     */
    cursor?: gastosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gastos.
     */
    skip?: number
    distinct?: GastosScalarFieldEnum | GastosScalarFieldEnum[]
  }

  /**
   * gastos create
   */
  export type gastosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos
     */
    select?: gastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gastos
     */
    omit?: gastosOmit<ExtArgs> | null
    /**
     * The data needed to create a gastos.
     */
    data: XOR<gastosCreateInput, gastosUncheckedCreateInput>
  }

  /**
   * gastos createMany
   */
  export type gastosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gastos.
     */
    data: gastosCreateManyInput | gastosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gastos update
   */
  export type gastosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos
     */
    select?: gastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gastos
     */
    omit?: gastosOmit<ExtArgs> | null
    /**
     * The data needed to update a gastos.
     */
    data: XOR<gastosUpdateInput, gastosUncheckedUpdateInput>
    /**
     * Choose, which gastos to update.
     */
    where: gastosWhereUniqueInput
  }

  /**
   * gastos updateMany
   */
  export type gastosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gastos.
     */
    data: XOR<gastosUpdateManyMutationInput, gastosUncheckedUpdateManyInput>
    /**
     * Filter which gastos to update
     */
    where?: gastosWhereInput
    /**
     * Limit how many gastos to update.
     */
    limit?: number
  }

  /**
   * gastos upsert
   */
  export type gastosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos
     */
    select?: gastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gastos
     */
    omit?: gastosOmit<ExtArgs> | null
    /**
     * The filter to search for the gastos to update in case it exists.
     */
    where: gastosWhereUniqueInput
    /**
     * In case the gastos found by the `where` argument doesn't exist, create a new gastos with this data.
     */
    create: XOR<gastosCreateInput, gastosUncheckedCreateInput>
    /**
     * In case the gastos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gastosUpdateInput, gastosUncheckedUpdateInput>
  }

  /**
   * gastos delete
   */
  export type gastosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos
     */
    select?: gastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gastos
     */
    omit?: gastosOmit<ExtArgs> | null
    /**
     * Filter which gastos to delete.
     */
    where: gastosWhereUniqueInput
  }

  /**
   * gastos deleteMany
   */
  export type gastosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gastos to delete
     */
    where?: gastosWhereInput
    /**
     * Limit how many gastos to delete.
     */
    limit?: number
  }

  /**
   * gastos without action
   */
  export type gastosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gastos
     */
    select?: gastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gastos
     */
    omit?: gastosOmit<ExtArgs> | null
  }


  /**
   * Model movimientos_caja
   */

  export type AggregateMovimientos_caja = {
    _count: Movimientos_cajaCountAggregateOutputType | null
    _avg: Movimientos_cajaAvgAggregateOutputType | null
    _sum: Movimientos_cajaSumAggregateOutputType | null
    _min: Movimientos_cajaMinAggregateOutputType | null
    _max: Movimientos_cajaMaxAggregateOutputType | null
  }

  export type Movimientos_cajaAvgAggregateOutputType = {
    id: number | null
    caja_id: number | null
    monto: Decimal | null
    referencia_id: number | null
  }

  export type Movimientos_cajaSumAggregateOutputType = {
    id: number | null
    caja_id: number | null
    monto: Decimal | null
    referencia_id: number | null
  }

  export type Movimientos_cajaMinAggregateOutputType = {
    id: number | null
    caja_id: number | null
    fecha_hora: Date | null
    tipo: $Enums.movimientos_caja_tipo | null
    concepto: string | null
    monto: Decimal | null
    referencia_id: number | null
    referencia_tipo: $Enums.movimientos_caja_referencia_tipo | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Movimientos_cajaMaxAggregateOutputType = {
    id: number | null
    caja_id: number | null
    fecha_hora: Date | null
    tipo: $Enums.movimientos_caja_tipo | null
    concepto: string | null
    monto: Decimal | null
    referencia_id: number | null
    referencia_tipo: $Enums.movimientos_caja_referencia_tipo | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Movimientos_cajaCountAggregateOutputType = {
    id: number
    caja_id: number
    fecha_hora: number
    tipo: number
    concepto: number
    monto: number
    referencia_id: number
    referencia_tipo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Movimientos_cajaAvgAggregateInputType = {
    id?: true
    caja_id?: true
    monto?: true
    referencia_id?: true
  }

  export type Movimientos_cajaSumAggregateInputType = {
    id?: true
    caja_id?: true
    monto?: true
    referencia_id?: true
  }

  export type Movimientos_cajaMinAggregateInputType = {
    id?: true
    caja_id?: true
    fecha_hora?: true
    tipo?: true
    concepto?: true
    monto?: true
    referencia_id?: true
    referencia_tipo?: true
    created_at?: true
    updated_at?: true
  }

  export type Movimientos_cajaMaxAggregateInputType = {
    id?: true
    caja_id?: true
    fecha_hora?: true
    tipo?: true
    concepto?: true
    monto?: true
    referencia_id?: true
    referencia_tipo?: true
    created_at?: true
    updated_at?: true
  }

  export type Movimientos_cajaCountAggregateInputType = {
    id?: true
    caja_id?: true
    fecha_hora?: true
    tipo?: true
    concepto?: true
    monto?: true
    referencia_id?: true
    referencia_tipo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Movimientos_cajaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movimientos_caja to aggregate.
     */
    where?: movimientos_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientos_cajas to fetch.
     */
    orderBy?: movimientos_cajaOrderByWithRelationInput | movimientos_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: movimientos_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientos_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientos_cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movimientos_cajas
    **/
    _count?: true | Movimientos_cajaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Movimientos_cajaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Movimientos_cajaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Movimientos_cajaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Movimientos_cajaMaxAggregateInputType
  }

  export type GetMovimientos_cajaAggregateType<T extends Movimientos_cajaAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimientos_caja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimientos_caja[P]>
      : GetScalarType<T[P], AggregateMovimientos_caja[P]>
  }




  export type movimientos_cajaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimientos_cajaWhereInput
    orderBy?: movimientos_cajaOrderByWithAggregationInput | movimientos_cajaOrderByWithAggregationInput[]
    by: Movimientos_cajaScalarFieldEnum[] | Movimientos_cajaScalarFieldEnum
    having?: movimientos_cajaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Movimientos_cajaCountAggregateInputType | true
    _avg?: Movimientos_cajaAvgAggregateInputType
    _sum?: Movimientos_cajaSumAggregateInputType
    _min?: Movimientos_cajaMinAggregateInputType
    _max?: Movimientos_cajaMaxAggregateInputType
  }

  export type Movimientos_cajaGroupByOutputType = {
    id: number
    caja_id: number
    fecha_hora: Date
    tipo: $Enums.movimientos_caja_tipo
    concepto: string
    monto: Decimal
    referencia_id: number | null
    referencia_tipo: $Enums.movimientos_caja_referencia_tipo | null
    created_at: Date | null
    updated_at: Date | null
    _count: Movimientos_cajaCountAggregateOutputType | null
    _avg: Movimientos_cajaAvgAggregateOutputType | null
    _sum: Movimientos_cajaSumAggregateOutputType | null
    _min: Movimientos_cajaMinAggregateOutputType | null
    _max: Movimientos_cajaMaxAggregateOutputType | null
  }

  type GetMovimientos_cajaGroupByPayload<T extends movimientos_cajaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Movimientos_cajaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Movimientos_cajaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Movimientos_cajaGroupByOutputType[P]>
            : GetScalarType<T[P], Movimientos_cajaGroupByOutputType[P]>
        }
      >
    >


  export type movimientos_cajaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caja_id?: boolean
    fecha_hora?: boolean
    tipo?: boolean
    concepto?: boolean
    monto?: boolean
    referencia_id?: boolean
    referencia_tipo?: boolean
    created_at?: boolean
    updated_at?: boolean
    caja_diaria?: boolean | caja_diariaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimientos_caja"]>



  export type movimientos_cajaSelectScalar = {
    id?: boolean
    caja_id?: boolean
    fecha_hora?: boolean
    tipo?: boolean
    concepto?: boolean
    monto?: boolean
    referencia_id?: boolean
    referencia_tipo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type movimientos_cajaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caja_id" | "fecha_hora" | "tipo" | "concepto" | "monto" | "referencia_id" | "referencia_tipo" | "created_at" | "updated_at", ExtArgs["result"]["movimientos_caja"]>
  export type movimientos_cajaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caja_diaria?: boolean | caja_diariaDefaultArgs<ExtArgs>
  }

  export type $movimientos_cajaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movimientos_caja"
    objects: {
      caja_diaria: Prisma.$caja_diariaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      caja_id: number
      fecha_hora: Date
      tipo: $Enums.movimientos_caja_tipo
      concepto: string
      monto: Prisma.Decimal
      referencia_id: number | null
      referencia_tipo: $Enums.movimientos_caja_referencia_tipo | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["movimientos_caja"]>
    composites: {}
  }

  type movimientos_cajaGetPayload<S extends boolean | null | undefined | movimientos_cajaDefaultArgs> = $Result.GetResult<Prisma.$movimientos_cajaPayload, S>

  type movimientos_cajaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<movimientos_cajaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Movimientos_cajaCountAggregateInputType | true
    }

  export interface movimientos_cajaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movimientos_caja'], meta: { name: 'movimientos_caja' } }
    /**
     * Find zero or one Movimientos_caja that matches the filter.
     * @param {movimientos_cajaFindUniqueArgs} args - Arguments to find a Movimientos_caja
     * @example
     * // Get one Movimientos_caja
     * const movimientos_caja = await prisma.movimientos_caja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends movimientos_cajaFindUniqueArgs>(args: SelectSubset<T, movimientos_cajaFindUniqueArgs<ExtArgs>>): Prisma__movimientos_cajaClient<$Result.GetResult<Prisma.$movimientos_cajaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movimientos_caja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {movimientos_cajaFindUniqueOrThrowArgs} args - Arguments to find a Movimientos_caja
     * @example
     * // Get one Movimientos_caja
     * const movimientos_caja = await prisma.movimientos_caja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends movimientos_cajaFindUniqueOrThrowArgs>(args: SelectSubset<T, movimientos_cajaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__movimientos_cajaClient<$Result.GetResult<Prisma.$movimientos_cajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimientos_caja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientos_cajaFindFirstArgs} args - Arguments to find a Movimientos_caja
     * @example
     * // Get one Movimientos_caja
     * const movimientos_caja = await prisma.movimientos_caja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends movimientos_cajaFindFirstArgs>(args?: SelectSubset<T, movimientos_cajaFindFirstArgs<ExtArgs>>): Prisma__movimientos_cajaClient<$Result.GetResult<Prisma.$movimientos_cajaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimientos_caja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientos_cajaFindFirstOrThrowArgs} args - Arguments to find a Movimientos_caja
     * @example
     * // Get one Movimientos_caja
     * const movimientos_caja = await prisma.movimientos_caja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends movimientos_cajaFindFirstOrThrowArgs>(args?: SelectSubset<T, movimientos_cajaFindFirstOrThrowArgs<ExtArgs>>): Prisma__movimientos_cajaClient<$Result.GetResult<Prisma.$movimientos_cajaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movimientos_cajas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientos_cajaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimientos_cajas
     * const movimientos_cajas = await prisma.movimientos_caja.findMany()
     * 
     * // Get first 10 Movimientos_cajas
     * const movimientos_cajas = await prisma.movimientos_caja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimientos_cajaWithIdOnly = await prisma.movimientos_caja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends movimientos_cajaFindManyArgs>(args?: SelectSubset<T, movimientos_cajaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientos_cajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movimientos_caja.
     * @param {movimientos_cajaCreateArgs} args - Arguments to create a Movimientos_caja.
     * @example
     * // Create one Movimientos_caja
     * const Movimientos_caja = await prisma.movimientos_caja.create({
     *   data: {
     *     // ... data to create a Movimientos_caja
     *   }
     * })
     * 
     */
    create<T extends movimientos_cajaCreateArgs>(args: SelectSubset<T, movimientos_cajaCreateArgs<ExtArgs>>): Prisma__movimientos_cajaClient<$Result.GetResult<Prisma.$movimientos_cajaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movimientos_cajas.
     * @param {movimientos_cajaCreateManyArgs} args - Arguments to create many Movimientos_cajas.
     * @example
     * // Create many Movimientos_cajas
     * const movimientos_caja = await prisma.movimientos_caja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends movimientos_cajaCreateManyArgs>(args?: SelectSubset<T, movimientos_cajaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movimientos_caja.
     * @param {movimientos_cajaDeleteArgs} args - Arguments to delete one Movimientos_caja.
     * @example
     * // Delete one Movimientos_caja
     * const Movimientos_caja = await prisma.movimientos_caja.delete({
     *   where: {
     *     // ... filter to delete one Movimientos_caja
     *   }
     * })
     * 
     */
    delete<T extends movimientos_cajaDeleteArgs>(args: SelectSubset<T, movimientos_cajaDeleteArgs<ExtArgs>>): Prisma__movimientos_cajaClient<$Result.GetResult<Prisma.$movimientos_cajaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movimientos_caja.
     * @param {movimientos_cajaUpdateArgs} args - Arguments to update one Movimientos_caja.
     * @example
     * // Update one Movimientos_caja
     * const movimientos_caja = await prisma.movimientos_caja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends movimientos_cajaUpdateArgs>(args: SelectSubset<T, movimientos_cajaUpdateArgs<ExtArgs>>): Prisma__movimientos_cajaClient<$Result.GetResult<Prisma.$movimientos_cajaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movimientos_cajas.
     * @param {movimientos_cajaDeleteManyArgs} args - Arguments to filter Movimientos_cajas to delete.
     * @example
     * // Delete a few Movimientos_cajas
     * const { count } = await prisma.movimientos_caja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends movimientos_cajaDeleteManyArgs>(args?: SelectSubset<T, movimientos_cajaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimientos_cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientos_cajaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimientos_cajas
     * const movimientos_caja = await prisma.movimientos_caja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends movimientos_cajaUpdateManyArgs>(args: SelectSubset<T, movimientos_cajaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movimientos_caja.
     * @param {movimientos_cajaUpsertArgs} args - Arguments to update or create a Movimientos_caja.
     * @example
     * // Update or create a Movimientos_caja
     * const movimientos_caja = await prisma.movimientos_caja.upsert({
     *   create: {
     *     // ... data to create a Movimientos_caja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimientos_caja we want to update
     *   }
     * })
     */
    upsert<T extends movimientos_cajaUpsertArgs>(args: SelectSubset<T, movimientos_cajaUpsertArgs<ExtArgs>>): Prisma__movimientos_cajaClient<$Result.GetResult<Prisma.$movimientos_cajaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movimientos_cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientos_cajaCountArgs} args - Arguments to filter Movimientos_cajas to count.
     * @example
     * // Count the number of Movimientos_cajas
     * const count = await prisma.movimientos_caja.count({
     *   where: {
     *     // ... the filter for the Movimientos_cajas we want to count
     *   }
     * })
    **/
    count<T extends movimientos_cajaCountArgs>(
      args?: Subset<T, movimientos_cajaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Movimientos_cajaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movimientos_caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Movimientos_cajaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Movimientos_cajaAggregateArgs>(args: Subset<T, Movimientos_cajaAggregateArgs>): Prisma.PrismaPromise<GetMovimientos_cajaAggregateType<T>>

    /**
     * Group by Movimientos_caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientos_cajaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends movimientos_cajaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movimientos_cajaGroupByArgs['orderBy'] }
        : { orderBy?: movimientos_cajaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, movimientos_cajaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientos_cajaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movimientos_caja model
   */
  readonly fields: movimientos_cajaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movimientos_caja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movimientos_cajaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caja_diaria<T extends caja_diariaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, caja_diariaDefaultArgs<ExtArgs>>): Prisma__caja_diariaClient<$Result.GetResult<Prisma.$caja_diariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the movimientos_caja model
   */
  interface movimientos_cajaFieldRefs {
    readonly id: FieldRef<"movimientos_caja", 'Int'>
    readonly caja_id: FieldRef<"movimientos_caja", 'Int'>
    readonly fecha_hora: FieldRef<"movimientos_caja", 'DateTime'>
    readonly tipo: FieldRef<"movimientos_caja", 'movimientos_caja_tipo'>
    readonly concepto: FieldRef<"movimientos_caja", 'String'>
    readonly monto: FieldRef<"movimientos_caja", 'Decimal'>
    readonly referencia_id: FieldRef<"movimientos_caja", 'Int'>
    readonly referencia_tipo: FieldRef<"movimientos_caja", 'movimientos_caja_referencia_tipo'>
    readonly created_at: FieldRef<"movimientos_caja", 'DateTime'>
    readonly updated_at: FieldRef<"movimientos_caja", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * movimientos_caja findUnique
   */
  export type movimientos_cajaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_caja
     */
    select?: movimientos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientos_caja
     */
    omit?: movimientos_cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_cajaInclude<ExtArgs> | null
    /**
     * Filter, which movimientos_caja to fetch.
     */
    where: movimientos_cajaWhereUniqueInput
  }

  /**
   * movimientos_caja findUniqueOrThrow
   */
  export type movimientos_cajaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_caja
     */
    select?: movimientos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientos_caja
     */
    omit?: movimientos_cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_cajaInclude<ExtArgs> | null
    /**
     * Filter, which movimientos_caja to fetch.
     */
    where: movimientos_cajaWhereUniqueInput
  }

  /**
   * movimientos_caja findFirst
   */
  export type movimientos_cajaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_caja
     */
    select?: movimientos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientos_caja
     */
    omit?: movimientos_cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_cajaInclude<ExtArgs> | null
    /**
     * Filter, which movimientos_caja to fetch.
     */
    where?: movimientos_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientos_cajas to fetch.
     */
    orderBy?: movimientos_cajaOrderByWithRelationInput | movimientos_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movimientos_cajas.
     */
    cursor?: movimientos_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientos_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientos_cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movimientos_cajas.
     */
    distinct?: Movimientos_cajaScalarFieldEnum | Movimientos_cajaScalarFieldEnum[]
  }

  /**
   * movimientos_caja findFirstOrThrow
   */
  export type movimientos_cajaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_caja
     */
    select?: movimientos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientos_caja
     */
    omit?: movimientos_cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_cajaInclude<ExtArgs> | null
    /**
     * Filter, which movimientos_caja to fetch.
     */
    where?: movimientos_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientos_cajas to fetch.
     */
    orderBy?: movimientos_cajaOrderByWithRelationInput | movimientos_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movimientos_cajas.
     */
    cursor?: movimientos_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientos_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientos_cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movimientos_cajas.
     */
    distinct?: Movimientos_cajaScalarFieldEnum | Movimientos_cajaScalarFieldEnum[]
  }

  /**
   * movimientos_caja findMany
   */
  export type movimientos_cajaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_caja
     */
    select?: movimientos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientos_caja
     */
    omit?: movimientos_cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_cajaInclude<ExtArgs> | null
    /**
     * Filter, which movimientos_cajas to fetch.
     */
    where?: movimientos_cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientos_cajas to fetch.
     */
    orderBy?: movimientos_cajaOrderByWithRelationInput | movimientos_cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movimientos_cajas.
     */
    cursor?: movimientos_cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientos_cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientos_cajas.
     */
    skip?: number
    distinct?: Movimientos_cajaScalarFieldEnum | Movimientos_cajaScalarFieldEnum[]
  }

  /**
   * movimientos_caja create
   */
  export type movimientos_cajaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_caja
     */
    select?: movimientos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientos_caja
     */
    omit?: movimientos_cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_cajaInclude<ExtArgs> | null
    /**
     * The data needed to create a movimientos_caja.
     */
    data: XOR<movimientos_cajaCreateInput, movimientos_cajaUncheckedCreateInput>
  }

  /**
   * movimientos_caja createMany
   */
  export type movimientos_cajaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movimientos_cajas.
     */
    data: movimientos_cajaCreateManyInput | movimientos_cajaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movimientos_caja update
   */
  export type movimientos_cajaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_caja
     */
    select?: movimientos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientos_caja
     */
    omit?: movimientos_cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_cajaInclude<ExtArgs> | null
    /**
     * The data needed to update a movimientos_caja.
     */
    data: XOR<movimientos_cajaUpdateInput, movimientos_cajaUncheckedUpdateInput>
    /**
     * Choose, which movimientos_caja to update.
     */
    where: movimientos_cajaWhereUniqueInput
  }

  /**
   * movimientos_caja updateMany
   */
  export type movimientos_cajaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movimientos_cajas.
     */
    data: XOR<movimientos_cajaUpdateManyMutationInput, movimientos_cajaUncheckedUpdateManyInput>
    /**
     * Filter which movimientos_cajas to update
     */
    where?: movimientos_cajaWhereInput
    /**
     * Limit how many movimientos_cajas to update.
     */
    limit?: number
  }

  /**
   * movimientos_caja upsert
   */
  export type movimientos_cajaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_caja
     */
    select?: movimientos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientos_caja
     */
    omit?: movimientos_cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_cajaInclude<ExtArgs> | null
    /**
     * The filter to search for the movimientos_caja to update in case it exists.
     */
    where: movimientos_cajaWhereUniqueInput
    /**
     * In case the movimientos_caja found by the `where` argument doesn't exist, create a new movimientos_caja with this data.
     */
    create: XOR<movimientos_cajaCreateInput, movimientos_cajaUncheckedCreateInput>
    /**
     * In case the movimientos_caja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movimientos_cajaUpdateInput, movimientos_cajaUncheckedUpdateInput>
  }

  /**
   * movimientos_caja delete
   */
  export type movimientos_cajaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_caja
     */
    select?: movimientos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientos_caja
     */
    omit?: movimientos_cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_cajaInclude<ExtArgs> | null
    /**
     * Filter which movimientos_caja to delete.
     */
    where: movimientos_cajaWhereUniqueInput
  }

  /**
   * movimientos_caja deleteMany
   */
  export type movimientos_cajaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movimientos_cajas to delete
     */
    where?: movimientos_cajaWhereInput
    /**
     * Limit how many movimientos_cajas to delete.
     */
    limit?: number
  }

  /**
   * movimientos_caja without action
   */
  export type movimientos_cajaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientos_caja
     */
    select?: movimientos_cajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientos_caja
     */
    omit?: movimientos_cajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientos_cajaInclude<ExtArgs> | null
  }


  /**
   * Model pagos
   */

  export type AggregatePagos = {
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  export type PagosAvgAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    monto: Decimal | null
  }

  export type PagosSumAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    monto: Decimal | null
  }

  export type PagosMinAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    fecha: Date | null
    monto: Decimal | null
    metodo_pago: $Enums.pagos_metodo_pago | null
    referencia: string | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PagosMaxAggregateOutputType = {
    id: number | null
    pedido_id: number | null
    fecha: Date | null
    monto: Decimal | null
    metodo_pago: $Enums.pagos_metodo_pago | null
    referencia: string | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PagosCountAggregateOutputType = {
    id: number
    pedido_id: number
    fecha: number
    monto: number
    metodo_pago: number
    referencia: number
    notas: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PagosAvgAggregateInputType = {
    id?: true
    pedido_id?: true
    monto?: true
  }

  export type PagosSumAggregateInputType = {
    id?: true
    pedido_id?: true
    monto?: true
  }

  export type PagosMinAggregateInputType = {
    id?: true
    pedido_id?: true
    fecha?: true
    monto?: true
    metodo_pago?: true
    referencia?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type PagosMaxAggregateInputType = {
    id?: true
    pedido_id?: true
    fecha?: true
    monto?: true
    metodo_pago?: true
    referencia?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type PagosCountAggregateInputType = {
    id?: true
    pedido_id?: true
    fecha?: true
    monto?: true
    metodo_pago?: true
    referencia?: true
    notas?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PagosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagos to aggregate.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagos
    **/
    _count?: true | PagosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagosMaxAggregateInputType
  }

  export type GetPagosAggregateType<T extends PagosAggregateArgs> = {
        [P in keyof T & keyof AggregatePagos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagos[P]>
      : GetScalarType<T[P], AggregatePagos[P]>
  }




  export type pagosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagosWhereInput
    orderBy?: pagosOrderByWithAggregationInput | pagosOrderByWithAggregationInput[]
    by: PagosScalarFieldEnum[] | PagosScalarFieldEnum
    having?: pagosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagosCountAggregateInputType | true
    _avg?: PagosAvgAggregateInputType
    _sum?: PagosSumAggregateInputType
    _min?: PagosMinAggregateInputType
    _max?: PagosMaxAggregateInputType
  }

  export type PagosGroupByOutputType = {
    id: number
    pedido_id: number
    fecha: Date
    monto: Decimal
    metodo_pago: $Enums.pagos_metodo_pago
    referencia: string | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  type GetPagosGroupByPayload<T extends pagosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagosGroupByOutputType[P]>
            : GetScalarType<T[P], PagosGroupByOutputType[P]>
        }
      >
    >


  export type pagosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedido_id?: boolean
    fecha?: boolean
    monto?: boolean
    metodo_pago?: boolean
    referencia?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
    pedidos?: boolean | pedidosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagos"]>



  export type pagosSelectScalar = {
    id?: boolean
    pedido_id?: boolean
    fecha?: boolean
    monto?: boolean
    metodo_pago?: boolean
    referencia?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type pagosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedido_id" | "fecha" | "monto" | "metodo_pago" | "referencia" | "notas" | "created_at" | "updated_at", ExtArgs["result"]["pagos"]>
  export type pagosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | pedidosDefaultArgs<ExtArgs>
  }

  export type $pagosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pagos"
    objects: {
      pedidos: Prisma.$pedidosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedido_id: number
      fecha: Date
      monto: Prisma.Decimal
      metodo_pago: $Enums.pagos_metodo_pago
      referencia: string | null
      notas: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["pagos"]>
    composites: {}
  }

  type pagosGetPayload<S extends boolean | null | undefined | pagosDefaultArgs> = $Result.GetResult<Prisma.$pagosPayload, S>

  type pagosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pagosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagosCountAggregateInputType | true
    }

  export interface pagosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pagos'], meta: { name: 'pagos' } }
    /**
     * Find zero or one Pagos that matches the filter.
     * @param {pagosFindUniqueArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagosFindUniqueArgs>(args: SelectSubset<T, pagosFindUniqueArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pagosFindUniqueOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagosFindUniqueOrThrowArgs>(args: SelectSubset<T, pagosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindFirstArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagosFindFirstArgs>(args?: SelectSubset<T, pagosFindFirstArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindFirstOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagosFindFirstOrThrowArgs>(args?: SelectSubset<T, pagosFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pagos.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pagos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagosWithIdOnly = await prisma.pagos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pagosFindManyArgs>(args?: SelectSubset<T, pagosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagos.
     * @param {pagosCreateArgs} args - Arguments to create a Pagos.
     * @example
     * // Create one Pagos
     * const Pagos = await prisma.pagos.create({
     *   data: {
     *     // ... data to create a Pagos
     *   }
     * })
     * 
     */
    create<T extends pagosCreateArgs>(args: SelectSubset<T, pagosCreateArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagos.
     * @param {pagosCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pagos = await prisma.pagos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagosCreateManyArgs>(args?: SelectSubset<T, pagosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pagos.
     * @param {pagosDeleteArgs} args - Arguments to delete one Pagos.
     * @example
     * // Delete one Pagos
     * const Pagos = await prisma.pagos.delete({
     *   where: {
     *     // ... filter to delete one Pagos
     *   }
     * })
     * 
     */
    delete<T extends pagosDeleteArgs>(args: SelectSubset<T, pagosDeleteArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagos.
     * @param {pagosUpdateArgs} args - Arguments to update one Pagos.
     * @example
     * // Update one Pagos
     * const pagos = await prisma.pagos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagosUpdateArgs>(args: SelectSubset<T, pagosUpdateArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagos.
     * @param {pagosDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pagos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagosDeleteManyArgs>(args?: SelectSubset<T, pagosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pagos = await prisma.pagos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagosUpdateManyArgs>(args: SelectSubset<T, pagosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pagos.
     * @param {pagosUpsertArgs} args - Arguments to update or create a Pagos.
     * @example
     * // Update or create a Pagos
     * const pagos = await prisma.pagos.upsert({
     *   create: {
     *     // ... data to create a Pagos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagos we want to update
     *   }
     * })
     */
    upsert<T extends pagosUpsertArgs>(args: SelectSubset<T, pagosUpsertArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pagos.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends pagosCountArgs>(
      args?: Subset<T, pagosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagosAggregateArgs>(args: Subset<T, PagosAggregateArgs>): Prisma.PrismaPromise<GetPagosAggregateType<T>>

    /**
     * Group by Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pagosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagosGroupByArgs['orderBy'] }
        : { orderBy?: pagosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pagosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pagos model
   */
  readonly fields: pagosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pagos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends pedidosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidosDefaultArgs<ExtArgs>>): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pagos model
   */
  interface pagosFieldRefs {
    readonly id: FieldRef<"pagos", 'Int'>
    readonly pedido_id: FieldRef<"pagos", 'Int'>
    readonly fecha: FieldRef<"pagos", 'DateTime'>
    readonly monto: FieldRef<"pagos", 'Decimal'>
    readonly metodo_pago: FieldRef<"pagos", 'pagos_metodo_pago'>
    readonly referencia: FieldRef<"pagos", 'String'>
    readonly notas: FieldRef<"pagos", 'String'>
    readonly created_at: FieldRef<"pagos", 'DateTime'>
    readonly updated_at: FieldRef<"pagos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pagos findUnique
   */
  export type pagosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos findUniqueOrThrow
   */
  export type pagosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos findFirst
   */
  export type pagosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pagos findFirstOrThrow
   */
  export type pagosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pagos findMany
   */
  export type pagosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pagos create
   */
  export type pagosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * The data needed to create a pagos.
     */
    data: XOR<pagosCreateInput, pagosUncheckedCreateInput>
  }

  /**
   * pagos createMany
   */
  export type pagosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagos.
     */
    data: pagosCreateManyInput | pagosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pagos update
   */
  export type pagosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * The data needed to update a pagos.
     */
    data: XOR<pagosUpdateInput, pagosUncheckedUpdateInput>
    /**
     * Choose, which pagos to update.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos updateMany
   */
  export type pagosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagos.
     */
    data: XOR<pagosUpdateManyMutationInput, pagosUncheckedUpdateManyInput>
    /**
     * Filter which pagos to update
     */
    where?: pagosWhereInput
    /**
     * Limit how many pagos to update.
     */
    limit?: number
  }

  /**
   * pagos upsert
   */
  export type pagosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * The filter to search for the pagos to update in case it exists.
     */
    where: pagosWhereUniqueInput
    /**
     * In case the pagos found by the `where` argument doesn't exist, create a new pagos with this data.
     */
    create: XOR<pagosCreateInput, pagosUncheckedCreateInput>
    /**
     * In case the pagos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagosUpdateInput, pagosUncheckedUpdateInput>
  }

  /**
   * pagos delete
   */
  export type pagosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter which pagos to delete.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos deleteMany
   */
  export type pagosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagos to delete
     */
    where?: pagosWhereInput
    /**
     * Limit how many pagos to delete.
     */
    limit?: number
  }

  /**
   * pagos without action
   */
  export type pagosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
  }


  /**
   * Model pedidos
   */

  export type AggregatePedidos = {
    _count: PedidosCountAggregateOutputType | null
    _avg: PedidosAvgAggregateOutputType | null
    _sum: PedidosSumAggregateOutputType | null
    _min: PedidosMinAggregateOutputType | null
    _max: PedidosMaxAggregateOutputType | null
  }

  export type PedidosAvgAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    vendedor_id: number | null
    subtotal: Decimal | null
    igv: Decimal | null
    total: Decimal | null
  }

  export type PedidosSumAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    vendedor_id: number | null
    subtotal: Decimal | null
    igv: Decimal | null
    total: Decimal | null
  }

  export type PedidosMinAggregateOutputType = {
    id: number | null
    numero: string | null
    fecha: Date | null
    cliente_id: number | null
    vendedor_id: number | null
    subtotal: Decimal | null
    igv: Decimal | null
    total: Decimal | null
    estado: $Enums.pedidos_estado | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PedidosMaxAggregateOutputType = {
    id: number | null
    numero: string | null
    fecha: Date | null
    cliente_id: number | null
    vendedor_id: number | null
    subtotal: Decimal | null
    igv: Decimal | null
    total: Decimal | null
    estado: $Enums.pedidos_estado | null
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PedidosCountAggregateOutputType = {
    id: number
    numero: number
    fecha: number
    cliente_id: number
    vendedor_id: number
    subtotal: number
    igv: number
    total: number
    estado: number
    notas: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PedidosAvgAggregateInputType = {
    id?: true
    cliente_id?: true
    vendedor_id?: true
    subtotal?: true
    igv?: true
    total?: true
  }

  export type PedidosSumAggregateInputType = {
    id?: true
    cliente_id?: true
    vendedor_id?: true
    subtotal?: true
    igv?: true
    total?: true
  }

  export type PedidosMinAggregateInputType = {
    id?: true
    numero?: true
    fecha?: true
    cliente_id?: true
    vendedor_id?: true
    subtotal?: true
    igv?: true
    total?: true
    estado?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type PedidosMaxAggregateInputType = {
    id?: true
    numero?: true
    fecha?: true
    cliente_id?: true
    vendedor_id?: true
    subtotal?: true
    igv?: true
    total?: true
    estado?: true
    notas?: true
    created_at?: true
    updated_at?: true
  }

  export type PedidosCountAggregateInputType = {
    id?: true
    numero?: true
    fecha?: true
    cliente_id?: true
    vendedor_id?: true
    subtotal?: true
    igv?: true
    total?: true
    estado?: true
    notas?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PedidosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to aggregate.
     */
    where?: pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidosOrderByWithRelationInput | pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidosMaxAggregateInputType
  }

  export type GetPedidosAggregateType<T extends PedidosAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidos[P]>
      : GetScalarType<T[P], AggregatePedidos[P]>
  }




  export type pedidosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidosWhereInput
    orderBy?: pedidosOrderByWithAggregationInput | pedidosOrderByWithAggregationInput[]
    by: PedidosScalarFieldEnum[] | PedidosScalarFieldEnum
    having?: pedidosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidosCountAggregateInputType | true
    _avg?: PedidosAvgAggregateInputType
    _sum?: PedidosSumAggregateInputType
    _min?: PedidosMinAggregateInputType
    _max?: PedidosMaxAggregateInputType
  }

  export type PedidosGroupByOutputType = {
    id: number
    numero: string
    fecha: Date
    cliente_id: number
    vendedor_id: number
    subtotal: Decimal
    igv: Decimal
    total: Decimal
    estado: $Enums.pedidos_estado
    notas: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: PedidosCountAggregateOutputType | null
    _avg: PedidosAvgAggregateOutputType | null
    _sum: PedidosSumAggregateOutputType | null
    _min: PedidosMinAggregateOutputType | null
    _max: PedidosMaxAggregateOutputType | null
  }

  type GetPedidosGroupByPayload<T extends pedidosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidosGroupByOutputType[P]>
            : GetScalarType<T[P], PedidosGroupByOutputType[P]>
        }
      >
    >


  export type pedidosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    fecha?: boolean
    cliente_id?: boolean
    vendedor_id?: boolean
    subtotal?: boolean
    igv?: boolean
    total?: boolean
    estado?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
    despachos?: boolean | pedidos$despachosArgs<ExtArgs>
    detalle_pedidos?: boolean | pedidos$detalle_pedidosArgs<ExtArgs>
    pagos?: boolean | pedidos$pagosArgs<ExtArgs>
    clientes?: boolean | clientesDefaultArgs<ExtArgs>
    vendedores?: boolean | vendedoresDefaultArgs<ExtArgs>
    _count?: boolean | PedidosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidos"]>



  export type pedidosSelectScalar = {
    id?: boolean
    numero?: boolean
    fecha?: boolean
    cliente_id?: boolean
    vendedor_id?: boolean
    subtotal?: boolean
    igv?: boolean
    total?: boolean
    estado?: boolean
    notas?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type pedidosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "fecha" | "cliente_id" | "vendedor_id" | "subtotal" | "igv" | "total" | "estado" | "notas" | "created_at" | "updated_at", ExtArgs["result"]["pedidos"]>
  export type pedidosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    despachos?: boolean | pedidos$despachosArgs<ExtArgs>
    detalle_pedidos?: boolean | pedidos$detalle_pedidosArgs<ExtArgs>
    pagos?: boolean | pedidos$pagosArgs<ExtArgs>
    clientes?: boolean | clientesDefaultArgs<ExtArgs>
    vendedores?: boolean | vendedoresDefaultArgs<ExtArgs>
    _count?: boolean | PedidosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pedidosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedidos"
    objects: {
      despachos: Prisma.$despachosPayload<ExtArgs>[]
      detalle_pedidos: Prisma.$detalle_pedidosPayload<ExtArgs>[]
      pagos: Prisma.$pagosPayload<ExtArgs>[]
      clientes: Prisma.$clientesPayload<ExtArgs>
      vendedores: Prisma.$vendedoresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: string
      fecha: Date
      cliente_id: number
      vendedor_id: number
      subtotal: Prisma.Decimal
      igv: Prisma.Decimal
      total: Prisma.Decimal
      estado: $Enums.pedidos_estado
      notas: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["pedidos"]>
    composites: {}
  }

  type pedidosGetPayload<S extends boolean | null | undefined | pedidosDefaultArgs> = $Result.GetResult<Prisma.$pedidosPayload, S>

  type pedidosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedidosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidosCountAggregateInputType | true
    }

  export interface pedidosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedidos'], meta: { name: 'pedidos' } }
    /**
     * Find zero or one Pedidos that matches the filter.
     * @param {pedidosFindUniqueArgs} args - Arguments to find a Pedidos
     * @example
     * // Get one Pedidos
     * const pedidos = await prisma.pedidos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidosFindUniqueArgs>(args: SelectSubset<T, pedidosFindUniqueArgs<ExtArgs>>): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedidos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedidosFindUniqueOrThrowArgs} args - Arguments to find a Pedidos
     * @example
     * // Get one Pedidos
     * const pedidos = await prisma.pedidos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidosFindUniqueOrThrowArgs>(args: SelectSubset<T, pedidosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidosFindFirstArgs} args - Arguments to find a Pedidos
     * @example
     * // Get one Pedidos
     * const pedidos = await prisma.pedidos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidosFindFirstArgs>(args?: SelectSubset<T, pedidosFindFirstArgs<ExtArgs>>): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedidos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidosFindFirstOrThrowArgs} args - Arguments to find a Pedidos
     * @example
     * // Get one Pedidos
     * const pedidos = await prisma.pedidos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidosFindFirstOrThrowArgs>(args?: SelectSubset<T, pedidosFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedidos.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedidos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidosWithIdOnly = await prisma.pedidos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pedidosFindManyArgs>(args?: SelectSubset<T, pedidosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedidos.
     * @param {pedidosCreateArgs} args - Arguments to create a Pedidos.
     * @example
     * // Create one Pedidos
     * const Pedidos = await prisma.pedidos.create({
     *   data: {
     *     // ... data to create a Pedidos
     *   }
     * })
     * 
     */
    create<T extends pedidosCreateArgs>(args: SelectSubset<T, pedidosCreateArgs<ExtArgs>>): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {pedidosCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedidos = await prisma.pedidos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedidosCreateManyArgs>(args?: SelectSubset<T, pedidosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedidos.
     * @param {pedidosDeleteArgs} args - Arguments to delete one Pedidos.
     * @example
     * // Delete one Pedidos
     * const Pedidos = await prisma.pedidos.delete({
     *   where: {
     *     // ... filter to delete one Pedidos
     *   }
     * })
     * 
     */
    delete<T extends pedidosDeleteArgs>(args: SelectSubset<T, pedidosDeleteArgs<ExtArgs>>): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedidos.
     * @param {pedidosUpdateArgs} args - Arguments to update one Pedidos.
     * @example
     * // Update one Pedidos
     * const pedidos = await prisma.pedidos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedidosUpdateArgs>(args: SelectSubset<T, pedidosUpdateArgs<ExtArgs>>): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidosDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedidos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedidosDeleteManyArgs>(args?: SelectSubset<T, pedidosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedidos = await prisma.pedidos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedidosUpdateManyArgs>(args: SelectSubset<T, pedidosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedidos.
     * @param {pedidosUpsertArgs} args - Arguments to update or create a Pedidos.
     * @example
     * // Update or create a Pedidos
     * const pedidos = await prisma.pedidos.upsert({
     *   create: {
     *     // ... data to create a Pedidos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedidos we want to update
     *   }
     * })
     */
    upsert<T extends pedidosUpsertArgs>(args: SelectSubset<T, pedidosUpsertArgs<ExtArgs>>): Prisma__pedidosClient<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidosCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedidos.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidosCountArgs>(
      args?: Subset<T, pedidosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidosAggregateArgs>(args: Subset<T, PedidosAggregateArgs>): Prisma.PrismaPromise<GetPedidosAggregateType<T>>

    /**
     * Group by Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pedidosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidosGroupByArgs['orderBy'] }
        : { orderBy?: pedidosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pedidosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedidos model
   */
  readonly fields: pedidosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedidos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    despachos<T extends pedidos$despachosArgs<ExtArgs> = {}>(args?: Subset<T, pedidos$despachosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$despachosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detalle_pedidos<T extends pedidos$detalle_pedidosArgs<ExtArgs> = {}>(args?: Subset<T, pedidos$detalle_pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_pedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagos<T extends pedidos$pagosArgs<ExtArgs> = {}>(args?: Subset<T, pedidos$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientes<T extends clientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientesDefaultArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendedores<T extends vendedoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vendedoresDefaultArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pedidos model
   */
  interface pedidosFieldRefs {
    readonly id: FieldRef<"pedidos", 'Int'>
    readonly numero: FieldRef<"pedidos", 'String'>
    readonly fecha: FieldRef<"pedidos", 'DateTime'>
    readonly cliente_id: FieldRef<"pedidos", 'Int'>
    readonly vendedor_id: FieldRef<"pedidos", 'Int'>
    readonly subtotal: FieldRef<"pedidos", 'Decimal'>
    readonly igv: FieldRef<"pedidos", 'Decimal'>
    readonly total: FieldRef<"pedidos", 'Decimal'>
    readonly estado: FieldRef<"pedidos", 'pedidos_estado'>
    readonly notas: FieldRef<"pedidos", 'String'>
    readonly created_at: FieldRef<"pedidos", 'DateTime'>
    readonly updated_at: FieldRef<"pedidos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pedidos findUnique
   */
  export type pedidosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedidos
     */
    omit?: pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidosInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where: pedidosWhereUniqueInput
  }

  /**
   * pedidos findUniqueOrThrow
   */
  export type pedidosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedidos
     */
    omit?: pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidosInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where: pedidosWhereUniqueInput
  }

  /**
   * pedidos findFirst
   */
  export type pedidosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedidos
     */
    omit?: pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidosInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidosOrderByWithRelationInput | pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidosScalarFieldEnum | PedidosScalarFieldEnum[]
  }

  /**
   * pedidos findFirstOrThrow
   */
  export type pedidosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedidos
     */
    omit?: pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidosInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidosOrderByWithRelationInput | pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidosScalarFieldEnum | PedidosScalarFieldEnum[]
  }

  /**
   * pedidos findMany
   */
  export type pedidosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedidos
     */
    omit?: pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidosInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidosOrderByWithRelationInput | pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    distinct?: PedidosScalarFieldEnum | PedidosScalarFieldEnum[]
  }

  /**
   * pedidos create
   */
  export type pedidosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedidos
     */
    omit?: pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidosInclude<ExtArgs> | null
    /**
     * The data needed to create a pedidos.
     */
    data: XOR<pedidosCreateInput, pedidosUncheckedCreateInput>
  }

  /**
   * pedidos createMany
   */
  export type pedidosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidosCreateManyInput | pedidosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedidos update
   */
  export type pedidosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedidos
     */
    omit?: pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidosInclude<ExtArgs> | null
    /**
     * The data needed to update a pedidos.
     */
    data: XOR<pedidosUpdateInput, pedidosUncheckedUpdateInput>
    /**
     * Choose, which pedidos to update.
     */
    where: pedidosWhereUniqueInput
  }

  /**
   * pedidos updateMany
   */
  export type pedidosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidosUpdateManyMutationInput, pedidosUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidosWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedidos upsert
   */
  export type pedidosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedidos
     */
    omit?: pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidosInclude<ExtArgs> | null
    /**
     * The filter to search for the pedidos to update in case it exists.
     */
    where: pedidosWhereUniqueInput
    /**
     * In case the pedidos found by the `where` argument doesn't exist, create a new pedidos with this data.
     */
    create: XOR<pedidosCreateInput, pedidosUncheckedCreateInput>
    /**
     * In case the pedidos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidosUpdateInput, pedidosUncheckedUpdateInput>
  }

  /**
   * pedidos delete
   */
  export type pedidosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedidos
     */
    omit?: pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidosInclude<ExtArgs> | null
    /**
     * Filter which pedidos to delete.
     */
    where: pedidosWhereUniqueInput
  }

  /**
   * pedidos deleteMany
   */
  export type pedidosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidosWhereInput
    /**
     * Limit how many pedidos to delete.
     */
    limit?: number
  }

  /**
   * pedidos.despachos
   */
  export type pedidos$despachosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the despachos
     */
    select?: despachosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the despachos
     */
    omit?: despachosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: despachosInclude<ExtArgs> | null
    where?: despachosWhereInput
    orderBy?: despachosOrderByWithRelationInput | despachosOrderByWithRelationInput[]
    cursor?: despachosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DespachosScalarFieldEnum | DespachosScalarFieldEnum[]
  }

  /**
   * pedidos.detalle_pedidos
   */
  export type pedidos$detalle_pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedidos
     */
    select?: detalle_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedidos
     */
    omit?: detalle_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidosInclude<ExtArgs> | null
    where?: detalle_pedidosWhereInput
    orderBy?: detalle_pedidosOrderByWithRelationInput | detalle_pedidosOrderByWithRelationInput[]
    cursor?: detalle_pedidosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_pedidosScalarFieldEnum | Detalle_pedidosScalarFieldEnum[]
  }

  /**
   * pedidos.pagos
   */
  export type pedidos$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    where?: pagosWhereInput
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    cursor?: pagosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pedidos without action
   */
  export type pedidosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedidos
     */
    omit?: pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidosInclude<ExtArgs> | null
  }


  /**
   * Model presentaciones
   */

  export type AggregatePresentaciones = {
    _count: PresentacionesCountAggregateOutputType | null
    _avg: PresentacionesAvgAggregateOutputType | null
    _sum: PresentacionesSumAggregateOutputType | null
    _min: PresentacionesMinAggregateOutputType | null
    _max: PresentacionesMaxAggregateOutputType | null
  }

  export type PresentacionesAvgAggregateOutputType = {
    id: number | null
  }

  export type PresentacionesSumAggregateOutputType = {
    id: number | null
  }

  export type PresentacionesMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PresentacionesMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PresentacionesCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PresentacionesAvgAggregateInputType = {
    id?: true
  }

  export type PresentacionesSumAggregateInputType = {
    id?: true
  }

  export type PresentacionesMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    created_at?: true
    updated_at?: true
  }

  export type PresentacionesMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    created_at?: true
    updated_at?: true
  }

  export type PresentacionesCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PresentacionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which presentaciones to aggregate.
     */
    where?: presentacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presentaciones to fetch.
     */
    orderBy?: presentacionesOrderByWithRelationInput | presentacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: presentacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presentaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presentaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned presentaciones
    **/
    _count?: true | PresentacionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresentacionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresentacionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresentacionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresentacionesMaxAggregateInputType
  }

  export type GetPresentacionesAggregateType<T extends PresentacionesAggregateArgs> = {
        [P in keyof T & keyof AggregatePresentaciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresentaciones[P]>
      : GetScalarType<T[P], AggregatePresentaciones[P]>
  }




  export type presentacionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: presentacionesWhereInput
    orderBy?: presentacionesOrderByWithAggregationInput | presentacionesOrderByWithAggregationInput[]
    by: PresentacionesScalarFieldEnum[] | PresentacionesScalarFieldEnum
    having?: presentacionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresentacionesCountAggregateInputType | true
    _avg?: PresentacionesAvgAggregateInputType
    _sum?: PresentacionesSumAggregateInputType
    _min?: PresentacionesMinAggregateInputType
    _max?: PresentacionesMaxAggregateInputType
  }

  export type PresentacionesGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: PresentacionesCountAggregateOutputType | null
    _avg: PresentacionesAvgAggregateOutputType | null
    _sum: PresentacionesSumAggregateOutputType | null
    _min: PresentacionesMinAggregateOutputType | null
    _max: PresentacionesMaxAggregateOutputType | null
  }

  type GetPresentacionesGroupByPayload<T extends presentacionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresentacionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresentacionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresentacionesGroupByOutputType[P]>
            : GetScalarType<T[P], PresentacionesGroupByOutputType[P]>
        }
      >
    >


  export type presentacionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    created_at?: boolean
    updated_at?: boolean
    productos?: boolean | presentaciones$productosArgs<ExtArgs>
    _count?: boolean | PresentacionesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presentaciones"]>



  export type presentacionesSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type presentacionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "created_at" | "updated_at", ExtArgs["result"]["presentaciones"]>
  export type presentacionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | presentaciones$productosArgs<ExtArgs>
    _count?: boolean | PresentacionesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $presentacionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "presentaciones"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["presentaciones"]>
    composites: {}
  }

  type presentacionesGetPayload<S extends boolean | null | undefined | presentacionesDefaultArgs> = $Result.GetResult<Prisma.$presentacionesPayload, S>

  type presentacionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<presentacionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresentacionesCountAggregateInputType | true
    }

  export interface presentacionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['presentaciones'], meta: { name: 'presentaciones' } }
    /**
     * Find zero or one Presentaciones that matches the filter.
     * @param {presentacionesFindUniqueArgs} args - Arguments to find a Presentaciones
     * @example
     * // Get one Presentaciones
     * const presentaciones = await prisma.presentaciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends presentacionesFindUniqueArgs>(args: SelectSubset<T, presentacionesFindUniqueArgs<ExtArgs>>): Prisma__presentacionesClient<$Result.GetResult<Prisma.$presentacionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Presentaciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {presentacionesFindUniqueOrThrowArgs} args - Arguments to find a Presentaciones
     * @example
     * // Get one Presentaciones
     * const presentaciones = await prisma.presentaciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends presentacionesFindUniqueOrThrowArgs>(args: SelectSubset<T, presentacionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__presentacionesClient<$Result.GetResult<Prisma.$presentacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presentaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presentacionesFindFirstArgs} args - Arguments to find a Presentaciones
     * @example
     * // Get one Presentaciones
     * const presentaciones = await prisma.presentaciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends presentacionesFindFirstArgs>(args?: SelectSubset<T, presentacionesFindFirstArgs<ExtArgs>>): Prisma__presentacionesClient<$Result.GetResult<Prisma.$presentacionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presentaciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presentacionesFindFirstOrThrowArgs} args - Arguments to find a Presentaciones
     * @example
     * // Get one Presentaciones
     * const presentaciones = await prisma.presentaciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends presentacionesFindFirstOrThrowArgs>(args?: SelectSubset<T, presentacionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__presentacionesClient<$Result.GetResult<Prisma.$presentacionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Presentaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presentacionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presentaciones
     * const presentaciones = await prisma.presentaciones.findMany()
     * 
     * // Get first 10 Presentaciones
     * const presentaciones = await prisma.presentaciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presentacionesWithIdOnly = await prisma.presentaciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends presentacionesFindManyArgs>(args?: SelectSubset<T, presentacionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$presentacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Presentaciones.
     * @param {presentacionesCreateArgs} args - Arguments to create a Presentaciones.
     * @example
     * // Create one Presentaciones
     * const Presentaciones = await prisma.presentaciones.create({
     *   data: {
     *     // ... data to create a Presentaciones
     *   }
     * })
     * 
     */
    create<T extends presentacionesCreateArgs>(args: SelectSubset<T, presentacionesCreateArgs<ExtArgs>>): Prisma__presentacionesClient<$Result.GetResult<Prisma.$presentacionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Presentaciones.
     * @param {presentacionesCreateManyArgs} args - Arguments to create many Presentaciones.
     * @example
     * // Create many Presentaciones
     * const presentaciones = await prisma.presentaciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends presentacionesCreateManyArgs>(args?: SelectSubset<T, presentacionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Presentaciones.
     * @param {presentacionesDeleteArgs} args - Arguments to delete one Presentaciones.
     * @example
     * // Delete one Presentaciones
     * const Presentaciones = await prisma.presentaciones.delete({
     *   where: {
     *     // ... filter to delete one Presentaciones
     *   }
     * })
     * 
     */
    delete<T extends presentacionesDeleteArgs>(args: SelectSubset<T, presentacionesDeleteArgs<ExtArgs>>): Prisma__presentacionesClient<$Result.GetResult<Prisma.$presentacionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Presentaciones.
     * @param {presentacionesUpdateArgs} args - Arguments to update one Presentaciones.
     * @example
     * // Update one Presentaciones
     * const presentaciones = await prisma.presentaciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends presentacionesUpdateArgs>(args: SelectSubset<T, presentacionesUpdateArgs<ExtArgs>>): Prisma__presentacionesClient<$Result.GetResult<Prisma.$presentacionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Presentaciones.
     * @param {presentacionesDeleteManyArgs} args - Arguments to filter Presentaciones to delete.
     * @example
     * // Delete a few Presentaciones
     * const { count } = await prisma.presentaciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends presentacionesDeleteManyArgs>(args?: SelectSubset<T, presentacionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presentaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presentacionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presentaciones
     * const presentaciones = await prisma.presentaciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends presentacionesUpdateManyArgs>(args: SelectSubset<T, presentacionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Presentaciones.
     * @param {presentacionesUpsertArgs} args - Arguments to update or create a Presentaciones.
     * @example
     * // Update or create a Presentaciones
     * const presentaciones = await prisma.presentaciones.upsert({
     *   create: {
     *     // ... data to create a Presentaciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Presentaciones we want to update
     *   }
     * })
     */
    upsert<T extends presentacionesUpsertArgs>(args: SelectSubset<T, presentacionesUpsertArgs<ExtArgs>>): Prisma__presentacionesClient<$Result.GetResult<Prisma.$presentacionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Presentaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presentacionesCountArgs} args - Arguments to filter Presentaciones to count.
     * @example
     * // Count the number of Presentaciones
     * const count = await prisma.presentaciones.count({
     *   where: {
     *     // ... the filter for the Presentaciones we want to count
     *   }
     * })
    **/
    count<T extends presentacionesCountArgs>(
      args?: Subset<T, presentacionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresentacionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Presentaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentacionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PresentacionesAggregateArgs>(args: Subset<T, PresentacionesAggregateArgs>): Prisma.PrismaPromise<GetPresentacionesAggregateType<T>>

    /**
     * Group by Presentaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {presentacionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends presentacionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: presentacionesGroupByArgs['orderBy'] }
        : { orderBy?: presentacionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, presentacionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresentacionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the presentaciones model
   */
  readonly fields: presentacionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for presentaciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__presentacionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends presentaciones$productosArgs<ExtArgs> = {}>(args?: Subset<T, presentaciones$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the presentaciones model
   */
  interface presentacionesFieldRefs {
    readonly id: FieldRef<"presentaciones", 'Int'>
    readonly nombre: FieldRef<"presentaciones", 'String'>
    readonly descripcion: FieldRef<"presentaciones", 'String'>
    readonly created_at: FieldRef<"presentaciones", 'DateTime'>
    readonly updated_at: FieldRef<"presentaciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * presentaciones findUnique
   */
  export type presentacionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presentaciones
     */
    select?: presentacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the presentaciones
     */
    omit?: presentacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presentacionesInclude<ExtArgs> | null
    /**
     * Filter, which presentaciones to fetch.
     */
    where: presentacionesWhereUniqueInput
  }

  /**
   * presentaciones findUniqueOrThrow
   */
  export type presentacionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presentaciones
     */
    select?: presentacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the presentaciones
     */
    omit?: presentacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presentacionesInclude<ExtArgs> | null
    /**
     * Filter, which presentaciones to fetch.
     */
    where: presentacionesWhereUniqueInput
  }

  /**
   * presentaciones findFirst
   */
  export type presentacionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presentaciones
     */
    select?: presentacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the presentaciones
     */
    omit?: presentacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presentacionesInclude<ExtArgs> | null
    /**
     * Filter, which presentaciones to fetch.
     */
    where?: presentacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presentaciones to fetch.
     */
    orderBy?: presentacionesOrderByWithRelationInput | presentacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for presentaciones.
     */
    cursor?: presentacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presentaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presentaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of presentaciones.
     */
    distinct?: PresentacionesScalarFieldEnum | PresentacionesScalarFieldEnum[]
  }

  /**
   * presentaciones findFirstOrThrow
   */
  export type presentacionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presentaciones
     */
    select?: presentacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the presentaciones
     */
    omit?: presentacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presentacionesInclude<ExtArgs> | null
    /**
     * Filter, which presentaciones to fetch.
     */
    where?: presentacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presentaciones to fetch.
     */
    orderBy?: presentacionesOrderByWithRelationInput | presentacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for presentaciones.
     */
    cursor?: presentacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presentaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presentaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of presentaciones.
     */
    distinct?: PresentacionesScalarFieldEnum | PresentacionesScalarFieldEnum[]
  }

  /**
   * presentaciones findMany
   */
  export type presentacionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presentaciones
     */
    select?: presentacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the presentaciones
     */
    omit?: presentacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presentacionesInclude<ExtArgs> | null
    /**
     * Filter, which presentaciones to fetch.
     */
    where?: presentacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of presentaciones to fetch.
     */
    orderBy?: presentacionesOrderByWithRelationInput | presentacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing presentaciones.
     */
    cursor?: presentacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` presentaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` presentaciones.
     */
    skip?: number
    distinct?: PresentacionesScalarFieldEnum | PresentacionesScalarFieldEnum[]
  }

  /**
   * presentaciones create
   */
  export type presentacionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presentaciones
     */
    select?: presentacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the presentaciones
     */
    omit?: presentacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presentacionesInclude<ExtArgs> | null
    /**
     * The data needed to create a presentaciones.
     */
    data: XOR<presentacionesCreateInput, presentacionesUncheckedCreateInput>
  }

  /**
   * presentaciones createMany
   */
  export type presentacionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many presentaciones.
     */
    data: presentacionesCreateManyInput | presentacionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * presentaciones update
   */
  export type presentacionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presentaciones
     */
    select?: presentacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the presentaciones
     */
    omit?: presentacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presentacionesInclude<ExtArgs> | null
    /**
     * The data needed to update a presentaciones.
     */
    data: XOR<presentacionesUpdateInput, presentacionesUncheckedUpdateInput>
    /**
     * Choose, which presentaciones to update.
     */
    where: presentacionesWhereUniqueInput
  }

  /**
   * presentaciones updateMany
   */
  export type presentacionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update presentaciones.
     */
    data: XOR<presentacionesUpdateManyMutationInput, presentacionesUncheckedUpdateManyInput>
    /**
     * Filter which presentaciones to update
     */
    where?: presentacionesWhereInput
    /**
     * Limit how many presentaciones to update.
     */
    limit?: number
  }

  /**
   * presentaciones upsert
   */
  export type presentacionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presentaciones
     */
    select?: presentacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the presentaciones
     */
    omit?: presentacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presentacionesInclude<ExtArgs> | null
    /**
     * The filter to search for the presentaciones to update in case it exists.
     */
    where: presentacionesWhereUniqueInput
    /**
     * In case the presentaciones found by the `where` argument doesn't exist, create a new presentaciones with this data.
     */
    create: XOR<presentacionesCreateInput, presentacionesUncheckedCreateInput>
    /**
     * In case the presentaciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<presentacionesUpdateInput, presentacionesUncheckedUpdateInput>
  }

  /**
   * presentaciones delete
   */
  export type presentacionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presentaciones
     */
    select?: presentacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the presentaciones
     */
    omit?: presentacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presentacionesInclude<ExtArgs> | null
    /**
     * Filter which presentaciones to delete.
     */
    where: presentacionesWhereUniqueInput
  }

  /**
   * presentaciones deleteMany
   */
  export type presentacionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which presentaciones to delete
     */
    where?: presentacionesWhereInput
    /**
     * Limit how many presentaciones to delete.
     */
    limit?: number
  }

  /**
   * presentaciones.productos
   */
  export type presentaciones$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    cursor?: productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * presentaciones without action
   */
  export type presentacionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the presentaciones
     */
    select?: presentacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the presentaciones
     */
    omit?: presentacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: presentacionesInclude<ExtArgs> | null
  }


  /**
   * Model productos
   */

  export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  export type ProductosAvgAggregateOutputType = {
    id: number | null
    categoria_id: number | null
    presentacion_id: number | null
    precio_sugerido: Decimal | null
    precio_minimo: Decimal | null
    stock: number | null
    stock_minimo: number | null
  }

  export type ProductosSumAggregateOutputType = {
    id: number | null
    categoria_id: number | null
    presentacion_id: number | null
    precio_sugerido: Decimal | null
    precio_minimo: Decimal | null
    stock: number | null
    stock_minimo: number | null
  }

  export type ProductosMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    categoria_id: number | null
    presentacion_id: number | null
    precio_sugerido: Decimal | null
    precio_minimo: Decimal | null
    stock: number | null
    stock_minimo: number | null
    imagen: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductosMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    categoria_id: number | null
    presentacion_id: number | null
    precio_sugerido: Decimal | null
    precio_minimo: Decimal | null
    stock: number | null
    stock_minimo: number | null
    imagen: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductosCountAggregateOutputType = {
    id: number
    codigo: number
    descripcion: number
    categoria_id: number
    presentacion_id: number
    precio_sugerido: number
    precio_minimo: number
    stock: number
    stock_minimo: number
    imagen: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductosAvgAggregateInputType = {
    id?: true
    categoria_id?: true
    presentacion_id?: true
    precio_sugerido?: true
    precio_minimo?: true
    stock?: true
    stock_minimo?: true
  }

  export type ProductosSumAggregateInputType = {
    id?: true
    categoria_id?: true
    presentacion_id?: true
    precio_sugerido?: true
    precio_minimo?: true
    stock?: true
    stock_minimo?: true
  }

  export type ProductosMinAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    categoria_id?: true
    presentacion_id?: true
    precio_sugerido?: true
    precio_minimo?: true
    stock?: true
    stock_minimo?: true
    imagen?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductosMaxAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    categoria_id?: true
    presentacion_id?: true
    precio_sugerido?: true
    precio_minimo?: true
    stock?: true
    stock_minimo?: true
    imagen?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductosCountAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    categoria_id?: true
    presentacion_id?: true
    precio_sugerido?: true
    precio_minimo?: true
    stock?: true
    stock_minimo?: true
    imagen?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to aggregate.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType
  }

  export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos[P]>
      : GetScalarType<T[P], AggregateProductos[P]>
  }




  export type productosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
    orderBy?: productosOrderByWithAggregationInput | productosOrderByWithAggregationInput[]
    by: ProductosScalarFieldEnum[] | ProductosScalarFieldEnum
    having?: productosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductosCountAggregateInputType | true
    _avg?: ProductosAvgAggregateInputType
    _sum?: ProductosSumAggregateInputType
    _min?: ProductosMinAggregateInputType
    _max?: ProductosMaxAggregateInputType
  }

  export type ProductosGroupByOutputType = {
    id: number
    codigo: string
    descripcion: string
    categoria_id: number
    presentacion_id: number
    precio_sugerido: Decimal | null
    precio_minimo: Decimal | null
    stock: number
    stock_minimo: number
    imagen: string | null
    activo: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  type GetProductosGroupByPayload<T extends productosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ProductosGroupByOutputType[P]>
        }
      >
    >


  export type productosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    categoria_id?: boolean
    presentacion_id?: boolean
    precio_sugerido?: boolean
    precio_minimo?: boolean
    stock?: boolean
    stock_minimo?: boolean
    imagen?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    detalle_entradas_mercaderia?: boolean | productos$detalle_entradas_mercaderiaArgs<ExtArgs>
    detalle_pedidos?: boolean | productos$detalle_pedidosArgs<ExtArgs>
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
    presentaciones?: boolean | presentacionesDefaultArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>



  export type productosSelectScalar = {
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    categoria_id?: boolean
    presentacion_id?: boolean
    precio_sugerido?: boolean
    precio_minimo?: boolean
    stock?: boolean
    stock_minimo?: boolean
    imagen?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type productosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "descripcion" | "categoria_id" | "presentacion_id" | "precio_sugerido" | "precio_minimo" | "stock" | "stock_minimo" | "imagen" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["productos"]>
  export type productosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalle_entradas_mercaderia?: boolean | productos$detalle_entradas_mercaderiaArgs<ExtArgs>
    detalle_pedidos?: boolean | productos$detalle_pedidosArgs<ExtArgs>
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
    presentaciones?: boolean | presentacionesDefaultArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productos"
    objects: {
      detalle_entradas_mercaderia: Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>[]
      detalle_pedidos: Prisma.$detalle_pedidosPayload<ExtArgs>[]
      categorias: Prisma.$categoriasPayload<ExtArgs>
      presentaciones: Prisma.$presentacionesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      descripcion: string
      categoria_id: number
      presentacion_id: number
      precio_sugerido: Prisma.Decimal | null
      precio_minimo: Prisma.Decimal | null
      stock: number
      stock_minimo: number
      imagen: string | null
      activo: boolean
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["productos"]>
    composites: {}
  }

  type productosGetPayload<S extends boolean | null | undefined | productosDefaultArgs> = $Result.GetResult<Prisma.$productosPayload, S>

  type productosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductosCountAggregateInputType | true
    }

  export interface productosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productos'], meta: { name: 'productos' } }
    /**
     * Find zero or one Productos that matches the filter.
     * @param {productosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productosFindUniqueArgs>(args: SelectSubset<T, productosFindUniqueArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productosFindUniqueOrThrowArgs>(args: SelectSubset<T, productosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productosFindFirstArgs>(args?: SelectSubset<T, productosFindFirstArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productosFindFirstOrThrowArgs>(args?: SelectSubset<T, productosFindFirstOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productosWithIdOnly = await prisma.productos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productosFindManyArgs>(args?: SelectSubset<T, productosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productos.
     * @param {productosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     * 
     */
    create<T extends productosCreateArgs>(args: SelectSubset<T, productosCreateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {productosCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productosCreateManyArgs>(args?: SelectSubset<T, productosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Productos.
     * @param {productosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     * 
     */
    delete<T extends productosDeleteArgs>(args: SelectSubset<T, productosDeleteArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productos.
     * @param {productosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productosUpdateArgs>(args: SelectSubset<T, productosUpdateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {productosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productosDeleteManyArgs>(args?: SelectSubset<T, productosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productosUpdateManyArgs>(args: SelectSubset<T, productosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Productos.
     * @param {productosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
     */
    upsert<T extends productosUpsertArgs>(args: SelectSubset<T, productosUpsertArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productosCountArgs>(
      args?: Subset<T, productosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductosAggregateArgs>(args: Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>

    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productosGroupByArgs['orderBy'] }
        : { orderBy?: productosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productos model
   */
  readonly fields: productosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalle_entradas_mercaderia<T extends productos$detalle_entradas_mercaderiaArgs<ExtArgs> = {}>(args?: Subset<T, productos$detalle_entradas_mercaderiaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_entradas_mercaderiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detalle_pedidos<T extends productos$detalle_pedidosArgs<ExtArgs> = {}>(args?: Subset<T, productos$detalle_pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalle_pedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorias<T extends categoriasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriasDefaultArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    presentaciones<T extends presentacionesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, presentacionesDefaultArgs<ExtArgs>>): Prisma__presentacionesClient<$Result.GetResult<Prisma.$presentacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the productos model
   */
  interface productosFieldRefs {
    readonly id: FieldRef<"productos", 'Int'>
    readonly codigo: FieldRef<"productos", 'String'>
    readonly descripcion: FieldRef<"productos", 'String'>
    readonly categoria_id: FieldRef<"productos", 'Int'>
    readonly presentacion_id: FieldRef<"productos", 'Int'>
    readonly precio_sugerido: FieldRef<"productos", 'Decimal'>
    readonly precio_minimo: FieldRef<"productos", 'Decimal'>
    readonly stock: FieldRef<"productos", 'Int'>
    readonly stock_minimo: FieldRef<"productos", 'Int'>
    readonly imagen: FieldRef<"productos", 'String'>
    readonly activo: FieldRef<"productos", 'Boolean'>
    readonly created_at: FieldRef<"productos", 'DateTime'>
    readonly updated_at: FieldRef<"productos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * productos findUnique
   */
  export type productosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findUniqueOrThrow
   */
  export type productosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findFirst
   */
  export type productosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findFirstOrThrow
   */
  export type productosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findMany
   */
  export type productosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos create
   */
  export type productosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to create a productos.
     */
    data: XOR<productosCreateInput, productosUncheckedCreateInput>
  }

  /**
   * productos createMany
   */
  export type productosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos.
     */
    data: productosCreateManyInput | productosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productos update
   */
  export type productosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to update a productos.
     */
    data: XOR<productosUpdateInput, productosUncheckedUpdateInput>
    /**
     * Choose, which productos to update.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos updateMany
   */
  export type productosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos.
     */
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * productos upsert
   */
  export type productosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The filter to search for the productos to update in case it exists.
     */
    where: productosWhereUniqueInput
    /**
     * In case the productos found by the `where` argument doesn't exist, create a new productos with this data.
     */
    create: XOR<productosCreateInput, productosUncheckedCreateInput>
    /**
     * In case the productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productosUpdateInput, productosUncheckedUpdateInput>
  }

  /**
   * productos delete
   */
  export type productosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter which productos to delete.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos deleteMany
   */
  export type productosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to delete
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to delete.
     */
    limit?: number
  }

  /**
   * productos.detalle_entradas_mercaderia
   */
  export type productos$detalle_entradas_mercaderiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_entradas_mercaderia
     */
    select?: detalle_entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_entradas_mercaderia
     */
    omit?: detalle_entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_entradas_mercaderiaInclude<ExtArgs> | null
    where?: detalle_entradas_mercaderiaWhereInput
    orderBy?: detalle_entradas_mercaderiaOrderByWithRelationInput | detalle_entradas_mercaderiaOrderByWithRelationInput[]
    cursor?: detalle_entradas_mercaderiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_entradas_mercaderiaScalarFieldEnum | Detalle_entradas_mercaderiaScalarFieldEnum[]
  }

  /**
   * productos.detalle_pedidos
   */
  export type productos$detalle_pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalle_pedidos
     */
    select?: detalle_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalle_pedidos
     */
    omit?: detalle_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalle_pedidosInclude<ExtArgs> | null
    where?: detalle_pedidosWhereInput
    orderBy?: detalle_pedidosOrderByWithRelationInput | detalle_pedidosOrderByWithRelationInput[]
    cursor?: detalle_pedidosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_pedidosScalarFieldEnum | Detalle_pedidosScalarFieldEnum[]
  }

  /**
   * productos without action
   */
  export type productosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
  }


  /**
   * Model proveedores
   */

  export type AggregateProveedores = {
    _count: ProveedoresCountAggregateOutputType | null
    _avg: ProveedoresAvgAggregateOutputType | null
    _sum: ProveedoresSumAggregateOutputType | null
    _min: ProveedoresMinAggregateOutputType | null
    _max: ProveedoresMaxAggregateOutputType | null
  }

  export type ProveedoresAvgAggregateOutputType = {
    id: number | null
  }

  export type ProveedoresSumAggregateOutputType = {
    id: number | null
  }

  export type ProveedoresMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    ruc: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
    contacto: string | null
    notas: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProveedoresMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    ruc: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
    contacto: string | null
    notas: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProveedoresCountAggregateOutputType = {
    id: number
    nombre: number
    ruc: number
    direccion: number
    telefono: number
    email: number
    contacto: number
    notas: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProveedoresAvgAggregateInputType = {
    id?: true
  }

  export type ProveedoresSumAggregateInputType = {
    id?: true
  }

  export type ProveedoresMinAggregateInputType = {
    id?: true
    nombre?: true
    ruc?: true
    direccion?: true
    telefono?: true
    email?: true
    contacto?: true
    notas?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type ProveedoresMaxAggregateInputType = {
    id?: true
    nombre?: true
    ruc?: true
    direccion?: true
    telefono?: true
    email?: true
    contacto?: true
    notas?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type ProveedoresCountAggregateInputType = {
    id?: true
    nombre?: true
    ruc?: true
    direccion?: true
    telefono?: true
    email?: true
    contacto?: true
    notas?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProveedoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proveedores to aggregate.
     */
    where?: proveedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proveedores to fetch.
     */
    orderBy?: proveedoresOrderByWithRelationInput | proveedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: proveedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proveedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proveedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned proveedores
    **/
    _count?: true | ProveedoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProveedoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProveedoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProveedoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProveedoresMaxAggregateInputType
  }

  export type GetProveedoresAggregateType<T extends ProveedoresAggregateArgs> = {
        [P in keyof T & keyof AggregateProveedores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProveedores[P]>
      : GetScalarType<T[P], AggregateProveedores[P]>
  }




  export type proveedoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proveedoresWhereInput
    orderBy?: proveedoresOrderByWithAggregationInput | proveedoresOrderByWithAggregationInput[]
    by: ProveedoresScalarFieldEnum[] | ProveedoresScalarFieldEnum
    having?: proveedoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProveedoresCountAggregateInputType | true
    _avg?: ProveedoresAvgAggregateInputType
    _sum?: ProveedoresSumAggregateInputType
    _min?: ProveedoresMinAggregateInputType
    _max?: ProveedoresMaxAggregateInputType
  }

  export type ProveedoresGroupByOutputType = {
    id: number
    nombre: string
    ruc: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
    contacto: string | null
    notas: string | null
    activo: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: ProveedoresCountAggregateOutputType | null
    _avg: ProveedoresAvgAggregateOutputType | null
    _sum: ProveedoresSumAggregateOutputType | null
    _min: ProveedoresMinAggregateOutputType | null
    _max: ProveedoresMaxAggregateOutputType | null
  }

  type GetProveedoresGroupByPayload<T extends proveedoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProveedoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProveedoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProveedoresGroupByOutputType[P]>
            : GetScalarType<T[P], ProveedoresGroupByOutputType[P]>
        }
      >
    >


  export type proveedoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ruc?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    contacto?: boolean
    notas?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    entradas_mercaderia?: boolean | proveedores$entradas_mercaderiaArgs<ExtArgs>
    _count?: boolean | ProveedoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proveedores"]>



  export type proveedoresSelectScalar = {
    id?: boolean
    nombre?: boolean
    ruc?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    contacto?: boolean
    notas?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type proveedoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "ruc" | "direccion" | "telefono" | "email" | "contacto" | "notas" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["proveedores"]>
  export type proveedoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entradas_mercaderia?: boolean | proveedores$entradas_mercaderiaArgs<ExtArgs>
    _count?: boolean | ProveedoresCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $proveedoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "proveedores"
    objects: {
      entradas_mercaderia: Prisma.$entradas_mercaderiaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      ruc: string | null
      direccion: string | null
      telefono: string | null
      email: string | null
      contacto: string | null
      notas: string | null
      activo: boolean
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["proveedores"]>
    composites: {}
  }

  type proveedoresGetPayload<S extends boolean | null | undefined | proveedoresDefaultArgs> = $Result.GetResult<Prisma.$proveedoresPayload, S>

  type proveedoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<proveedoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProveedoresCountAggregateInputType | true
    }

  export interface proveedoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['proveedores'], meta: { name: 'proveedores' } }
    /**
     * Find zero or one Proveedores that matches the filter.
     * @param {proveedoresFindUniqueArgs} args - Arguments to find a Proveedores
     * @example
     * // Get one Proveedores
     * const proveedores = await prisma.proveedores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proveedoresFindUniqueArgs>(args: SelectSubset<T, proveedoresFindUniqueArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proveedores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proveedoresFindUniqueOrThrowArgs} args - Arguments to find a Proveedores
     * @example
     * // Get one Proveedores
     * const proveedores = await prisma.proveedores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proveedoresFindUniqueOrThrowArgs>(args: SelectSubset<T, proveedoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedoresFindFirstArgs} args - Arguments to find a Proveedores
     * @example
     * // Get one Proveedores
     * const proveedores = await prisma.proveedores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proveedoresFindFirstArgs>(args?: SelectSubset<T, proveedoresFindFirstArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedoresFindFirstOrThrowArgs} args - Arguments to find a Proveedores
     * @example
     * // Get one Proveedores
     * const proveedores = await prisma.proveedores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proveedoresFindFirstOrThrowArgs>(args?: SelectSubset<T, proveedoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proveedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proveedores
     * const proveedores = await prisma.proveedores.findMany()
     * 
     * // Get first 10 Proveedores
     * const proveedores = await prisma.proveedores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proveedoresWithIdOnly = await prisma.proveedores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends proveedoresFindManyArgs>(args?: SelectSubset<T, proveedoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proveedores.
     * @param {proveedoresCreateArgs} args - Arguments to create a Proveedores.
     * @example
     * // Create one Proveedores
     * const Proveedores = await prisma.proveedores.create({
     *   data: {
     *     // ... data to create a Proveedores
     *   }
     * })
     * 
     */
    create<T extends proveedoresCreateArgs>(args: SelectSubset<T, proveedoresCreateArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proveedores.
     * @param {proveedoresCreateManyArgs} args - Arguments to create many Proveedores.
     * @example
     * // Create many Proveedores
     * const proveedores = await prisma.proveedores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends proveedoresCreateManyArgs>(args?: SelectSubset<T, proveedoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Proveedores.
     * @param {proveedoresDeleteArgs} args - Arguments to delete one Proveedores.
     * @example
     * // Delete one Proveedores
     * const Proveedores = await prisma.proveedores.delete({
     *   where: {
     *     // ... filter to delete one Proveedores
     *   }
     * })
     * 
     */
    delete<T extends proveedoresDeleteArgs>(args: SelectSubset<T, proveedoresDeleteArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proveedores.
     * @param {proveedoresUpdateArgs} args - Arguments to update one Proveedores.
     * @example
     * // Update one Proveedores
     * const proveedores = await prisma.proveedores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends proveedoresUpdateArgs>(args: SelectSubset<T, proveedoresUpdateArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proveedores.
     * @param {proveedoresDeleteManyArgs} args - Arguments to filter Proveedores to delete.
     * @example
     * // Delete a few Proveedores
     * const { count } = await prisma.proveedores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends proveedoresDeleteManyArgs>(args?: SelectSubset<T, proveedoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proveedores
     * const proveedores = await prisma.proveedores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends proveedoresUpdateManyArgs>(args: SelectSubset<T, proveedoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Proveedores.
     * @param {proveedoresUpsertArgs} args - Arguments to update or create a Proveedores.
     * @example
     * // Update or create a Proveedores
     * const proveedores = await prisma.proveedores.upsert({
     *   create: {
     *     // ... data to create a Proveedores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proveedores we want to update
     *   }
     * })
     */
    upsert<T extends proveedoresUpsertArgs>(args: SelectSubset<T, proveedoresUpsertArgs<ExtArgs>>): Prisma__proveedoresClient<$Result.GetResult<Prisma.$proveedoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proveedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedoresCountArgs} args - Arguments to filter Proveedores to count.
     * @example
     * // Count the number of Proveedores
     * const count = await prisma.proveedores.count({
     *   where: {
     *     // ... the filter for the Proveedores we want to count
     *   }
     * })
    **/
    count<T extends proveedoresCountArgs>(
      args?: Subset<T, proveedoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProveedoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proveedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProveedoresAggregateArgs>(args: Subset<T, ProveedoresAggregateArgs>): Prisma.PrismaPromise<GetProveedoresAggregateType<T>>

    /**
     * Group by Proveedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends proveedoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: proveedoresGroupByArgs['orderBy'] }
        : { orderBy?: proveedoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, proveedoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProveedoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the proveedores model
   */
  readonly fields: proveedoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for proveedores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__proveedoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entradas_mercaderia<T extends proveedores$entradas_mercaderiaArgs<ExtArgs> = {}>(args?: Subset<T, proveedores$entradas_mercaderiaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entradas_mercaderiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the proveedores model
   */
  interface proveedoresFieldRefs {
    readonly id: FieldRef<"proveedores", 'Int'>
    readonly nombre: FieldRef<"proveedores", 'String'>
    readonly ruc: FieldRef<"proveedores", 'String'>
    readonly direccion: FieldRef<"proveedores", 'String'>
    readonly telefono: FieldRef<"proveedores", 'String'>
    readonly email: FieldRef<"proveedores", 'String'>
    readonly contacto: FieldRef<"proveedores", 'String'>
    readonly notas: FieldRef<"proveedores", 'String'>
    readonly activo: FieldRef<"proveedores", 'Boolean'>
    readonly created_at: FieldRef<"proveedores", 'DateTime'>
    readonly updated_at: FieldRef<"proveedores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * proveedores findUnique
   */
  export type proveedoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedoresInclude<ExtArgs> | null
    /**
     * Filter, which proveedores to fetch.
     */
    where: proveedoresWhereUniqueInput
  }

  /**
   * proveedores findUniqueOrThrow
   */
  export type proveedoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedoresInclude<ExtArgs> | null
    /**
     * Filter, which proveedores to fetch.
     */
    where: proveedoresWhereUniqueInput
  }

  /**
   * proveedores findFirst
   */
  export type proveedoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedoresInclude<ExtArgs> | null
    /**
     * Filter, which proveedores to fetch.
     */
    where?: proveedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proveedores to fetch.
     */
    orderBy?: proveedoresOrderByWithRelationInput | proveedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proveedores.
     */
    cursor?: proveedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proveedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proveedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proveedores.
     */
    distinct?: ProveedoresScalarFieldEnum | ProveedoresScalarFieldEnum[]
  }

  /**
   * proveedores findFirstOrThrow
   */
  export type proveedoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedoresInclude<ExtArgs> | null
    /**
     * Filter, which proveedores to fetch.
     */
    where?: proveedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proveedores to fetch.
     */
    orderBy?: proveedoresOrderByWithRelationInput | proveedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proveedores.
     */
    cursor?: proveedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proveedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proveedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proveedores.
     */
    distinct?: ProveedoresScalarFieldEnum | ProveedoresScalarFieldEnum[]
  }

  /**
   * proveedores findMany
   */
  export type proveedoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedoresInclude<ExtArgs> | null
    /**
     * Filter, which proveedores to fetch.
     */
    where?: proveedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proveedores to fetch.
     */
    orderBy?: proveedoresOrderByWithRelationInput | proveedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing proveedores.
     */
    cursor?: proveedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proveedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proveedores.
     */
    skip?: number
    distinct?: ProveedoresScalarFieldEnum | ProveedoresScalarFieldEnum[]
  }

  /**
   * proveedores create
   */
  export type proveedoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedoresInclude<ExtArgs> | null
    /**
     * The data needed to create a proveedores.
     */
    data: XOR<proveedoresCreateInput, proveedoresUncheckedCreateInput>
  }

  /**
   * proveedores createMany
   */
  export type proveedoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many proveedores.
     */
    data: proveedoresCreateManyInput | proveedoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proveedores update
   */
  export type proveedoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedoresInclude<ExtArgs> | null
    /**
     * The data needed to update a proveedores.
     */
    data: XOR<proveedoresUpdateInput, proveedoresUncheckedUpdateInput>
    /**
     * Choose, which proveedores to update.
     */
    where: proveedoresWhereUniqueInput
  }

  /**
   * proveedores updateMany
   */
  export type proveedoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update proveedores.
     */
    data: XOR<proveedoresUpdateManyMutationInput, proveedoresUncheckedUpdateManyInput>
    /**
     * Filter which proveedores to update
     */
    where?: proveedoresWhereInput
    /**
     * Limit how many proveedores to update.
     */
    limit?: number
  }

  /**
   * proveedores upsert
   */
  export type proveedoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedoresInclude<ExtArgs> | null
    /**
     * The filter to search for the proveedores to update in case it exists.
     */
    where: proveedoresWhereUniqueInput
    /**
     * In case the proveedores found by the `where` argument doesn't exist, create a new proveedores with this data.
     */
    create: XOR<proveedoresCreateInput, proveedoresUncheckedCreateInput>
    /**
     * In case the proveedores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proveedoresUpdateInput, proveedoresUncheckedUpdateInput>
  }

  /**
   * proveedores delete
   */
  export type proveedoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedoresInclude<ExtArgs> | null
    /**
     * Filter which proveedores to delete.
     */
    where: proveedoresWhereUniqueInput
  }

  /**
   * proveedores deleteMany
   */
  export type proveedoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proveedores to delete
     */
    where?: proveedoresWhereInput
    /**
     * Limit how many proveedores to delete.
     */
    limit?: number
  }

  /**
   * proveedores.entradas_mercaderia
   */
  export type proveedores$entradas_mercaderiaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entradas_mercaderia
     */
    select?: entradas_mercaderiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entradas_mercaderia
     */
    omit?: entradas_mercaderiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entradas_mercaderiaInclude<ExtArgs> | null
    where?: entradas_mercaderiaWhereInput
    orderBy?: entradas_mercaderiaOrderByWithRelationInput | entradas_mercaderiaOrderByWithRelationInput[]
    cursor?: entradas_mercaderiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Entradas_mercaderiaScalarFieldEnum | Entradas_mercaderiaScalarFieldEnum[]
  }

  /**
   * proveedores without action
   */
  export type proveedoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedores
     */
    select?: proveedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proveedores
     */
    omit?: proveedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proveedoresInclude<ExtArgs> | null
  }


  /**
   * Model vendedores
   */

  export type AggregateVendedores = {
    _count: VendedoresCountAggregateOutputType | null
    _avg: VendedoresAvgAggregateOutputType | null
    _sum: VendedoresSumAggregateOutputType | null
    _min: VendedoresMinAggregateOutputType | null
    _max: VendedoresMaxAggregateOutputType | null
  }

  export type VendedoresAvgAggregateOutputType = {
    id: number | null
  }

  export type VendedoresSumAggregateOutputType = {
    id: number | null
  }

  export type VendedoresMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    numero_ruc: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
    notas: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VendedoresMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    numero_ruc: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
    notas: string | null
    activo: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VendedoresCountAggregateOutputType = {
    id: number
    nombre: number
    numero_ruc: number
    direccion: number
    telefono: number
    email: number
    notas: number
    activo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VendedoresAvgAggregateInputType = {
    id?: true
  }

  export type VendedoresSumAggregateInputType = {
    id?: true
  }

  export type VendedoresMinAggregateInputType = {
    id?: true
    nombre?: true
    numero_ruc?: true
    direccion?: true
    telefono?: true
    email?: true
    notas?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type VendedoresMaxAggregateInputType = {
    id?: true
    nombre?: true
    numero_ruc?: true
    direccion?: true
    telefono?: true
    email?: true
    notas?: true
    activo?: true
    created_at?: true
    updated_at?: true
  }

  export type VendedoresCountAggregateInputType = {
    id?: true
    nombre?: true
    numero_ruc?: true
    direccion?: true
    telefono?: true
    email?: true
    notas?: true
    activo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VendedoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendedores to aggregate.
     */
    where?: vendedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendedores to fetch.
     */
    orderBy?: vendedoresOrderByWithRelationInput | vendedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vendedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vendedores
    **/
    _count?: true | VendedoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendedoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendedoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendedoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendedoresMaxAggregateInputType
  }

  export type GetVendedoresAggregateType<T extends VendedoresAggregateArgs> = {
        [P in keyof T & keyof AggregateVendedores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendedores[P]>
      : GetScalarType<T[P], AggregateVendedores[P]>
  }




  export type vendedoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vendedoresWhereInput
    orderBy?: vendedoresOrderByWithAggregationInput | vendedoresOrderByWithAggregationInput[]
    by: VendedoresScalarFieldEnum[] | VendedoresScalarFieldEnum
    having?: vendedoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendedoresCountAggregateInputType | true
    _avg?: VendedoresAvgAggregateInputType
    _sum?: VendedoresSumAggregateInputType
    _min?: VendedoresMinAggregateInputType
    _max?: VendedoresMaxAggregateInputType
  }

  export type VendedoresGroupByOutputType = {
    id: number
    nombre: string
    numero_ruc: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
    notas: string | null
    activo: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: VendedoresCountAggregateOutputType | null
    _avg: VendedoresAvgAggregateOutputType | null
    _sum: VendedoresSumAggregateOutputType | null
    _min: VendedoresMinAggregateOutputType | null
    _max: VendedoresMaxAggregateOutputType | null
  }

  type GetVendedoresGroupByPayload<T extends vendedoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendedoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendedoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendedoresGroupByOutputType[P]>
            : GetScalarType<T[P], VendedoresGroupByOutputType[P]>
        }
      >
    >


  export type vendedoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    numero_ruc?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    notas?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
    pedidos?: boolean | vendedores$pedidosArgs<ExtArgs>
    _count?: boolean | VendedoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendedores"]>



  export type vendedoresSelectScalar = {
    id?: boolean
    nombre?: boolean
    numero_ruc?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
    notas?: boolean
    activo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type vendedoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "numero_ruc" | "direccion" | "telefono" | "email" | "notas" | "activo" | "created_at" | "updated_at", ExtArgs["result"]["vendedores"]>
  export type vendedoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | vendedores$pedidosArgs<ExtArgs>
    _count?: boolean | VendedoresCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vendedoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vendedores"
    objects: {
      pedidos: Prisma.$pedidosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      numero_ruc: string | null
      direccion: string | null
      telefono: string | null
      email: string | null
      notas: string | null
      activo: boolean
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["vendedores"]>
    composites: {}
  }

  type vendedoresGetPayload<S extends boolean | null | undefined | vendedoresDefaultArgs> = $Result.GetResult<Prisma.$vendedoresPayload, S>

  type vendedoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vendedoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendedoresCountAggregateInputType | true
    }

  export interface vendedoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vendedores'], meta: { name: 'vendedores' } }
    /**
     * Find zero or one Vendedores that matches the filter.
     * @param {vendedoresFindUniqueArgs} args - Arguments to find a Vendedores
     * @example
     * // Get one Vendedores
     * const vendedores = await prisma.vendedores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vendedoresFindUniqueArgs>(args: SelectSubset<T, vendedoresFindUniqueArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendedores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vendedoresFindUniqueOrThrowArgs} args - Arguments to find a Vendedores
     * @example
     * // Get one Vendedores
     * const vendedores = await prisma.vendedores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vendedoresFindUniqueOrThrowArgs>(args: SelectSubset<T, vendedoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedoresFindFirstArgs} args - Arguments to find a Vendedores
     * @example
     * // Get one Vendedores
     * const vendedores = await prisma.vendedores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vendedoresFindFirstArgs>(args?: SelectSubset<T, vendedoresFindFirstArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedoresFindFirstOrThrowArgs} args - Arguments to find a Vendedores
     * @example
     * // Get one Vendedores
     * const vendedores = await prisma.vendedores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vendedoresFindFirstOrThrowArgs>(args?: SelectSubset<T, vendedoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendedores
     * const vendedores = await prisma.vendedores.findMany()
     * 
     * // Get first 10 Vendedores
     * const vendedores = await prisma.vendedores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendedoresWithIdOnly = await prisma.vendedores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vendedoresFindManyArgs>(args?: SelectSubset<T, vendedoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendedores.
     * @param {vendedoresCreateArgs} args - Arguments to create a Vendedores.
     * @example
     * // Create one Vendedores
     * const Vendedores = await prisma.vendedores.create({
     *   data: {
     *     // ... data to create a Vendedores
     *   }
     * })
     * 
     */
    create<T extends vendedoresCreateArgs>(args: SelectSubset<T, vendedoresCreateArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendedores.
     * @param {vendedoresCreateManyArgs} args - Arguments to create many Vendedores.
     * @example
     * // Create many Vendedores
     * const vendedores = await prisma.vendedores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vendedoresCreateManyArgs>(args?: SelectSubset<T, vendedoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendedores.
     * @param {vendedoresDeleteArgs} args - Arguments to delete one Vendedores.
     * @example
     * // Delete one Vendedores
     * const Vendedores = await prisma.vendedores.delete({
     *   where: {
     *     // ... filter to delete one Vendedores
     *   }
     * })
     * 
     */
    delete<T extends vendedoresDeleteArgs>(args: SelectSubset<T, vendedoresDeleteArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendedores.
     * @param {vendedoresUpdateArgs} args - Arguments to update one Vendedores.
     * @example
     * // Update one Vendedores
     * const vendedores = await prisma.vendedores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vendedoresUpdateArgs>(args: SelectSubset<T, vendedoresUpdateArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendedores.
     * @param {vendedoresDeleteManyArgs} args - Arguments to filter Vendedores to delete.
     * @example
     * // Delete a few Vendedores
     * const { count } = await prisma.vendedores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vendedoresDeleteManyArgs>(args?: SelectSubset<T, vendedoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendedores
     * const vendedores = await prisma.vendedores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vendedoresUpdateManyArgs>(args: SelectSubset<T, vendedoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendedores.
     * @param {vendedoresUpsertArgs} args - Arguments to update or create a Vendedores.
     * @example
     * // Update or create a Vendedores
     * const vendedores = await prisma.vendedores.upsert({
     *   create: {
     *     // ... data to create a Vendedores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendedores we want to update
     *   }
     * })
     */
    upsert<T extends vendedoresUpsertArgs>(args: SelectSubset<T, vendedoresUpsertArgs<ExtArgs>>): Prisma__vendedoresClient<$Result.GetResult<Prisma.$vendedoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedoresCountArgs} args - Arguments to filter Vendedores to count.
     * @example
     * // Count the number of Vendedores
     * const count = await prisma.vendedores.count({
     *   where: {
     *     // ... the filter for the Vendedores we want to count
     *   }
     * })
    **/
    count<T extends vendedoresCountArgs>(
      args?: Subset<T, vendedoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendedoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendedoresAggregateArgs>(args: Subset<T, VendedoresAggregateArgs>): Prisma.PrismaPromise<GetVendedoresAggregateType<T>>

    /**
     * Group by Vendedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendedoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vendedoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vendedoresGroupByArgs['orderBy'] }
        : { orderBy?: vendedoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vendedoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendedoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vendedores model
   */
  readonly fields: vendedoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vendedores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vendedoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends vendedores$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, vendedores$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vendedores model
   */
  interface vendedoresFieldRefs {
    readonly id: FieldRef<"vendedores", 'Int'>
    readonly nombre: FieldRef<"vendedores", 'String'>
    readonly numero_ruc: FieldRef<"vendedores", 'String'>
    readonly direccion: FieldRef<"vendedores", 'String'>
    readonly telefono: FieldRef<"vendedores", 'String'>
    readonly email: FieldRef<"vendedores", 'String'>
    readonly notas: FieldRef<"vendedores", 'String'>
    readonly activo: FieldRef<"vendedores", 'Boolean'>
    readonly created_at: FieldRef<"vendedores", 'DateTime'>
    readonly updated_at: FieldRef<"vendedores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vendedores findUnique
   */
  export type vendedoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedoresInclude<ExtArgs> | null
    /**
     * Filter, which vendedores to fetch.
     */
    where: vendedoresWhereUniqueInput
  }

  /**
   * vendedores findUniqueOrThrow
   */
  export type vendedoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedoresInclude<ExtArgs> | null
    /**
     * Filter, which vendedores to fetch.
     */
    where: vendedoresWhereUniqueInput
  }

  /**
   * vendedores findFirst
   */
  export type vendedoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedoresInclude<ExtArgs> | null
    /**
     * Filter, which vendedores to fetch.
     */
    where?: vendedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendedores to fetch.
     */
    orderBy?: vendedoresOrderByWithRelationInput | vendedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendedores.
     */
    cursor?: vendedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendedores.
     */
    distinct?: VendedoresScalarFieldEnum | VendedoresScalarFieldEnum[]
  }

  /**
   * vendedores findFirstOrThrow
   */
  export type vendedoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedoresInclude<ExtArgs> | null
    /**
     * Filter, which vendedores to fetch.
     */
    where?: vendedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendedores to fetch.
     */
    orderBy?: vendedoresOrderByWithRelationInput | vendedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendedores.
     */
    cursor?: vendedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendedores.
     */
    distinct?: VendedoresScalarFieldEnum | VendedoresScalarFieldEnum[]
  }

  /**
   * vendedores findMany
   */
  export type vendedoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedoresInclude<ExtArgs> | null
    /**
     * Filter, which vendedores to fetch.
     */
    where?: vendedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendedores to fetch.
     */
    orderBy?: vendedoresOrderByWithRelationInput | vendedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vendedores.
     */
    cursor?: vendedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendedores.
     */
    skip?: number
    distinct?: VendedoresScalarFieldEnum | VendedoresScalarFieldEnum[]
  }

  /**
   * vendedores create
   */
  export type vendedoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedoresInclude<ExtArgs> | null
    /**
     * The data needed to create a vendedores.
     */
    data: XOR<vendedoresCreateInput, vendedoresUncheckedCreateInput>
  }

  /**
   * vendedores createMany
   */
  export type vendedoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vendedores.
     */
    data: vendedoresCreateManyInput | vendedoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendedores update
   */
  export type vendedoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedoresInclude<ExtArgs> | null
    /**
     * The data needed to update a vendedores.
     */
    data: XOR<vendedoresUpdateInput, vendedoresUncheckedUpdateInput>
    /**
     * Choose, which vendedores to update.
     */
    where: vendedoresWhereUniqueInput
  }

  /**
   * vendedores updateMany
   */
  export type vendedoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vendedores.
     */
    data: XOR<vendedoresUpdateManyMutationInput, vendedoresUncheckedUpdateManyInput>
    /**
     * Filter which vendedores to update
     */
    where?: vendedoresWhereInput
    /**
     * Limit how many vendedores to update.
     */
    limit?: number
  }

  /**
   * vendedores upsert
   */
  export type vendedoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedoresInclude<ExtArgs> | null
    /**
     * The filter to search for the vendedores to update in case it exists.
     */
    where: vendedoresWhereUniqueInput
    /**
     * In case the vendedores found by the `where` argument doesn't exist, create a new vendedores with this data.
     */
    create: XOR<vendedoresCreateInput, vendedoresUncheckedCreateInput>
    /**
     * In case the vendedores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vendedoresUpdateInput, vendedoresUncheckedUpdateInput>
  }

  /**
   * vendedores delete
   */
  export type vendedoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedoresInclude<ExtArgs> | null
    /**
     * Filter which vendedores to delete.
     */
    where: vendedoresWhereUniqueInput
  }

  /**
   * vendedores deleteMany
   */
  export type vendedoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendedores to delete
     */
    where?: vendedoresWhereInput
    /**
     * Limit how many vendedores to delete.
     */
    limit?: number
  }

  /**
   * vendedores.pedidos
   */
  export type vendedores$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedidos
     */
    select?: pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedidos
     */
    omit?: pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidosInclude<ExtArgs> | null
    where?: pedidosWhereInput
    orderBy?: pedidosOrderByWithRelationInput | pedidosOrderByWithRelationInput[]
    cursor?: pedidosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidosScalarFieldEnum | PedidosScalarFieldEnum[]
  }

  /**
   * vendedores without action
   */
  export type vendedoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendedores
     */
    select?: vendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendedores
     */
    omit?: vendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendedoresInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Caja_diariaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    apertura: 'apertura',
    cierre: 'cierre',
    total_ventas: 'total_ventas',
    total_gastos: 'total_gastos',
    diferencia: 'diferencia',
    estado: 'estado',
    notas: 'notas',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Caja_diariaScalarFieldEnum = (typeof Caja_diariaScalarFieldEnum)[keyof typeof Caja_diariaScalarFieldEnum]


  export const CategoriasScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const ClientesScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    tipo_documento: 'tipo_documento',
    numero_documento: 'numero_documento',
    direccion: 'direccion',
    telefono: 'telefono',
    email: 'email',
    notas: 'notas',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const DespachosScalarFieldEnum: {
    id: 'id',
    pedido_id: 'pedido_id',
    fecha: 'fecha',
    direccion_entrega: 'direccion_entrega',
    contacto_entrega: 'contacto_entrega',
    telefono_entrega: 'telefono_entrega',
    estado: 'estado',
    notas: 'notas',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DespachosScalarFieldEnum = (typeof DespachosScalarFieldEnum)[keyof typeof DespachosScalarFieldEnum]


  export const Detalle_entradas_mercaderiaScalarFieldEnum: {
    id: 'id',
    entrada_id: 'entrada_id',
    producto_id: 'producto_id',
    cantidad: 'cantidad',
    precio_unitario: 'precio_unitario',
    subtotal: 'subtotal',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Detalle_entradas_mercaderiaScalarFieldEnum = (typeof Detalle_entradas_mercaderiaScalarFieldEnum)[keyof typeof Detalle_entradas_mercaderiaScalarFieldEnum]


  export const Detalle_pedidosScalarFieldEnum: {
    id: 'id',
    pedido_id: 'pedido_id',
    producto_id: 'producto_id',
    cantidad: 'cantidad',
    precio_unitario: 'precio_unitario',
    subtotal: 'subtotal',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Detalle_pedidosScalarFieldEnum = (typeof Detalle_pedidosScalarFieldEnum)[keyof typeof Detalle_pedidosScalarFieldEnum]


  export const Entradas_mercaderiaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    proveedor_id: 'proveedor_id',
    numero_factura: 'numero_factura',
    total: 'total',
    notas: 'notas',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Entradas_mercaderiaScalarFieldEnum = (typeof Entradas_mercaderiaScalarFieldEnum)[keyof typeof Entradas_mercaderiaScalarFieldEnum]


  export const GastosScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    concepto: 'concepto',
    monto: 'monto',
    tipo: 'tipo',
    categoria: 'categoria',
    comprobante: 'comprobante',
    notas: 'notas',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GastosScalarFieldEnum = (typeof GastosScalarFieldEnum)[keyof typeof GastosScalarFieldEnum]


  export const Movimientos_cajaScalarFieldEnum: {
    id: 'id',
    caja_id: 'caja_id',
    fecha_hora: 'fecha_hora',
    tipo: 'tipo',
    concepto: 'concepto',
    monto: 'monto',
    referencia_id: 'referencia_id',
    referencia_tipo: 'referencia_tipo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Movimientos_cajaScalarFieldEnum = (typeof Movimientos_cajaScalarFieldEnum)[keyof typeof Movimientos_cajaScalarFieldEnum]


  export const PagosScalarFieldEnum: {
    id: 'id',
    pedido_id: 'pedido_id',
    fecha: 'fecha',
    monto: 'monto',
    metodo_pago: 'metodo_pago',
    referencia: 'referencia',
    notas: 'notas',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PagosScalarFieldEnum = (typeof PagosScalarFieldEnum)[keyof typeof PagosScalarFieldEnum]


  export const PedidosScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    fecha: 'fecha',
    cliente_id: 'cliente_id',
    vendedor_id: 'vendedor_id',
    subtotal: 'subtotal',
    igv: 'igv',
    total: 'total',
    estado: 'estado',
    notas: 'notas',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PedidosScalarFieldEnum = (typeof PedidosScalarFieldEnum)[keyof typeof PedidosScalarFieldEnum]


  export const PresentacionesScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PresentacionesScalarFieldEnum = (typeof PresentacionesScalarFieldEnum)[keyof typeof PresentacionesScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    descripcion: 'descripcion',
    categoria_id: 'categoria_id',
    presentacion_id: 'presentacion_id',
    precio_sugerido: 'precio_sugerido',
    precio_minimo: 'precio_minimo',
    stock: 'stock',
    stock_minimo: 'stock_minimo',
    imagen: 'imagen',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const ProveedoresScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    ruc: 'ruc',
    direccion: 'direccion',
    telefono: 'telefono',
    email: 'email',
    contacto: 'contacto',
    notas: 'notas',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProveedoresScalarFieldEnum = (typeof ProveedoresScalarFieldEnum)[keyof typeof ProveedoresScalarFieldEnum]


  export const VendedoresScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    numero_ruc: 'numero_ruc',
    direccion: 'direccion',
    telefono: 'telefono',
    email: 'email',
    notas: 'notas',
    activo: 'activo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VendedoresScalarFieldEnum = (typeof VendedoresScalarFieldEnum)[keyof typeof VendedoresScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const caja_diariaOrderByRelevanceFieldEnum: {
    notas: 'notas'
  };

  export type caja_diariaOrderByRelevanceFieldEnum = (typeof caja_diariaOrderByRelevanceFieldEnum)[keyof typeof caja_diariaOrderByRelevanceFieldEnum]


  export const categoriasOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type categoriasOrderByRelevanceFieldEnum = (typeof categoriasOrderByRelevanceFieldEnum)[keyof typeof categoriasOrderByRelevanceFieldEnum]


  export const clientesOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    numero_documento: 'numero_documento',
    direccion: 'direccion',
    telefono: 'telefono',
    email: 'email',
    notas: 'notas'
  };

  export type clientesOrderByRelevanceFieldEnum = (typeof clientesOrderByRelevanceFieldEnum)[keyof typeof clientesOrderByRelevanceFieldEnum]


  export const despachosOrderByRelevanceFieldEnum: {
    direccion_entrega: 'direccion_entrega',
    contacto_entrega: 'contacto_entrega',
    telefono_entrega: 'telefono_entrega',
    notas: 'notas'
  };

  export type despachosOrderByRelevanceFieldEnum = (typeof despachosOrderByRelevanceFieldEnum)[keyof typeof despachosOrderByRelevanceFieldEnum]


  export const entradas_mercaderiaOrderByRelevanceFieldEnum: {
    numero_factura: 'numero_factura',
    notas: 'notas'
  };

  export type entradas_mercaderiaOrderByRelevanceFieldEnum = (typeof entradas_mercaderiaOrderByRelevanceFieldEnum)[keyof typeof entradas_mercaderiaOrderByRelevanceFieldEnum]


  export const gastosOrderByRelevanceFieldEnum: {
    concepto: 'concepto',
    categoria: 'categoria',
    comprobante: 'comprobante',
    notas: 'notas'
  };

  export type gastosOrderByRelevanceFieldEnum = (typeof gastosOrderByRelevanceFieldEnum)[keyof typeof gastosOrderByRelevanceFieldEnum]


  export const movimientos_cajaOrderByRelevanceFieldEnum: {
    concepto: 'concepto'
  };

  export type movimientos_cajaOrderByRelevanceFieldEnum = (typeof movimientos_cajaOrderByRelevanceFieldEnum)[keyof typeof movimientos_cajaOrderByRelevanceFieldEnum]


  export const pagosOrderByRelevanceFieldEnum: {
    referencia: 'referencia',
    notas: 'notas'
  };

  export type pagosOrderByRelevanceFieldEnum = (typeof pagosOrderByRelevanceFieldEnum)[keyof typeof pagosOrderByRelevanceFieldEnum]


  export const pedidosOrderByRelevanceFieldEnum: {
    numero: 'numero',
    notas: 'notas'
  };

  export type pedidosOrderByRelevanceFieldEnum = (typeof pedidosOrderByRelevanceFieldEnum)[keyof typeof pedidosOrderByRelevanceFieldEnum]


  export const presentacionesOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type presentacionesOrderByRelevanceFieldEnum = (typeof presentacionesOrderByRelevanceFieldEnum)[keyof typeof presentacionesOrderByRelevanceFieldEnum]


  export const productosOrderByRelevanceFieldEnum: {
    codigo: 'codigo',
    descripcion: 'descripcion',
    imagen: 'imagen'
  };

  export type productosOrderByRelevanceFieldEnum = (typeof productosOrderByRelevanceFieldEnum)[keyof typeof productosOrderByRelevanceFieldEnum]


  export const proveedoresOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    ruc: 'ruc',
    direccion: 'direccion',
    telefono: 'telefono',
    email: 'email',
    contacto: 'contacto',
    notas: 'notas'
  };

  export type proveedoresOrderByRelevanceFieldEnum = (typeof proveedoresOrderByRelevanceFieldEnum)[keyof typeof proveedoresOrderByRelevanceFieldEnum]


  export const vendedoresOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    numero_ruc: 'numero_ruc',
    direccion: 'direccion',
    telefono: 'telefono',
    email: 'email',
    notas: 'notas'
  };

  export type vendedoresOrderByRelevanceFieldEnum = (typeof vendedoresOrderByRelevanceFieldEnum)[keyof typeof vendedoresOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'caja_diaria_estado'
   */
  export type Enumcaja_diaria_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'caja_diaria_estado'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'clientes_tipo_documento'
   */
  export type Enumclientes_tipo_documentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'clientes_tipo_documento'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'despachos_estado'
   */
  export type Enumdespachos_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'despachos_estado'>
    


  /**
   * Reference to a field of type 'gastos_tipo'
   */
  export type Enumgastos_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gastos_tipo'>
    


  /**
   * Reference to a field of type 'movimientos_caja_tipo'
   */
  export type Enummovimientos_caja_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'movimientos_caja_tipo'>
    


  /**
   * Reference to a field of type 'movimientos_caja_referencia_tipo'
   */
  export type Enummovimientos_caja_referencia_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'movimientos_caja_referencia_tipo'>
    


  /**
   * Reference to a field of type 'pagos_metodo_pago'
   */
  export type Enumpagos_metodo_pagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pagos_metodo_pago'>
    


  /**
   * Reference to a field of type 'pedidos_estado'
   */
  export type Enumpedidos_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pedidos_estado'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type caja_diariaWhereInput = {
    AND?: caja_diariaWhereInput | caja_diariaWhereInput[]
    OR?: caja_diariaWhereInput[]
    NOT?: caja_diariaWhereInput | caja_diariaWhereInput[]
    id?: IntFilter<"caja_diaria"> | number
    fecha?: DateTimeFilter<"caja_diaria"> | Date | string
    apertura?: DecimalFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string
    cierre?: DecimalNullableFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string | null
    total_ventas?: DecimalNullableFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string | null
    total_gastos?: DecimalNullableFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string | null
    diferencia?: DecimalNullableFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string | null
    estado?: Enumcaja_diaria_estadoFilter<"caja_diaria"> | $Enums.caja_diaria_estado
    notas?: StringNullableFilter<"caja_diaria"> | string | null
    created_at?: DateTimeNullableFilter<"caja_diaria"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"caja_diaria"> | Date | string | null
    movimientos_caja?: Movimientos_cajaListRelationFilter
  }

  export type caja_diariaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    apertura?: SortOrder
    cierre?: SortOrderInput | SortOrder
    total_ventas?: SortOrderInput | SortOrder
    total_gastos?: SortOrderInput | SortOrder
    diferencia?: SortOrderInput | SortOrder
    estado?: SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    movimientos_caja?: movimientos_cajaOrderByRelationAggregateInput
    _relevance?: caja_diariaOrderByRelevanceInput
  }

  export type caja_diariaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fecha?: Date | string
    AND?: caja_diariaWhereInput | caja_diariaWhereInput[]
    OR?: caja_diariaWhereInput[]
    NOT?: caja_diariaWhereInput | caja_diariaWhereInput[]
    apertura?: DecimalFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string
    cierre?: DecimalNullableFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string | null
    total_ventas?: DecimalNullableFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string | null
    total_gastos?: DecimalNullableFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string | null
    diferencia?: DecimalNullableFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string | null
    estado?: Enumcaja_diaria_estadoFilter<"caja_diaria"> | $Enums.caja_diaria_estado
    notas?: StringNullableFilter<"caja_diaria"> | string | null
    created_at?: DateTimeNullableFilter<"caja_diaria"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"caja_diaria"> | Date | string | null
    movimientos_caja?: Movimientos_cajaListRelationFilter
  }, "id" | "fecha">

  export type caja_diariaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    apertura?: SortOrder
    cierre?: SortOrderInput | SortOrder
    total_ventas?: SortOrderInput | SortOrder
    total_gastos?: SortOrderInput | SortOrder
    diferencia?: SortOrderInput | SortOrder
    estado?: SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: caja_diariaCountOrderByAggregateInput
    _avg?: caja_diariaAvgOrderByAggregateInput
    _max?: caja_diariaMaxOrderByAggregateInput
    _min?: caja_diariaMinOrderByAggregateInput
    _sum?: caja_diariaSumOrderByAggregateInput
  }

  export type caja_diariaScalarWhereWithAggregatesInput = {
    AND?: caja_diariaScalarWhereWithAggregatesInput | caja_diariaScalarWhereWithAggregatesInput[]
    OR?: caja_diariaScalarWhereWithAggregatesInput[]
    NOT?: caja_diariaScalarWhereWithAggregatesInput | caja_diariaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"caja_diaria"> | number
    fecha?: DateTimeWithAggregatesFilter<"caja_diaria"> | Date | string
    apertura?: DecimalWithAggregatesFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string
    cierre?: DecimalNullableWithAggregatesFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string | null
    total_ventas?: DecimalNullableWithAggregatesFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string | null
    total_gastos?: DecimalNullableWithAggregatesFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string | null
    diferencia?: DecimalNullableWithAggregatesFilter<"caja_diaria"> | Decimal | DecimalJsLike | number | string | null
    estado?: Enumcaja_diaria_estadoWithAggregatesFilter<"caja_diaria"> | $Enums.caja_diaria_estado
    notas?: StringNullableWithAggregatesFilter<"caja_diaria"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"caja_diaria"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"caja_diaria"> | Date | string | null
  }

  export type categoriasWhereInput = {
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    id?: IntFilter<"categorias"> | number
    nombre?: StringFilter<"categorias"> | string
    descripcion?: StringNullableFilter<"categorias"> | string | null
    created_at?: DateTimeNullableFilter<"categorias"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"categorias"> | Date | string | null
    productos?: ProductosListRelationFilter
  }

  export type categoriasOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    productos?: productosOrderByRelationAggregateInput
    _relevance?: categoriasOrderByRelevanceInput
  }

  export type categoriasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    descripcion?: StringNullableFilter<"categorias"> | string | null
    created_at?: DateTimeNullableFilter<"categorias"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"categorias"> | Date | string | null
    productos?: ProductosListRelationFilter
  }, "id" | "nombre">

  export type categoriasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: categoriasCountOrderByAggregateInput
    _avg?: categoriasAvgOrderByAggregateInput
    _max?: categoriasMaxOrderByAggregateInput
    _min?: categoriasMinOrderByAggregateInput
    _sum?: categoriasSumOrderByAggregateInput
  }

  export type categoriasScalarWhereWithAggregatesInput = {
    AND?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    OR?: categoriasScalarWhereWithAggregatesInput[]
    NOT?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categorias"> | number
    nombre?: StringWithAggregatesFilter<"categorias"> | string
    descripcion?: StringNullableWithAggregatesFilter<"categorias"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"categorias"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"categorias"> | Date | string | null
  }

  export type clientesWhereInput = {
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    id?: IntFilter<"clientes"> | number
    nombre?: StringFilter<"clientes"> | string
    tipo_documento?: Enumclientes_tipo_documentoFilter<"clientes"> | $Enums.clientes_tipo_documento
    numero_documento?: StringNullableFilter<"clientes"> | string | null
    direccion?: StringNullableFilter<"clientes"> | string | null
    telefono?: StringNullableFilter<"clientes"> | string | null
    email?: StringNullableFilter<"clientes"> | string | null
    notas?: StringNullableFilter<"clientes"> | string | null
    activo?: BoolFilter<"clientes"> | boolean
    created_at?: DateTimeNullableFilter<"clientes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"clientes"> | Date | string | null
    pedidos?: PedidosListRelationFilter
  }

  export type clientesOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    activo?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    pedidos?: pedidosOrderByRelationAggregateInput
    _relevance?: clientesOrderByRelevanceInput
  }

  export type clientesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    nombre?: StringFilter<"clientes"> | string
    tipo_documento?: Enumclientes_tipo_documentoFilter<"clientes"> | $Enums.clientes_tipo_documento
    numero_documento?: StringNullableFilter<"clientes"> | string | null
    direccion?: StringNullableFilter<"clientes"> | string | null
    telefono?: StringNullableFilter<"clientes"> | string | null
    email?: StringNullableFilter<"clientes"> | string | null
    notas?: StringNullableFilter<"clientes"> | string | null
    activo?: BoolFilter<"clientes"> | boolean
    created_at?: DateTimeNullableFilter<"clientes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"clientes"> | Date | string | null
    pedidos?: PedidosListRelationFilter
  }, "id">

  export type clientesOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    activo?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: clientesCountOrderByAggregateInput
    _avg?: clientesAvgOrderByAggregateInput
    _max?: clientesMaxOrderByAggregateInput
    _min?: clientesMinOrderByAggregateInput
    _sum?: clientesSumOrderByAggregateInput
  }

  export type clientesScalarWhereWithAggregatesInput = {
    AND?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    OR?: clientesScalarWhereWithAggregatesInput[]
    NOT?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"clientes"> | number
    nombre?: StringWithAggregatesFilter<"clientes"> | string
    tipo_documento?: Enumclientes_tipo_documentoWithAggregatesFilter<"clientes"> | $Enums.clientes_tipo_documento
    numero_documento?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    email?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    notas?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    activo?: BoolWithAggregatesFilter<"clientes"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"clientes"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"clientes"> | Date | string | null
  }

  export type despachosWhereInput = {
    AND?: despachosWhereInput | despachosWhereInput[]
    OR?: despachosWhereInput[]
    NOT?: despachosWhereInput | despachosWhereInput[]
    id?: IntFilter<"despachos"> | number
    pedido_id?: IntFilter<"despachos"> | number
    fecha?: DateTimeFilter<"despachos"> | Date | string
    direccion_entrega?: StringFilter<"despachos"> | string
    contacto_entrega?: StringNullableFilter<"despachos"> | string | null
    telefono_entrega?: StringNullableFilter<"despachos"> | string | null
    estado?: Enumdespachos_estadoFilter<"despachos"> | $Enums.despachos_estado
    notas?: StringNullableFilter<"despachos"> | string | null
    created_at?: DateTimeNullableFilter<"despachos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"despachos"> | Date | string | null
    pedidos?: XOR<PedidosScalarRelationFilter, pedidosWhereInput>
  }

  export type despachosOrderByWithRelationInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    fecha?: SortOrder
    direccion_entrega?: SortOrder
    contacto_entrega?: SortOrderInput | SortOrder
    telefono_entrega?: SortOrderInput | SortOrder
    estado?: SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    pedidos?: pedidosOrderByWithRelationInput
    _relevance?: despachosOrderByRelevanceInput
  }

  export type despachosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: despachosWhereInput | despachosWhereInput[]
    OR?: despachosWhereInput[]
    NOT?: despachosWhereInput | despachosWhereInput[]
    pedido_id?: IntFilter<"despachos"> | number
    fecha?: DateTimeFilter<"despachos"> | Date | string
    direccion_entrega?: StringFilter<"despachos"> | string
    contacto_entrega?: StringNullableFilter<"despachos"> | string | null
    telefono_entrega?: StringNullableFilter<"despachos"> | string | null
    estado?: Enumdespachos_estadoFilter<"despachos"> | $Enums.despachos_estado
    notas?: StringNullableFilter<"despachos"> | string | null
    created_at?: DateTimeNullableFilter<"despachos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"despachos"> | Date | string | null
    pedidos?: XOR<PedidosScalarRelationFilter, pedidosWhereInput>
  }, "id">

  export type despachosOrderByWithAggregationInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    fecha?: SortOrder
    direccion_entrega?: SortOrder
    contacto_entrega?: SortOrderInput | SortOrder
    telefono_entrega?: SortOrderInput | SortOrder
    estado?: SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: despachosCountOrderByAggregateInput
    _avg?: despachosAvgOrderByAggregateInput
    _max?: despachosMaxOrderByAggregateInput
    _min?: despachosMinOrderByAggregateInput
    _sum?: despachosSumOrderByAggregateInput
  }

  export type despachosScalarWhereWithAggregatesInput = {
    AND?: despachosScalarWhereWithAggregatesInput | despachosScalarWhereWithAggregatesInput[]
    OR?: despachosScalarWhereWithAggregatesInput[]
    NOT?: despachosScalarWhereWithAggregatesInput | despachosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"despachos"> | number
    pedido_id?: IntWithAggregatesFilter<"despachos"> | number
    fecha?: DateTimeWithAggregatesFilter<"despachos"> | Date | string
    direccion_entrega?: StringWithAggregatesFilter<"despachos"> | string
    contacto_entrega?: StringNullableWithAggregatesFilter<"despachos"> | string | null
    telefono_entrega?: StringNullableWithAggregatesFilter<"despachos"> | string | null
    estado?: Enumdespachos_estadoWithAggregatesFilter<"despachos"> | $Enums.despachos_estado
    notas?: StringNullableWithAggregatesFilter<"despachos"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"despachos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"despachos"> | Date | string | null
  }

  export type detalle_entradas_mercaderiaWhereInput = {
    AND?: detalle_entradas_mercaderiaWhereInput | detalle_entradas_mercaderiaWhereInput[]
    OR?: detalle_entradas_mercaderiaWhereInput[]
    NOT?: detalle_entradas_mercaderiaWhereInput | detalle_entradas_mercaderiaWhereInput[]
    id?: IntFilter<"detalle_entradas_mercaderia"> | number
    entrada_id?: IntFilter<"detalle_entradas_mercaderia"> | number
    producto_id?: IntFilter<"detalle_entradas_mercaderia"> | number
    cantidad?: IntFilter<"detalle_entradas_mercaderia"> | number
    precio_unitario?: DecimalFilter<"detalle_entradas_mercaderia"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"detalle_entradas_mercaderia"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"detalle_entradas_mercaderia"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"detalle_entradas_mercaderia"> | Date | string | null
    entradas_mercaderia?: XOR<Entradas_mercaderiaScalarRelationFilter, entradas_mercaderiaWhereInput>
    productos?: XOR<ProductosScalarRelationFilter, productosWhereInput>
  }

  export type detalle_entradas_mercaderiaOrderByWithRelationInput = {
    id?: SortOrder
    entrada_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    entradas_mercaderia?: entradas_mercaderiaOrderByWithRelationInput
    productos?: productosOrderByWithRelationInput
  }

  export type detalle_entradas_mercaderiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: detalle_entradas_mercaderiaWhereInput | detalle_entradas_mercaderiaWhereInput[]
    OR?: detalle_entradas_mercaderiaWhereInput[]
    NOT?: detalle_entradas_mercaderiaWhereInput | detalle_entradas_mercaderiaWhereInput[]
    entrada_id?: IntFilter<"detalle_entradas_mercaderia"> | number
    producto_id?: IntFilter<"detalle_entradas_mercaderia"> | number
    cantidad?: IntFilter<"detalle_entradas_mercaderia"> | number
    precio_unitario?: DecimalFilter<"detalle_entradas_mercaderia"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"detalle_entradas_mercaderia"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"detalle_entradas_mercaderia"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"detalle_entradas_mercaderia"> | Date | string | null
    entradas_mercaderia?: XOR<Entradas_mercaderiaScalarRelationFilter, entradas_mercaderiaWhereInput>
    productos?: XOR<ProductosScalarRelationFilter, productosWhereInput>
  }, "id">

  export type detalle_entradas_mercaderiaOrderByWithAggregationInput = {
    id?: SortOrder
    entrada_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: detalle_entradas_mercaderiaCountOrderByAggregateInput
    _avg?: detalle_entradas_mercaderiaAvgOrderByAggregateInput
    _max?: detalle_entradas_mercaderiaMaxOrderByAggregateInput
    _min?: detalle_entradas_mercaderiaMinOrderByAggregateInput
    _sum?: detalle_entradas_mercaderiaSumOrderByAggregateInput
  }

  export type detalle_entradas_mercaderiaScalarWhereWithAggregatesInput = {
    AND?: detalle_entradas_mercaderiaScalarWhereWithAggregatesInput | detalle_entradas_mercaderiaScalarWhereWithAggregatesInput[]
    OR?: detalle_entradas_mercaderiaScalarWhereWithAggregatesInput[]
    NOT?: detalle_entradas_mercaderiaScalarWhereWithAggregatesInput | detalle_entradas_mercaderiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"detalle_entradas_mercaderia"> | number
    entrada_id?: IntWithAggregatesFilter<"detalle_entradas_mercaderia"> | number
    producto_id?: IntWithAggregatesFilter<"detalle_entradas_mercaderia"> | number
    cantidad?: IntWithAggregatesFilter<"detalle_entradas_mercaderia"> | number
    precio_unitario?: DecimalWithAggregatesFilter<"detalle_entradas_mercaderia"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"detalle_entradas_mercaderia"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"detalle_entradas_mercaderia"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"detalle_entradas_mercaderia"> | Date | string | null
  }

  export type detalle_pedidosWhereInput = {
    AND?: detalle_pedidosWhereInput | detalle_pedidosWhereInput[]
    OR?: detalle_pedidosWhereInput[]
    NOT?: detalle_pedidosWhereInput | detalle_pedidosWhereInput[]
    id?: IntFilter<"detalle_pedidos"> | number
    pedido_id?: IntFilter<"detalle_pedidos"> | number
    producto_id?: IntFilter<"detalle_pedidos"> | number
    cantidad?: IntFilter<"detalle_pedidos"> | number
    precio_unitario?: DecimalFilter<"detalle_pedidos"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"detalle_pedidos"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"detalle_pedidos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"detalle_pedidos"> | Date | string | null
    pedidos?: XOR<PedidosScalarRelationFilter, pedidosWhereInput>
    productos?: XOR<ProductosScalarRelationFilter, productosWhereInput>
  }

  export type detalle_pedidosOrderByWithRelationInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    pedidos?: pedidosOrderByWithRelationInput
    productos?: productosOrderByWithRelationInput
  }

  export type detalle_pedidosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: detalle_pedidosWhereInput | detalle_pedidosWhereInput[]
    OR?: detalle_pedidosWhereInput[]
    NOT?: detalle_pedidosWhereInput | detalle_pedidosWhereInput[]
    pedido_id?: IntFilter<"detalle_pedidos"> | number
    producto_id?: IntFilter<"detalle_pedidos"> | number
    cantidad?: IntFilter<"detalle_pedidos"> | number
    precio_unitario?: DecimalFilter<"detalle_pedidos"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"detalle_pedidos"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"detalle_pedidos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"detalle_pedidos"> | Date | string | null
    pedidos?: XOR<PedidosScalarRelationFilter, pedidosWhereInput>
    productos?: XOR<ProductosScalarRelationFilter, productosWhereInput>
  }, "id">

  export type detalle_pedidosOrderByWithAggregationInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: detalle_pedidosCountOrderByAggregateInput
    _avg?: detalle_pedidosAvgOrderByAggregateInput
    _max?: detalle_pedidosMaxOrderByAggregateInput
    _min?: detalle_pedidosMinOrderByAggregateInput
    _sum?: detalle_pedidosSumOrderByAggregateInput
  }

  export type detalle_pedidosScalarWhereWithAggregatesInput = {
    AND?: detalle_pedidosScalarWhereWithAggregatesInput | detalle_pedidosScalarWhereWithAggregatesInput[]
    OR?: detalle_pedidosScalarWhereWithAggregatesInput[]
    NOT?: detalle_pedidosScalarWhereWithAggregatesInput | detalle_pedidosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"detalle_pedidos"> | number
    pedido_id?: IntWithAggregatesFilter<"detalle_pedidos"> | number
    producto_id?: IntWithAggregatesFilter<"detalle_pedidos"> | number
    cantidad?: IntWithAggregatesFilter<"detalle_pedidos"> | number
    precio_unitario?: DecimalWithAggregatesFilter<"detalle_pedidos"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"detalle_pedidos"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"detalle_pedidos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"detalle_pedidos"> | Date | string | null
  }

  export type entradas_mercaderiaWhereInput = {
    AND?: entradas_mercaderiaWhereInput | entradas_mercaderiaWhereInput[]
    OR?: entradas_mercaderiaWhereInput[]
    NOT?: entradas_mercaderiaWhereInput | entradas_mercaderiaWhereInput[]
    id?: IntFilter<"entradas_mercaderia"> | number
    fecha?: DateTimeFilter<"entradas_mercaderia"> | Date | string
    proveedor_id?: IntFilter<"entradas_mercaderia"> | number
    numero_factura?: StringNullableFilter<"entradas_mercaderia"> | string | null
    total?: DecimalFilter<"entradas_mercaderia"> | Decimal | DecimalJsLike | number | string
    notas?: StringNullableFilter<"entradas_mercaderia"> | string | null
    created_at?: DateTimeNullableFilter<"entradas_mercaderia"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"entradas_mercaderia"> | Date | string | null
    detalle_entradas_mercaderia?: Detalle_entradas_mercaderiaListRelationFilter
    proveedores?: XOR<ProveedoresScalarRelationFilter, proveedoresWhereInput>
  }

  export type entradas_mercaderiaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    proveedor_id?: SortOrder
    numero_factura?: SortOrderInput | SortOrder
    total?: SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaOrderByRelationAggregateInput
    proveedores?: proveedoresOrderByWithRelationInput
    _relevance?: entradas_mercaderiaOrderByRelevanceInput
  }

  export type entradas_mercaderiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: entradas_mercaderiaWhereInput | entradas_mercaderiaWhereInput[]
    OR?: entradas_mercaderiaWhereInput[]
    NOT?: entradas_mercaderiaWhereInput | entradas_mercaderiaWhereInput[]
    fecha?: DateTimeFilter<"entradas_mercaderia"> | Date | string
    proveedor_id?: IntFilter<"entradas_mercaderia"> | number
    numero_factura?: StringNullableFilter<"entradas_mercaderia"> | string | null
    total?: DecimalFilter<"entradas_mercaderia"> | Decimal | DecimalJsLike | number | string
    notas?: StringNullableFilter<"entradas_mercaderia"> | string | null
    created_at?: DateTimeNullableFilter<"entradas_mercaderia"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"entradas_mercaderia"> | Date | string | null
    detalle_entradas_mercaderia?: Detalle_entradas_mercaderiaListRelationFilter
    proveedores?: XOR<ProveedoresScalarRelationFilter, proveedoresWhereInput>
  }, "id">

  export type entradas_mercaderiaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    proveedor_id?: SortOrder
    numero_factura?: SortOrderInput | SortOrder
    total?: SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: entradas_mercaderiaCountOrderByAggregateInput
    _avg?: entradas_mercaderiaAvgOrderByAggregateInput
    _max?: entradas_mercaderiaMaxOrderByAggregateInput
    _min?: entradas_mercaderiaMinOrderByAggregateInput
    _sum?: entradas_mercaderiaSumOrderByAggregateInput
  }

  export type entradas_mercaderiaScalarWhereWithAggregatesInput = {
    AND?: entradas_mercaderiaScalarWhereWithAggregatesInput | entradas_mercaderiaScalarWhereWithAggregatesInput[]
    OR?: entradas_mercaderiaScalarWhereWithAggregatesInput[]
    NOT?: entradas_mercaderiaScalarWhereWithAggregatesInput | entradas_mercaderiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"entradas_mercaderia"> | number
    fecha?: DateTimeWithAggregatesFilter<"entradas_mercaderia"> | Date | string
    proveedor_id?: IntWithAggregatesFilter<"entradas_mercaderia"> | number
    numero_factura?: StringNullableWithAggregatesFilter<"entradas_mercaderia"> | string | null
    total?: DecimalWithAggregatesFilter<"entradas_mercaderia"> | Decimal | DecimalJsLike | number | string
    notas?: StringNullableWithAggregatesFilter<"entradas_mercaderia"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"entradas_mercaderia"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"entradas_mercaderia"> | Date | string | null
  }

  export type gastosWhereInput = {
    AND?: gastosWhereInput | gastosWhereInput[]
    OR?: gastosWhereInput[]
    NOT?: gastosWhereInput | gastosWhereInput[]
    id?: IntFilter<"gastos"> | number
    fecha?: DateTimeFilter<"gastos"> | Date | string
    concepto?: StringFilter<"gastos"> | string
    monto?: DecimalFilter<"gastos"> | Decimal | DecimalJsLike | number | string
    tipo?: Enumgastos_tipoFilter<"gastos"> | $Enums.gastos_tipo
    categoria?: StringNullableFilter<"gastos"> | string | null
    comprobante?: StringNullableFilter<"gastos"> | string | null
    notas?: StringNullableFilter<"gastos"> | string | null
    created_at?: DateTimeNullableFilter<"gastos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"gastos"> | Date | string | null
  }

  export type gastosOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrderInput | SortOrder
    comprobante?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: gastosOrderByRelevanceInput
  }

  export type gastosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: gastosWhereInput | gastosWhereInput[]
    OR?: gastosWhereInput[]
    NOT?: gastosWhereInput | gastosWhereInput[]
    fecha?: DateTimeFilter<"gastos"> | Date | string
    concepto?: StringFilter<"gastos"> | string
    monto?: DecimalFilter<"gastos"> | Decimal | DecimalJsLike | number | string
    tipo?: Enumgastos_tipoFilter<"gastos"> | $Enums.gastos_tipo
    categoria?: StringNullableFilter<"gastos"> | string | null
    comprobante?: StringNullableFilter<"gastos"> | string | null
    notas?: StringNullableFilter<"gastos"> | string | null
    created_at?: DateTimeNullableFilter<"gastos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"gastos"> | Date | string | null
  }, "id">

  export type gastosOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrderInput | SortOrder
    comprobante?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: gastosCountOrderByAggregateInput
    _avg?: gastosAvgOrderByAggregateInput
    _max?: gastosMaxOrderByAggregateInput
    _min?: gastosMinOrderByAggregateInput
    _sum?: gastosSumOrderByAggregateInput
  }

  export type gastosScalarWhereWithAggregatesInput = {
    AND?: gastosScalarWhereWithAggregatesInput | gastosScalarWhereWithAggregatesInput[]
    OR?: gastosScalarWhereWithAggregatesInput[]
    NOT?: gastosScalarWhereWithAggregatesInput | gastosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gastos"> | number
    fecha?: DateTimeWithAggregatesFilter<"gastos"> | Date | string
    concepto?: StringWithAggregatesFilter<"gastos"> | string
    monto?: DecimalWithAggregatesFilter<"gastos"> | Decimal | DecimalJsLike | number | string
    tipo?: Enumgastos_tipoWithAggregatesFilter<"gastos"> | $Enums.gastos_tipo
    categoria?: StringNullableWithAggregatesFilter<"gastos"> | string | null
    comprobante?: StringNullableWithAggregatesFilter<"gastos"> | string | null
    notas?: StringNullableWithAggregatesFilter<"gastos"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"gastos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"gastos"> | Date | string | null
  }

  export type movimientos_cajaWhereInput = {
    AND?: movimientos_cajaWhereInput | movimientos_cajaWhereInput[]
    OR?: movimientos_cajaWhereInput[]
    NOT?: movimientos_cajaWhereInput | movimientos_cajaWhereInput[]
    id?: IntFilter<"movimientos_caja"> | number
    caja_id?: IntFilter<"movimientos_caja"> | number
    fecha_hora?: DateTimeFilter<"movimientos_caja"> | Date | string
    tipo?: Enummovimientos_caja_tipoFilter<"movimientos_caja"> | $Enums.movimientos_caja_tipo
    concepto?: StringFilter<"movimientos_caja"> | string
    monto?: DecimalFilter<"movimientos_caja"> | Decimal | DecimalJsLike | number | string
    referencia_id?: IntNullableFilter<"movimientos_caja"> | number | null
    referencia_tipo?: Enummovimientos_caja_referencia_tipoNullableFilter<"movimientos_caja"> | $Enums.movimientos_caja_referencia_tipo | null
    created_at?: DateTimeNullableFilter<"movimientos_caja"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"movimientos_caja"> | Date | string | null
    caja_diaria?: XOR<Caja_diariaScalarRelationFilter, caja_diariaWhereInput>
  }

  export type movimientos_cajaOrderByWithRelationInput = {
    id?: SortOrder
    caja_id?: SortOrder
    fecha_hora?: SortOrder
    tipo?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    referencia_id?: SortOrderInput | SortOrder
    referencia_tipo?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    caja_diaria?: caja_diariaOrderByWithRelationInput
    _relevance?: movimientos_cajaOrderByRelevanceInput
  }

  export type movimientos_cajaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: movimientos_cajaWhereInput | movimientos_cajaWhereInput[]
    OR?: movimientos_cajaWhereInput[]
    NOT?: movimientos_cajaWhereInput | movimientos_cajaWhereInput[]
    caja_id?: IntFilter<"movimientos_caja"> | number
    fecha_hora?: DateTimeFilter<"movimientos_caja"> | Date | string
    tipo?: Enummovimientos_caja_tipoFilter<"movimientos_caja"> | $Enums.movimientos_caja_tipo
    concepto?: StringFilter<"movimientos_caja"> | string
    monto?: DecimalFilter<"movimientos_caja"> | Decimal | DecimalJsLike | number | string
    referencia_id?: IntNullableFilter<"movimientos_caja"> | number | null
    referencia_tipo?: Enummovimientos_caja_referencia_tipoNullableFilter<"movimientos_caja"> | $Enums.movimientos_caja_referencia_tipo | null
    created_at?: DateTimeNullableFilter<"movimientos_caja"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"movimientos_caja"> | Date | string | null
    caja_diaria?: XOR<Caja_diariaScalarRelationFilter, caja_diariaWhereInput>
  }, "id">

  export type movimientos_cajaOrderByWithAggregationInput = {
    id?: SortOrder
    caja_id?: SortOrder
    fecha_hora?: SortOrder
    tipo?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    referencia_id?: SortOrderInput | SortOrder
    referencia_tipo?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: movimientos_cajaCountOrderByAggregateInput
    _avg?: movimientos_cajaAvgOrderByAggregateInput
    _max?: movimientos_cajaMaxOrderByAggregateInput
    _min?: movimientos_cajaMinOrderByAggregateInput
    _sum?: movimientos_cajaSumOrderByAggregateInput
  }

  export type movimientos_cajaScalarWhereWithAggregatesInput = {
    AND?: movimientos_cajaScalarWhereWithAggregatesInput | movimientos_cajaScalarWhereWithAggregatesInput[]
    OR?: movimientos_cajaScalarWhereWithAggregatesInput[]
    NOT?: movimientos_cajaScalarWhereWithAggregatesInput | movimientos_cajaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"movimientos_caja"> | number
    caja_id?: IntWithAggregatesFilter<"movimientos_caja"> | number
    fecha_hora?: DateTimeWithAggregatesFilter<"movimientos_caja"> | Date | string
    tipo?: Enummovimientos_caja_tipoWithAggregatesFilter<"movimientos_caja"> | $Enums.movimientos_caja_tipo
    concepto?: StringWithAggregatesFilter<"movimientos_caja"> | string
    monto?: DecimalWithAggregatesFilter<"movimientos_caja"> | Decimal | DecimalJsLike | number | string
    referencia_id?: IntNullableWithAggregatesFilter<"movimientos_caja"> | number | null
    referencia_tipo?: Enummovimientos_caja_referencia_tipoNullableWithAggregatesFilter<"movimientos_caja"> | $Enums.movimientos_caja_referencia_tipo | null
    created_at?: DateTimeNullableWithAggregatesFilter<"movimientos_caja"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"movimientos_caja"> | Date | string | null
  }

  export type pagosWhereInput = {
    AND?: pagosWhereInput | pagosWhereInput[]
    OR?: pagosWhereInput[]
    NOT?: pagosWhereInput | pagosWhereInput[]
    id?: IntFilter<"pagos"> | number
    pedido_id?: IntFilter<"pagos"> | number
    fecha?: DateTimeFilter<"pagos"> | Date | string
    monto?: DecimalFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFilter<"pagos"> | $Enums.pagos_metodo_pago
    referencia?: StringNullableFilter<"pagos"> | string | null
    notas?: StringNullableFilter<"pagos"> | string | null
    created_at?: DateTimeNullableFilter<"pagos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pagos"> | Date | string | null
    pedidos?: XOR<PedidosScalarRelationFilter, pedidosWhereInput>
  }

  export type pagosOrderByWithRelationInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    referencia?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    pedidos?: pedidosOrderByWithRelationInput
    _relevance?: pagosOrderByRelevanceInput
  }

  export type pagosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pagosWhereInput | pagosWhereInput[]
    OR?: pagosWhereInput[]
    NOT?: pagosWhereInput | pagosWhereInput[]
    pedido_id?: IntFilter<"pagos"> | number
    fecha?: DateTimeFilter<"pagos"> | Date | string
    monto?: DecimalFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFilter<"pagos"> | $Enums.pagos_metodo_pago
    referencia?: StringNullableFilter<"pagos"> | string | null
    notas?: StringNullableFilter<"pagos"> | string | null
    created_at?: DateTimeNullableFilter<"pagos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pagos"> | Date | string | null
    pedidos?: XOR<PedidosScalarRelationFilter, pedidosWhereInput>
  }, "id">

  export type pagosOrderByWithAggregationInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    referencia?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: pagosCountOrderByAggregateInput
    _avg?: pagosAvgOrderByAggregateInput
    _max?: pagosMaxOrderByAggregateInput
    _min?: pagosMinOrderByAggregateInput
    _sum?: pagosSumOrderByAggregateInput
  }

  export type pagosScalarWhereWithAggregatesInput = {
    AND?: pagosScalarWhereWithAggregatesInput | pagosScalarWhereWithAggregatesInput[]
    OR?: pagosScalarWhereWithAggregatesInput[]
    NOT?: pagosScalarWhereWithAggregatesInput | pagosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pagos"> | number
    pedido_id?: IntWithAggregatesFilter<"pagos"> | number
    fecha?: DateTimeWithAggregatesFilter<"pagos"> | Date | string
    monto?: DecimalWithAggregatesFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoWithAggregatesFilter<"pagos"> | $Enums.pagos_metodo_pago
    referencia?: StringNullableWithAggregatesFilter<"pagos"> | string | null
    notas?: StringNullableWithAggregatesFilter<"pagos"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"pagos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"pagos"> | Date | string | null
  }

  export type pedidosWhereInput = {
    AND?: pedidosWhereInput | pedidosWhereInput[]
    OR?: pedidosWhereInput[]
    NOT?: pedidosWhereInput | pedidosWhereInput[]
    id?: IntFilter<"pedidos"> | number
    numero?: StringFilter<"pedidos"> | string
    fecha?: DateTimeFilter<"pedidos"> | Date | string
    cliente_id?: IntFilter<"pedidos"> | number
    vendedor_id?: IntFilter<"pedidos"> | number
    subtotal?: DecimalFilter<"pedidos"> | Decimal | DecimalJsLike | number | string
    igv?: DecimalFilter<"pedidos"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"pedidos"> | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFilter<"pedidos"> | $Enums.pedidos_estado
    notas?: StringNullableFilter<"pedidos"> | string | null
    created_at?: DateTimeNullableFilter<"pedidos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pedidos"> | Date | string | null
    despachos?: DespachosListRelationFilter
    detalle_pedidos?: Detalle_pedidosListRelationFilter
    pagos?: PagosListRelationFilter
    clientes?: XOR<ClientesScalarRelationFilter, clientesWhereInput>
    vendedores?: XOR<VendedoresScalarRelationFilter, vendedoresWhereInput>
  }

  export type pedidosOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    fecha?: SortOrder
    cliente_id?: SortOrder
    vendedor_id?: SortOrder
    subtotal?: SortOrder
    igv?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    despachos?: despachosOrderByRelationAggregateInput
    detalle_pedidos?: detalle_pedidosOrderByRelationAggregateInput
    pagos?: pagosOrderByRelationAggregateInput
    clientes?: clientesOrderByWithRelationInput
    vendedores?: vendedoresOrderByWithRelationInput
    _relevance?: pedidosOrderByRelevanceInput
  }

  export type pedidosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero?: string
    AND?: pedidosWhereInput | pedidosWhereInput[]
    OR?: pedidosWhereInput[]
    NOT?: pedidosWhereInput | pedidosWhereInput[]
    fecha?: DateTimeFilter<"pedidos"> | Date | string
    cliente_id?: IntFilter<"pedidos"> | number
    vendedor_id?: IntFilter<"pedidos"> | number
    subtotal?: DecimalFilter<"pedidos"> | Decimal | DecimalJsLike | number | string
    igv?: DecimalFilter<"pedidos"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"pedidos"> | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFilter<"pedidos"> | $Enums.pedidos_estado
    notas?: StringNullableFilter<"pedidos"> | string | null
    created_at?: DateTimeNullableFilter<"pedidos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pedidos"> | Date | string | null
    despachos?: DespachosListRelationFilter
    detalle_pedidos?: Detalle_pedidosListRelationFilter
    pagos?: PagosListRelationFilter
    clientes?: XOR<ClientesScalarRelationFilter, clientesWhereInput>
    vendedores?: XOR<VendedoresScalarRelationFilter, vendedoresWhereInput>
  }, "id" | "numero">

  export type pedidosOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    fecha?: SortOrder
    cliente_id?: SortOrder
    vendedor_id?: SortOrder
    subtotal?: SortOrder
    igv?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    notas?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: pedidosCountOrderByAggregateInput
    _avg?: pedidosAvgOrderByAggregateInput
    _max?: pedidosMaxOrderByAggregateInput
    _min?: pedidosMinOrderByAggregateInput
    _sum?: pedidosSumOrderByAggregateInput
  }

  export type pedidosScalarWhereWithAggregatesInput = {
    AND?: pedidosScalarWhereWithAggregatesInput | pedidosScalarWhereWithAggregatesInput[]
    OR?: pedidosScalarWhereWithAggregatesInput[]
    NOT?: pedidosScalarWhereWithAggregatesInput | pedidosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pedidos"> | number
    numero?: StringWithAggregatesFilter<"pedidos"> | string
    fecha?: DateTimeWithAggregatesFilter<"pedidos"> | Date | string
    cliente_id?: IntWithAggregatesFilter<"pedidos"> | number
    vendedor_id?: IntWithAggregatesFilter<"pedidos"> | number
    subtotal?: DecimalWithAggregatesFilter<"pedidos"> | Decimal | DecimalJsLike | number | string
    igv?: DecimalWithAggregatesFilter<"pedidos"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"pedidos"> | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoWithAggregatesFilter<"pedidos"> | $Enums.pedidos_estado
    notas?: StringNullableWithAggregatesFilter<"pedidos"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"pedidos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"pedidos"> | Date | string | null
  }

  export type presentacionesWhereInput = {
    AND?: presentacionesWhereInput | presentacionesWhereInput[]
    OR?: presentacionesWhereInput[]
    NOT?: presentacionesWhereInput | presentacionesWhereInput[]
    id?: IntFilter<"presentaciones"> | number
    nombre?: StringFilter<"presentaciones"> | string
    descripcion?: StringNullableFilter<"presentaciones"> | string | null
    created_at?: DateTimeNullableFilter<"presentaciones"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"presentaciones"> | Date | string | null
    productos?: ProductosListRelationFilter
  }

  export type presentacionesOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    productos?: productosOrderByRelationAggregateInput
    _relevance?: presentacionesOrderByRelevanceInput
  }

  export type presentacionesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: presentacionesWhereInput | presentacionesWhereInput[]
    OR?: presentacionesWhereInput[]
    NOT?: presentacionesWhereInput | presentacionesWhereInput[]
    descripcion?: StringNullableFilter<"presentaciones"> | string | null
    created_at?: DateTimeNullableFilter<"presentaciones"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"presentaciones"> | Date | string | null
    productos?: ProductosListRelationFilter
  }, "id" | "nombre">

  export type presentacionesOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: presentacionesCountOrderByAggregateInput
    _avg?: presentacionesAvgOrderByAggregateInput
    _max?: presentacionesMaxOrderByAggregateInput
    _min?: presentacionesMinOrderByAggregateInput
    _sum?: presentacionesSumOrderByAggregateInput
  }

  export type presentacionesScalarWhereWithAggregatesInput = {
    AND?: presentacionesScalarWhereWithAggregatesInput | presentacionesScalarWhereWithAggregatesInput[]
    OR?: presentacionesScalarWhereWithAggregatesInput[]
    NOT?: presentacionesScalarWhereWithAggregatesInput | presentacionesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"presentaciones"> | number
    nombre?: StringWithAggregatesFilter<"presentaciones"> | string
    descripcion?: StringNullableWithAggregatesFilter<"presentaciones"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"presentaciones"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"presentaciones"> | Date | string | null
  }

  export type productosWhereInput = {
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    id?: IntFilter<"productos"> | number
    codigo?: StringFilter<"productos"> | string
    descripcion?: StringFilter<"productos"> | string
    categoria_id?: IntFilter<"productos"> | number
    presentacion_id?: IntFilter<"productos"> | number
    precio_sugerido?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntFilter<"productos"> | number
    stock_minimo?: IntFilter<"productos"> | number
    imagen?: StringNullableFilter<"productos"> | string | null
    activo?: BoolFilter<"productos"> | boolean
    created_at?: DateTimeNullableFilter<"productos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"productos"> | Date | string | null
    detalle_entradas_mercaderia?: Detalle_entradas_mercaderiaListRelationFilter
    detalle_pedidos?: Detalle_pedidosListRelationFilter
    categorias?: XOR<CategoriasScalarRelationFilter, categoriasWhereInput>
    presentaciones?: XOR<PresentacionesScalarRelationFilter, presentacionesWhereInput>
  }

  export type productosOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    categoria_id?: SortOrder
    presentacion_id?: SortOrder
    precio_sugerido?: SortOrderInput | SortOrder
    precio_minimo?: SortOrderInput | SortOrder
    stock?: SortOrder
    stock_minimo?: SortOrder
    imagen?: SortOrderInput | SortOrder
    activo?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaOrderByRelationAggregateInput
    detalle_pedidos?: detalle_pedidosOrderByRelationAggregateInput
    categorias?: categoriasOrderByWithRelationInput
    presentaciones?: presentacionesOrderByWithRelationInput
    _relevance?: productosOrderByRelevanceInput
  }

  export type productosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    codigo?: StringFilter<"productos"> | string
    descripcion?: StringFilter<"productos"> | string
    categoria_id?: IntFilter<"productos"> | number
    presentacion_id?: IntFilter<"productos"> | number
    precio_sugerido?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntFilter<"productos"> | number
    stock_minimo?: IntFilter<"productos"> | number
    imagen?: StringNullableFilter<"productos"> | string | null
    activo?: BoolFilter<"productos"> | boolean
    created_at?: DateTimeNullableFilter<"productos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"productos"> | Date | string | null
    detalle_entradas_mercaderia?: Detalle_entradas_mercaderiaListRelationFilter
    detalle_pedidos?: Detalle_pedidosListRelationFilter
    categorias?: XOR<CategoriasScalarRelationFilter, categoriasWhereInput>
    presentaciones?: XOR<PresentacionesScalarRelationFilter, presentacionesWhereInput>
  }, "id">

  export type productosOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    categoria_id?: SortOrder
    presentacion_id?: SortOrder
    precio_sugerido?: SortOrderInput | SortOrder
    precio_minimo?: SortOrderInput | SortOrder
    stock?: SortOrder
    stock_minimo?: SortOrder
    imagen?: SortOrderInput | SortOrder
    activo?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: productosCountOrderByAggregateInput
    _avg?: productosAvgOrderByAggregateInput
    _max?: productosMaxOrderByAggregateInput
    _min?: productosMinOrderByAggregateInput
    _sum?: productosSumOrderByAggregateInput
  }

  export type productosScalarWhereWithAggregatesInput = {
    AND?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    OR?: productosScalarWhereWithAggregatesInput[]
    NOT?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productos"> | number
    codigo?: StringWithAggregatesFilter<"productos"> | string
    descripcion?: StringWithAggregatesFilter<"productos"> | string
    categoria_id?: IntWithAggregatesFilter<"productos"> | number
    presentacion_id?: IntWithAggregatesFilter<"productos"> | number
    precio_sugerido?: DecimalNullableWithAggregatesFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: DecimalNullableWithAggregatesFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntWithAggregatesFilter<"productos"> | number
    stock_minimo?: IntWithAggregatesFilter<"productos"> | number
    imagen?: StringNullableWithAggregatesFilter<"productos"> | string | null
    activo?: BoolWithAggregatesFilter<"productos"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"productos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"productos"> | Date | string | null
  }

  export type proveedoresWhereInput = {
    AND?: proveedoresWhereInput | proveedoresWhereInput[]
    OR?: proveedoresWhereInput[]
    NOT?: proveedoresWhereInput | proveedoresWhereInput[]
    id?: IntFilter<"proveedores"> | number
    nombre?: StringFilter<"proveedores"> | string
    ruc?: StringNullableFilter<"proveedores"> | string | null
    direccion?: StringNullableFilter<"proveedores"> | string | null
    telefono?: StringNullableFilter<"proveedores"> | string | null
    email?: StringNullableFilter<"proveedores"> | string | null
    contacto?: StringNullableFilter<"proveedores"> | string | null
    notas?: StringNullableFilter<"proveedores"> | string | null
    activo?: BoolFilter<"proveedores"> | boolean
    created_at?: DateTimeNullableFilter<"proveedores"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"proveedores"> | Date | string | null
    entradas_mercaderia?: Entradas_mercaderiaListRelationFilter
  }

  export type proveedoresOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    activo?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    entradas_mercaderia?: entradas_mercaderiaOrderByRelationAggregateInput
    _relevance?: proveedoresOrderByRelevanceInput
  }

  export type proveedoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ruc?: string
    AND?: proveedoresWhereInput | proveedoresWhereInput[]
    OR?: proveedoresWhereInput[]
    NOT?: proveedoresWhereInput | proveedoresWhereInput[]
    nombre?: StringFilter<"proveedores"> | string
    direccion?: StringNullableFilter<"proveedores"> | string | null
    telefono?: StringNullableFilter<"proveedores"> | string | null
    email?: StringNullableFilter<"proveedores"> | string | null
    contacto?: StringNullableFilter<"proveedores"> | string | null
    notas?: StringNullableFilter<"proveedores"> | string | null
    activo?: BoolFilter<"proveedores"> | boolean
    created_at?: DateTimeNullableFilter<"proveedores"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"proveedores"> | Date | string | null
    entradas_mercaderia?: Entradas_mercaderiaListRelationFilter
  }, "id" | "ruc">

  export type proveedoresOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    activo?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: proveedoresCountOrderByAggregateInput
    _avg?: proveedoresAvgOrderByAggregateInput
    _max?: proveedoresMaxOrderByAggregateInput
    _min?: proveedoresMinOrderByAggregateInput
    _sum?: proveedoresSumOrderByAggregateInput
  }

  export type proveedoresScalarWhereWithAggregatesInput = {
    AND?: proveedoresScalarWhereWithAggregatesInput | proveedoresScalarWhereWithAggregatesInput[]
    OR?: proveedoresScalarWhereWithAggregatesInput[]
    NOT?: proveedoresScalarWhereWithAggregatesInput | proveedoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"proveedores"> | number
    nombre?: StringWithAggregatesFilter<"proveedores"> | string
    ruc?: StringNullableWithAggregatesFilter<"proveedores"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"proveedores"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"proveedores"> | string | null
    email?: StringNullableWithAggregatesFilter<"proveedores"> | string | null
    contacto?: StringNullableWithAggregatesFilter<"proveedores"> | string | null
    notas?: StringNullableWithAggregatesFilter<"proveedores"> | string | null
    activo?: BoolWithAggregatesFilter<"proveedores"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"proveedores"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"proveedores"> | Date | string | null
  }

  export type vendedoresWhereInput = {
    AND?: vendedoresWhereInput | vendedoresWhereInput[]
    OR?: vendedoresWhereInput[]
    NOT?: vendedoresWhereInput | vendedoresWhereInput[]
    id?: IntFilter<"vendedores"> | number
    nombre?: StringFilter<"vendedores"> | string
    numero_ruc?: StringNullableFilter<"vendedores"> | string | null
    direccion?: StringNullableFilter<"vendedores"> | string | null
    telefono?: StringNullableFilter<"vendedores"> | string | null
    email?: StringNullableFilter<"vendedores"> | string | null
    notas?: StringNullableFilter<"vendedores"> | string | null
    activo?: BoolFilter<"vendedores"> | boolean
    created_at?: DateTimeNullableFilter<"vendedores"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"vendedores"> | Date | string | null
    pedidos?: PedidosListRelationFilter
  }

  export type vendedoresOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    numero_ruc?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    activo?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    pedidos?: pedidosOrderByRelationAggregateInput
    _relevance?: vendedoresOrderByRelevanceInput
  }

  export type vendedoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: vendedoresWhereInput | vendedoresWhereInput[]
    OR?: vendedoresWhereInput[]
    NOT?: vendedoresWhereInput | vendedoresWhereInput[]
    nombre?: StringFilter<"vendedores"> | string
    numero_ruc?: StringNullableFilter<"vendedores"> | string | null
    direccion?: StringNullableFilter<"vendedores"> | string | null
    telefono?: StringNullableFilter<"vendedores"> | string | null
    email?: StringNullableFilter<"vendedores"> | string | null
    notas?: StringNullableFilter<"vendedores"> | string | null
    activo?: BoolFilter<"vendedores"> | boolean
    created_at?: DateTimeNullableFilter<"vendedores"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"vendedores"> | Date | string | null
    pedidos?: PedidosListRelationFilter
  }, "id">

  export type vendedoresOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    numero_ruc?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    activo?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: vendedoresCountOrderByAggregateInput
    _avg?: vendedoresAvgOrderByAggregateInput
    _max?: vendedoresMaxOrderByAggregateInput
    _min?: vendedoresMinOrderByAggregateInput
    _sum?: vendedoresSumOrderByAggregateInput
  }

  export type vendedoresScalarWhereWithAggregatesInput = {
    AND?: vendedoresScalarWhereWithAggregatesInput | vendedoresScalarWhereWithAggregatesInput[]
    OR?: vendedoresScalarWhereWithAggregatesInput[]
    NOT?: vendedoresScalarWhereWithAggregatesInput | vendedoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"vendedores"> | number
    nombre?: StringWithAggregatesFilter<"vendedores"> | string
    numero_ruc?: StringNullableWithAggregatesFilter<"vendedores"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"vendedores"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"vendedores"> | string | null
    email?: StringNullableWithAggregatesFilter<"vendedores"> | string | null
    notas?: StringNullableWithAggregatesFilter<"vendedores"> | string | null
    activo?: BoolWithAggregatesFilter<"vendedores"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"vendedores"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"vendedores"> | Date | string | null
  }

  export type caja_diariaCreateInput = {
    fecha: Date | string
    apertura?: Decimal | DecimalJsLike | number | string
    cierre?: Decimal | DecimalJsLike | number | string | null
    total_ventas?: Decimal | DecimalJsLike | number | string | null
    total_gastos?: Decimal | DecimalJsLike | number | string | null
    diferencia?: Decimal | DecimalJsLike | number | string | null
    estado?: $Enums.caja_diaria_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    movimientos_caja?: movimientos_cajaCreateNestedManyWithoutCaja_diariaInput
  }

  export type caja_diariaUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    apertura?: Decimal | DecimalJsLike | number | string
    cierre?: Decimal | DecimalJsLike | number | string | null
    total_ventas?: Decimal | DecimalJsLike | number | string | null
    total_gastos?: Decimal | DecimalJsLike | number | string | null
    diferencia?: Decimal | DecimalJsLike | number | string | null
    estado?: $Enums.caja_diaria_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    movimientos_caja?: movimientos_cajaUncheckedCreateNestedManyWithoutCaja_diariaInput
  }

  export type caja_diariaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    apertura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cierre?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_ventas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_gastos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: Enumcaja_diaria_estadoFieldUpdateOperationsInput | $Enums.caja_diaria_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    movimientos_caja?: movimientos_cajaUpdateManyWithoutCaja_diariaNestedInput
  }

  export type caja_diariaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    apertura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cierre?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_ventas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_gastos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: Enumcaja_diaria_estadoFieldUpdateOperationsInput | $Enums.caja_diaria_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    movimientos_caja?: movimientos_cajaUncheckedUpdateManyWithoutCaja_diariaNestedInput
  }

  export type caja_diariaCreateManyInput = {
    id?: number
    fecha: Date | string
    apertura?: Decimal | DecimalJsLike | number | string
    cierre?: Decimal | DecimalJsLike | number | string | null
    total_ventas?: Decimal | DecimalJsLike | number | string | null
    total_gastos?: Decimal | DecimalJsLike | number | string | null
    diferencia?: Decimal | DecimalJsLike | number | string | null
    estado?: $Enums.caja_diaria_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type caja_diariaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    apertura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cierre?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_ventas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_gastos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: Enumcaja_diaria_estadoFieldUpdateOperationsInput | $Enums.caja_diaria_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type caja_diariaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    apertura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cierre?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_ventas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_gastos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: Enumcaja_diaria_estadoFieldUpdateOperationsInput | $Enums.caja_diaria_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriasCreateInput = {
    nombre: string
    descripcion?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    productos?: productosCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    productos?: productosUncheckedCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: productosUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: productosUncheckedUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type categoriasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clientesCreateInput = {
    nombre: string
    tipo_documento?: $Enums.clientes_tipo_documento
    numero_documento?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedidos?: pedidosCreateNestedManyWithoutClientesInput
  }

  export type clientesUncheckedCreateInput = {
    id?: number
    nombre: string
    tipo_documento?: $Enums.clientes_tipo_documento
    numero_documento?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedidos?: pedidosUncheckedCreateNestedManyWithoutClientesInput
  }

  export type clientesUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_documento?: Enumclientes_tipo_documentoFieldUpdateOperationsInput | $Enums.clientes_tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: pedidosUpdateManyWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_documento?: Enumclientes_tipo_documentoFieldUpdateOperationsInput | $Enums.clientes_tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: pedidosUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type clientesCreateManyInput = {
    id?: number
    nombre: string
    tipo_documento?: $Enums.clientes_tipo_documento
    numero_documento?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type clientesUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_documento?: Enumclientes_tipo_documentoFieldUpdateOperationsInput | $Enums.clientes_tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clientesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_documento?: Enumclientes_tipo_documentoFieldUpdateOperationsInput | $Enums.clientes_tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type despachosCreateInput = {
    fecha: Date | string
    direccion_entrega: string
    contacto_entrega?: string | null
    telefono_entrega?: string | null
    estado?: $Enums.despachos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedidos: pedidosCreateNestedOneWithoutDespachosInput
  }

  export type despachosUncheckedCreateInput = {
    id?: number
    pedido_id: number
    fecha: Date | string
    direccion_entrega: string
    contacto_entrega?: string | null
    telefono_entrega?: string | null
    estado?: $Enums.despachos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type despachosUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    direccion_entrega?: StringFieldUpdateOperationsInput | string
    contacto_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: Enumdespachos_estadoFieldUpdateOperationsInput | $Enums.despachos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: pedidosUpdateOneRequiredWithoutDespachosNestedInput
  }

  export type despachosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    direccion_entrega?: StringFieldUpdateOperationsInput | string
    contacto_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: Enumdespachos_estadoFieldUpdateOperationsInput | $Enums.despachos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type despachosCreateManyInput = {
    id?: number
    pedido_id: number
    fecha: Date | string
    direccion_entrega: string
    contacto_entrega?: string | null
    telefono_entrega?: string | null
    estado?: $Enums.despachos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type despachosUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    direccion_entrega?: StringFieldUpdateOperationsInput | string
    contacto_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: Enumdespachos_estadoFieldUpdateOperationsInput | $Enums.despachos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type despachosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    direccion_entrega?: StringFieldUpdateOperationsInput | string
    contacto_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: Enumdespachos_estadoFieldUpdateOperationsInput | $Enums.despachos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_entradas_mercaderiaCreateInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    entradas_mercaderia: entradas_mercaderiaCreateNestedOneWithoutDetalle_entradas_mercaderiaInput
    productos: productosCreateNestedOneWithoutDetalle_entradas_mercaderiaInput
  }

  export type detalle_entradas_mercaderiaUncheckedCreateInput = {
    id?: number
    entrada_id: number
    producto_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type detalle_entradas_mercaderiaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entradas_mercaderia?: entradas_mercaderiaUpdateOneRequiredWithoutDetalle_entradas_mercaderiaNestedInput
    productos?: productosUpdateOneRequiredWithoutDetalle_entradas_mercaderiaNestedInput
  }

  export type detalle_entradas_mercaderiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrada_id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_entradas_mercaderiaCreateManyInput = {
    id?: number
    entrada_id: number
    producto_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type detalle_entradas_mercaderiaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_entradas_mercaderiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrada_id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_pedidosCreateInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedidos: pedidosCreateNestedOneWithoutDetalle_pedidosInput
    productos: productosCreateNestedOneWithoutDetalle_pedidosInput
  }

  export type detalle_pedidosUncheckedCreateInput = {
    id?: number
    pedido_id: number
    producto_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type detalle_pedidosUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: pedidosUpdateOneRequiredWithoutDetalle_pedidosNestedInput
    productos?: productosUpdateOneRequiredWithoutDetalle_pedidosNestedInput
  }

  export type detalle_pedidosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_pedidosCreateManyInput = {
    id?: number
    pedido_id: number
    producto_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type detalle_pedidosUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_pedidosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entradas_mercaderiaCreateInput = {
    fecha: Date | string
    numero_factura?: string | null
    total?: Decimal | DecimalJsLike | number | string
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaCreateNestedManyWithoutEntradas_mercaderiaInput
    proveedores: proveedoresCreateNestedOneWithoutEntradas_mercaderiaInput
  }

  export type entradas_mercaderiaUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    proveedor_id: number
    numero_factura?: string | null
    total?: Decimal | DecimalJsLike | number | string
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUncheckedCreateNestedManyWithoutEntradas_mercaderiaInput
  }

  export type entradas_mercaderiaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_factura?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUpdateManyWithoutEntradas_mercaderiaNestedInput
    proveedores?: proveedoresUpdateOneRequiredWithoutEntradas_mercaderiaNestedInput
  }

  export type entradas_mercaderiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor_id?: IntFieldUpdateOperationsInput | number
    numero_factura?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUncheckedUpdateManyWithoutEntradas_mercaderiaNestedInput
  }

  export type entradas_mercaderiaCreateManyInput = {
    id?: number
    fecha: Date | string
    proveedor_id: number
    numero_factura?: string | null
    total?: Decimal | DecimalJsLike | number | string
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type entradas_mercaderiaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_factura?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entradas_mercaderiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor_id?: IntFieldUpdateOperationsInput | number
    numero_factura?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gastosCreateInput = {
    fecha: Date | string
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    tipo?: $Enums.gastos_tipo
    categoria?: string | null
    comprobante?: string | null
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type gastosUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    tipo?: $Enums.gastos_tipo
    categoria?: string | null
    comprobante?: string | null
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type gastosUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: Enumgastos_tipoFieldUpdateOperationsInput | $Enums.gastos_tipo
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    comprobante?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gastosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: Enumgastos_tipoFieldUpdateOperationsInput | $Enums.gastos_tipo
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    comprobante?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gastosCreateManyInput = {
    id?: number
    fecha: Date | string
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    tipo?: $Enums.gastos_tipo
    categoria?: string | null
    comprobante?: string | null
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type gastosUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: Enumgastos_tipoFieldUpdateOperationsInput | $Enums.gastos_tipo
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    comprobante?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gastosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tipo?: Enumgastos_tipoFieldUpdateOperationsInput | $Enums.gastos_tipo
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    comprobante?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientos_cajaCreateInput = {
    fecha_hora: Date | string
    tipo: $Enums.movimientos_caja_tipo
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    referencia_id?: number | null
    referencia_tipo?: $Enums.movimientos_caja_referencia_tipo | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    caja_diaria: caja_diariaCreateNestedOneWithoutMovimientos_cajaInput
  }

  export type movimientos_cajaUncheckedCreateInput = {
    id?: number
    caja_id: number
    fecha_hora: Date | string
    tipo: $Enums.movimientos_caja_tipo
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    referencia_id?: number | null
    referencia_tipo?: $Enums.movimientos_caja_referencia_tipo | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type movimientos_cajaUpdateInput = {
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: Enummovimientos_caja_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_tipo
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    referencia_tipo?: NullableEnummovimientos_caja_referencia_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_referencia_tipo | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    caja_diaria?: caja_diariaUpdateOneRequiredWithoutMovimientos_cajaNestedInput
  }

  export type movimientos_cajaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    caja_id?: IntFieldUpdateOperationsInput | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: Enummovimientos_caja_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_tipo
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    referencia_tipo?: NullableEnummovimientos_caja_referencia_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_referencia_tipo | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientos_cajaCreateManyInput = {
    id?: number
    caja_id: number
    fecha_hora: Date | string
    tipo: $Enums.movimientos_caja_tipo
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    referencia_id?: number | null
    referencia_tipo?: $Enums.movimientos_caja_referencia_tipo | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type movimientos_cajaUpdateManyMutationInput = {
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: Enummovimientos_caja_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_tipo
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    referencia_tipo?: NullableEnummovimientos_caja_referencia_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_referencia_tipo | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientos_cajaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    caja_id?: IntFieldUpdateOperationsInput | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: Enummovimientos_caja_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_tipo
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    referencia_tipo?: NullableEnummovimientos_caja_referencia_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_referencia_tipo | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pagosCreateInput = {
    fecha: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago?: $Enums.pagos_metodo_pago
    referencia?: string | null
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedidos: pedidosCreateNestedOneWithoutPagosInput
  }

  export type pagosUncheckedCreateInput = {
    id?: number
    pedido_id: number
    fecha: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago?: $Enums.pagos_metodo_pago
    referencia?: string | null
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pagosUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFieldUpdateOperationsInput | $Enums.pagos_metodo_pago
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: pedidosUpdateOneRequiredWithoutPagosNestedInput
  }

  export type pagosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFieldUpdateOperationsInput | $Enums.pagos_metodo_pago
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pagosCreateManyInput = {
    id?: number
    pedido_id: number
    fecha: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago?: $Enums.pagos_metodo_pago
    referencia?: string | null
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pagosUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFieldUpdateOperationsInput | $Enums.pagos_metodo_pago
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pagosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFieldUpdateOperationsInput | $Enums.pagos_metodo_pago
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pedidosCreateInput = {
    numero: string
    fecha: Date | string
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    despachos?: despachosCreateNestedManyWithoutPedidosInput
    detalle_pedidos?: detalle_pedidosCreateNestedManyWithoutPedidosInput
    pagos?: pagosCreateNestedManyWithoutPedidosInput
    clientes: clientesCreateNestedOneWithoutPedidosInput
    vendedores: vendedoresCreateNestedOneWithoutPedidosInput
  }

  export type pedidosUncheckedCreateInput = {
    id?: number
    numero: string
    fecha: Date | string
    cliente_id: number
    vendedor_id: number
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    despachos?: despachosUncheckedCreateNestedManyWithoutPedidosInput
    detalle_pedidos?: detalle_pedidosUncheckedCreateNestedManyWithoutPedidosInput
    pagos?: pagosUncheckedCreateNestedManyWithoutPedidosInput
  }

  export type pedidosUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    despachos?: despachosUpdateManyWithoutPedidosNestedInput
    detalle_pedidos?: detalle_pedidosUpdateManyWithoutPedidosNestedInput
    pagos?: pagosUpdateManyWithoutPedidosNestedInput
    clientes?: clientesUpdateOneRequiredWithoutPedidosNestedInput
    vendedores?: vendedoresUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type pedidosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente_id?: IntFieldUpdateOperationsInput | number
    vendedor_id?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    despachos?: despachosUncheckedUpdateManyWithoutPedidosNestedInput
    detalle_pedidos?: detalle_pedidosUncheckedUpdateManyWithoutPedidosNestedInput
    pagos?: pagosUncheckedUpdateManyWithoutPedidosNestedInput
  }

  export type pedidosCreateManyInput = {
    id?: number
    numero: string
    fecha: Date | string
    cliente_id: number
    vendedor_id: number
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pedidosUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pedidosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente_id?: IntFieldUpdateOperationsInput | number
    vendedor_id?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type presentacionesCreateInput = {
    nombre: string
    descripcion?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    productos?: productosCreateNestedManyWithoutPresentacionesInput
  }

  export type presentacionesUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    productos?: productosUncheckedCreateNestedManyWithoutPresentacionesInput
  }

  export type presentacionesUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: productosUpdateManyWithoutPresentacionesNestedInput
  }

  export type presentacionesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: productosUncheckedUpdateManyWithoutPresentacionesNestedInput
  }

  export type presentacionesCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type presentacionesUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type presentacionesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productosCreateInput = {
    codigo: string
    descripcion: string
    precio_sugerido?: Decimal | DecimalJsLike | number | string | null
    precio_minimo?: Decimal | DecimalJsLike | number | string | null
    stock?: number
    stock_minimo?: number
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaCreateNestedManyWithoutProductosInput
    detalle_pedidos?: detalle_pedidosCreateNestedManyWithoutProductosInput
    categorias: categoriasCreateNestedOneWithoutProductosInput
    presentaciones: presentacionesCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateInput = {
    id?: number
    codigo: string
    descripcion: string
    categoria_id: number
    presentacion_id: number
    precio_sugerido?: Decimal | DecimalJsLike | number | string | null
    precio_minimo?: Decimal | DecimalJsLike | number | string | null
    stock?: number
    stock_minimo?: number
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUncheckedCreateNestedManyWithoutProductosInput
    detalle_pedidos?: detalle_pedidosUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUpdateManyWithoutProductosNestedInput
    detalle_pedidos?: detalle_pedidosUpdateManyWithoutProductosNestedInput
    categorias?: categoriasUpdateOneRequiredWithoutProductosNestedInput
    presentaciones?: presentacionesUpdateOneRequiredWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoria_id?: IntFieldUpdateOperationsInput | number
    presentacion_id?: IntFieldUpdateOperationsInput | number
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUncheckedUpdateManyWithoutProductosNestedInput
    detalle_pedidos?: detalle_pedidosUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosCreateManyInput = {
    id?: number
    codigo: string
    descripcion: string
    categoria_id: number
    presentacion_id: number
    precio_sugerido?: Decimal | DecimalJsLike | number | string | null
    precio_minimo?: Decimal | DecimalJsLike | number | string | null
    stock?: number
    stock_minimo?: number
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type productosUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoria_id?: IntFieldUpdateOperationsInput | number
    presentacion_id?: IntFieldUpdateOperationsInput | number
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type proveedoresCreateInput = {
    nombre: string
    ruc?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    entradas_mercaderia?: entradas_mercaderiaCreateNestedManyWithoutProveedoresInput
  }

  export type proveedoresUncheckedCreateInput = {
    id?: number
    nombre: string
    ruc?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    entradas_mercaderia?: entradas_mercaderiaUncheckedCreateNestedManyWithoutProveedoresInput
  }

  export type proveedoresUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entradas_mercaderia?: entradas_mercaderiaUpdateManyWithoutProveedoresNestedInput
  }

  export type proveedoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entradas_mercaderia?: entradas_mercaderiaUncheckedUpdateManyWithoutProveedoresNestedInput
  }

  export type proveedoresCreateManyInput = {
    id?: number
    nombre: string
    ruc?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type proveedoresUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type proveedoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vendedoresCreateInput = {
    nombre: string
    numero_ruc?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedidos?: pedidosCreateNestedManyWithoutVendedoresInput
  }

  export type vendedoresUncheckedCreateInput = {
    id?: number
    nombre: string
    numero_ruc?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedidos?: pedidosUncheckedCreateNestedManyWithoutVendedoresInput
  }

  export type vendedoresUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numero_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: pedidosUpdateManyWithoutVendedoresNestedInput
  }

  export type vendedoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numero_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: pedidosUncheckedUpdateManyWithoutVendedoresNestedInput
  }

  export type vendedoresCreateManyInput = {
    id?: number
    nombre: string
    numero_ruc?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type vendedoresUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numero_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vendedoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numero_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Enumcaja_diaria_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.caja_diaria_estado | Enumcaja_diaria_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.caja_diaria_estado[]
    notIn?: $Enums.caja_diaria_estado[]
    not?: NestedEnumcaja_diaria_estadoFilter<$PrismaModel> | $Enums.caja_diaria_estado
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Movimientos_cajaListRelationFilter = {
    every?: movimientos_cajaWhereInput
    some?: movimientos_cajaWhereInput
    none?: movimientos_cajaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type movimientos_cajaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type caja_diariaOrderByRelevanceInput = {
    fields: caja_diariaOrderByRelevanceFieldEnum | caja_diariaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type caja_diariaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    apertura?: SortOrder
    cierre?: SortOrder
    total_ventas?: SortOrder
    total_gastos?: SortOrder
    diferencia?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type caja_diariaAvgOrderByAggregateInput = {
    id?: SortOrder
    apertura?: SortOrder
    cierre?: SortOrder
    total_ventas?: SortOrder
    total_gastos?: SortOrder
    diferencia?: SortOrder
  }

  export type caja_diariaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    apertura?: SortOrder
    cierre?: SortOrder
    total_ventas?: SortOrder
    total_gastos?: SortOrder
    diferencia?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type caja_diariaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    apertura?: SortOrder
    cierre?: SortOrder
    total_ventas?: SortOrder
    total_gastos?: SortOrder
    diferencia?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type caja_diariaSumOrderByAggregateInput = {
    id?: SortOrder
    apertura?: SortOrder
    cierre?: SortOrder
    total_ventas?: SortOrder
    total_gastos?: SortOrder
    diferencia?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Enumcaja_diaria_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.caja_diaria_estado | Enumcaja_diaria_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.caja_diaria_estado[]
    notIn?: $Enums.caja_diaria_estado[]
    not?: NestedEnumcaja_diaria_estadoWithAggregatesFilter<$PrismaModel> | $Enums.caja_diaria_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcaja_diaria_estadoFilter<$PrismaModel>
    _max?: NestedEnumcaja_diaria_estadoFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductosListRelationFilter = {
    every?: productosWhereInput
    some?: productosWhereInput
    none?: productosWhereInput
  }

  export type productosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriasOrderByRelevanceInput = {
    fields: categoriasOrderByRelevanceFieldEnum | categoriasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoriasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoriasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type categoriasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumclientes_tipo_documentoFilter<$PrismaModel = never> = {
    equals?: $Enums.clientes_tipo_documento | Enumclientes_tipo_documentoFieldRefInput<$PrismaModel>
    in?: $Enums.clientes_tipo_documento[]
    notIn?: $Enums.clientes_tipo_documento[]
    not?: NestedEnumclientes_tipo_documentoFilter<$PrismaModel> | $Enums.clientes_tipo_documento
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PedidosListRelationFilter = {
    every?: pedidosWhereInput
    some?: pedidosWhereInput
    none?: pedidosWhereInput
  }

  export type pedidosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientesOrderByRelevanceInput = {
    fields: clientesOrderByRelevanceFieldEnum | clientesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clientesCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    notas?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type clientesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clientesMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    notas?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type clientesMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    notas?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type clientesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumclientes_tipo_documentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.clientes_tipo_documento | Enumclientes_tipo_documentoFieldRefInput<$PrismaModel>
    in?: $Enums.clientes_tipo_documento[]
    notIn?: $Enums.clientes_tipo_documento[]
    not?: NestedEnumclientes_tipo_documentoWithAggregatesFilter<$PrismaModel> | $Enums.clientes_tipo_documento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumclientes_tipo_documentoFilter<$PrismaModel>
    _max?: NestedEnumclientes_tipo_documentoFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Enumdespachos_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.despachos_estado | Enumdespachos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.despachos_estado[]
    notIn?: $Enums.despachos_estado[]
    not?: NestedEnumdespachos_estadoFilter<$PrismaModel> | $Enums.despachos_estado
  }

  export type PedidosScalarRelationFilter = {
    is?: pedidosWhereInput
    isNot?: pedidosWhereInput
  }

  export type despachosOrderByRelevanceInput = {
    fields: despachosOrderByRelevanceFieldEnum | despachosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type despachosCountOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    fecha?: SortOrder
    direccion_entrega?: SortOrder
    contacto_entrega?: SortOrder
    telefono_entrega?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type despachosAvgOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
  }

  export type despachosMaxOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    fecha?: SortOrder
    direccion_entrega?: SortOrder
    contacto_entrega?: SortOrder
    telefono_entrega?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type despachosMinOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    fecha?: SortOrder
    direccion_entrega?: SortOrder
    contacto_entrega?: SortOrder
    telefono_entrega?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type despachosSumOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
  }

  export type Enumdespachos_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.despachos_estado | Enumdespachos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.despachos_estado[]
    notIn?: $Enums.despachos_estado[]
    not?: NestedEnumdespachos_estadoWithAggregatesFilter<$PrismaModel> | $Enums.despachos_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdespachos_estadoFilter<$PrismaModel>
    _max?: NestedEnumdespachos_estadoFilter<$PrismaModel>
  }

  export type Entradas_mercaderiaScalarRelationFilter = {
    is?: entradas_mercaderiaWhereInput
    isNot?: entradas_mercaderiaWhereInput
  }

  export type ProductosScalarRelationFilter = {
    is?: productosWhereInput
    isNot?: productosWhereInput
  }

  export type detalle_entradas_mercaderiaCountOrderByAggregateInput = {
    id?: SortOrder
    entrada_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type detalle_entradas_mercaderiaAvgOrderByAggregateInput = {
    id?: SortOrder
    entrada_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type detalle_entradas_mercaderiaMaxOrderByAggregateInput = {
    id?: SortOrder
    entrada_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type detalle_entradas_mercaderiaMinOrderByAggregateInput = {
    id?: SortOrder
    entrada_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type detalle_entradas_mercaderiaSumOrderByAggregateInput = {
    id?: SortOrder
    entrada_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type detalle_pedidosCountOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type detalle_pedidosAvgOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type detalle_pedidosMaxOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type detalle_pedidosMinOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type detalle_pedidosSumOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    producto_id?: SortOrder
    cantidad?: SortOrder
    precio_unitario?: SortOrder
    subtotal?: SortOrder
  }

  export type Detalle_entradas_mercaderiaListRelationFilter = {
    every?: detalle_entradas_mercaderiaWhereInput
    some?: detalle_entradas_mercaderiaWhereInput
    none?: detalle_entradas_mercaderiaWhereInput
  }

  export type ProveedoresScalarRelationFilter = {
    is?: proveedoresWhereInput
    isNot?: proveedoresWhereInput
  }

  export type detalle_entradas_mercaderiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type entradas_mercaderiaOrderByRelevanceInput = {
    fields: entradas_mercaderiaOrderByRelevanceFieldEnum | entradas_mercaderiaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type entradas_mercaderiaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    proveedor_id?: SortOrder
    numero_factura?: SortOrder
    total?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type entradas_mercaderiaAvgOrderByAggregateInput = {
    id?: SortOrder
    proveedor_id?: SortOrder
    total?: SortOrder
  }

  export type entradas_mercaderiaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    proveedor_id?: SortOrder
    numero_factura?: SortOrder
    total?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type entradas_mercaderiaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    proveedor_id?: SortOrder
    numero_factura?: SortOrder
    total?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type entradas_mercaderiaSumOrderByAggregateInput = {
    id?: SortOrder
    proveedor_id?: SortOrder
    total?: SortOrder
  }

  export type Enumgastos_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.gastos_tipo | Enumgastos_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.gastos_tipo[]
    notIn?: $Enums.gastos_tipo[]
    not?: NestedEnumgastos_tipoFilter<$PrismaModel> | $Enums.gastos_tipo
  }

  export type gastosOrderByRelevanceInput = {
    fields: gastosOrderByRelevanceFieldEnum | gastosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type gastosCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    comprobante?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type gastosAvgOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
  }

  export type gastosMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    comprobante?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type gastosMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    comprobante?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type gastosSumOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
  }

  export type Enumgastos_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gastos_tipo | Enumgastos_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.gastos_tipo[]
    notIn?: $Enums.gastos_tipo[]
    not?: NestedEnumgastos_tipoWithAggregatesFilter<$PrismaModel> | $Enums.gastos_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgastos_tipoFilter<$PrismaModel>
    _max?: NestedEnumgastos_tipoFilter<$PrismaModel>
  }

  export type Enummovimientos_caja_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientos_caja_tipo | Enummovimientos_caja_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.movimientos_caja_tipo[]
    notIn?: $Enums.movimientos_caja_tipo[]
    not?: NestedEnummovimientos_caja_tipoFilter<$PrismaModel> | $Enums.movimientos_caja_tipo
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Enummovimientos_caja_referencia_tipoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientos_caja_referencia_tipo | Enummovimientos_caja_referencia_tipoFieldRefInput<$PrismaModel> | null
    in?: $Enums.movimientos_caja_referencia_tipo[] | null
    notIn?: $Enums.movimientos_caja_referencia_tipo[] | null
    not?: NestedEnummovimientos_caja_referencia_tipoNullableFilter<$PrismaModel> | $Enums.movimientos_caja_referencia_tipo | null
  }

  export type Caja_diariaScalarRelationFilter = {
    is?: caja_diariaWhereInput
    isNot?: caja_diariaWhereInput
  }

  export type movimientos_cajaOrderByRelevanceInput = {
    fields: movimientos_cajaOrderByRelevanceFieldEnum | movimientos_cajaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type movimientos_cajaCountOrderByAggregateInput = {
    id?: SortOrder
    caja_id?: SortOrder
    fecha_hora?: SortOrder
    tipo?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    referencia_id?: SortOrder
    referencia_tipo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type movimientos_cajaAvgOrderByAggregateInput = {
    id?: SortOrder
    caja_id?: SortOrder
    monto?: SortOrder
    referencia_id?: SortOrder
  }

  export type movimientos_cajaMaxOrderByAggregateInput = {
    id?: SortOrder
    caja_id?: SortOrder
    fecha_hora?: SortOrder
    tipo?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    referencia_id?: SortOrder
    referencia_tipo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type movimientos_cajaMinOrderByAggregateInput = {
    id?: SortOrder
    caja_id?: SortOrder
    fecha_hora?: SortOrder
    tipo?: SortOrder
    concepto?: SortOrder
    monto?: SortOrder
    referencia_id?: SortOrder
    referencia_tipo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type movimientos_cajaSumOrderByAggregateInput = {
    id?: SortOrder
    caja_id?: SortOrder
    monto?: SortOrder
    referencia_id?: SortOrder
  }

  export type Enummovimientos_caja_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientos_caja_tipo | Enummovimientos_caja_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.movimientos_caja_tipo[]
    notIn?: $Enums.movimientos_caja_tipo[]
    not?: NestedEnummovimientos_caja_tipoWithAggregatesFilter<$PrismaModel> | $Enums.movimientos_caja_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummovimientos_caja_tipoFilter<$PrismaModel>
    _max?: NestedEnummovimientos_caja_tipoFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enummovimientos_caja_referencia_tipoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientos_caja_referencia_tipo | Enummovimientos_caja_referencia_tipoFieldRefInput<$PrismaModel> | null
    in?: $Enums.movimientos_caja_referencia_tipo[] | null
    notIn?: $Enums.movimientos_caja_referencia_tipo[] | null
    not?: NestedEnummovimientos_caja_referencia_tipoNullableWithAggregatesFilter<$PrismaModel> | $Enums.movimientos_caja_referencia_tipo | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummovimientos_caja_referencia_tipoNullableFilter<$PrismaModel>
    _max?: NestedEnummovimientos_caja_referencia_tipoNullableFilter<$PrismaModel>
  }

  export type Enumpagos_metodo_pagoFilter<$PrismaModel = never> = {
    equals?: $Enums.pagos_metodo_pago | Enumpagos_metodo_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pagos_metodo_pago[]
    notIn?: $Enums.pagos_metodo_pago[]
    not?: NestedEnumpagos_metodo_pagoFilter<$PrismaModel> | $Enums.pagos_metodo_pago
  }

  export type pagosOrderByRelevanceInput = {
    fields: pagosOrderByRelevanceFieldEnum | pagosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pagosCountOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    referencia?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pagosAvgOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    monto?: SortOrder
  }

  export type pagosMaxOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    referencia?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pagosMinOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    referencia?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pagosSumOrderByAggregateInput = {
    id?: SortOrder
    pedido_id?: SortOrder
    monto?: SortOrder
  }

  export type Enumpagos_metodo_pagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pagos_metodo_pago | Enumpagos_metodo_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pagos_metodo_pago[]
    notIn?: $Enums.pagos_metodo_pago[]
    not?: NestedEnumpagos_metodo_pagoWithAggregatesFilter<$PrismaModel> | $Enums.pagos_metodo_pago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpagos_metodo_pagoFilter<$PrismaModel>
    _max?: NestedEnumpagos_metodo_pagoFilter<$PrismaModel>
  }

  export type Enumpedidos_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.pedidos_estado | Enumpedidos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.pedidos_estado[]
    notIn?: $Enums.pedidos_estado[]
    not?: NestedEnumpedidos_estadoFilter<$PrismaModel> | $Enums.pedidos_estado
  }

  export type DespachosListRelationFilter = {
    every?: despachosWhereInput
    some?: despachosWhereInput
    none?: despachosWhereInput
  }

  export type Detalle_pedidosListRelationFilter = {
    every?: detalle_pedidosWhereInput
    some?: detalle_pedidosWhereInput
    none?: detalle_pedidosWhereInput
  }

  export type PagosListRelationFilter = {
    every?: pagosWhereInput
    some?: pagosWhereInput
    none?: pagosWhereInput
  }

  export type ClientesScalarRelationFilter = {
    is?: clientesWhereInput
    isNot?: clientesWhereInput
  }

  export type VendedoresScalarRelationFilter = {
    is?: vendedoresWhereInput
    isNot?: vendedoresWhereInput
  }

  export type despachosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type detalle_pedidosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pagosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pedidosOrderByRelevanceInput = {
    fields: pedidosOrderByRelevanceFieldEnum | pedidosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pedidosCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    fecha?: SortOrder
    cliente_id?: SortOrder
    vendedor_id?: SortOrder
    subtotal?: SortOrder
    igv?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pedidosAvgOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    vendedor_id?: SortOrder
    subtotal?: SortOrder
    igv?: SortOrder
    total?: SortOrder
  }

  export type pedidosMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    fecha?: SortOrder
    cliente_id?: SortOrder
    vendedor_id?: SortOrder
    subtotal?: SortOrder
    igv?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pedidosMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    fecha?: SortOrder
    cliente_id?: SortOrder
    vendedor_id?: SortOrder
    subtotal?: SortOrder
    igv?: SortOrder
    total?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type pedidosSumOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    vendedor_id?: SortOrder
    subtotal?: SortOrder
    igv?: SortOrder
    total?: SortOrder
  }

  export type Enumpedidos_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pedidos_estado | Enumpedidos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.pedidos_estado[]
    notIn?: $Enums.pedidos_estado[]
    not?: NestedEnumpedidos_estadoWithAggregatesFilter<$PrismaModel> | $Enums.pedidos_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpedidos_estadoFilter<$PrismaModel>
    _max?: NestedEnumpedidos_estadoFilter<$PrismaModel>
  }

  export type presentacionesOrderByRelevanceInput = {
    fields: presentacionesOrderByRelevanceFieldEnum | presentacionesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type presentacionesCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type presentacionesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type presentacionesMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type presentacionesMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type presentacionesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriasScalarRelationFilter = {
    is?: categoriasWhereInput
    isNot?: categoriasWhereInput
  }

  export type PresentacionesScalarRelationFilter = {
    is?: presentacionesWhereInput
    isNot?: presentacionesWhereInput
  }

  export type productosOrderByRelevanceInput = {
    fields: productosOrderByRelevanceFieldEnum | productosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productosCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    categoria_id?: SortOrder
    presentacion_id?: SortOrder
    precio_sugerido?: SortOrder
    precio_minimo?: SortOrder
    stock?: SortOrder
    stock_minimo?: SortOrder
    imagen?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productosAvgOrderByAggregateInput = {
    id?: SortOrder
    categoria_id?: SortOrder
    presentacion_id?: SortOrder
    precio_sugerido?: SortOrder
    precio_minimo?: SortOrder
    stock?: SortOrder
    stock_minimo?: SortOrder
  }

  export type productosMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    categoria_id?: SortOrder
    presentacion_id?: SortOrder
    precio_sugerido?: SortOrder
    precio_minimo?: SortOrder
    stock?: SortOrder
    stock_minimo?: SortOrder
    imagen?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productosMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    categoria_id?: SortOrder
    presentacion_id?: SortOrder
    precio_sugerido?: SortOrder
    precio_minimo?: SortOrder
    stock?: SortOrder
    stock_minimo?: SortOrder
    imagen?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productosSumOrderByAggregateInput = {
    id?: SortOrder
    categoria_id?: SortOrder
    presentacion_id?: SortOrder
    precio_sugerido?: SortOrder
    precio_minimo?: SortOrder
    stock?: SortOrder
    stock_minimo?: SortOrder
  }

  export type Entradas_mercaderiaListRelationFilter = {
    every?: entradas_mercaderiaWhereInput
    some?: entradas_mercaderiaWhereInput
    none?: entradas_mercaderiaWhereInput
  }

  export type entradas_mercaderiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type proveedoresOrderByRelevanceInput = {
    fields: proveedoresOrderByRelevanceFieldEnum | proveedoresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type proveedoresCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    contacto?: SortOrder
    notas?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type proveedoresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type proveedoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    contacto?: SortOrder
    notas?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type proveedoresMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    ruc?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    contacto?: SortOrder
    notas?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type proveedoresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type vendedoresOrderByRelevanceInput = {
    fields: vendedoresOrderByRelevanceFieldEnum | vendedoresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vendedoresCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    numero_ruc?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    notas?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendedoresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type vendedoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    numero_ruc?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    notas?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendedoresMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    numero_ruc?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    notas?: SortOrder
    activo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendedoresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type movimientos_cajaCreateNestedManyWithoutCaja_diariaInput = {
    create?: XOR<movimientos_cajaCreateWithoutCaja_diariaInput, movimientos_cajaUncheckedCreateWithoutCaja_diariaInput> | movimientos_cajaCreateWithoutCaja_diariaInput[] | movimientos_cajaUncheckedCreateWithoutCaja_diariaInput[]
    connectOrCreate?: movimientos_cajaCreateOrConnectWithoutCaja_diariaInput | movimientos_cajaCreateOrConnectWithoutCaja_diariaInput[]
    createMany?: movimientos_cajaCreateManyCaja_diariaInputEnvelope
    connect?: movimientos_cajaWhereUniqueInput | movimientos_cajaWhereUniqueInput[]
  }

  export type movimientos_cajaUncheckedCreateNestedManyWithoutCaja_diariaInput = {
    create?: XOR<movimientos_cajaCreateWithoutCaja_diariaInput, movimientos_cajaUncheckedCreateWithoutCaja_diariaInput> | movimientos_cajaCreateWithoutCaja_diariaInput[] | movimientos_cajaUncheckedCreateWithoutCaja_diariaInput[]
    connectOrCreate?: movimientos_cajaCreateOrConnectWithoutCaja_diariaInput | movimientos_cajaCreateOrConnectWithoutCaja_diariaInput[]
    createMany?: movimientos_cajaCreateManyCaja_diariaInputEnvelope
    connect?: movimientos_cajaWhereUniqueInput | movimientos_cajaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Enumcaja_diaria_estadoFieldUpdateOperationsInput = {
    set?: $Enums.caja_diaria_estado
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type movimientos_cajaUpdateManyWithoutCaja_diariaNestedInput = {
    create?: XOR<movimientos_cajaCreateWithoutCaja_diariaInput, movimientos_cajaUncheckedCreateWithoutCaja_diariaInput> | movimientos_cajaCreateWithoutCaja_diariaInput[] | movimientos_cajaUncheckedCreateWithoutCaja_diariaInput[]
    connectOrCreate?: movimientos_cajaCreateOrConnectWithoutCaja_diariaInput | movimientos_cajaCreateOrConnectWithoutCaja_diariaInput[]
    upsert?: movimientos_cajaUpsertWithWhereUniqueWithoutCaja_diariaInput | movimientos_cajaUpsertWithWhereUniqueWithoutCaja_diariaInput[]
    createMany?: movimientos_cajaCreateManyCaja_diariaInputEnvelope
    set?: movimientos_cajaWhereUniqueInput | movimientos_cajaWhereUniqueInput[]
    disconnect?: movimientos_cajaWhereUniqueInput | movimientos_cajaWhereUniqueInput[]
    delete?: movimientos_cajaWhereUniqueInput | movimientos_cajaWhereUniqueInput[]
    connect?: movimientos_cajaWhereUniqueInput | movimientos_cajaWhereUniqueInput[]
    update?: movimientos_cajaUpdateWithWhereUniqueWithoutCaja_diariaInput | movimientos_cajaUpdateWithWhereUniqueWithoutCaja_diariaInput[]
    updateMany?: movimientos_cajaUpdateManyWithWhereWithoutCaja_diariaInput | movimientos_cajaUpdateManyWithWhereWithoutCaja_diariaInput[]
    deleteMany?: movimientos_cajaScalarWhereInput | movimientos_cajaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type movimientos_cajaUncheckedUpdateManyWithoutCaja_diariaNestedInput = {
    create?: XOR<movimientos_cajaCreateWithoutCaja_diariaInput, movimientos_cajaUncheckedCreateWithoutCaja_diariaInput> | movimientos_cajaCreateWithoutCaja_diariaInput[] | movimientos_cajaUncheckedCreateWithoutCaja_diariaInput[]
    connectOrCreate?: movimientos_cajaCreateOrConnectWithoutCaja_diariaInput | movimientos_cajaCreateOrConnectWithoutCaja_diariaInput[]
    upsert?: movimientos_cajaUpsertWithWhereUniqueWithoutCaja_diariaInput | movimientos_cajaUpsertWithWhereUniqueWithoutCaja_diariaInput[]
    createMany?: movimientos_cajaCreateManyCaja_diariaInputEnvelope
    set?: movimientos_cajaWhereUniqueInput | movimientos_cajaWhereUniqueInput[]
    disconnect?: movimientos_cajaWhereUniqueInput | movimientos_cajaWhereUniqueInput[]
    delete?: movimientos_cajaWhereUniqueInput | movimientos_cajaWhereUniqueInput[]
    connect?: movimientos_cajaWhereUniqueInput | movimientos_cajaWhereUniqueInput[]
    update?: movimientos_cajaUpdateWithWhereUniqueWithoutCaja_diariaInput | movimientos_cajaUpdateWithWhereUniqueWithoutCaja_diariaInput[]
    updateMany?: movimientos_cajaUpdateManyWithWhereWithoutCaja_diariaInput | movimientos_cajaUpdateManyWithWhereWithoutCaja_diariaInput[]
    deleteMany?: movimientos_cajaScalarWhereInput | movimientos_cajaScalarWhereInput[]
  }

  export type productosCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput> | productosCreateWithoutCategoriasInput[] | productosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriasInput | productosCreateOrConnectWithoutCategoriasInput[]
    createMany?: productosCreateManyCategoriasInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type productosUncheckedCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput> | productosCreateWithoutCategoriasInput[] | productosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriasInput | productosCreateOrConnectWithoutCategoriasInput[]
    createMany?: productosCreateManyCategoriasInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type productosUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput> | productosCreateWithoutCategoriasInput[] | productosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriasInput | productosCreateOrConnectWithoutCategoriasInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutCategoriasInput | productosUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: productosCreateManyCategoriasInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutCategoriasInput | productosUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: productosUpdateManyWithWhereWithoutCategoriasInput | productosUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type productosUncheckedUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput> | productosCreateWithoutCategoriasInput[] | productosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriasInput | productosCreateOrConnectWithoutCategoriasInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutCategoriasInput | productosUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: productosCreateManyCategoriasInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutCategoriasInput | productosUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: productosUpdateManyWithWhereWithoutCategoriasInput | productosUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type pedidosCreateNestedManyWithoutClientesInput = {
    create?: XOR<pedidosCreateWithoutClientesInput, pedidosUncheckedCreateWithoutClientesInput> | pedidosCreateWithoutClientesInput[] | pedidosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: pedidosCreateOrConnectWithoutClientesInput | pedidosCreateOrConnectWithoutClientesInput[]
    createMany?: pedidosCreateManyClientesInputEnvelope
    connect?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
  }

  export type pedidosUncheckedCreateNestedManyWithoutClientesInput = {
    create?: XOR<pedidosCreateWithoutClientesInput, pedidosUncheckedCreateWithoutClientesInput> | pedidosCreateWithoutClientesInput[] | pedidosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: pedidosCreateOrConnectWithoutClientesInput | pedidosCreateOrConnectWithoutClientesInput[]
    createMany?: pedidosCreateManyClientesInputEnvelope
    connect?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
  }

  export type Enumclientes_tipo_documentoFieldUpdateOperationsInput = {
    set?: $Enums.clientes_tipo_documento
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type pedidosUpdateManyWithoutClientesNestedInput = {
    create?: XOR<pedidosCreateWithoutClientesInput, pedidosUncheckedCreateWithoutClientesInput> | pedidosCreateWithoutClientesInput[] | pedidosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: pedidosCreateOrConnectWithoutClientesInput | pedidosCreateOrConnectWithoutClientesInput[]
    upsert?: pedidosUpsertWithWhereUniqueWithoutClientesInput | pedidosUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: pedidosCreateManyClientesInputEnvelope
    set?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    disconnect?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    delete?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    connect?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    update?: pedidosUpdateWithWhereUniqueWithoutClientesInput | pedidosUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: pedidosUpdateManyWithWhereWithoutClientesInput | pedidosUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: pedidosScalarWhereInput | pedidosScalarWhereInput[]
  }

  export type pedidosUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: XOR<pedidosCreateWithoutClientesInput, pedidosUncheckedCreateWithoutClientesInput> | pedidosCreateWithoutClientesInput[] | pedidosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: pedidosCreateOrConnectWithoutClientesInput | pedidosCreateOrConnectWithoutClientesInput[]
    upsert?: pedidosUpsertWithWhereUniqueWithoutClientesInput | pedidosUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: pedidosCreateManyClientesInputEnvelope
    set?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    disconnect?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    delete?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    connect?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    update?: pedidosUpdateWithWhereUniqueWithoutClientesInput | pedidosUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: pedidosUpdateManyWithWhereWithoutClientesInput | pedidosUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: pedidosScalarWhereInput | pedidosScalarWhereInput[]
  }

  export type pedidosCreateNestedOneWithoutDespachosInput = {
    create?: XOR<pedidosCreateWithoutDespachosInput, pedidosUncheckedCreateWithoutDespachosInput>
    connectOrCreate?: pedidosCreateOrConnectWithoutDespachosInput
    connect?: pedidosWhereUniqueInput
  }

  export type Enumdespachos_estadoFieldUpdateOperationsInput = {
    set?: $Enums.despachos_estado
  }

  export type pedidosUpdateOneRequiredWithoutDespachosNestedInput = {
    create?: XOR<pedidosCreateWithoutDespachosInput, pedidosUncheckedCreateWithoutDespachosInput>
    connectOrCreate?: pedidosCreateOrConnectWithoutDespachosInput
    upsert?: pedidosUpsertWithoutDespachosInput
    connect?: pedidosWhereUniqueInput
    update?: XOR<XOR<pedidosUpdateToOneWithWhereWithoutDespachosInput, pedidosUpdateWithoutDespachosInput>, pedidosUncheckedUpdateWithoutDespachosInput>
  }

  export type entradas_mercaderiaCreateNestedOneWithoutDetalle_entradas_mercaderiaInput = {
    create?: XOR<entradas_mercaderiaCreateWithoutDetalle_entradas_mercaderiaInput, entradas_mercaderiaUncheckedCreateWithoutDetalle_entradas_mercaderiaInput>
    connectOrCreate?: entradas_mercaderiaCreateOrConnectWithoutDetalle_entradas_mercaderiaInput
    connect?: entradas_mercaderiaWhereUniqueInput
  }

  export type productosCreateNestedOneWithoutDetalle_entradas_mercaderiaInput = {
    create?: XOR<productosCreateWithoutDetalle_entradas_mercaderiaInput, productosUncheckedCreateWithoutDetalle_entradas_mercaderiaInput>
    connectOrCreate?: productosCreateOrConnectWithoutDetalle_entradas_mercaderiaInput
    connect?: productosWhereUniqueInput
  }

  export type entradas_mercaderiaUpdateOneRequiredWithoutDetalle_entradas_mercaderiaNestedInput = {
    create?: XOR<entradas_mercaderiaCreateWithoutDetalle_entradas_mercaderiaInput, entradas_mercaderiaUncheckedCreateWithoutDetalle_entradas_mercaderiaInput>
    connectOrCreate?: entradas_mercaderiaCreateOrConnectWithoutDetalle_entradas_mercaderiaInput
    upsert?: entradas_mercaderiaUpsertWithoutDetalle_entradas_mercaderiaInput
    connect?: entradas_mercaderiaWhereUniqueInput
    update?: XOR<XOR<entradas_mercaderiaUpdateToOneWithWhereWithoutDetalle_entradas_mercaderiaInput, entradas_mercaderiaUpdateWithoutDetalle_entradas_mercaderiaInput>, entradas_mercaderiaUncheckedUpdateWithoutDetalle_entradas_mercaderiaInput>
  }

  export type productosUpdateOneRequiredWithoutDetalle_entradas_mercaderiaNestedInput = {
    create?: XOR<productosCreateWithoutDetalle_entradas_mercaderiaInput, productosUncheckedCreateWithoutDetalle_entradas_mercaderiaInput>
    connectOrCreate?: productosCreateOrConnectWithoutDetalle_entradas_mercaderiaInput
    upsert?: productosUpsertWithoutDetalle_entradas_mercaderiaInput
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutDetalle_entradas_mercaderiaInput, productosUpdateWithoutDetalle_entradas_mercaderiaInput>, productosUncheckedUpdateWithoutDetalle_entradas_mercaderiaInput>
  }

  export type pedidosCreateNestedOneWithoutDetalle_pedidosInput = {
    create?: XOR<pedidosCreateWithoutDetalle_pedidosInput, pedidosUncheckedCreateWithoutDetalle_pedidosInput>
    connectOrCreate?: pedidosCreateOrConnectWithoutDetalle_pedidosInput
    connect?: pedidosWhereUniqueInput
  }

  export type productosCreateNestedOneWithoutDetalle_pedidosInput = {
    create?: XOR<productosCreateWithoutDetalle_pedidosInput, productosUncheckedCreateWithoutDetalle_pedidosInput>
    connectOrCreate?: productosCreateOrConnectWithoutDetalle_pedidosInput
    connect?: productosWhereUniqueInput
  }

  export type pedidosUpdateOneRequiredWithoutDetalle_pedidosNestedInput = {
    create?: XOR<pedidosCreateWithoutDetalle_pedidosInput, pedidosUncheckedCreateWithoutDetalle_pedidosInput>
    connectOrCreate?: pedidosCreateOrConnectWithoutDetalle_pedidosInput
    upsert?: pedidosUpsertWithoutDetalle_pedidosInput
    connect?: pedidosWhereUniqueInput
    update?: XOR<XOR<pedidosUpdateToOneWithWhereWithoutDetalle_pedidosInput, pedidosUpdateWithoutDetalle_pedidosInput>, pedidosUncheckedUpdateWithoutDetalle_pedidosInput>
  }

  export type productosUpdateOneRequiredWithoutDetalle_pedidosNestedInput = {
    create?: XOR<productosCreateWithoutDetalle_pedidosInput, productosUncheckedCreateWithoutDetalle_pedidosInput>
    connectOrCreate?: productosCreateOrConnectWithoutDetalle_pedidosInput
    upsert?: productosUpsertWithoutDetalle_pedidosInput
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutDetalle_pedidosInput, productosUpdateWithoutDetalle_pedidosInput>, productosUncheckedUpdateWithoutDetalle_pedidosInput>
  }

  export type detalle_entradas_mercaderiaCreateNestedManyWithoutEntradas_mercaderiaInput = {
    create?: XOR<detalle_entradas_mercaderiaCreateWithoutEntradas_mercaderiaInput, detalle_entradas_mercaderiaUncheckedCreateWithoutEntradas_mercaderiaInput> | detalle_entradas_mercaderiaCreateWithoutEntradas_mercaderiaInput[] | detalle_entradas_mercaderiaUncheckedCreateWithoutEntradas_mercaderiaInput[]
    connectOrCreate?: detalle_entradas_mercaderiaCreateOrConnectWithoutEntradas_mercaderiaInput | detalle_entradas_mercaderiaCreateOrConnectWithoutEntradas_mercaderiaInput[]
    createMany?: detalle_entradas_mercaderiaCreateManyEntradas_mercaderiaInputEnvelope
    connect?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
  }

  export type proveedoresCreateNestedOneWithoutEntradas_mercaderiaInput = {
    create?: XOR<proveedoresCreateWithoutEntradas_mercaderiaInput, proveedoresUncheckedCreateWithoutEntradas_mercaderiaInput>
    connectOrCreate?: proveedoresCreateOrConnectWithoutEntradas_mercaderiaInput
    connect?: proveedoresWhereUniqueInput
  }

  export type detalle_entradas_mercaderiaUncheckedCreateNestedManyWithoutEntradas_mercaderiaInput = {
    create?: XOR<detalle_entradas_mercaderiaCreateWithoutEntradas_mercaderiaInput, detalle_entradas_mercaderiaUncheckedCreateWithoutEntradas_mercaderiaInput> | detalle_entradas_mercaderiaCreateWithoutEntradas_mercaderiaInput[] | detalle_entradas_mercaderiaUncheckedCreateWithoutEntradas_mercaderiaInput[]
    connectOrCreate?: detalle_entradas_mercaderiaCreateOrConnectWithoutEntradas_mercaderiaInput | detalle_entradas_mercaderiaCreateOrConnectWithoutEntradas_mercaderiaInput[]
    createMany?: detalle_entradas_mercaderiaCreateManyEntradas_mercaderiaInputEnvelope
    connect?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
  }

  export type detalle_entradas_mercaderiaUpdateManyWithoutEntradas_mercaderiaNestedInput = {
    create?: XOR<detalle_entradas_mercaderiaCreateWithoutEntradas_mercaderiaInput, detalle_entradas_mercaderiaUncheckedCreateWithoutEntradas_mercaderiaInput> | detalle_entradas_mercaderiaCreateWithoutEntradas_mercaderiaInput[] | detalle_entradas_mercaderiaUncheckedCreateWithoutEntradas_mercaderiaInput[]
    connectOrCreate?: detalle_entradas_mercaderiaCreateOrConnectWithoutEntradas_mercaderiaInput | detalle_entradas_mercaderiaCreateOrConnectWithoutEntradas_mercaderiaInput[]
    upsert?: detalle_entradas_mercaderiaUpsertWithWhereUniqueWithoutEntradas_mercaderiaInput | detalle_entradas_mercaderiaUpsertWithWhereUniqueWithoutEntradas_mercaderiaInput[]
    createMany?: detalle_entradas_mercaderiaCreateManyEntradas_mercaderiaInputEnvelope
    set?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    disconnect?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    delete?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    connect?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    update?: detalle_entradas_mercaderiaUpdateWithWhereUniqueWithoutEntradas_mercaderiaInput | detalle_entradas_mercaderiaUpdateWithWhereUniqueWithoutEntradas_mercaderiaInput[]
    updateMany?: detalle_entradas_mercaderiaUpdateManyWithWhereWithoutEntradas_mercaderiaInput | detalle_entradas_mercaderiaUpdateManyWithWhereWithoutEntradas_mercaderiaInput[]
    deleteMany?: detalle_entradas_mercaderiaScalarWhereInput | detalle_entradas_mercaderiaScalarWhereInput[]
  }

  export type proveedoresUpdateOneRequiredWithoutEntradas_mercaderiaNestedInput = {
    create?: XOR<proveedoresCreateWithoutEntradas_mercaderiaInput, proveedoresUncheckedCreateWithoutEntradas_mercaderiaInput>
    connectOrCreate?: proveedoresCreateOrConnectWithoutEntradas_mercaderiaInput
    upsert?: proveedoresUpsertWithoutEntradas_mercaderiaInput
    connect?: proveedoresWhereUniqueInput
    update?: XOR<XOR<proveedoresUpdateToOneWithWhereWithoutEntradas_mercaderiaInput, proveedoresUpdateWithoutEntradas_mercaderiaInput>, proveedoresUncheckedUpdateWithoutEntradas_mercaderiaInput>
  }

  export type detalle_entradas_mercaderiaUncheckedUpdateManyWithoutEntradas_mercaderiaNestedInput = {
    create?: XOR<detalle_entradas_mercaderiaCreateWithoutEntradas_mercaderiaInput, detalle_entradas_mercaderiaUncheckedCreateWithoutEntradas_mercaderiaInput> | detalle_entradas_mercaderiaCreateWithoutEntradas_mercaderiaInput[] | detalle_entradas_mercaderiaUncheckedCreateWithoutEntradas_mercaderiaInput[]
    connectOrCreate?: detalle_entradas_mercaderiaCreateOrConnectWithoutEntradas_mercaderiaInput | detalle_entradas_mercaderiaCreateOrConnectWithoutEntradas_mercaderiaInput[]
    upsert?: detalle_entradas_mercaderiaUpsertWithWhereUniqueWithoutEntradas_mercaderiaInput | detalle_entradas_mercaderiaUpsertWithWhereUniqueWithoutEntradas_mercaderiaInput[]
    createMany?: detalle_entradas_mercaderiaCreateManyEntradas_mercaderiaInputEnvelope
    set?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    disconnect?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    delete?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    connect?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    update?: detalle_entradas_mercaderiaUpdateWithWhereUniqueWithoutEntradas_mercaderiaInput | detalle_entradas_mercaderiaUpdateWithWhereUniqueWithoutEntradas_mercaderiaInput[]
    updateMany?: detalle_entradas_mercaderiaUpdateManyWithWhereWithoutEntradas_mercaderiaInput | detalle_entradas_mercaderiaUpdateManyWithWhereWithoutEntradas_mercaderiaInput[]
    deleteMany?: detalle_entradas_mercaderiaScalarWhereInput | detalle_entradas_mercaderiaScalarWhereInput[]
  }

  export type Enumgastos_tipoFieldUpdateOperationsInput = {
    set?: $Enums.gastos_tipo
  }

  export type caja_diariaCreateNestedOneWithoutMovimientos_cajaInput = {
    create?: XOR<caja_diariaCreateWithoutMovimientos_cajaInput, caja_diariaUncheckedCreateWithoutMovimientos_cajaInput>
    connectOrCreate?: caja_diariaCreateOrConnectWithoutMovimientos_cajaInput
    connect?: caja_diariaWhereUniqueInput
  }

  export type Enummovimientos_caja_tipoFieldUpdateOperationsInput = {
    set?: $Enums.movimientos_caja_tipo
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnummovimientos_caja_referencia_tipoFieldUpdateOperationsInput = {
    set?: $Enums.movimientos_caja_referencia_tipo | null
  }

  export type caja_diariaUpdateOneRequiredWithoutMovimientos_cajaNestedInput = {
    create?: XOR<caja_diariaCreateWithoutMovimientos_cajaInput, caja_diariaUncheckedCreateWithoutMovimientos_cajaInput>
    connectOrCreate?: caja_diariaCreateOrConnectWithoutMovimientos_cajaInput
    upsert?: caja_diariaUpsertWithoutMovimientos_cajaInput
    connect?: caja_diariaWhereUniqueInput
    update?: XOR<XOR<caja_diariaUpdateToOneWithWhereWithoutMovimientos_cajaInput, caja_diariaUpdateWithoutMovimientos_cajaInput>, caja_diariaUncheckedUpdateWithoutMovimientos_cajaInput>
  }

  export type pedidosCreateNestedOneWithoutPagosInput = {
    create?: XOR<pedidosCreateWithoutPagosInput, pedidosUncheckedCreateWithoutPagosInput>
    connectOrCreate?: pedidosCreateOrConnectWithoutPagosInput
    connect?: pedidosWhereUniqueInput
  }

  export type Enumpagos_metodo_pagoFieldUpdateOperationsInput = {
    set?: $Enums.pagos_metodo_pago
  }

  export type pedidosUpdateOneRequiredWithoutPagosNestedInput = {
    create?: XOR<pedidosCreateWithoutPagosInput, pedidosUncheckedCreateWithoutPagosInput>
    connectOrCreate?: pedidosCreateOrConnectWithoutPagosInput
    upsert?: pedidosUpsertWithoutPagosInput
    connect?: pedidosWhereUniqueInput
    update?: XOR<XOR<pedidosUpdateToOneWithWhereWithoutPagosInput, pedidosUpdateWithoutPagosInput>, pedidosUncheckedUpdateWithoutPagosInput>
  }

  export type despachosCreateNestedManyWithoutPedidosInput = {
    create?: XOR<despachosCreateWithoutPedidosInput, despachosUncheckedCreateWithoutPedidosInput> | despachosCreateWithoutPedidosInput[] | despachosUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: despachosCreateOrConnectWithoutPedidosInput | despachosCreateOrConnectWithoutPedidosInput[]
    createMany?: despachosCreateManyPedidosInputEnvelope
    connect?: despachosWhereUniqueInput | despachosWhereUniqueInput[]
  }

  export type detalle_pedidosCreateNestedManyWithoutPedidosInput = {
    create?: XOR<detalle_pedidosCreateWithoutPedidosInput, detalle_pedidosUncheckedCreateWithoutPedidosInput> | detalle_pedidosCreateWithoutPedidosInput[] | detalle_pedidosUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: detalle_pedidosCreateOrConnectWithoutPedidosInput | detalle_pedidosCreateOrConnectWithoutPedidosInput[]
    createMany?: detalle_pedidosCreateManyPedidosInputEnvelope
    connect?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
  }

  export type pagosCreateNestedManyWithoutPedidosInput = {
    create?: XOR<pagosCreateWithoutPedidosInput, pagosUncheckedCreateWithoutPedidosInput> | pagosCreateWithoutPedidosInput[] | pagosUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutPedidosInput | pagosCreateOrConnectWithoutPedidosInput[]
    createMany?: pagosCreateManyPedidosInputEnvelope
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
  }

  export type clientesCreateNestedOneWithoutPedidosInput = {
    create?: XOR<clientesCreateWithoutPedidosInput, clientesUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: clientesCreateOrConnectWithoutPedidosInput
    connect?: clientesWhereUniqueInput
  }

  export type vendedoresCreateNestedOneWithoutPedidosInput = {
    create?: XOR<vendedoresCreateWithoutPedidosInput, vendedoresUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: vendedoresCreateOrConnectWithoutPedidosInput
    connect?: vendedoresWhereUniqueInput
  }

  export type despachosUncheckedCreateNestedManyWithoutPedidosInput = {
    create?: XOR<despachosCreateWithoutPedidosInput, despachosUncheckedCreateWithoutPedidosInput> | despachosCreateWithoutPedidosInput[] | despachosUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: despachosCreateOrConnectWithoutPedidosInput | despachosCreateOrConnectWithoutPedidosInput[]
    createMany?: despachosCreateManyPedidosInputEnvelope
    connect?: despachosWhereUniqueInput | despachosWhereUniqueInput[]
  }

  export type detalle_pedidosUncheckedCreateNestedManyWithoutPedidosInput = {
    create?: XOR<detalle_pedidosCreateWithoutPedidosInput, detalle_pedidosUncheckedCreateWithoutPedidosInput> | detalle_pedidosCreateWithoutPedidosInput[] | detalle_pedidosUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: detalle_pedidosCreateOrConnectWithoutPedidosInput | detalle_pedidosCreateOrConnectWithoutPedidosInput[]
    createMany?: detalle_pedidosCreateManyPedidosInputEnvelope
    connect?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
  }

  export type pagosUncheckedCreateNestedManyWithoutPedidosInput = {
    create?: XOR<pagosCreateWithoutPedidosInput, pagosUncheckedCreateWithoutPedidosInput> | pagosCreateWithoutPedidosInput[] | pagosUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutPedidosInput | pagosCreateOrConnectWithoutPedidosInput[]
    createMany?: pagosCreateManyPedidosInputEnvelope
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
  }

  export type Enumpedidos_estadoFieldUpdateOperationsInput = {
    set?: $Enums.pedidos_estado
  }

  export type despachosUpdateManyWithoutPedidosNestedInput = {
    create?: XOR<despachosCreateWithoutPedidosInput, despachosUncheckedCreateWithoutPedidosInput> | despachosCreateWithoutPedidosInput[] | despachosUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: despachosCreateOrConnectWithoutPedidosInput | despachosCreateOrConnectWithoutPedidosInput[]
    upsert?: despachosUpsertWithWhereUniqueWithoutPedidosInput | despachosUpsertWithWhereUniqueWithoutPedidosInput[]
    createMany?: despachosCreateManyPedidosInputEnvelope
    set?: despachosWhereUniqueInput | despachosWhereUniqueInput[]
    disconnect?: despachosWhereUniqueInput | despachosWhereUniqueInput[]
    delete?: despachosWhereUniqueInput | despachosWhereUniqueInput[]
    connect?: despachosWhereUniqueInput | despachosWhereUniqueInput[]
    update?: despachosUpdateWithWhereUniqueWithoutPedidosInput | despachosUpdateWithWhereUniqueWithoutPedidosInput[]
    updateMany?: despachosUpdateManyWithWhereWithoutPedidosInput | despachosUpdateManyWithWhereWithoutPedidosInput[]
    deleteMany?: despachosScalarWhereInput | despachosScalarWhereInput[]
  }

  export type detalle_pedidosUpdateManyWithoutPedidosNestedInput = {
    create?: XOR<detalle_pedidosCreateWithoutPedidosInput, detalle_pedidosUncheckedCreateWithoutPedidosInput> | detalle_pedidosCreateWithoutPedidosInput[] | detalle_pedidosUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: detalle_pedidosCreateOrConnectWithoutPedidosInput | detalle_pedidosCreateOrConnectWithoutPedidosInput[]
    upsert?: detalle_pedidosUpsertWithWhereUniqueWithoutPedidosInput | detalle_pedidosUpsertWithWhereUniqueWithoutPedidosInput[]
    createMany?: detalle_pedidosCreateManyPedidosInputEnvelope
    set?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    disconnect?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    delete?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    connect?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    update?: detalle_pedidosUpdateWithWhereUniqueWithoutPedidosInput | detalle_pedidosUpdateWithWhereUniqueWithoutPedidosInput[]
    updateMany?: detalle_pedidosUpdateManyWithWhereWithoutPedidosInput | detalle_pedidosUpdateManyWithWhereWithoutPedidosInput[]
    deleteMany?: detalle_pedidosScalarWhereInput | detalle_pedidosScalarWhereInput[]
  }

  export type pagosUpdateManyWithoutPedidosNestedInput = {
    create?: XOR<pagosCreateWithoutPedidosInput, pagosUncheckedCreateWithoutPedidosInput> | pagosCreateWithoutPedidosInput[] | pagosUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutPedidosInput | pagosCreateOrConnectWithoutPedidosInput[]
    upsert?: pagosUpsertWithWhereUniqueWithoutPedidosInput | pagosUpsertWithWhereUniqueWithoutPedidosInput[]
    createMany?: pagosCreateManyPedidosInputEnvelope
    set?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    disconnect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    delete?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    update?: pagosUpdateWithWhereUniqueWithoutPedidosInput | pagosUpdateWithWhereUniqueWithoutPedidosInput[]
    updateMany?: pagosUpdateManyWithWhereWithoutPedidosInput | pagosUpdateManyWithWhereWithoutPedidosInput[]
    deleteMany?: pagosScalarWhereInput | pagosScalarWhereInput[]
  }

  export type clientesUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<clientesCreateWithoutPedidosInput, clientesUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: clientesCreateOrConnectWithoutPedidosInput
    upsert?: clientesUpsertWithoutPedidosInput
    connect?: clientesWhereUniqueInput
    update?: XOR<XOR<clientesUpdateToOneWithWhereWithoutPedidosInput, clientesUpdateWithoutPedidosInput>, clientesUncheckedUpdateWithoutPedidosInput>
  }

  export type vendedoresUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<vendedoresCreateWithoutPedidosInput, vendedoresUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: vendedoresCreateOrConnectWithoutPedidosInput
    upsert?: vendedoresUpsertWithoutPedidosInput
    connect?: vendedoresWhereUniqueInput
    update?: XOR<XOR<vendedoresUpdateToOneWithWhereWithoutPedidosInput, vendedoresUpdateWithoutPedidosInput>, vendedoresUncheckedUpdateWithoutPedidosInput>
  }

  export type despachosUncheckedUpdateManyWithoutPedidosNestedInput = {
    create?: XOR<despachosCreateWithoutPedidosInput, despachosUncheckedCreateWithoutPedidosInput> | despachosCreateWithoutPedidosInput[] | despachosUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: despachosCreateOrConnectWithoutPedidosInput | despachosCreateOrConnectWithoutPedidosInput[]
    upsert?: despachosUpsertWithWhereUniqueWithoutPedidosInput | despachosUpsertWithWhereUniqueWithoutPedidosInput[]
    createMany?: despachosCreateManyPedidosInputEnvelope
    set?: despachosWhereUniqueInput | despachosWhereUniqueInput[]
    disconnect?: despachosWhereUniqueInput | despachosWhereUniqueInput[]
    delete?: despachosWhereUniqueInput | despachosWhereUniqueInput[]
    connect?: despachosWhereUniqueInput | despachosWhereUniqueInput[]
    update?: despachosUpdateWithWhereUniqueWithoutPedidosInput | despachosUpdateWithWhereUniqueWithoutPedidosInput[]
    updateMany?: despachosUpdateManyWithWhereWithoutPedidosInput | despachosUpdateManyWithWhereWithoutPedidosInput[]
    deleteMany?: despachosScalarWhereInput | despachosScalarWhereInput[]
  }

  export type detalle_pedidosUncheckedUpdateManyWithoutPedidosNestedInput = {
    create?: XOR<detalle_pedidosCreateWithoutPedidosInput, detalle_pedidosUncheckedCreateWithoutPedidosInput> | detalle_pedidosCreateWithoutPedidosInput[] | detalle_pedidosUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: detalle_pedidosCreateOrConnectWithoutPedidosInput | detalle_pedidosCreateOrConnectWithoutPedidosInput[]
    upsert?: detalle_pedidosUpsertWithWhereUniqueWithoutPedidosInput | detalle_pedidosUpsertWithWhereUniqueWithoutPedidosInput[]
    createMany?: detalle_pedidosCreateManyPedidosInputEnvelope
    set?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    disconnect?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    delete?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    connect?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    update?: detalle_pedidosUpdateWithWhereUniqueWithoutPedidosInput | detalle_pedidosUpdateWithWhereUniqueWithoutPedidosInput[]
    updateMany?: detalle_pedidosUpdateManyWithWhereWithoutPedidosInput | detalle_pedidosUpdateManyWithWhereWithoutPedidosInput[]
    deleteMany?: detalle_pedidosScalarWhereInput | detalle_pedidosScalarWhereInput[]
  }

  export type pagosUncheckedUpdateManyWithoutPedidosNestedInput = {
    create?: XOR<pagosCreateWithoutPedidosInput, pagosUncheckedCreateWithoutPedidosInput> | pagosCreateWithoutPedidosInput[] | pagosUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutPedidosInput | pagosCreateOrConnectWithoutPedidosInput[]
    upsert?: pagosUpsertWithWhereUniqueWithoutPedidosInput | pagosUpsertWithWhereUniqueWithoutPedidosInput[]
    createMany?: pagosCreateManyPedidosInputEnvelope
    set?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    disconnect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    delete?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    update?: pagosUpdateWithWhereUniqueWithoutPedidosInput | pagosUpdateWithWhereUniqueWithoutPedidosInput[]
    updateMany?: pagosUpdateManyWithWhereWithoutPedidosInput | pagosUpdateManyWithWhereWithoutPedidosInput[]
    deleteMany?: pagosScalarWhereInput | pagosScalarWhereInput[]
  }

  export type productosCreateNestedManyWithoutPresentacionesInput = {
    create?: XOR<productosCreateWithoutPresentacionesInput, productosUncheckedCreateWithoutPresentacionesInput> | productosCreateWithoutPresentacionesInput[] | productosUncheckedCreateWithoutPresentacionesInput[]
    connectOrCreate?: productosCreateOrConnectWithoutPresentacionesInput | productosCreateOrConnectWithoutPresentacionesInput[]
    createMany?: productosCreateManyPresentacionesInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type productosUncheckedCreateNestedManyWithoutPresentacionesInput = {
    create?: XOR<productosCreateWithoutPresentacionesInput, productosUncheckedCreateWithoutPresentacionesInput> | productosCreateWithoutPresentacionesInput[] | productosUncheckedCreateWithoutPresentacionesInput[]
    connectOrCreate?: productosCreateOrConnectWithoutPresentacionesInput | productosCreateOrConnectWithoutPresentacionesInput[]
    createMany?: productosCreateManyPresentacionesInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type productosUpdateManyWithoutPresentacionesNestedInput = {
    create?: XOR<productosCreateWithoutPresentacionesInput, productosUncheckedCreateWithoutPresentacionesInput> | productosCreateWithoutPresentacionesInput[] | productosUncheckedCreateWithoutPresentacionesInput[]
    connectOrCreate?: productosCreateOrConnectWithoutPresentacionesInput | productosCreateOrConnectWithoutPresentacionesInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutPresentacionesInput | productosUpsertWithWhereUniqueWithoutPresentacionesInput[]
    createMany?: productosCreateManyPresentacionesInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutPresentacionesInput | productosUpdateWithWhereUniqueWithoutPresentacionesInput[]
    updateMany?: productosUpdateManyWithWhereWithoutPresentacionesInput | productosUpdateManyWithWhereWithoutPresentacionesInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type productosUncheckedUpdateManyWithoutPresentacionesNestedInput = {
    create?: XOR<productosCreateWithoutPresentacionesInput, productosUncheckedCreateWithoutPresentacionesInput> | productosCreateWithoutPresentacionesInput[] | productosUncheckedCreateWithoutPresentacionesInput[]
    connectOrCreate?: productosCreateOrConnectWithoutPresentacionesInput | productosCreateOrConnectWithoutPresentacionesInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutPresentacionesInput | productosUpsertWithWhereUniqueWithoutPresentacionesInput[]
    createMany?: productosCreateManyPresentacionesInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutPresentacionesInput | productosUpdateWithWhereUniqueWithoutPresentacionesInput[]
    updateMany?: productosUpdateManyWithWhereWithoutPresentacionesInput | productosUpdateManyWithWhereWithoutPresentacionesInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type detalle_entradas_mercaderiaCreateNestedManyWithoutProductosInput = {
    create?: XOR<detalle_entradas_mercaderiaCreateWithoutProductosInput, detalle_entradas_mercaderiaUncheckedCreateWithoutProductosInput> | detalle_entradas_mercaderiaCreateWithoutProductosInput[] | detalle_entradas_mercaderiaUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalle_entradas_mercaderiaCreateOrConnectWithoutProductosInput | detalle_entradas_mercaderiaCreateOrConnectWithoutProductosInput[]
    createMany?: detalle_entradas_mercaderiaCreateManyProductosInputEnvelope
    connect?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
  }

  export type detalle_pedidosCreateNestedManyWithoutProductosInput = {
    create?: XOR<detalle_pedidosCreateWithoutProductosInput, detalle_pedidosUncheckedCreateWithoutProductosInput> | detalle_pedidosCreateWithoutProductosInput[] | detalle_pedidosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalle_pedidosCreateOrConnectWithoutProductosInput | detalle_pedidosCreateOrConnectWithoutProductosInput[]
    createMany?: detalle_pedidosCreateManyProductosInputEnvelope
    connect?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
  }

  export type categoriasCreateNestedOneWithoutProductosInput = {
    create?: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProductosInput
    connect?: categoriasWhereUniqueInput
  }

  export type presentacionesCreateNestedOneWithoutProductosInput = {
    create?: XOR<presentacionesCreateWithoutProductosInput, presentacionesUncheckedCreateWithoutProductosInput>
    connectOrCreate?: presentacionesCreateOrConnectWithoutProductosInput
    connect?: presentacionesWhereUniqueInput
  }

  export type detalle_entradas_mercaderiaUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<detalle_entradas_mercaderiaCreateWithoutProductosInput, detalle_entradas_mercaderiaUncheckedCreateWithoutProductosInput> | detalle_entradas_mercaderiaCreateWithoutProductosInput[] | detalle_entradas_mercaderiaUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalle_entradas_mercaderiaCreateOrConnectWithoutProductosInput | detalle_entradas_mercaderiaCreateOrConnectWithoutProductosInput[]
    createMany?: detalle_entradas_mercaderiaCreateManyProductosInputEnvelope
    connect?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
  }

  export type detalle_pedidosUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<detalle_pedidosCreateWithoutProductosInput, detalle_pedidosUncheckedCreateWithoutProductosInput> | detalle_pedidosCreateWithoutProductosInput[] | detalle_pedidosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalle_pedidosCreateOrConnectWithoutProductosInput | detalle_pedidosCreateOrConnectWithoutProductosInput[]
    createMany?: detalle_pedidosCreateManyProductosInputEnvelope
    connect?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
  }

  export type detalle_entradas_mercaderiaUpdateManyWithoutProductosNestedInput = {
    create?: XOR<detalle_entradas_mercaderiaCreateWithoutProductosInput, detalle_entradas_mercaderiaUncheckedCreateWithoutProductosInput> | detalle_entradas_mercaderiaCreateWithoutProductosInput[] | detalle_entradas_mercaderiaUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalle_entradas_mercaderiaCreateOrConnectWithoutProductosInput | detalle_entradas_mercaderiaCreateOrConnectWithoutProductosInput[]
    upsert?: detalle_entradas_mercaderiaUpsertWithWhereUniqueWithoutProductosInput | detalle_entradas_mercaderiaUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: detalle_entradas_mercaderiaCreateManyProductosInputEnvelope
    set?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    disconnect?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    delete?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    connect?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    update?: detalle_entradas_mercaderiaUpdateWithWhereUniqueWithoutProductosInput | detalle_entradas_mercaderiaUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: detalle_entradas_mercaderiaUpdateManyWithWhereWithoutProductosInput | detalle_entradas_mercaderiaUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: detalle_entradas_mercaderiaScalarWhereInput | detalle_entradas_mercaderiaScalarWhereInput[]
  }

  export type detalle_pedidosUpdateManyWithoutProductosNestedInput = {
    create?: XOR<detalle_pedidosCreateWithoutProductosInput, detalle_pedidosUncheckedCreateWithoutProductosInput> | detalle_pedidosCreateWithoutProductosInput[] | detalle_pedidosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalle_pedidosCreateOrConnectWithoutProductosInput | detalle_pedidosCreateOrConnectWithoutProductosInput[]
    upsert?: detalle_pedidosUpsertWithWhereUniqueWithoutProductosInput | detalle_pedidosUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: detalle_pedidosCreateManyProductosInputEnvelope
    set?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    disconnect?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    delete?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    connect?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    update?: detalle_pedidosUpdateWithWhereUniqueWithoutProductosInput | detalle_pedidosUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: detalle_pedidosUpdateManyWithWhereWithoutProductosInput | detalle_pedidosUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: detalle_pedidosScalarWhereInput | detalle_pedidosScalarWhereInput[]
  }

  export type categoriasUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProductosInput
    upsert?: categoriasUpsertWithoutProductosInput
    connect?: categoriasWhereUniqueInput
    update?: XOR<XOR<categoriasUpdateToOneWithWhereWithoutProductosInput, categoriasUpdateWithoutProductosInput>, categoriasUncheckedUpdateWithoutProductosInput>
  }

  export type presentacionesUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<presentacionesCreateWithoutProductosInput, presentacionesUncheckedCreateWithoutProductosInput>
    connectOrCreate?: presentacionesCreateOrConnectWithoutProductosInput
    upsert?: presentacionesUpsertWithoutProductosInput
    connect?: presentacionesWhereUniqueInput
    update?: XOR<XOR<presentacionesUpdateToOneWithWhereWithoutProductosInput, presentacionesUpdateWithoutProductosInput>, presentacionesUncheckedUpdateWithoutProductosInput>
  }

  export type detalle_entradas_mercaderiaUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<detalle_entradas_mercaderiaCreateWithoutProductosInput, detalle_entradas_mercaderiaUncheckedCreateWithoutProductosInput> | detalle_entradas_mercaderiaCreateWithoutProductosInput[] | detalle_entradas_mercaderiaUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalle_entradas_mercaderiaCreateOrConnectWithoutProductosInput | detalle_entradas_mercaderiaCreateOrConnectWithoutProductosInput[]
    upsert?: detalle_entradas_mercaderiaUpsertWithWhereUniqueWithoutProductosInput | detalle_entradas_mercaderiaUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: detalle_entradas_mercaderiaCreateManyProductosInputEnvelope
    set?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    disconnect?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    delete?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    connect?: detalle_entradas_mercaderiaWhereUniqueInput | detalle_entradas_mercaderiaWhereUniqueInput[]
    update?: detalle_entradas_mercaderiaUpdateWithWhereUniqueWithoutProductosInput | detalle_entradas_mercaderiaUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: detalle_entradas_mercaderiaUpdateManyWithWhereWithoutProductosInput | detalle_entradas_mercaderiaUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: detalle_entradas_mercaderiaScalarWhereInput | detalle_entradas_mercaderiaScalarWhereInput[]
  }

  export type detalle_pedidosUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<detalle_pedidosCreateWithoutProductosInput, detalle_pedidosUncheckedCreateWithoutProductosInput> | detalle_pedidosCreateWithoutProductosInput[] | detalle_pedidosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: detalle_pedidosCreateOrConnectWithoutProductosInput | detalle_pedidosCreateOrConnectWithoutProductosInput[]
    upsert?: detalle_pedidosUpsertWithWhereUniqueWithoutProductosInput | detalle_pedidosUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: detalle_pedidosCreateManyProductosInputEnvelope
    set?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    disconnect?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    delete?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    connect?: detalle_pedidosWhereUniqueInput | detalle_pedidosWhereUniqueInput[]
    update?: detalle_pedidosUpdateWithWhereUniqueWithoutProductosInput | detalle_pedidosUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: detalle_pedidosUpdateManyWithWhereWithoutProductosInput | detalle_pedidosUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: detalle_pedidosScalarWhereInput | detalle_pedidosScalarWhereInput[]
  }

  export type entradas_mercaderiaCreateNestedManyWithoutProveedoresInput = {
    create?: XOR<entradas_mercaderiaCreateWithoutProveedoresInput, entradas_mercaderiaUncheckedCreateWithoutProveedoresInput> | entradas_mercaderiaCreateWithoutProveedoresInput[] | entradas_mercaderiaUncheckedCreateWithoutProveedoresInput[]
    connectOrCreate?: entradas_mercaderiaCreateOrConnectWithoutProveedoresInput | entradas_mercaderiaCreateOrConnectWithoutProveedoresInput[]
    createMany?: entradas_mercaderiaCreateManyProveedoresInputEnvelope
    connect?: entradas_mercaderiaWhereUniqueInput | entradas_mercaderiaWhereUniqueInput[]
  }

  export type entradas_mercaderiaUncheckedCreateNestedManyWithoutProveedoresInput = {
    create?: XOR<entradas_mercaderiaCreateWithoutProveedoresInput, entradas_mercaderiaUncheckedCreateWithoutProveedoresInput> | entradas_mercaderiaCreateWithoutProveedoresInput[] | entradas_mercaderiaUncheckedCreateWithoutProveedoresInput[]
    connectOrCreate?: entradas_mercaderiaCreateOrConnectWithoutProveedoresInput | entradas_mercaderiaCreateOrConnectWithoutProveedoresInput[]
    createMany?: entradas_mercaderiaCreateManyProveedoresInputEnvelope
    connect?: entradas_mercaderiaWhereUniqueInput | entradas_mercaderiaWhereUniqueInput[]
  }

  export type entradas_mercaderiaUpdateManyWithoutProveedoresNestedInput = {
    create?: XOR<entradas_mercaderiaCreateWithoutProveedoresInput, entradas_mercaderiaUncheckedCreateWithoutProveedoresInput> | entradas_mercaderiaCreateWithoutProveedoresInput[] | entradas_mercaderiaUncheckedCreateWithoutProveedoresInput[]
    connectOrCreate?: entradas_mercaderiaCreateOrConnectWithoutProveedoresInput | entradas_mercaderiaCreateOrConnectWithoutProveedoresInput[]
    upsert?: entradas_mercaderiaUpsertWithWhereUniqueWithoutProveedoresInput | entradas_mercaderiaUpsertWithWhereUniqueWithoutProveedoresInput[]
    createMany?: entradas_mercaderiaCreateManyProveedoresInputEnvelope
    set?: entradas_mercaderiaWhereUniqueInput | entradas_mercaderiaWhereUniqueInput[]
    disconnect?: entradas_mercaderiaWhereUniqueInput | entradas_mercaderiaWhereUniqueInput[]
    delete?: entradas_mercaderiaWhereUniqueInput | entradas_mercaderiaWhereUniqueInput[]
    connect?: entradas_mercaderiaWhereUniqueInput | entradas_mercaderiaWhereUniqueInput[]
    update?: entradas_mercaderiaUpdateWithWhereUniqueWithoutProveedoresInput | entradas_mercaderiaUpdateWithWhereUniqueWithoutProveedoresInput[]
    updateMany?: entradas_mercaderiaUpdateManyWithWhereWithoutProveedoresInput | entradas_mercaderiaUpdateManyWithWhereWithoutProveedoresInput[]
    deleteMany?: entradas_mercaderiaScalarWhereInput | entradas_mercaderiaScalarWhereInput[]
  }

  export type entradas_mercaderiaUncheckedUpdateManyWithoutProveedoresNestedInput = {
    create?: XOR<entradas_mercaderiaCreateWithoutProveedoresInput, entradas_mercaderiaUncheckedCreateWithoutProveedoresInput> | entradas_mercaderiaCreateWithoutProveedoresInput[] | entradas_mercaderiaUncheckedCreateWithoutProveedoresInput[]
    connectOrCreate?: entradas_mercaderiaCreateOrConnectWithoutProveedoresInput | entradas_mercaderiaCreateOrConnectWithoutProveedoresInput[]
    upsert?: entradas_mercaderiaUpsertWithWhereUniqueWithoutProveedoresInput | entradas_mercaderiaUpsertWithWhereUniqueWithoutProveedoresInput[]
    createMany?: entradas_mercaderiaCreateManyProveedoresInputEnvelope
    set?: entradas_mercaderiaWhereUniqueInput | entradas_mercaderiaWhereUniqueInput[]
    disconnect?: entradas_mercaderiaWhereUniqueInput | entradas_mercaderiaWhereUniqueInput[]
    delete?: entradas_mercaderiaWhereUniqueInput | entradas_mercaderiaWhereUniqueInput[]
    connect?: entradas_mercaderiaWhereUniqueInput | entradas_mercaderiaWhereUniqueInput[]
    update?: entradas_mercaderiaUpdateWithWhereUniqueWithoutProveedoresInput | entradas_mercaderiaUpdateWithWhereUniqueWithoutProveedoresInput[]
    updateMany?: entradas_mercaderiaUpdateManyWithWhereWithoutProveedoresInput | entradas_mercaderiaUpdateManyWithWhereWithoutProveedoresInput[]
    deleteMany?: entradas_mercaderiaScalarWhereInput | entradas_mercaderiaScalarWhereInput[]
  }

  export type pedidosCreateNestedManyWithoutVendedoresInput = {
    create?: XOR<pedidosCreateWithoutVendedoresInput, pedidosUncheckedCreateWithoutVendedoresInput> | pedidosCreateWithoutVendedoresInput[] | pedidosUncheckedCreateWithoutVendedoresInput[]
    connectOrCreate?: pedidosCreateOrConnectWithoutVendedoresInput | pedidosCreateOrConnectWithoutVendedoresInput[]
    createMany?: pedidosCreateManyVendedoresInputEnvelope
    connect?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
  }

  export type pedidosUncheckedCreateNestedManyWithoutVendedoresInput = {
    create?: XOR<pedidosCreateWithoutVendedoresInput, pedidosUncheckedCreateWithoutVendedoresInput> | pedidosCreateWithoutVendedoresInput[] | pedidosUncheckedCreateWithoutVendedoresInput[]
    connectOrCreate?: pedidosCreateOrConnectWithoutVendedoresInput | pedidosCreateOrConnectWithoutVendedoresInput[]
    createMany?: pedidosCreateManyVendedoresInputEnvelope
    connect?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
  }

  export type pedidosUpdateManyWithoutVendedoresNestedInput = {
    create?: XOR<pedidosCreateWithoutVendedoresInput, pedidosUncheckedCreateWithoutVendedoresInput> | pedidosCreateWithoutVendedoresInput[] | pedidosUncheckedCreateWithoutVendedoresInput[]
    connectOrCreate?: pedidosCreateOrConnectWithoutVendedoresInput | pedidosCreateOrConnectWithoutVendedoresInput[]
    upsert?: pedidosUpsertWithWhereUniqueWithoutVendedoresInput | pedidosUpsertWithWhereUniqueWithoutVendedoresInput[]
    createMany?: pedidosCreateManyVendedoresInputEnvelope
    set?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    disconnect?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    delete?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    connect?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    update?: pedidosUpdateWithWhereUniqueWithoutVendedoresInput | pedidosUpdateWithWhereUniqueWithoutVendedoresInput[]
    updateMany?: pedidosUpdateManyWithWhereWithoutVendedoresInput | pedidosUpdateManyWithWhereWithoutVendedoresInput[]
    deleteMany?: pedidosScalarWhereInput | pedidosScalarWhereInput[]
  }

  export type pedidosUncheckedUpdateManyWithoutVendedoresNestedInput = {
    create?: XOR<pedidosCreateWithoutVendedoresInput, pedidosUncheckedCreateWithoutVendedoresInput> | pedidosCreateWithoutVendedoresInput[] | pedidosUncheckedCreateWithoutVendedoresInput[]
    connectOrCreate?: pedidosCreateOrConnectWithoutVendedoresInput | pedidosCreateOrConnectWithoutVendedoresInput[]
    upsert?: pedidosUpsertWithWhereUniqueWithoutVendedoresInput | pedidosUpsertWithWhereUniqueWithoutVendedoresInput[]
    createMany?: pedidosCreateManyVendedoresInputEnvelope
    set?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    disconnect?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    delete?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    connect?: pedidosWhereUniqueInput | pedidosWhereUniqueInput[]
    update?: pedidosUpdateWithWhereUniqueWithoutVendedoresInput | pedidosUpdateWithWhereUniqueWithoutVendedoresInput[]
    updateMany?: pedidosUpdateManyWithWhereWithoutVendedoresInput | pedidosUpdateManyWithWhereWithoutVendedoresInput[]
    deleteMany?: pedidosScalarWhereInput | pedidosScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumcaja_diaria_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.caja_diaria_estado | Enumcaja_diaria_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.caja_diaria_estado[]
    notIn?: $Enums.caja_diaria_estado[]
    not?: NestedEnumcaja_diaria_estadoFilter<$PrismaModel> | $Enums.caja_diaria_estado
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumcaja_diaria_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.caja_diaria_estado | Enumcaja_diaria_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.caja_diaria_estado[]
    notIn?: $Enums.caja_diaria_estado[]
    not?: NestedEnumcaja_diaria_estadoWithAggregatesFilter<$PrismaModel> | $Enums.caja_diaria_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcaja_diaria_estadoFilter<$PrismaModel>
    _max?: NestedEnumcaja_diaria_estadoFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumclientes_tipo_documentoFilter<$PrismaModel = never> = {
    equals?: $Enums.clientes_tipo_documento | Enumclientes_tipo_documentoFieldRefInput<$PrismaModel>
    in?: $Enums.clientes_tipo_documento[]
    notIn?: $Enums.clientes_tipo_documento[]
    not?: NestedEnumclientes_tipo_documentoFilter<$PrismaModel> | $Enums.clientes_tipo_documento
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumclientes_tipo_documentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.clientes_tipo_documento | Enumclientes_tipo_documentoFieldRefInput<$PrismaModel>
    in?: $Enums.clientes_tipo_documento[]
    notIn?: $Enums.clientes_tipo_documento[]
    not?: NestedEnumclientes_tipo_documentoWithAggregatesFilter<$PrismaModel> | $Enums.clientes_tipo_documento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumclientes_tipo_documentoFilter<$PrismaModel>
    _max?: NestedEnumclientes_tipo_documentoFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumdespachos_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.despachos_estado | Enumdespachos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.despachos_estado[]
    notIn?: $Enums.despachos_estado[]
    not?: NestedEnumdespachos_estadoFilter<$PrismaModel> | $Enums.despachos_estado
  }

  export type NestedEnumdespachos_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.despachos_estado | Enumdespachos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.despachos_estado[]
    notIn?: $Enums.despachos_estado[]
    not?: NestedEnumdespachos_estadoWithAggregatesFilter<$PrismaModel> | $Enums.despachos_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdespachos_estadoFilter<$PrismaModel>
    _max?: NestedEnumdespachos_estadoFilter<$PrismaModel>
  }

  export type NestedEnumgastos_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.gastos_tipo | Enumgastos_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.gastos_tipo[]
    notIn?: $Enums.gastos_tipo[]
    not?: NestedEnumgastos_tipoFilter<$PrismaModel> | $Enums.gastos_tipo
  }

  export type NestedEnumgastos_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gastos_tipo | Enumgastos_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.gastos_tipo[]
    notIn?: $Enums.gastos_tipo[]
    not?: NestedEnumgastos_tipoWithAggregatesFilter<$PrismaModel> | $Enums.gastos_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgastos_tipoFilter<$PrismaModel>
    _max?: NestedEnumgastos_tipoFilter<$PrismaModel>
  }

  export type NestedEnummovimientos_caja_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientos_caja_tipo | Enummovimientos_caja_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.movimientos_caja_tipo[]
    notIn?: $Enums.movimientos_caja_tipo[]
    not?: NestedEnummovimientos_caja_tipoFilter<$PrismaModel> | $Enums.movimientos_caja_tipo
  }

  export type NestedEnummovimientos_caja_referencia_tipoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientos_caja_referencia_tipo | Enummovimientos_caja_referencia_tipoFieldRefInput<$PrismaModel> | null
    in?: $Enums.movimientos_caja_referencia_tipo[] | null
    notIn?: $Enums.movimientos_caja_referencia_tipo[] | null
    not?: NestedEnummovimientos_caja_referencia_tipoNullableFilter<$PrismaModel> | $Enums.movimientos_caja_referencia_tipo | null
  }

  export type NestedEnummovimientos_caja_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientos_caja_tipo | Enummovimientos_caja_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.movimientos_caja_tipo[]
    notIn?: $Enums.movimientos_caja_tipo[]
    not?: NestedEnummovimientos_caja_tipoWithAggregatesFilter<$PrismaModel> | $Enums.movimientos_caja_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummovimientos_caja_tipoFilter<$PrismaModel>
    _max?: NestedEnummovimientos_caja_tipoFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnummovimientos_caja_referencia_tipoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientos_caja_referencia_tipo | Enummovimientos_caja_referencia_tipoFieldRefInput<$PrismaModel> | null
    in?: $Enums.movimientos_caja_referencia_tipo[] | null
    notIn?: $Enums.movimientos_caja_referencia_tipo[] | null
    not?: NestedEnummovimientos_caja_referencia_tipoNullableWithAggregatesFilter<$PrismaModel> | $Enums.movimientos_caja_referencia_tipo | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnummovimientos_caja_referencia_tipoNullableFilter<$PrismaModel>
    _max?: NestedEnummovimientos_caja_referencia_tipoNullableFilter<$PrismaModel>
  }

  export type NestedEnumpagos_metodo_pagoFilter<$PrismaModel = never> = {
    equals?: $Enums.pagos_metodo_pago | Enumpagos_metodo_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pagos_metodo_pago[]
    notIn?: $Enums.pagos_metodo_pago[]
    not?: NestedEnumpagos_metodo_pagoFilter<$PrismaModel> | $Enums.pagos_metodo_pago
  }

  export type NestedEnumpagos_metodo_pagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pagos_metodo_pago | Enumpagos_metodo_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pagos_metodo_pago[]
    notIn?: $Enums.pagos_metodo_pago[]
    not?: NestedEnumpagos_metodo_pagoWithAggregatesFilter<$PrismaModel> | $Enums.pagos_metodo_pago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpagos_metodo_pagoFilter<$PrismaModel>
    _max?: NestedEnumpagos_metodo_pagoFilter<$PrismaModel>
  }

  export type NestedEnumpedidos_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.pedidos_estado | Enumpedidos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.pedidos_estado[]
    notIn?: $Enums.pedidos_estado[]
    not?: NestedEnumpedidos_estadoFilter<$PrismaModel> | $Enums.pedidos_estado
  }

  export type NestedEnumpedidos_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pedidos_estado | Enumpedidos_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.pedidos_estado[]
    notIn?: $Enums.pedidos_estado[]
    not?: NestedEnumpedidos_estadoWithAggregatesFilter<$PrismaModel> | $Enums.pedidos_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpedidos_estadoFilter<$PrismaModel>
    _max?: NestedEnumpedidos_estadoFilter<$PrismaModel>
  }

  export type movimientos_cajaCreateWithoutCaja_diariaInput = {
    fecha_hora: Date | string
    tipo: $Enums.movimientos_caja_tipo
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    referencia_id?: number | null
    referencia_tipo?: $Enums.movimientos_caja_referencia_tipo | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type movimientos_cajaUncheckedCreateWithoutCaja_diariaInput = {
    id?: number
    fecha_hora: Date | string
    tipo: $Enums.movimientos_caja_tipo
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    referencia_id?: number | null
    referencia_tipo?: $Enums.movimientos_caja_referencia_tipo | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type movimientos_cajaCreateOrConnectWithoutCaja_diariaInput = {
    where: movimientos_cajaWhereUniqueInput
    create: XOR<movimientos_cajaCreateWithoutCaja_diariaInput, movimientos_cajaUncheckedCreateWithoutCaja_diariaInput>
  }

  export type movimientos_cajaCreateManyCaja_diariaInputEnvelope = {
    data: movimientos_cajaCreateManyCaja_diariaInput | movimientos_cajaCreateManyCaja_diariaInput[]
    skipDuplicates?: boolean
  }

  export type movimientos_cajaUpsertWithWhereUniqueWithoutCaja_diariaInput = {
    where: movimientos_cajaWhereUniqueInput
    update: XOR<movimientos_cajaUpdateWithoutCaja_diariaInput, movimientos_cajaUncheckedUpdateWithoutCaja_diariaInput>
    create: XOR<movimientos_cajaCreateWithoutCaja_diariaInput, movimientos_cajaUncheckedCreateWithoutCaja_diariaInput>
  }

  export type movimientos_cajaUpdateWithWhereUniqueWithoutCaja_diariaInput = {
    where: movimientos_cajaWhereUniqueInput
    data: XOR<movimientos_cajaUpdateWithoutCaja_diariaInput, movimientos_cajaUncheckedUpdateWithoutCaja_diariaInput>
  }

  export type movimientos_cajaUpdateManyWithWhereWithoutCaja_diariaInput = {
    where: movimientos_cajaScalarWhereInput
    data: XOR<movimientos_cajaUpdateManyMutationInput, movimientos_cajaUncheckedUpdateManyWithoutCaja_diariaInput>
  }

  export type movimientos_cajaScalarWhereInput = {
    AND?: movimientos_cajaScalarWhereInput | movimientos_cajaScalarWhereInput[]
    OR?: movimientos_cajaScalarWhereInput[]
    NOT?: movimientos_cajaScalarWhereInput | movimientos_cajaScalarWhereInput[]
    id?: IntFilter<"movimientos_caja"> | number
    caja_id?: IntFilter<"movimientos_caja"> | number
    fecha_hora?: DateTimeFilter<"movimientos_caja"> | Date | string
    tipo?: Enummovimientos_caja_tipoFilter<"movimientos_caja"> | $Enums.movimientos_caja_tipo
    concepto?: StringFilter<"movimientos_caja"> | string
    monto?: DecimalFilter<"movimientos_caja"> | Decimal | DecimalJsLike | number | string
    referencia_id?: IntNullableFilter<"movimientos_caja"> | number | null
    referencia_tipo?: Enummovimientos_caja_referencia_tipoNullableFilter<"movimientos_caja"> | $Enums.movimientos_caja_referencia_tipo | null
    created_at?: DateTimeNullableFilter<"movimientos_caja"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"movimientos_caja"> | Date | string | null
  }

  export type productosCreateWithoutCategoriasInput = {
    codigo: string
    descripcion: string
    precio_sugerido?: Decimal | DecimalJsLike | number | string | null
    precio_minimo?: Decimal | DecimalJsLike | number | string | null
    stock?: number
    stock_minimo?: number
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaCreateNestedManyWithoutProductosInput
    detalle_pedidos?: detalle_pedidosCreateNestedManyWithoutProductosInput
    presentaciones: presentacionesCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutCategoriasInput = {
    id?: number
    codigo: string
    descripcion: string
    presentacion_id: number
    precio_sugerido?: Decimal | DecimalJsLike | number | string | null
    precio_minimo?: Decimal | DecimalJsLike | number | string | null
    stock?: number
    stock_minimo?: number
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUncheckedCreateNestedManyWithoutProductosInput
    detalle_pedidos?: detalle_pedidosUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutCategoriasInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput>
  }

  export type productosCreateManyCategoriasInputEnvelope = {
    data: productosCreateManyCategoriasInput | productosCreateManyCategoriasInput[]
    skipDuplicates?: boolean
  }

  export type productosUpsertWithWhereUniqueWithoutCategoriasInput = {
    where: productosWhereUniqueInput
    update: XOR<productosUpdateWithoutCategoriasInput, productosUncheckedUpdateWithoutCategoriasInput>
    create: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput>
  }

  export type productosUpdateWithWhereUniqueWithoutCategoriasInput = {
    where: productosWhereUniqueInput
    data: XOR<productosUpdateWithoutCategoriasInput, productosUncheckedUpdateWithoutCategoriasInput>
  }

  export type productosUpdateManyWithWhereWithoutCategoriasInput = {
    where: productosScalarWhereInput
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyWithoutCategoriasInput>
  }

  export type productosScalarWhereInput = {
    AND?: productosScalarWhereInput | productosScalarWhereInput[]
    OR?: productosScalarWhereInput[]
    NOT?: productosScalarWhereInput | productosScalarWhereInput[]
    id?: IntFilter<"productos"> | number
    codigo?: StringFilter<"productos"> | string
    descripcion?: StringFilter<"productos"> | string
    categoria_id?: IntFilter<"productos"> | number
    presentacion_id?: IntFilter<"productos"> | number
    precio_sugerido?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntFilter<"productos"> | number
    stock_minimo?: IntFilter<"productos"> | number
    imagen?: StringNullableFilter<"productos"> | string | null
    activo?: BoolFilter<"productos"> | boolean
    created_at?: DateTimeNullableFilter<"productos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"productos"> | Date | string | null
  }

  export type pedidosCreateWithoutClientesInput = {
    numero: string
    fecha: Date | string
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    despachos?: despachosCreateNestedManyWithoutPedidosInput
    detalle_pedidos?: detalle_pedidosCreateNestedManyWithoutPedidosInput
    pagos?: pagosCreateNestedManyWithoutPedidosInput
    vendedores: vendedoresCreateNestedOneWithoutPedidosInput
  }

  export type pedidosUncheckedCreateWithoutClientesInput = {
    id?: number
    numero: string
    fecha: Date | string
    vendedor_id: number
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    despachos?: despachosUncheckedCreateNestedManyWithoutPedidosInput
    detalle_pedidos?: detalle_pedidosUncheckedCreateNestedManyWithoutPedidosInput
    pagos?: pagosUncheckedCreateNestedManyWithoutPedidosInput
  }

  export type pedidosCreateOrConnectWithoutClientesInput = {
    where: pedidosWhereUniqueInput
    create: XOR<pedidosCreateWithoutClientesInput, pedidosUncheckedCreateWithoutClientesInput>
  }

  export type pedidosCreateManyClientesInputEnvelope = {
    data: pedidosCreateManyClientesInput | pedidosCreateManyClientesInput[]
    skipDuplicates?: boolean
  }

  export type pedidosUpsertWithWhereUniqueWithoutClientesInput = {
    where: pedidosWhereUniqueInput
    update: XOR<pedidosUpdateWithoutClientesInput, pedidosUncheckedUpdateWithoutClientesInput>
    create: XOR<pedidosCreateWithoutClientesInput, pedidosUncheckedCreateWithoutClientesInput>
  }

  export type pedidosUpdateWithWhereUniqueWithoutClientesInput = {
    where: pedidosWhereUniqueInput
    data: XOR<pedidosUpdateWithoutClientesInput, pedidosUncheckedUpdateWithoutClientesInput>
  }

  export type pedidosUpdateManyWithWhereWithoutClientesInput = {
    where: pedidosScalarWhereInput
    data: XOR<pedidosUpdateManyMutationInput, pedidosUncheckedUpdateManyWithoutClientesInput>
  }

  export type pedidosScalarWhereInput = {
    AND?: pedidosScalarWhereInput | pedidosScalarWhereInput[]
    OR?: pedidosScalarWhereInput[]
    NOT?: pedidosScalarWhereInput | pedidosScalarWhereInput[]
    id?: IntFilter<"pedidos"> | number
    numero?: StringFilter<"pedidos"> | string
    fecha?: DateTimeFilter<"pedidos"> | Date | string
    cliente_id?: IntFilter<"pedidos"> | number
    vendedor_id?: IntFilter<"pedidos"> | number
    subtotal?: DecimalFilter<"pedidos"> | Decimal | DecimalJsLike | number | string
    igv?: DecimalFilter<"pedidos"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"pedidos"> | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFilter<"pedidos"> | $Enums.pedidos_estado
    notas?: StringNullableFilter<"pedidos"> | string | null
    created_at?: DateTimeNullableFilter<"pedidos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pedidos"> | Date | string | null
  }

  export type pedidosCreateWithoutDespachosInput = {
    numero: string
    fecha: Date | string
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_pedidos?: detalle_pedidosCreateNestedManyWithoutPedidosInput
    pagos?: pagosCreateNestedManyWithoutPedidosInput
    clientes: clientesCreateNestedOneWithoutPedidosInput
    vendedores: vendedoresCreateNestedOneWithoutPedidosInput
  }

  export type pedidosUncheckedCreateWithoutDespachosInput = {
    id?: number
    numero: string
    fecha: Date | string
    cliente_id: number
    vendedor_id: number
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_pedidos?: detalle_pedidosUncheckedCreateNestedManyWithoutPedidosInput
    pagos?: pagosUncheckedCreateNestedManyWithoutPedidosInput
  }

  export type pedidosCreateOrConnectWithoutDespachosInput = {
    where: pedidosWhereUniqueInput
    create: XOR<pedidosCreateWithoutDespachosInput, pedidosUncheckedCreateWithoutDespachosInput>
  }

  export type pedidosUpsertWithoutDespachosInput = {
    update: XOR<pedidosUpdateWithoutDespachosInput, pedidosUncheckedUpdateWithoutDespachosInput>
    create: XOR<pedidosCreateWithoutDespachosInput, pedidosUncheckedCreateWithoutDespachosInput>
    where?: pedidosWhereInput
  }

  export type pedidosUpdateToOneWithWhereWithoutDespachosInput = {
    where?: pedidosWhereInput
    data: XOR<pedidosUpdateWithoutDespachosInput, pedidosUncheckedUpdateWithoutDespachosInput>
  }

  export type pedidosUpdateWithoutDespachosInput = {
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_pedidos?: detalle_pedidosUpdateManyWithoutPedidosNestedInput
    pagos?: pagosUpdateManyWithoutPedidosNestedInput
    clientes?: clientesUpdateOneRequiredWithoutPedidosNestedInput
    vendedores?: vendedoresUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type pedidosUncheckedUpdateWithoutDespachosInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente_id?: IntFieldUpdateOperationsInput | number
    vendedor_id?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_pedidos?: detalle_pedidosUncheckedUpdateManyWithoutPedidosNestedInput
    pagos?: pagosUncheckedUpdateManyWithoutPedidosNestedInput
  }

  export type entradas_mercaderiaCreateWithoutDetalle_entradas_mercaderiaInput = {
    fecha: Date | string
    numero_factura?: string | null
    total?: Decimal | DecimalJsLike | number | string
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    proveedores: proveedoresCreateNestedOneWithoutEntradas_mercaderiaInput
  }

  export type entradas_mercaderiaUncheckedCreateWithoutDetalle_entradas_mercaderiaInput = {
    id?: number
    fecha: Date | string
    proveedor_id: number
    numero_factura?: string | null
    total?: Decimal | DecimalJsLike | number | string
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type entradas_mercaderiaCreateOrConnectWithoutDetalle_entradas_mercaderiaInput = {
    where: entradas_mercaderiaWhereUniqueInput
    create: XOR<entradas_mercaderiaCreateWithoutDetalle_entradas_mercaderiaInput, entradas_mercaderiaUncheckedCreateWithoutDetalle_entradas_mercaderiaInput>
  }

  export type productosCreateWithoutDetalle_entradas_mercaderiaInput = {
    codigo: string
    descripcion: string
    precio_sugerido?: Decimal | DecimalJsLike | number | string | null
    precio_minimo?: Decimal | DecimalJsLike | number | string | null
    stock?: number
    stock_minimo?: number
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_pedidos?: detalle_pedidosCreateNestedManyWithoutProductosInput
    categorias: categoriasCreateNestedOneWithoutProductosInput
    presentaciones: presentacionesCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutDetalle_entradas_mercaderiaInput = {
    id?: number
    codigo: string
    descripcion: string
    categoria_id: number
    presentacion_id: number
    precio_sugerido?: Decimal | DecimalJsLike | number | string | null
    precio_minimo?: Decimal | DecimalJsLike | number | string | null
    stock?: number
    stock_minimo?: number
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_pedidos?: detalle_pedidosUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutDetalle_entradas_mercaderiaInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutDetalle_entradas_mercaderiaInput, productosUncheckedCreateWithoutDetalle_entradas_mercaderiaInput>
  }

  export type entradas_mercaderiaUpsertWithoutDetalle_entradas_mercaderiaInput = {
    update: XOR<entradas_mercaderiaUpdateWithoutDetalle_entradas_mercaderiaInput, entradas_mercaderiaUncheckedUpdateWithoutDetalle_entradas_mercaderiaInput>
    create: XOR<entradas_mercaderiaCreateWithoutDetalle_entradas_mercaderiaInput, entradas_mercaderiaUncheckedCreateWithoutDetalle_entradas_mercaderiaInput>
    where?: entradas_mercaderiaWhereInput
  }

  export type entradas_mercaderiaUpdateToOneWithWhereWithoutDetalle_entradas_mercaderiaInput = {
    where?: entradas_mercaderiaWhereInput
    data: XOR<entradas_mercaderiaUpdateWithoutDetalle_entradas_mercaderiaInput, entradas_mercaderiaUncheckedUpdateWithoutDetalle_entradas_mercaderiaInput>
  }

  export type entradas_mercaderiaUpdateWithoutDetalle_entradas_mercaderiaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_factura?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proveedores?: proveedoresUpdateOneRequiredWithoutEntradas_mercaderiaNestedInput
  }

  export type entradas_mercaderiaUncheckedUpdateWithoutDetalle_entradas_mercaderiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    proveedor_id?: IntFieldUpdateOperationsInput | number
    numero_factura?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productosUpsertWithoutDetalle_entradas_mercaderiaInput = {
    update: XOR<productosUpdateWithoutDetalle_entradas_mercaderiaInput, productosUncheckedUpdateWithoutDetalle_entradas_mercaderiaInput>
    create: XOR<productosCreateWithoutDetalle_entradas_mercaderiaInput, productosUncheckedCreateWithoutDetalle_entradas_mercaderiaInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutDetalle_entradas_mercaderiaInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutDetalle_entradas_mercaderiaInput, productosUncheckedUpdateWithoutDetalle_entradas_mercaderiaInput>
  }

  export type productosUpdateWithoutDetalle_entradas_mercaderiaInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_pedidos?: detalle_pedidosUpdateManyWithoutProductosNestedInput
    categorias?: categoriasUpdateOneRequiredWithoutProductosNestedInput
    presentaciones?: presentacionesUpdateOneRequiredWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutDetalle_entradas_mercaderiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoria_id?: IntFieldUpdateOperationsInput | number
    presentacion_id?: IntFieldUpdateOperationsInput | number
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_pedidos?: detalle_pedidosUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type pedidosCreateWithoutDetalle_pedidosInput = {
    numero: string
    fecha: Date | string
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    despachos?: despachosCreateNestedManyWithoutPedidosInput
    pagos?: pagosCreateNestedManyWithoutPedidosInput
    clientes: clientesCreateNestedOneWithoutPedidosInput
    vendedores: vendedoresCreateNestedOneWithoutPedidosInput
  }

  export type pedidosUncheckedCreateWithoutDetalle_pedidosInput = {
    id?: number
    numero: string
    fecha: Date | string
    cliente_id: number
    vendedor_id: number
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    despachos?: despachosUncheckedCreateNestedManyWithoutPedidosInput
    pagos?: pagosUncheckedCreateNestedManyWithoutPedidosInput
  }

  export type pedidosCreateOrConnectWithoutDetalle_pedidosInput = {
    where: pedidosWhereUniqueInput
    create: XOR<pedidosCreateWithoutDetalle_pedidosInput, pedidosUncheckedCreateWithoutDetalle_pedidosInput>
  }

  export type productosCreateWithoutDetalle_pedidosInput = {
    codigo: string
    descripcion: string
    precio_sugerido?: Decimal | DecimalJsLike | number | string | null
    precio_minimo?: Decimal | DecimalJsLike | number | string | null
    stock?: number
    stock_minimo?: number
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaCreateNestedManyWithoutProductosInput
    categorias: categoriasCreateNestedOneWithoutProductosInput
    presentaciones: presentacionesCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutDetalle_pedidosInput = {
    id?: number
    codigo: string
    descripcion: string
    categoria_id: number
    presentacion_id: number
    precio_sugerido?: Decimal | DecimalJsLike | number | string | null
    precio_minimo?: Decimal | DecimalJsLike | number | string | null
    stock?: number
    stock_minimo?: number
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutDetalle_pedidosInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutDetalle_pedidosInput, productosUncheckedCreateWithoutDetalle_pedidosInput>
  }

  export type pedidosUpsertWithoutDetalle_pedidosInput = {
    update: XOR<pedidosUpdateWithoutDetalle_pedidosInput, pedidosUncheckedUpdateWithoutDetalle_pedidosInput>
    create: XOR<pedidosCreateWithoutDetalle_pedidosInput, pedidosUncheckedCreateWithoutDetalle_pedidosInput>
    where?: pedidosWhereInput
  }

  export type pedidosUpdateToOneWithWhereWithoutDetalle_pedidosInput = {
    where?: pedidosWhereInput
    data: XOR<pedidosUpdateWithoutDetalle_pedidosInput, pedidosUncheckedUpdateWithoutDetalle_pedidosInput>
  }

  export type pedidosUpdateWithoutDetalle_pedidosInput = {
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    despachos?: despachosUpdateManyWithoutPedidosNestedInput
    pagos?: pagosUpdateManyWithoutPedidosNestedInput
    clientes?: clientesUpdateOneRequiredWithoutPedidosNestedInput
    vendedores?: vendedoresUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type pedidosUncheckedUpdateWithoutDetalle_pedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente_id?: IntFieldUpdateOperationsInput | number
    vendedor_id?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    despachos?: despachosUncheckedUpdateManyWithoutPedidosNestedInput
    pagos?: pagosUncheckedUpdateManyWithoutPedidosNestedInput
  }

  export type productosUpsertWithoutDetalle_pedidosInput = {
    update: XOR<productosUpdateWithoutDetalle_pedidosInput, productosUncheckedUpdateWithoutDetalle_pedidosInput>
    create: XOR<productosCreateWithoutDetalle_pedidosInput, productosUncheckedCreateWithoutDetalle_pedidosInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutDetalle_pedidosInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutDetalle_pedidosInput, productosUncheckedUpdateWithoutDetalle_pedidosInput>
  }

  export type productosUpdateWithoutDetalle_pedidosInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUpdateManyWithoutProductosNestedInput
    categorias?: categoriasUpdateOneRequiredWithoutProductosNestedInput
    presentaciones?: presentacionesUpdateOneRequiredWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutDetalle_pedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoria_id?: IntFieldUpdateOperationsInput | number
    presentacion_id?: IntFieldUpdateOperationsInput | number
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type detalle_entradas_mercaderiaCreateWithoutEntradas_mercaderiaInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    productos: productosCreateNestedOneWithoutDetalle_entradas_mercaderiaInput
  }

  export type detalle_entradas_mercaderiaUncheckedCreateWithoutEntradas_mercaderiaInput = {
    id?: number
    producto_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type detalle_entradas_mercaderiaCreateOrConnectWithoutEntradas_mercaderiaInput = {
    where: detalle_entradas_mercaderiaWhereUniqueInput
    create: XOR<detalle_entradas_mercaderiaCreateWithoutEntradas_mercaderiaInput, detalle_entradas_mercaderiaUncheckedCreateWithoutEntradas_mercaderiaInput>
  }

  export type detalle_entradas_mercaderiaCreateManyEntradas_mercaderiaInputEnvelope = {
    data: detalle_entradas_mercaderiaCreateManyEntradas_mercaderiaInput | detalle_entradas_mercaderiaCreateManyEntradas_mercaderiaInput[]
    skipDuplicates?: boolean
  }

  export type proveedoresCreateWithoutEntradas_mercaderiaInput = {
    nombre: string
    ruc?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type proveedoresUncheckedCreateWithoutEntradas_mercaderiaInput = {
    id?: number
    nombre: string
    ruc?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    contacto?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type proveedoresCreateOrConnectWithoutEntradas_mercaderiaInput = {
    where: proveedoresWhereUniqueInput
    create: XOR<proveedoresCreateWithoutEntradas_mercaderiaInput, proveedoresUncheckedCreateWithoutEntradas_mercaderiaInput>
  }

  export type detalle_entradas_mercaderiaUpsertWithWhereUniqueWithoutEntradas_mercaderiaInput = {
    where: detalle_entradas_mercaderiaWhereUniqueInput
    update: XOR<detalle_entradas_mercaderiaUpdateWithoutEntradas_mercaderiaInput, detalle_entradas_mercaderiaUncheckedUpdateWithoutEntradas_mercaderiaInput>
    create: XOR<detalle_entradas_mercaderiaCreateWithoutEntradas_mercaderiaInput, detalle_entradas_mercaderiaUncheckedCreateWithoutEntradas_mercaderiaInput>
  }

  export type detalle_entradas_mercaderiaUpdateWithWhereUniqueWithoutEntradas_mercaderiaInput = {
    where: detalle_entradas_mercaderiaWhereUniqueInput
    data: XOR<detalle_entradas_mercaderiaUpdateWithoutEntradas_mercaderiaInput, detalle_entradas_mercaderiaUncheckedUpdateWithoutEntradas_mercaderiaInput>
  }

  export type detalle_entradas_mercaderiaUpdateManyWithWhereWithoutEntradas_mercaderiaInput = {
    where: detalle_entradas_mercaderiaScalarWhereInput
    data: XOR<detalle_entradas_mercaderiaUpdateManyMutationInput, detalle_entradas_mercaderiaUncheckedUpdateManyWithoutEntradas_mercaderiaInput>
  }

  export type detalle_entradas_mercaderiaScalarWhereInput = {
    AND?: detalle_entradas_mercaderiaScalarWhereInput | detalle_entradas_mercaderiaScalarWhereInput[]
    OR?: detalle_entradas_mercaderiaScalarWhereInput[]
    NOT?: detalle_entradas_mercaderiaScalarWhereInput | detalle_entradas_mercaderiaScalarWhereInput[]
    id?: IntFilter<"detalle_entradas_mercaderia"> | number
    entrada_id?: IntFilter<"detalle_entradas_mercaderia"> | number
    producto_id?: IntFilter<"detalle_entradas_mercaderia"> | number
    cantidad?: IntFilter<"detalle_entradas_mercaderia"> | number
    precio_unitario?: DecimalFilter<"detalle_entradas_mercaderia"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"detalle_entradas_mercaderia"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"detalle_entradas_mercaderia"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"detalle_entradas_mercaderia"> | Date | string | null
  }

  export type proveedoresUpsertWithoutEntradas_mercaderiaInput = {
    update: XOR<proveedoresUpdateWithoutEntradas_mercaderiaInput, proveedoresUncheckedUpdateWithoutEntradas_mercaderiaInput>
    create: XOR<proveedoresCreateWithoutEntradas_mercaderiaInput, proveedoresUncheckedCreateWithoutEntradas_mercaderiaInput>
    where?: proveedoresWhereInput
  }

  export type proveedoresUpdateToOneWithWhereWithoutEntradas_mercaderiaInput = {
    where?: proveedoresWhereInput
    data: XOR<proveedoresUpdateWithoutEntradas_mercaderiaInput, proveedoresUncheckedUpdateWithoutEntradas_mercaderiaInput>
  }

  export type proveedoresUpdateWithoutEntradas_mercaderiaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type proveedoresUncheckedUpdateWithoutEntradas_mercaderiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ruc?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type caja_diariaCreateWithoutMovimientos_cajaInput = {
    fecha: Date | string
    apertura?: Decimal | DecimalJsLike | number | string
    cierre?: Decimal | DecimalJsLike | number | string | null
    total_ventas?: Decimal | DecimalJsLike | number | string | null
    total_gastos?: Decimal | DecimalJsLike | number | string | null
    diferencia?: Decimal | DecimalJsLike | number | string | null
    estado?: $Enums.caja_diaria_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type caja_diariaUncheckedCreateWithoutMovimientos_cajaInput = {
    id?: number
    fecha: Date | string
    apertura?: Decimal | DecimalJsLike | number | string
    cierre?: Decimal | DecimalJsLike | number | string | null
    total_ventas?: Decimal | DecimalJsLike | number | string | null
    total_gastos?: Decimal | DecimalJsLike | number | string | null
    diferencia?: Decimal | DecimalJsLike | number | string | null
    estado?: $Enums.caja_diaria_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type caja_diariaCreateOrConnectWithoutMovimientos_cajaInput = {
    where: caja_diariaWhereUniqueInput
    create: XOR<caja_diariaCreateWithoutMovimientos_cajaInput, caja_diariaUncheckedCreateWithoutMovimientos_cajaInput>
  }

  export type caja_diariaUpsertWithoutMovimientos_cajaInput = {
    update: XOR<caja_diariaUpdateWithoutMovimientos_cajaInput, caja_diariaUncheckedUpdateWithoutMovimientos_cajaInput>
    create: XOR<caja_diariaCreateWithoutMovimientos_cajaInput, caja_diariaUncheckedCreateWithoutMovimientos_cajaInput>
    where?: caja_diariaWhereInput
  }

  export type caja_diariaUpdateToOneWithWhereWithoutMovimientos_cajaInput = {
    where?: caja_diariaWhereInput
    data: XOR<caja_diariaUpdateWithoutMovimientos_cajaInput, caja_diariaUncheckedUpdateWithoutMovimientos_cajaInput>
  }

  export type caja_diariaUpdateWithoutMovimientos_cajaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    apertura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cierre?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_ventas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_gastos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: Enumcaja_diaria_estadoFieldUpdateOperationsInput | $Enums.caja_diaria_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type caja_diariaUncheckedUpdateWithoutMovimientos_cajaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    apertura?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cierre?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_ventas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_gastos?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    diferencia?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado?: Enumcaja_diaria_estadoFieldUpdateOperationsInput | $Enums.caja_diaria_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pedidosCreateWithoutPagosInput = {
    numero: string
    fecha: Date | string
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    despachos?: despachosCreateNestedManyWithoutPedidosInput
    detalle_pedidos?: detalle_pedidosCreateNestedManyWithoutPedidosInput
    clientes: clientesCreateNestedOneWithoutPedidosInput
    vendedores: vendedoresCreateNestedOneWithoutPedidosInput
  }

  export type pedidosUncheckedCreateWithoutPagosInput = {
    id?: number
    numero: string
    fecha: Date | string
    cliente_id: number
    vendedor_id: number
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    despachos?: despachosUncheckedCreateNestedManyWithoutPedidosInput
    detalle_pedidos?: detalle_pedidosUncheckedCreateNestedManyWithoutPedidosInput
  }

  export type pedidosCreateOrConnectWithoutPagosInput = {
    where: pedidosWhereUniqueInput
    create: XOR<pedidosCreateWithoutPagosInput, pedidosUncheckedCreateWithoutPagosInput>
  }

  export type pedidosUpsertWithoutPagosInput = {
    update: XOR<pedidosUpdateWithoutPagosInput, pedidosUncheckedUpdateWithoutPagosInput>
    create: XOR<pedidosCreateWithoutPagosInput, pedidosUncheckedCreateWithoutPagosInput>
    where?: pedidosWhereInput
  }

  export type pedidosUpdateToOneWithWhereWithoutPagosInput = {
    where?: pedidosWhereInput
    data: XOR<pedidosUpdateWithoutPagosInput, pedidosUncheckedUpdateWithoutPagosInput>
  }

  export type pedidosUpdateWithoutPagosInput = {
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    despachos?: despachosUpdateManyWithoutPedidosNestedInput
    detalle_pedidos?: detalle_pedidosUpdateManyWithoutPedidosNestedInput
    clientes?: clientesUpdateOneRequiredWithoutPedidosNestedInput
    vendedores?: vendedoresUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type pedidosUncheckedUpdateWithoutPagosInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente_id?: IntFieldUpdateOperationsInput | number
    vendedor_id?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    despachos?: despachosUncheckedUpdateManyWithoutPedidosNestedInput
    detalle_pedidos?: detalle_pedidosUncheckedUpdateManyWithoutPedidosNestedInput
  }

  export type despachosCreateWithoutPedidosInput = {
    fecha: Date | string
    direccion_entrega: string
    contacto_entrega?: string | null
    telefono_entrega?: string | null
    estado?: $Enums.despachos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type despachosUncheckedCreateWithoutPedidosInput = {
    id?: number
    fecha: Date | string
    direccion_entrega: string
    contacto_entrega?: string | null
    telefono_entrega?: string | null
    estado?: $Enums.despachos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type despachosCreateOrConnectWithoutPedidosInput = {
    where: despachosWhereUniqueInput
    create: XOR<despachosCreateWithoutPedidosInput, despachosUncheckedCreateWithoutPedidosInput>
  }

  export type despachosCreateManyPedidosInputEnvelope = {
    data: despachosCreateManyPedidosInput | despachosCreateManyPedidosInput[]
    skipDuplicates?: boolean
  }

  export type detalle_pedidosCreateWithoutPedidosInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    productos: productosCreateNestedOneWithoutDetalle_pedidosInput
  }

  export type detalle_pedidosUncheckedCreateWithoutPedidosInput = {
    id?: number
    producto_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type detalle_pedidosCreateOrConnectWithoutPedidosInput = {
    where: detalle_pedidosWhereUniqueInput
    create: XOR<detalle_pedidosCreateWithoutPedidosInput, detalle_pedidosUncheckedCreateWithoutPedidosInput>
  }

  export type detalle_pedidosCreateManyPedidosInputEnvelope = {
    data: detalle_pedidosCreateManyPedidosInput | detalle_pedidosCreateManyPedidosInput[]
    skipDuplicates?: boolean
  }

  export type pagosCreateWithoutPedidosInput = {
    fecha: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago?: $Enums.pagos_metodo_pago
    referencia?: string | null
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pagosUncheckedCreateWithoutPedidosInput = {
    id?: number
    fecha: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago?: $Enums.pagos_metodo_pago
    referencia?: string | null
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pagosCreateOrConnectWithoutPedidosInput = {
    where: pagosWhereUniqueInput
    create: XOR<pagosCreateWithoutPedidosInput, pagosUncheckedCreateWithoutPedidosInput>
  }

  export type pagosCreateManyPedidosInputEnvelope = {
    data: pagosCreateManyPedidosInput | pagosCreateManyPedidosInput[]
    skipDuplicates?: boolean
  }

  export type clientesCreateWithoutPedidosInput = {
    nombre: string
    tipo_documento?: $Enums.clientes_tipo_documento
    numero_documento?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type clientesUncheckedCreateWithoutPedidosInput = {
    id?: number
    nombre: string
    tipo_documento?: $Enums.clientes_tipo_documento
    numero_documento?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type clientesCreateOrConnectWithoutPedidosInput = {
    where: clientesWhereUniqueInput
    create: XOR<clientesCreateWithoutPedidosInput, clientesUncheckedCreateWithoutPedidosInput>
  }

  export type vendedoresCreateWithoutPedidosInput = {
    nombre: string
    numero_ruc?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type vendedoresUncheckedCreateWithoutPedidosInput = {
    id?: number
    nombre: string
    numero_ruc?: string | null
    direccion?: string | null
    telefono?: string | null
    email?: string | null
    notas?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type vendedoresCreateOrConnectWithoutPedidosInput = {
    where: vendedoresWhereUniqueInput
    create: XOR<vendedoresCreateWithoutPedidosInput, vendedoresUncheckedCreateWithoutPedidosInput>
  }

  export type despachosUpsertWithWhereUniqueWithoutPedidosInput = {
    where: despachosWhereUniqueInput
    update: XOR<despachosUpdateWithoutPedidosInput, despachosUncheckedUpdateWithoutPedidosInput>
    create: XOR<despachosCreateWithoutPedidosInput, despachosUncheckedCreateWithoutPedidosInput>
  }

  export type despachosUpdateWithWhereUniqueWithoutPedidosInput = {
    where: despachosWhereUniqueInput
    data: XOR<despachosUpdateWithoutPedidosInput, despachosUncheckedUpdateWithoutPedidosInput>
  }

  export type despachosUpdateManyWithWhereWithoutPedidosInput = {
    where: despachosScalarWhereInput
    data: XOR<despachosUpdateManyMutationInput, despachosUncheckedUpdateManyWithoutPedidosInput>
  }

  export type despachosScalarWhereInput = {
    AND?: despachosScalarWhereInput | despachosScalarWhereInput[]
    OR?: despachosScalarWhereInput[]
    NOT?: despachosScalarWhereInput | despachosScalarWhereInput[]
    id?: IntFilter<"despachos"> | number
    pedido_id?: IntFilter<"despachos"> | number
    fecha?: DateTimeFilter<"despachos"> | Date | string
    direccion_entrega?: StringFilter<"despachos"> | string
    contacto_entrega?: StringNullableFilter<"despachos"> | string | null
    telefono_entrega?: StringNullableFilter<"despachos"> | string | null
    estado?: Enumdespachos_estadoFilter<"despachos"> | $Enums.despachos_estado
    notas?: StringNullableFilter<"despachos"> | string | null
    created_at?: DateTimeNullableFilter<"despachos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"despachos"> | Date | string | null
  }

  export type detalle_pedidosUpsertWithWhereUniqueWithoutPedidosInput = {
    where: detalle_pedidosWhereUniqueInput
    update: XOR<detalle_pedidosUpdateWithoutPedidosInput, detalle_pedidosUncheckedUpdateWithoutPedidosInput>
    create: XOR<detalle_pedidosCreateWithoutPedidosInput, detalle_pedidosUncheckedCreateWithoutPedidosInput>
  }

  export type detalle_pedidosUpdateWithWhereUniqueWithoutPedidosInput = {
    where: detalle_pedidosWhereUniqueInput
    data: XOR<detalle_pedidosUpdateWithoutPedidosInput, detalle_pedidosUncheckedUpdateWithoutPedidosInput>
  }

  export type detalle_pedidosUpdateManyWithWhereWithoutPedidosInput = {
    where: detalle_pedidosScalarWhereInput
    data: XOR<detalle_pedidosUpdateManyMutationInput, detalle_pedidosUncheckedUpdateManyWithoutPedidosInput>
  }

  export type detalle_pedidosScalarWhereInput = {
    AND?: detalle_pedidosScalarWhereInput | detalle_pedidosScalarWhereInput[]
    OR?: detalle_pedidosScalarWhereInput[]
    NOT?: detalle_pedidosScalarWhereInput | detalle_pedidosScalarWhereInput[]
    id?: IntFilter<"detalle_pedidos"> | number
    pedido_id?: IntFilter<"detalle_pedidos"> | number
    producto_id?: IntFilter<"detalle_pedidos"> | number
    cantidad?: IntFilter<"detalle_pedidos"> | number
    precio_unitario?: DecimalFilter<"detalle_pedidos"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"detalle_pedidos"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"detalle_pedidos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"detalle_pedidos"> | Date | string | null
  }

  export type pagosUpsertWithWhereUniqueWithoutPedidosInput = {
    where: pagosWhereUniqueInput
    update: XOR<pagosUpdateWithoutPedidosInput, pagosUncheckedUpdateWithoutPedidosInput>
    create: XOR<pagosCreateWithoutPedidosInput, pagosUncheckedCreateWithoutPedidosInput>
  }

  export type pagosUpdateWithWhereUniqueWithoutPedidosInput = {
    where: pagosWhereUniqueInput
    data: XOR<pagosUpdateWithoutPedidosInput, pagosUncheckedUpdateWithoutPedidosInput>
  }

  export type pagosUpdateManyWithWhereWithoutPedidosInput = {
    where: pagosScalarWhereInput
    data: XOR<pagosUpdateManyMutationInput, pagosUncheckedUpdateManyWithoutPedidosInput>
  }

  export type pagosScalarWhereInput = {
    AND?: pagosScalarWhereInput | pagosScalarWhereInput[]
    OR?: pagosScalarWhereInput[]
    NOT?: pagosScalarWhereInput | pagosScalarWhereInput[]
    id?: IntFilter<"pagos"> | number
    pedido_id?: IntFilter<"pagos"> | number
    fecha?: DateTimeFilter<"pagos"> | Date | string
    monto?: DecimalFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFilter<"pagos"> | $Enums.pagos_metodo_pago
    referencia?: StringNullableFilter<"pagos"> | string | null
    notas?: StringNullableFilter<"pagos"> | string | null
    created_at?: DateTimeNullableFilter<"pagos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"pagos"> | Date | string | null
  }

  export type clientesUpsertWithoutPedidosInput = {
    update: XOR<clientesUpdateWithoutPedidosInput, clientesUncheckedUpdateWithoutPedidosInput>
    create: XOR<clientesCreateWithoutPedidosInput, clientesUncheckedCreateWithoutPedidosInput>
    where?: clientesWhereInput
  }

  export type clientesUpdateToOneWithWhereWithoutPedidosInput = {
    where?: clientesWhereInput
    data: XOR<clientesUpdateWithoutPedidosInput, clientesUncheckedUpdateWithoutPedidosInput>
  }

  export type clientesUpdateWithoutPedidosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_documento?: Enumclientes_tipo_documentoFieldUpdateOperationsInput | $Enums.clientes_tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clientesUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_documento?: Enumclientes_tipo_documentoFieldUpdateOperationsInput | $Enums.clientes_tipo_documento
    numero_documento?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vendedoresUpsertWithoutPedidosInput = {
    update: XOR<vendedoresUpdateWithoutPedidosInput, vendedoresUncheckedUpdateWithoutPedidosInput>
    create: XOR<vendedoresCreateWithoutPedidosInput, vendedoresUncheckedCreateWithoutPedidosInput>
    where?: vendedoresWhereInput
  }

  export type vendedoresUpdateToOneWithWhereWithoutPedidosInput = {
    where?: vendedoresWhereInput
    data: XOR<vendedoresUpdateWithoutPedidosInput, vendedoresUncheckedUpdateWithoutPedidosInput>
  }

  export type vendedoresUpdateWithoutPedidosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numero_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vendedoresUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numero_ruc?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productosCreateWithoutPresentacionesInput = {
    codigo: string
    descripcion: string
    precio_sugerido?: Decimal | DecimalJsLike | number | string | null
    precio_minimo?: Decimal | DecimalJsLike | number | string | null
    stock?: number
    stock_minimo?: number
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaCreateNestedManyWithoutProductosInput
    detalle_pedidos?: detalle_pedidosCreateNestedManyWithoutProductosInput
    categorias: categoriasCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutPresentacionesInput = {
    id?: number
    codigo: string
    descripcion: string
    categoria_id: number
    precio_sugerido?: Decimal | DecimalJsLike | number | string | null
    precio_minimo?: Decimal | DecimalJsLike | number | string | null
    stock?: number
    stock_minimo?: number
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUncheckedCreateNestedManyWithoutProductosInput
    detalle_pedidos?: detalle_pedidosUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutPresentacionesInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutPresentacionesInput, productosUncheckedCreateWithoutPresentacionesInput>
  }

  export type productosCreateManyPresentacionesInputEnvelope = {
    data: productosCreateManyPresentacionesInput | productosCreateManyPresentacionesInput[]
    skipDuplicates?: boolean
  }

  export type productosUpsertWithWhereUniqueWithoutPresentacionesInput = {
    where: productosWhereUniqueInput
    update: XOR<productosUpdateWithoutPresentacionesInput, productosUncheckedUpdateWithoutPresentacionesInput>
    create: XOR<productosCreateWithoutPresentacionesInput, productosUncheckedCreateWithoutPresentacionesInput>
  }

  export type productosUpdateWithWhereUniqueWithoutPresentacionesInput = {
    where: productosWhereUniqueInput
    data: XOR<productosUpdateWithoutPresentacionesInput, productosUncheckedUpdateWithoutPresentacionesInput>
  }

  export type productosUpdateManyWithWhereWithoutPresentacionesInput = {
    where: productosScalarWhereInput
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyWithoutPresentacionesInput>
  }

  export type detalle_entradas_mercaderiaCreateWithoutProductosInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    entradas_mercaderia: entradas_mercaderiaCreateNestedOneWithoutDetalle_entradas_mercaderiaInput
  }

  export type detalle_entradas_mercaderiaUncheckedCreateWithoutProductosInput = {
    id?: number
    entrada_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type detalle_entradas_mercaderiaCreateOrConnectWithoutProductosInput = {
    where: detalle_entradas_mercaderiaWhereUniqueInput
    create: XOR<detalle_entradas_mercaderiaCreateWithoutProductosInput, detalle_entradas_mercaderiaUncheckedCreateWithoutProductosInput>
  }

  export type detalle_entradas_mercaderiaCreateManyProductosInputEnvelope = {
    data: detalle_entradas_mercaderiaCreateManyProductosInput | detalle_entradas_mercaderiaCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type detalle_pedidosCreateWithoutProductosInput = {
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    pedidos: pedidosCreateNestedOneWithoutDetalle_pedidosInput
  }

  export type detalle_pedidosUncheckedCreateWithoutProductosInput = {
    id?: number
    pedido_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type detalle_pedidosCreateOrConnectWithoutProductosInput = {
    where: detalle_pedidosWhereUniqueInput
    create: XOR<detalle_pedidosCreateWithoutProductosInput, detalle_pedidosUncheckedCreateWithoutProductosInput>
  }

  export type detalle_pedidosCreateManyProductosInputEnvelope = {
    data: detalle_pedidosCreateManyProductosInput | detalle_pedidosCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type categoriasCreateWithoutProductosInput = {
    nombre: string
    descripcion?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type categoriasUncheckedCreateWithoutProductosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type categoriasCreateOrConnectWithoutProductosInput = {
    where: categoriasWhereUniqueInput
    create: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
  }

  export type presentacionesCreateWithoutProductosInput = {
    nombre: string
    descripcion?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type presentacionesUncheckedCreateWithoutProductosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type presentacionesCreateOrConnectWithoutProductosInput = {
    where: presentacionesWhereUniqueInput
    create: XOR<presentacionesCreateWithoutProductosInput, presentacionesUncheckedCreateWithoutProductosInput>
  }

  export type detalle_entradas_mercaderiaUpsertWithWhereUniqueWithoutProductosInput = {
    where: detalle_entradas_mercaderiaWhereUniqueInput
    update: XOR<detalle_entradas_mercaderiaUpdateWithoutProductosInput, detalle_entradas_mercaderiaUncheckedUpdateWithoutProductosInput>
    create: XOR<detalle_entradas_mercaderiaCreateWithoutProductosInput, detalle_entradas_mercaderiaUncheckedCreateWithoutProductosInput>
  }

  export type detalle_entradas_mercaderiaUpdateWithWhereUniqueWithoutProductosInput = {
    where: detalle_entradas_mercaderiaWhereUniqueInput
    data: XOR<detalle_entradas_mercaderiaUpdateWithoutProductosInput, detalle_entradas_mercaderiaUncheckedUpdateWithoutProductosInput>
  }

  export type detalle_entradas_mercaderiaUpdateManyWithWhereWithoutProductosInput = {
    where: detalle_entradas_mercaderiaScalarWhereInput
    data: XOR<detalle_entradas_mercaderiaUpdateManyMutationInput, detalle_entradas_mercaderiaUncheckedUpdateManyWithoutProductosInput>
  }

  export type detalle_pedidosUpsertWithWhereUniqueWithoutProductosInput = {
    where: detalle_pedidosWhereUniqueInput
    update: XOR<detalle_pedidosUpdateWithoutProductosInput, detalle_pedidosUncheckedUpdateWithoutProductosInput>
    create: XOR<detalle_pedidosCreateWithoutProductosInput, detalle_pedidosUncheckedCreateWithoutProductosInput>
  }

  export type detalle_pedidosUpdateWithWhereUniqueWithoutProductosInput = {
    where: detalle_pedidosWhereUniqueInput
    data: XOR<detalle_pedidosUpdateWithoutProductosInput, detalle_pedidosUncheckedUpdateWithoutProductosInput>
  }

  export type detalle_pedidosUpdateManyWithWhereWithoutProductosInput = {
    where: detalle_pedidosScalarWhereInput
    data: XOR<detalle_pedidosUpdateManyMutationInput, detalle_pedidosUncheckedUpdateManyWithoutProductosInput>
  }

  export type categoriasUpsertWithoutProductosInput = {
    update: XOR<categoriasUpdateWithoutProductosInput, categoriasUncheckedUpdateWithoutProductosInput>
    create: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    where?: categoriasWhereInput
  }

  export type categoriasUpdateToOneWithWhereWithoutProductosInput = {
    where?: categoriasWhereInput
    data: XOR<categoriasUpdateWithoutProductosInput, categoriasUncheckedUpdateWithoutProductosInput>
  }

  export type categoriasUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriasUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type presentacionesUpsertWithoutProductosInput = {
    update: XOR<presentacionesUpdateWithoutProductosInput, presentacionesUncheckedUpdateWithoutProductosInput>
    create: XOR<presentacionesCreateWithoutProductosInput, presentacionesUncheckedCreateWithoutProductosInput>
    where?: presentacionesWhereInput
  }

  export type presentacionesUpdateToOneWithWhereWithoutProductosInput = {
    where?: presentacionesWhereInput
    data: XOR<presentacionesUpdateWithoutProductosInput, presentacionesUncheckedUpdateWithoutProductosInput>
  }

  export type presentacionesUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type presentacionesUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entradas_mercaderiaCreateWithoutProveedoresInput = {
    fecha: Date | string
    numero_factura?: string | null
    total?: Decimal | DecimalJsLike | number | string
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaCreateNestedManyWithoutEntradas_mercaderiaInput
  }

  export type entradas_mercaderiaUncheckedCreateWithoutProveedoresInput = {
    id?: number
    fecha: Date | string
    numero_factura?: string | null
    total?: Decimal | DecimalJsLike | number | string
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUncheckedCreateNestedManyWithoutEntradas_mercaderiaInput
  }

  export type entradas_mercaderiaCreateOrConnectWithoutProveedoresInput = {
    where: entradas_mercaderiaWhereUniqueInput
    create: XOR<entradas_mercaderiaCreateWithoutProveedoresInput, entradas_mercaderiaUncheckedCreateWithoutProveedoresInput>
  }

  export type entradas_mercaderiaCreateManyProveedoresInputEnvelope = {
    data: entradas_mercaderiaCreateManyProveedoresInput | entradas_mercaderiaCreateManyProveedoresInput[]
    skipDuplicates?: boolean
  }

  export type entradas_mercaderiaUpsertWithWhereUniqueWithoutProveedoresInput = {
    where: entradas_mercaderiaWhereUniqueInput
    update: XOR<entradas_mercaderiaUpdateWithoutProveedoresInput, entradas_mercaderiaUncheckedUpdateWithoutProveedoresInput>
    create: XOR<entradas_mercaderiaCreateWithoutProveedoresInput, entradas_mercaderiaUncheckedCreateWithoutProveedoresInput>
  }

  export type entradas_mercaderiaUpdateWithWhereUniqueWithoutProveedoresInput = {
    where: entradas_mercaderiaWhereUniqueInput
    data: XOR<entradas_mercaderiaUpdateWithoutProveedoresInput, entradas_mercaderiaUncheckedUpdateWithoutProveedoresInput>
  }

  export type entradas_mercaderiaUpdateManyWithWhereWithoutProveedoresInput = {
    where: entradas_mercaderiaScalarWhereInput
    data: XOR<entradas_mercaderiaUpdateManyMutationInput, entradas_mercaderiaUncheckedUpdateManyWithoutProveedoresInput>
  }

  export type entradas_mercaderiaScalarWhereInput = {
    AND?: entradas_mercaderiaScalarWhereInput | entradas_mercaderiaScalarWhereInput[]
    OR?: entradas_mercaderiaScalarWhereInput[]
    NOT?: entradas_mercaderiaScalarWhereInput | entradas_mercaderiaScalarWhereInput[]
    id?: IntFilter<"entradas_mercaderia"> | number
    fecha?: DateTimeFilter<"entradas_mercaderia"> | Date | string
    proveedor_id?: IntFilter<"entradas_mercaderia"> | number
    numero_factura?: StringNullableFilter<"entradas_mercaderia"> | string | null
    total?: DecimalFilter<"entradas_mercaderia"> | Decimal | DecimalJsLike | number | string
    notas?: StringNullableFilter<"entradas_mercaderia"> | string | null
    created_at?: DateTimeNullableFilter<"entradas_mercaderia"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"entradas_mercaderia"> | Date | string | null
  }

  export type pedidosCreateWithoutVendedoresInput = {
    numero: string
    fecha: Date | string
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    despachos?: despachosCreateNestedManyWithoutPedidosInput
    detalle_pedidos?: detalle_pedidosCreateNestedManyWithoutPedidosInput
    pagos?: pagosCreateNestedManyWithoutPedidosInput
    clientes: clientesCreateNestedOneWithoutPedidosInput
  }

  export type pedidosUncheckedCreateWithoutVendedoresInput = {
    id?: number
    numero: string
    fecha: Date | string
    cliente_id: number
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    despachos?: despachosUncheckedCreateNestedManyWithoutPedidosInput
    detalle_pedidos?: detalle_pedidosUncheckedCreateNestedManyWithoutPedidosInput
    pagos?: pagosUncheckedCreateNestedManyWithoutPedidosInput
  }

  export type pedidosCreateOrConnectWithoutVendedoresInput = {
    where: pedidosWhereUniqueInput
    create: XOR<pedidosCreateWithoutVendedoresInput, pedidosUncheckedCreateWithoutVendedoresInput>
  }

  export type pedidosCreateManyVendedoresInputEnvelope = {
    data: pedidosCreateManyVendedoresInput | pedidosCreateManyVendedoresInput[]
    skipDuplicates?: boolean
  }

  export type pedidosUpsertWithWhereUniqueWithoutVendedoresInput = {
    where: pedidosWhereUniqueInput
    update: XOR<pedidosUpdateWithoutVendedoresInput, pedidosUncheckedUpdateWithoutVendedoresInput>
    create: XOR<pedidosCreateWithoutVendedoresInput, pedidosUncheckedCreateWithoutVendedoresInput>
  }

  export type pedidosUpdateWithWhereUniqueWithoutVendedoresInput = {
    where: pedidosWhereUniqueInput
    data: XOR<pedidosUpdateWithoutVendedoresInput, pedidosUncheckedUpdateWithoutVendedoresInput>
  }

  export type pedidosUpdateManyWithWhereWithoutVendedoresInput = {
    where: pedidosScalarWhereInput
    data: XOR<pedidosUpdateManyMutationInput, pedidosUncheckedUpdateManyWithoutVendedoresInput>
  }

  export type movimientos_cajaCreateManyCaja_diariaInput = {
    id?: number
    fecha_hora: Date | string
    tipo: $Enums.movimientos_caja_tipo
    concepto: string
    monto: Decimal | DecimalJsLike | number | string
    referencia_id?: number | null
    referencia_tipo?: $Enums.movimientos_caja_referencia_tipo | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type movimientos_cajaUpdateWithoutCaja_diariaInput = {
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: Enummovimientos_caja_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_tipo
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    referencia_tipo?: NullableEnummovimientos_caja_referencia_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_referencia_tipo | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientos_cajaUncheckedUpdateWithoutCaja_diariaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: Enummovimientos_caja_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_tipo
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    referencia_tipo?: NullableEnummovimientos_caja_referencia_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_referencia_tipo | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientos_cajaUncheckedUpdateManyWithoutCaja_diariaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: Enummovimientos_caja_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_tipo
    concepto?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    referencia_id?: NullableIntFieldUpdateOperationsInput | number | null
    referencia_tipo?: NullableEnummovimientos_caja_referencia_tipoFieldUpdateOperationsInput | $Enums.movimientos_caja_referencia_tipo | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productosCreateManyCategoriasInput = {
    id?: number
    codigo: string
    descripcion: string
    presentacion_id: number
    precio_sugerido?: Decimal | DecimalJsLike | number | string | null
    precio_minimo?: Decimal | DecimalJsLike | number | string | null
    stock?: number
    stock_minimo?: number
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type productosUpdateWithoutCategoriasInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUpdateManyWithoutProductosNestedInput
    detalle_pedidos?: detalle_pedidosUpdateManyWithoutProductosNestedInput
    presentaciones?: presentacionesUpdateOneRequiredWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    presentacion_id?: IntFieldUpdateOperationsInput | number
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUncheckedUpdateManyWithoutProductosNestedInput
    detalle_pedidos?: detalle_pedidosUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateManyWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    presentacion_id?: IntFieldUpdateOperationsInput | number
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pedidosCreateManyClientesInput = {
    id?: number
    numero: string
    fecha: Date | string
    vendedor_id: number
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pedidosUpdateWithoutClientesInput = {
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    despachos?: despachosUpdateManyWithoutPedidosNestedInput
    detalle_pedidos?: detalle_pedidosUpdateManyWithoutPedidosNestedInput
    pagos?: pagosUpdateManyWithoutPedidosNestedInput
    vendedores?: vendedoresUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type pedidosUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    vendedor_id?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    despachos?: despachosUncheckedUpdateManyWithoutPedidosNestedInput
    detalle_pedidos?: detalle_pedidosUncheckedUpdateManyWithoutPedidosNestedInput
    pagos?: pagosUncheckedUpdateManyWithoutPedidosNestedInput
  }

  export type pedidosUncheckedUpdateManyWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    vendedor_id?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_entradas_mercaderiaCreateManyEntradas_mercaderiaInput = {
    id?: number
    producto_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type detalle_entradas_mercaderiaUpdateWithoutEntradas_mercaderiaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: productosUpdateOneRequiredWithoutDetalle_entradas_mercaderiaNestedInput
  }

  export type detalle_entradas_mercaderiaUncheckedUpdateWithoutEntradas_mercaderiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_entradas_mercaderiaUncheckedUpdateManyWithoutEntradas_mercaderiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type despachosCreateManyPedidosInput = {
    id?: number
    fecha: Date | string
    direccion_entrega: string
    contacto_entrega?: string | null
    telefono_entrega?: string | null
    estado?: $Enums.despachos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type detalle_pedidosCreateManyPedidosInput = {
    id?: number
    producto_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pagosCreateManyPedidosInput = {
    id?: number
    fecha: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago?: $Enums.pagos_metodo_pago
    referencia?: string | null
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type despachosUpdateWithoutPedidosInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    direccion_entrega?: StringFieldUpdateOperationsInput | string
    contacto_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: Enumdespachos_estadoFieldUpdateOperationsInput | $Enums.despachos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type despachosUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    direccion_entrega?: StringFieldUpdateOperationsInput | string
    contacto_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: Enumdespachos_estadoFieldUpdateOperationsInput | $Enums.despachos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type despachosUncheckedUpdateManyWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    direccion_entrega?: StringFieldUpdateOperationsInput | string
    contacto_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    telefono_entrega?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: Enumdespachos_estadoFieldUpdateOperationsInput | $Enums.despachos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_pedidosUpdateWithoutPedidosInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: productosUpdateOneRequiredWithoutDetalle_pedidosNestedInput
  }

  export type detalle_pedidosUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_pedidosUncheckedUpdateManyWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    producto_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pagosUpdateWithoutPedidosInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFieldUpdateOperationsInput | $Enums.pagos_metodo_pago
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pagosUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFieldUpdateOperationsInput | $Enums.pagos_metodo_pago
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pagosUncheckedUpdateManyWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFieldUpdateOperationsInput | $Enums.pagos_metodo_pago
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productosCreateManyPresentacionesInput = {
    id?: number
    codigo: string
    descripcion: string
    categoria_id: number
    precio_sugerido?: Decimal | DecimalJsLike | number | string | null
    precio_minimo?: Decimal | DecimalJsLike | number | string | null
    stock?: number
    stock_minimo?: number
    imagen?: string | null
    activo?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type productosUpdateWithoutPresentacionesInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUpdateManyWithoutProductosNestedInput
    detalle_pedidos?: detalle_pedidosUpdateManyWithoutProductosNestedInput
    categorias?: categoriasUpdateOneRequiredWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutPresentacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoria_id?: IntFieldUpdateOperationsInput | number
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUncheckedUpdateManyWithoutProductosNestedInput
    detalle_pedidos?: detalle_pedidosUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateManyWithoutPresentacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    categoria_id?: IntFieldUpdateOperationsInput | number
    precio_sugerido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    precio_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    stock_minimo?: IntFieldUpdateOperationsInput | number
    imagen?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_entradas_mercaderiaCreateManyProductosInput = {
    id?: number
    entrada_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type detalle_pedidosCreateManyProductosInput = {
    id?: number
    pedido_id: number
    cantidad: number
    precio_unitario: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type detalle_entradas_mercaderiaUpdateWithoutProductosInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entradas_mercaderia?: entradas_mercaderiaUpdateOneRequiredWithoutDetalle_entradas_mercaderiaNestedInput
  }

  export type detalle_entradas_mercaderiaUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrada_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_entradas_mercaderiaUncheckedUpdateManyWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrada_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_pedidosUpdateWithoutProductosInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: pedidosUpdateOneRequiredWithoutDetalle_pedidosNestedInput
  }

  export type detalle_pedidosUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type detalle_pedidosUncheckedUpdateManyWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precio_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entradas_mercaderiaCreateManyProveedoresInput = {
    id?: number
    fecha: Date | string
    numero_factura?: string | null
    total?: Decimal | DecimalJsLike | number | string
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type entradas_mercaderiaUpdateWithoutProveedoresInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_factura?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUpdateManyWithoutEntradas_mercaderiaNestedInput
  }

  export type entradas_mercaderiaUncheckedUpdateWithoutProveedoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_factura?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detalle_entradas_mercaderia?: detalle_entradas_mercaderiaUncheckedUpdateManyWithoutEntradas_mercaderiaNestedInput
  }

  export type entradas_mercaderiaUncheckedUpdateManyWithoutProveedoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    numero_factura?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pedidosCreateManyVendedoresInput = {
    id?: number
    numero: string
    fecha: Date | string
    cliente_id: number
    subtotal?: Decimal | DecimalJsLike | number | string
    igv?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    estado?: $Enums.pedidos_estado
    notas?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type pedidosUpdateWithoutVendedoresInput = {
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    despachos?: despachosUpdateManyWithoutPedidosNestedInput
    detalle_pedidos?: detalle_pedidosUpdateManyWithoutPedidosNestedInput
    pagos?: pagosUpdateManyWithoutPedidosNestedInput
    clientes?: clientesUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type pedidosUncheckedUpdateWithoutVendedoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente_id?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    despachos?: despachosUncheckedUpdateManyWithoutPedidosNestedInput
    detalle_pedidos?: detalle_pedidosUncheckedUpdateManyWithoutPedidosNestedInput
    pagos?: pagosUncheckedUpdateManyWithoutPedidosNestedInput
  }

  export type pedidosUncheckedUpdateManyWithoutVendedoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente_id?: IntFieldUpdateOperationsInput | number
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    igv?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumpedidos_estadoFieldUpdateOperationsInput | $Enums.pedidos_estado
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}