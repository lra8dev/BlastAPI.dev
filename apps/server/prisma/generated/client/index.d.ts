
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TestRun
 * 
 */
export type TestRun = $Result.DefaultSelection<Prisma.$TestRunPayload>
/**
 * Model Metric
 * 
 */
export type Metric = $Result.DefaultSelection<Prisma.$MetricPayload>
/**
 * Model TestConfig
 * 
 */
export type TestConfig = $Result.DefaultSelection<Prisma.$TestConfigPayload>
/**
 * Model TestResult
 * 
 */
export type TestResult = $Result.DefaultSelection<Prisma.$TestResultPayload>
/**
 * Model TestHistory
 * 
 */
export type TestHistory = $Result.DefaultSelection<Prisma.$TestHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testRun`: Exposes CRUD operations for the **TestRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestRuns
    * const testRuns = await prisma.testRun.findMany()
    * ```
    */
  get testRun(): Prisma.TestRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metric`: Exposes CRUD operations for the **Metric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metric.findMany()
    * ```
    */
  get metric(): Prisma.MetricDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testConfig`: Exposes CRUD operations for the **TestConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestConfigs
    * const testConfigs = await prisma.testConfig.findMany()
    * ```
    */
  get testConfig(): Prisma.TestConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testResult`: Exposes CRUD operations for the **TestResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestResults
    * const testResults = await prisma.testResult.findMany()
    * ```
    */
  get testResult(): Prisma.TestResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testHistory`: Exposes CRUD operations for the **TestHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestHistories
    * const testHistories = await prisma.testHistory.findMany()
    * ```
    */
  get testHistory(): Prisma.TestHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    User: 'User',
    TestRun: 'TestRun',
    Metric: 'Metric',
    TestConfig: 'TestConfig',
    TestResult: 'TestResult',
    TestHistory: 'TestHistory'
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
      modelProps: "user" | "testRun" | "metric" | "testConfig" | "testResult" | "testHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TestRun: {
        payload: Prisma.$TestRunPayload<ExtArgs>
        fields: Prisma.TestRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          findFirst: {
            args: Prisma.TestRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          findMany: {
            args: Prisma.TestRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>[]
          }
          create: {
            args: Prisma.TestRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          createMany: {
            args: Prisma.TestRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>[]
          }
          delete: {
            args: Prisma.TestRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          update: {
            args: Prisma.TestRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          deleteMany: {
            args: Prisma.TestRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>[]
          }
          upsert: {
            args: Prisma.TestRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          aggregate: {
            args: Prisma.TestRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestRun>
          }
          groupBy: {
            args: Prisma.TestRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestRunCountArgs<ExtArgs>
            result: $Utils.Optional<TestRunCountAggregateOutputType> | number
          }
        }
      }
      Metric: {
        payload: Prisma.$MetricPayload<ExtArgs>
        fields: Prisma.MetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findFirst: {
            args: Prisma.MetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findMany: {
            args: Prisma.MetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          create: {
            args: Prisma.MetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          createMany: {
            args: Prisma.MetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          delete: {
            args: Prisma.MetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          update: {
            args: Prisma.MetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          deleteMany: {
            args: Prisma.MetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          upsert: {
            args: Prisma.MetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          aggregate: {
            args: Prisma.MetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetric>
          }
          groupBy: {
            args: Prisma.MetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricCountArgs<ExtArgs>
            result: $Utils.Optional<MetricCountAggregateOutputType> | number
          }
        }
      }
      TestConfig: {
        payload: Prisma.$TestConfigPayload<ExtArgs>
        fields: Prisma.TestConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestConfigPayload>
          }
          findFirst: {
            args: Prisma.TestConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestConfigPayload>
          }
          findMany: {
            args: Prisma.TestConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestConfigPayload>[]
          }
          create: {
            args: Prisma.TestConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestConfigPayload>
          }
          createMany: {
            args: Prisma.TestConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestConfigPayload>[]
          }
          delete: {
            args: Prisma.TestConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestConfigPayload>
          }
          update: {
            args: Prisma.TestConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestConfigPayload>
          }
          deleteMany: {
            args: Prisma.TestConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestConfigPayload>[]
          }
          upsert: {
            args: Prisma.TestConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestConfigPayload>
          }
          aggregate: {
            args: Prisma.TestConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestConfig>
          }
          groupBy: {
            args: Prisma.TestConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestConfigCountArgs<ExtArgs>
            result: $Utils.Optional<TestConfigCountAggregateOutputType> | number
          }
        }
      }
      TestResult: {
        payload: Prisma.$TestResultPayload<ExtArgs>
        fields: Prisma.TestResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          findFirst: {
            args: Prisma.TestResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          findMany: {
            args: Prisma.TestResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          create: {
            args: Prisma.TestResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          createMany: {
            args: Prisma.TestResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          delete: {
            args: Prisma.TestResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          update: {
            args: Prisma.TestResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          deleteMany: {
            args: Prisma.TestResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          upsert: {
            args: Prisma.TestResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          aggregate: {
            args: Prisma.TestResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestResult>
          }
          groupBy: {
            args: Prisma.TestResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestResultCountArgs<ExtArgs>
            result: $Utils.Optional<TestResultCountAggregateOutputType> | number
          }
        }
      }
      TestHistory: {
        payload: Prisma.$TestHistoryPayload<ExtArgs>
        fields: Prisma.TestHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestHistoryPayload>
          }
          findFirst: {
            args: Prisma.TestHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestHistoryPayload>
          }
          findMany: {
            args: Prisma.TestHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestHistoryPayload>[]
          }
          create: {
            args: Prisma.TestHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestHistoryPayload>
          }
          createMany: {
            args: Prisma.TestHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestHistoryPayload>[]
          }
          delete: {
            args: Prisma.TestHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestHistoryPayload>
          }
          update: {
            args: Prisma.TestHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TestHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TestHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestHistoryPayload>
          }
          aggregate: {
            args: Prisma.TestHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestHistory>
          }
          groupBy: {
            args: Prisma.TestHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TestHistoryCountAggregateOutputType> | number
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
    user?: UserOmit
    testRun?: TestRunOmit
    metric?: MetricOmit
    testConfig?: TestConfigOmit
    testResult?: TestResultOmit
    testHistory?: TestHistoryOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    testRuns: number
    testHistories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRuns?: boolean | UserCountOutputTypeCountTestRunsArgs
    testHistories?: boolean | UserCountOutputTypeCountTestHistoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestRunWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestHistoryWhereInput
  }


  /**
   * Count Type TestRunCountOutputType
   */

  export type TestRunCountOutputType = {
    metrics: number
    testHistories: number
  }

  export type TestRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | TestRunCountOutputTypeCountMetricsArgs
    testHistories?: boolean | TestRunCountOutputTypeCountTestHistoriesArgs
  }

  // Custom InputTypes
  /**
   * TestRunCountOutputType without action
   */
  export type TestRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRunCountOutputType
     */
    select?: TestRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestRunCountOutputType without action
   */
  export type TestRunCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
  }

  /**
   * TestRunCountOutputType without action
   */
  export type TestRunCountOutputTypeCountTestHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testRuns?: boolean | User$testRunsArgs<ExtArgs>
    testHistories?: boolean | User$testHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRuns?: boolean | User$testRunsArgs<ExtArgs>
    testHistories?: boolean | User$testHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      testRuns: Prisma.$TestRunPayload<ExtArgs>[]
      testHistories: Prisma.$TestHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testRuns<T extends User$testRunsArgs<ExtArgs> = {}>(args?: Subset<T, User$testRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testHistories<T extends User$testHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$testHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.testRuns
   */
  export type User$testRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    where?: TestRunWhereInput
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    cursor?: TestRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * User.testHistories
   */
  export type User$testHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryInclude<ExtArgs> | null
    where?: TestHistoryWhereInput
    orderBy?: TestHistoryOrderByWithRelationInput | TestHistoryOrderByWithRelationInput[]
    cursor?: TestHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestHistoryScalarFieldEnum | TestHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TestRun
   */

  export type AggregateTestRun = {
    _count: TestRunCountAggregateOutputType | null
    _avg: TestRunAvgAggregateOutputType | null
    _sum: TestRunSumAggregateOutputType | null
    _min: TestRunMinAggregateOutputType | null
    _max: TestRunMaxAggregateOutputType | null
  }

  export type TestRunAvgAggregateOutputType = {
    requestCount: number | null
    duration: number | null
    errorRate: number | null
    avgResponseTime: number | null
    maxResponseTime: number | null
  }

  export type TestRunSumAggregateOutputType = {
    requestCount: number | null
    duration: number | null
    errorRate: number | null
    avgResponseTime: number | null
    maxResponseTime: number | null
  }

  export type TestRunMinAggregateOutputType = {
    id: string | null
    userId: string | null
    testName: string | null
    url: string | null
    method: string | null
    status: string | null
    requestCount: number | null
    duration: number | null
    errorRate: number | null
    avgResponseTime: number | null
    maxResponseTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestRunMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    testName: string | null
    url: string | null
    method: string | null
    status: string | null
    requestCount: number | null
    duration: number | null
    errorRate: number | null
    avgResponseTime: number | null
    maxResponseTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestRunCountAggregateOutputType = {
    id: number
    userId: number
    testName: number
    url: number
    method: number
    status: number
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestRunAvgAggregateInputType = {
    requestCount?: true
    duration?: true
    errorRate?: true
    avgResponseTime?: true
    maxResponseTime?: true
  }

  export type TestRunSumAggregateInputType = {
    requestCount?: true
    duration?: true
    errorRate?: true
    avgResponseTime?: true
    maxResponseTime?: true
  }

  export type TestRunMinAggregateInputType = {
    id?: true
    userId?: true
    testName?: true
    url?: true
    method?: true
    status?: true
    requestCount?: true
    duration?: true
    errorRate?: true
    avgResponseTime?: true
    maxResponseTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestRunMaxAggregateInputType = {
    id?: true
    userId?: true
    testName?: true
    url?: true
    method?: true
    status?: true
    requestCount?: true
    duration?: true
    errorRate?: true
    avgResponseTime?: true
    maxResponseTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestRunCountAggregateInputType = {
    id?: true
    userId?: true
    testName?: true
    url?: true
    method?: true
    status?: true
    requestCount?: true
    duration?: true
    errorRate?: true
    avgResponseTime?: true
    maxResponseTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestRun to aggregate.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestRuns
    **/
    _count?: true | TestRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestRunMaxAggregateInputType
  }

  export type GetTestRunAggregateType<T extends TestRunAggregateArgs> = {
        [P in keyof T & keyof AggregateTestRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestRun[P]>
      : GetScalarType<T[P], AggregateTestRun[P]>
  }




  export type TestRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestRunWhereInput
    orderBy?: TestRunOrderByWithAggregationInput | TestRunOrderByWithAggregationInput[]
    by: TestRunScalarFieldEnum[] | TestRunScalarFieldEnum
    having?: TestRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestRunCountAggregateInputType | true
    _avg?: TestRunAvgAggregateInputType
    _sum?: TestRunSumAggregateInputType
    _min?: TestRunMinAggregateInputType
    _max?: TestRunMaxAggregateInputType
  }

  export type TestRunGroupByOutputType = {
    id: string
    userId: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt: Date
    updatedAt: Date
    _count: TestRunCountAggregateOutputType | null
    _avg: TestRunAvgAggregateOutputType | null
    _sum: TestRunSumAggregateOutputType | null
    _min: TestRunMinAggregateOutputType | null
    _max: TestRunMaxAggregateOutputType | null
  }

  type GetTestRunGroupByPayload<T extends TestRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestRunGroupByOutputType[P]>
            : GetScalarType<T[P], TestRunGroupByOutputType[P]>
        }
      >
    >


  export type TestRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    testName?: boolean
    url?: boolean
    method?: boolean
    status?: boolean
    requestCount?: boolean
    duration?: boolean
    errorRate?: boolean
    avgResponseTime?: boolean
    maxResponseTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    metrics?: boolean | TestRun$metricsArgs<ExtArgs>
    testConfig?: boolean | TestRun$testConfigArgs<ExtArgs>
    testResult?: boolean | TestRun$testResultArgs<ExtArgs>
    testHistories?: boolean | TestRun$testHistoriesArgs<ExtArgs>
    _count?: boolean | TestRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testRun"]>

  export type TestRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    testName?: boolean
    url?: boolean
    method?: boolean
    status?: boolean
    requestCount?: boolean
    duration?: boolean
    errorRate?: boolean
    avgResponseTime?: boolean
    maxResponseTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testRun"]>

  export type TestRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    testName?: boolean
    url?: boolean
    method?: boolean
    status?: boolean
    requestCount?: boolean
    duration?: boolean
    errorRate?: boolean
    avgResponseTime?: boolean
    maxResponseTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testRun"]>

  export type TestRunSelectScalar = {
    id?: boolean
    userId?: boolean
    testName?: boolean
    url?: boolean
    method?: boolean
    status?: boolean
    requestCount?: boolean
    duration?: boolean
    errorRate?: boolean
    avgResponseTime?: boolean
    maxResponseTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "testName" | "url" | "method" | "status" | "requestCount" | "duration" | "errorRate" | "avgResponseTime" | "maxResponseTime" | "createdAt" | "updatedAt", ExtArgs["result"]["testRun"]>
  export type TestRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    metrics?: boolean | TestRun$metricsArgs<ExtArgs>
    testConfig?: boolean | TestRun$testConfigArgs<ExtArgs>
    testResult?: boolean | TestRun$testResultArgs<ExtArgs>
    testHistories?: boolean | TestRun$testHistoriesArgs<ExtArgs>
    _count?: boolean | TestRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TestRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestRun"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      metrics: Prisma.$MetricPayload<ExtArgs>[]
      testConfig: Prisma.$TestConfigPayload<ExtArgs> | null
      testResult: Prisma.$TestResultPayload<ExtArgs> | null
      testHistories: Prisma.$TestHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      testName: string
      url: string
      method: string
      status: string
      requestCount: number
      duration: number
      errorRate: number
      avgResponseTime: number
      maxResponseTime: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testRun"]>
    composites: {}
  }

  type TestRunGetPayload<S extends boolean | null | undefined | TestRunDefaultArgs> = $Result.GetResult<Prisma.$TestRunPayload, S>

  type TestRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestRunCountAggregateInputType | true
    }

  export interface TestRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestRun'], meta: { name: 'TestRun' } }
    /**
     * Find zero or one TestRun that matches the filter.
     * @param {TestRunFindUniqueArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestRunFindUniqueArgs>(args: SelectSubset<T, TestRunFindUniqueArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestRunFindUniqueOrThrowArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestRunFindUniqueOrThrowArgs>(args: SelectSubset<T, TestRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunFindFirstArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestRunFindFirstArgs>(args?: SelectSubset<T, TestRunFindFirstArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunFindFirstOrThrowArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestRunFindFirstOrThrowArgs>(args?: SelectSubset<T, TestRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestRuns
     * const testRuns = await prisma.testRun.findMany()
     * 
     * // Get first 10 TestRuns
     * const testRuns = await prisma.testRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testRunWithIdOnly = await prisma.testRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestRunFindManyArgs>(args?: SelectSubset<T, TestRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestRun.
     * @param {TestRunCreateArgs} args - Arguments to create a TestRun.
     * @example
     * // Create one TestRun
     * const TestRun = await prisma.testRun.create({
     *   data: {
     *     // ... data to create a TestRun
     *   }
     * })
     * 
     */
    create<T extends TestRunCreateArgs>(args: SelectSubset<T, TestRunCreateArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestRuns.
     * @param {TestRunCreateManyArgs} args - Arguments to create many TestRuns.
     * @example
     * // Create many TestRuns
     * const testRun = await prisma.testRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestRunCreateManyArgs>(args?: SelectSubset<T, TestRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestRuns and returns the data saved in the database.
     * @param {TestRunCreateManyAndReturnArgs} args - Arguments to create many TestRuns.
     * @example
     * // Create many TestRuns
     * const testRun = await prisma.testRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestRuns and only return the `id`
     * const testRunWithIdOnly = await prisma.testRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestRunCreateManyAndReturnArgs>(args?: SelectSubset<T, TestRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestRun.
     * @param {TestRunDeleteArgs} args - Arguments to delete one TestRun.
     * @example
     * // Delete one TestRun
     * const TestRun = await prisma.testRun.delete({
     *   where: {
     *     // ... filter to delete one TestRun
     *   }
     * })
     * 
     */
    delete<T extends TestRunDeleteArgs>(args: SelectSubset<T, TestRunDeleteArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestRun.
     * @param {TestRunUpdateArgs} args - Arguments to update one TestRun.
     * @example
     * // Update one TestRun
     * const testRun = await prisma.testRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestRunUpdateArgs>(args: SelectSubset<T, TestRunUpdateArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestRuns.
     * @param {TestRunDeleteManyArgs} args - Arguments to filter TestRuns to delete.
     * @example
     * // Delete a few TestRuns
     * const { count } = await prisma.testRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestRunDeleteManyArgs>(args?: SelectSubset<T, TestRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestRuns
     * const testRun = await prisma.testRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestRunUpdateManyArgs>(args: SelectSubset<T, TestRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestRuns and returns the data updated in the database.
     * @param {TestRunUpdateManyAndReturnArgs} args - Arguments to update many TestRuns.
     * @example
     * // Update many TestRuns
     * const testRun = await prisma.testRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestRuns and only return the `id`
     * const testRunWithIdOnly = await prisma.testRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestRunUpdateManyAndReturnArgs>(args: SelectSubset<T, TestRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestRun.
     * @param {TestRunUpsertArgs} args - Arguments to update or create a TestRun.
     * @example
     * // Update or create a TestRun
     * const testRun = await prisma.testRun.upsert({
     *   create: {
     *     // ... data to create a TestRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestRun we want to update
     *   }
     * })
     */
    upsert<T extends TestRunUpsertArgs>(args: SelectSubset<T, TestRunUpsertArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunCountArgs} args - Arguments to filter TestRuns to count.
     * @example
     * // Count the number of TestRuns
     * const count = await prisma.testRun.count({
     *   where: {
     *     // ... the filter for the TestRuns we want to count
     *   }
     * })
    **/
    count<T extends TestRunCountArgs>(
      args?: Subset<T, TestRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestRunAggregateArgs>(args: Subset<T, TestRunAggregateArgs>): Prisma.PrismaPromise<GetTestRunAggregateType<T>>

    /**
     * Group by TestRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunGroupByArgs} args - Group by arguments.
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
      T extends TestRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestRunGroupByArgs['orderBy'] }
        : { orderBy?: TestRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestRun model
   */
  readonly fields: TestRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metrics<T extends TestRun$metricsArgs<ExtArgs> = {}>(args?: Subset<T, TestRun$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testConfig<T extends TestRun$testConfigArgs<ExtArgs> = {}>(args?: Subset<T, TestRun$testConfigArgs<ExtArgs>>): Prisma__TestConfigClient<$Result.GetResult<Prisma.$TestConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    testResult<T extends TestRun$testResultArgs<ExtArgs> = {}>(args?: Subset<T, TestRun$testResultArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    testHistories<T extends TestRun$testHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, TestRun$testHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TestRun model
   */
  interface TestRunFieldRefs {
    readonly id: FieldRef<"TestRun", 'String'>
    readonly userId: FieldRef<"TestRun", 'String'>
    readonly testName: FieldRef<"TestRun", 'String'>
    readonly url: FieldRef<"TestRun", 'String'>
    readonly method: FieldRef<"TestRun", 'String'>
    readonly status: FieldRef<"TestRun", 'String'>
    readonly requestCount: FieldRef<"TestRun", 'Int'>
    readonly duration: FieldRef<"TestRun", 'Float'>
    readonly errorRate: FieldRef<"TestRun", 'Float'>
    readonly avgResponseTime: FieldRef<"TestRun", 'Float'>
    readonly maxResponseTime: FieldRef<"TestRun", 'Float'>
    readonly createdAt: FieldRef<"TestRun", 'DateTime'>
    readonly updatedAt: FieldRef<"TestRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestRun findUnique
   */
  export type TestRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun findUniqueOrThrow
   */
  export type TestRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun findFirst
   */
  export type TestRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestRuns.
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestRuns.
     */
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * TestRun findFirstOrThrow
   */
  export type TestRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestRuns.
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestRuns.
     */
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * TestRun findMany
   */
  export type TestRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRuns to fetch.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestRuns.
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * TestRun create
   */
  export type TestRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * The data needed to create a TestRun.
     */
    data: XOR<TestRunCreateInput, TestRunUncheckedCreateInput>
  }

  /**
   * TestRun createMany
   */
  export type TestRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestRuns.
     */
    data: TestRunCreateManyInput | TestRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestRun createManyAndReturn
   */
  export type TestRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * The data used to create many TestRuns.
     */
    data: TestRunCreateManyInput | TestRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestRun update
   */
  export type TestRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * The data needed to update a TestRun.
     */
    data: XOR<TestRunUpdateInput, TestRunUncheckedUpdateInput>
    /**
     * Choose, which TestRun to update.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun updateMany
   */
  export type TestRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestRuns.
     */
    data: XOR<TestRunUpdateManyMutationInput, TestRunUncheckedUpdateManyInput>
    /**
     * Filter which TestRuns to update
     */
    where?: TestRunWhereInput
    /**
     * Limit how many TestRuns to update.
     */
    limit?: number
  }

  /**
   * TestRun updateManyAndReturn
   */
  export type TestRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * The data used to update TestRuns.
     */
    data: XOR<TestRunUpdateManyMutationInput, TestRunUncheckedUpdateManyInput>
    /**
     * Filter which TestRuns to update
     */
    where?: TestRunWhereInput
    /**
     * Limit how many TestRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestRun upsert
   */
  export type TestRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * The filter to search for the TestRun to update in case it exists.
     */
    where: TestRunWhereUniqueInput
    /**
     * In case the TestRun found by the `where` argument doesn't exist, create a new TestRun with this data.
     */
    create: XOR<TestRunCreateInput, TestRunUncheckedCreateInput>
    /**
     * In case the TestRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestRunUpdateInput, TestRunUncheckedUpdateInput>
  }

  /**
   * TestRun delete
   */
  export type TestRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter which TestRun to delete.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun deleteMany
   */
  export type TestRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestRuns to delete
     */
    where?: TestRunWhereInput
    /**
     * Limit how many TestRuns to delete.
     */
    limit?: number
  }

  /**
   * TestRun.metrics
   */
  export type TestRun$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    cursor?: MetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * TestRun.testConfig
   */
  export type TestRun$testConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestConfig
     */
    select?: TestConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestConfig
     */
    omit?: TestConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestConfigInclude<ExtArgs> | null
    where?: TestConfigWhereInput
  }

  /**
   * TestRun.testResult
   */
  export type TestRun$testResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    where?: TestResultWhereInput
  }

  /**
   * TestRun.testHistories
   */
  export type TestRun$testHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryInclude<ExtArgs> | null
    where?: TestHistoryWhereInput
    orderBy?: TestHistoryOrderByWithRelationInput | TestHistoryOrderByWithRelationInput[]
    cursor?: TestHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestHistoryScalarFieldEnum | TestHistoryScalarFieldEnum[]
  }

  /**
   * TestRun without action
   */
  export type TestRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
  }


  /**
   * Model Metric
   */

  export type AggregateMetric = {
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  export type MetricAvgAggregateOutputType = {
    latency: number | null
    throughput: number | null
    statusCode: number | null
  }

  export type MetricSumAggregateOutputType = {
    latency: number | null
    throughput: number | null
    statusCode: number | null
  }

  export type MetricMinAggregateOutputType = {
    id: string | null
    testRunId: string | null
    timestamp: Date | null
    latency: number | null
    throughput: number | null
    statusCode: number | null
  }

  export type MetricMaxAggregateOutputType = {
    id: string | null
    testRunId: string | null
    timestamp: Date | null
    latency: number | null
    throughput: number | null
    statusCode: number | null
  }

  export type MetricCountAggregateOutputType = {
    id: number
    testRunId: number
    timestamp: number
    latency: number
    throughput: number
    statusCode: number
    _all: number
  }


  export type MetricAvgAggregateInputType = {
    latency?: true
    throughput?: true
    statusCode?: true
  }

  export type MetricSumAggregateInputType = {
    latency?: true
    throughput?: true
    statusCode?: true
  }

  export type MetricMinAggregateInputType = {
    id?: true
    testRunId?: true
    timestamp?: true
    latency?: true
    throughput?: true
    statusCode?: true
  }

  export type MetricMaxAggregateInputType = {
    id?: true
    testRunId?: true
    timestamp?: true
    latency?: true
    throughput?: true
    statusCode?: true
  }

  export type MetricCountAggregateInputType = {
    id?: true
    testRunId?: true
    timestamp?: true
    latency?: true
    throughput?: true
    statusCode?: true
    _all?: true
  }

  export type MetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metric to aggregate.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrics
    **/
    _count?: true | MetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricMaxAggregateInputType
  }

  export type GetMetricAggregateType<T extends MetricAggregateArgs> = {
        [P in keyof T & keyof AggregateMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetric[P]>
      : GetScalarType<T[P], AggregateMetric[P]>
  }




  export type MetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithAggregationInput | MetricOrderByWithAggregationInput[]
    by: MetricScalarFieldEnum[] | MetricScalarFieldEnum
    having?: MetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricCountAggregateInputType | true
    _avg?: MetricAvgAggregateInputType
    _sum?: MetricSumAggregateInputType
    _min?: MetricMinAggregateInputType
    _max?: MetricMaxAggregateInputType
  }

  export type MetricGroupByOutputType = {
    id: string
    testRunId: string
    timestamp: Date
    latency: number
    throughput: number
    statusCode: number
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  type GetMetricGroupByPayload<T extends MetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricGroupByOutputType[P]>
            : GetScalarType<T[P], MetricGroupByOutputType[P]>
        }
      >
    >


  export type MetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    timestamp?: boolean
    latency?: boolean
    throughput?: boolean
    statusCode?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    timestamp?: boolean
    latency?: boolean
    throughput?: boolean
    statusCode?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    timestamp?: boolean
    latency?: boolean
    throughput?: boolean
    statusCode?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectScalar = {
    id?: boolean
    testRunId?: boolean
    timestamp?: boolean
    latency?: boolean
    throughput?: boolean
    statusCode?: boolean
  }

  export type MetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testRunId" | "timestamp" | "latency" | "throughput" | "statusCode", ExtArgs["result"]["metric"]>
  export type MetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }
  export type MetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }
  export type MetricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }

  export type $MetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metric"
    objects: {
      testRun: Prisma.$TestRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      testRunId: string
      timestamp: Date
      latency: number
      throughput: number
      statusCode: number
    }, ExtArgs["result"]["metric"]>
    composites: {}
  }

  type MetricGetPayload<S extends boolean | null | undefined | MetricDefaultArgs> = $Result.GetResult<Prisma.$MetricPayload, S>

  type MetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricCountAggregateInputType | true
    }

  export interface MetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metric'], meta: { name: 'Metric' } }
    /**
     * Find zero or one Metric that matches the filter.
     * @param {MetricFindUniqueArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricFindUniqueArgs>(args: SelectSubset<T, MetricFindUniqueArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricFindUniqueOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricFindFirstArgs>(args?: SelectSubset<T, MetricFindFirstArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metric.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricWithIdOnly = await prisma.metric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricFindManyArgs>(args?: SelectSubset<T, MetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metric.
     * @param {MetricCreateArgs} args - Arguments to create a Metric.
     * @example
     * // Create one Metric
     * const Metric = await prisma.metric.create({
     *   data: {
     *     // ... data to create a Metric
     *   }
     * })
     * 
     */
    create<T extends MetricCreateArgs>(args: SelectSubset<T, MetricCreateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metrics.
     * @param {MetricCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricCreateManyArgs>(args?: SelectSubset<T, MetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metrics and returns the data saved in the database.
     * @param {MetricCreateManyAndReturnArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metric.
     * @param {MetricDeleteArgs} args - Arguments to delete one Metric.
     * @example
     * // Delete one Metric
     * const Metric = await prisma.metric.delete({
     *   where: {
     *     // ... filter to delete one Metric
     *   }
     * })
     * 
     */
    delete<T extends MetricDeleteArgs>(args: SelectSubset<T, MetricDeleteArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metric.
     * @param {MetricUpdateArgs} args - Arguments to update one Metric.
     * @example
     * // Update one Metric
     * const metric = await prisma.metric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricUpdateArgs>(args: SelectSubset<T, MetricUpdateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metrics.
     * @param {MetricDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricDeleteManyArgs>(args?: SelectSubset<T, MetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricUpdateManyArgs>(args: SelectSubset<T, MetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics and returns the data updated in the database.
     * @param {MetricUpdateManyAndReturnArgs} args - Arguments to update many Metrics.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetricUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metric.
     * @param {MetricUpsertArgs} args - Arguments to update or create a Metric.
     * @example
     * // Update or create a Metric
     * const metric = await prisma.metric.upsert({
     *   create: {
     *     // ... data to create a Metric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metric we want to update
     *   }
     * })
     */
    upsert<T extends MetricUpsertArgs>(args: SelectSubset<T, MetricUpsertArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metric.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends MetricCountArgs>(
      args?: Subset<T, MetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetricAggregateArgs>(args: Subset<T, MetricAggregateArgs>): Prisma.PrismaPromise<GetMetricAggregateType<T>>

    /**
     * Group by Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricGroupByArgs} args - Group by arguments.
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
      T extends MetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricGroupByArgs['orderBy'] }
        : { orderBy?: MetricGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metric model
   */
  readonly fields: MetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testRun<T extends TestRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestRunDefaultArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Metric model
   */
  interface MetricFieldRefs {
    readonly id: FieldRef<"Metric", 'String'>
    readonly testRunId: FieldRef<"Metric", 'String'>
    readonly timestamp: FieldRef<"Metric", 'DateTime'>
    readonly latency: FieldRef<"Metric", 'Float'>
    readonly throughput: FieldRef<"Metric", 'Float'>
    readonly statusCode: FieldRef<"Metric", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Metric findUnique
   */
  export type MetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findUniqueOrThrow
   */
  export type MetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findFirst
   */
  export type MetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findFirstOrThrow
   */
  export type MetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findMany
   */
  export type MetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric create
   */
  export type MetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to create a Metric.
     */
    data: XOR<MetricCreateInput, MetricUncheckedCreateInput>
  }

  /**
   * Metric createMany
   */
  export type MetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metric createManyAndReturn
   */
  export type MetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metric update
   */
  export type MetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to update a Metric.
     */
    data: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
    /**
     * Choose, which Metric to update.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric updateMany
   */
  export type MetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
  }

  /**
   * Metric updateManyAndReturn
   */
  export type MetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metric upsert
   */
  export type MetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The filter to search for the Metric to update in case it exists.
     */
    where: MetricWhereUniqueInput
    /**
     * In case the Metric found by the `where` argument doesn't exist, create a new Metric with this data.
     */
    create: XOR<MetricCreateInput, MetricUncheckedCreateInput>
    /**
     * In case the Metric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
  }

  /**
   * Metric delete
   */
  export type MetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter which Metric to delete.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric deleteMany
   */
  export type MetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to delete
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to delete.
     */
    limit?: number
  }

  /**
   * Metric without action
   */
  export type MetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
  }


  /**
   * Model TestConfig
   */

  export type AggregateTestConfig = {
    _count: TestConfigCountAggregateOutputType | null
    _avg: TestConfigAvgAggregateOutputType | null
    _sum: TestConfigSumAggregateOutputType | null
    _min: TestConfigMinAggregateOutputType | null
    _max: TestConfigMaxAggregateOutputType | null
  }

  export type TestConfigAvgAggregateOutputType = {
    testDuration: number | null
    requestRate: number | null
    concurrencyLevel: number | null
  }

  export type TestConfigSumAggregateOutputType = {
    testDuration: number | null
    requestRate: number | null
    concurrencyLevel: number | null
  }

  export type TestConfigMinAggregateOutputType = {
    id: string | null
    testRunId: string | null
    testDuration: number | null
    requestRate: number | null
    concurrencyLevel: number | null
  }

  export type TestConfigMaxAggregateOutputType = {
    id: string | null
    testRunId: string | null
    testDuration: number | null
    requestRate: number | null
    concurrencyLevel: number | null
  }

  export type TestConfigCountAggregateOutputType = {
    id: number
    testRunId: number
    testDuration: number
    requestRate: number
    concurrencyLevel: number
    headers: number
    body: number
    _all: number
  }


  export type TestConfigAvgAggregateInputType = {
    testDuration?: true
    requestRate?: true
    concurrencyLevel?: true
  }

  export type TestConfigSumAggregateInputType = {
    testDuration?: true
    requestRate?: true
    concurrencyLevel?: true
  }

  export type TestConfigMinAggregateInputType = {
    id?: true
    testRunId?: true
    testDuration?: true
    requestRate?: true
    concurrencyLevel?: true
  }

  export type TestConfigMaxAggregateInputType = {
    id?: true
    testRunId?: true
    testDuration?: true
    requestRate?: true
    concurrencyLevel?: true
  }

  export type TestConfigCountAggregateInputType = {
    id?: true
    testRunId?: true
    testDuration?: true
    requestRate?: true
    concurrencyLevel?: true
    headers?: true
    body?: true
    _all?: true
  }

  export type TestConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestConfig to aggregate.
     */
    where?: TestConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestConfigs to fetch.
     */
    orderBy?: TestConfigOrderByWithRelationInput | TestConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestConfigs
    **/
    _count?: true | TestConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestConfigMaxAggregateInputType
  }

  export type GetTestConfigAggregateType<T extends TestConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateTestConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestConfig[P]>
      : GetScalarType<T[P], AggregateTestConfig[P]>
  }




  export type TestConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestConfigWhereInput
    orderBy?: TestConfigOrderByWithAggregationInput | TestConfigOrderByWithAggregationInput[]
    by: TestConfigScalarFieldEnum[] | TestConfigScalarFieldEnum
    having?: TestConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestConfigCountAggregateInputType | true
    _avg?: TestConfigAvgAggregateInputType
    _sum?: TestConfigSumAggregateInputType
    _min?: TestConfigMinAggregateInputType
    _max?: TestConfigMaxAggregateInputType
  }

  export type TestConfigGroupByOutputType = {
    id: string
    testRunId: string
    testDuration: number
    requestRate: number
    concurrencyLevel: number
    headers: JsonValue
    body: JsonValue | null
    _count: TestConfigCountAggregateOutputType | null
    _avg: TestConfigAvgAggregateOutputType | null
    _sum: TestConfigSumAggregateOutputType | null
    _min: TestConfigMinAggregateOutputType | null
    _max: TestConfigMaxAggregateOutputType | null
  }

  type GetTestConfigGroupByPayload<T extends TestConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestConfigGroupByOutputType[P]>
            : GetScalarType<T[P], TestConfigGroupByOutputType[P]>
        }
      >
    >


  export type TestConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    testDuration?: boolean
    requestRate?: boolean
    concurrencyLevel?: boolean
    headers?: boolean
    body?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testConfig"]>

  export type TestConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    testDuration?: boolean
    requestRate?: boolean
    concurrencyLevel?: boolean
    headers?: boolean
    body?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testConfig"]>

  export type TestConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    testDuration?: boolean
    requestRate?: boolean
    concurrencyLevel?: boolean
    headers?: boolean
    body?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testConfig"]>

  export type TestConfigSelectScalar = {
    id?: boolean
    testRunId?: boolean
    testDuration?: boolean
    requestRate?: boolean
    concurrencyLevel?: boolean
    headers?: boolean
    body?: boolean
  }

  export type TestConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testRunId" | "testDuration" | "requestRate" | "concurrencyLevel" | "headers" | "body", ExtArgs["result"]["testConfig"]>
  export type TestConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }
  export type TestConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }
  export type TestConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }

  export type $TestConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestConfig"
    objects: {
      testRun: Prisma.$TestRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      testRunId: string
      testDuration: number
      requestRate: number
      concurrencyLevel: number
      headers: Prisma.JsonValue
      body: Prisma.JsonValue | null
    }, ExtArgs["result"]["testConfig"]>
    composites: {}
  }

  type TestConfigGetPayload<S extends boolean | null | undefined | TestConfigDefaultArgs> = $Result.GetResult<Prisma.$TestConfigPayload, S>

  type TestConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestConfigCountAggregateInputType | true
    }

  export interface TestConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestConfig'], meta: { name: 'TestConfig' } }
    /**
     * Find zero or one TestConfig that matches the filter.
     * @param {TestConfigFindUniqueArgs} args - Arguments to find a TestConfig
     * @example
     * // Get one TestConfig
     * const testConfig = await prisma.testConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestConfigFindUniqueArgs>(args: SelectSubset<T, TestConfigFindUniqueArgs<ExtArgs>>): Prisma__TestConfigClient<$Result.GetResult<Prisma.$TestConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestConfigFindUniqueOrThrowArgs} args - Arguments to find a TestConfig
     * @example
     * // Get one TestConfig
     * const testConfig = await prisma.testConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, TestConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestConfigClient<$Result.GetResult<Prisma.$TestConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestConfigFindFirstArgs} args - Arguments to find a TestConfig
     * @example
     * // Get one TestConfig
     * const testConfig = await prisma.testConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestConfigFindFirstArgs>(args?: SelectSubset<T, TestConfigFindFirstArgs<ExtArgs>>): Prisma__TestConfigClient<$Result.GetResult<Prisma.$TestConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestConfigFindFirstOrThrowArgs} args - Arguments to find a TestConfig
     * @example
     * // Get one TestConfig
     * const testConfig = await prisma.testConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, TestConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestConfigClient<$Result.GetResult<Prisma.$TestConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestConfigs
     * const testConfigs = await prisma.testConfig.findMany()
     * 
     * // Get first 10 TestConfigs
     * const testConfigs = await prisma.testConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testConfigWithIdOnly = await prisma.testConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestConfigFindManyArgs>(args?: SelectSubset<T, TestConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestConfig.
     * @param {TestConfigCreateArgs} args - Arguments to create a TestConfig.
     * @example
     * // Create one TestConfig
     * const TestConfig = await prisma.testConfig.create({
     *   data: {
     *     // ... data to create a TestConfig
     *   }
     * })
     * 
     */
    create<T extends TestConfigCreateArgs>(args: SelectSubset<T, TestConfigCreateArgs<ExtArgs>>): Prisma__TestConfigClient<$Result.GetResult<Prisma.$TestConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestConfigs.
     * @param {TestConfigCreateManyArgs} args - Arguments to create many TestConfigs.
     * @example
     * // Create many TestConfigs
     * const testConfig = await prisma.testConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestConfigCreateManyArgs>(args?: SelectSubset<T, TestConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestConfigs and returns the data saved in the database.
     * @param {TestConfigCreateManyAndReturnArgs} args - Arguments to create many TestConfigs.
     * @example
     * // Create many TestConfigs
     * const testConfig = await prisma.testConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestConfigs and only return the `id`
     * const testConfigWithIdOnly = await prisma.testConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, TestConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestConfig.
     * @param {TestConfigDeleteArgs} args - Arguments to delete one TestConfig.
     * @example
     * // Delete one TestConfig
     * const TestConfig = await prisma.testConfig.delete({
     *   where: {
     *     // ... filter to delete one TestConfig
     *   }
     * })
     * 
     */
    delete<T extends TestConfigDeleteArgs>(args: SelectSubset<T, TestConfigDeleteArgs<ExtArgs>>): Prisma__TestConfigClient<$Result.GetResult<Prisma.$TestConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestConfig.
     * @param {TestConfigUpdateArgs} args - Arguments to update one TestConfig.
     * @example
     * // Update one TestConfig
     * const testConfig = await prisma.testConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestConfigUpdateArgs>(args: SelectSubset<T, TestConfigUpdateArgs<ExtArgs>>): Prisma__TestConfigClient<$Result.GetResult<Prisma.$TestConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestConfigs.
     * @param {TestConfigDeleteManyArgs} args - Arguments to filter TestConfigs to delete.
     * @example
     * // Delete a few TestConfigs
     * const { count } = await prisma.testConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestConfigDeleteManyArgs>(args?: SelectSubset<T, TestConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestConfigs
     * const testConfig = await prisma.testConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestConfigUpdateManyArgs>(args: SelectSubset<T, TestConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestConfigs and returns the data updated in the database.
     * @param {TestConfigUpdateManyAndReturnArgs} args - Arguments to update many TestConfigs.
     * @example
     * // Update many TestConfigs
     * const testConfig = await prisma.testConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestConfigs and only return the `id`
     * const testConfigWithIdOnly = await prisma.testConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, TestConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestConfig.
     * @param {TestConfigUpsertArgs} args - Arguments to update or create a TestConfig.
     * @example
     * // Update or create a TestConfig
     * const testConfig = await prisma.testConfig.upsert({
     *   create: {
     *     // ... data to create a TestConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestConfig we want to update
     *   }
     * })
     */
    upsert<T extends TestConfigUpsertArgs>(args: SelectSubset<T, TestConfigUpsertArgs<ExtArgs>>): Prisma__TestConfigClient<$Result.GetResult<Prisma.$TestConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestConfigCountArgs} args - Arguments to filter TestConfigs to count.
     * @example
     * // Count the number of TestConfigs
     * const count = await prisma.testConfig.count({
     *   where: {
     *     // ... the filter for the TestConfigs we want to count
     *   }
     * })
    **/
    count<T extends TestConfigCountArgs>(
      args?: Subset<T, TestConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestConfigAggregateArgs>(args: Subset<T, TestConfigAggregateArgs>): Prisma.PrismaPromise<GetTestConfigAggregateType<T>>

    /**
     * Group by TestConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestConfigGroupByArgs} args - Group by arguments.
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
      T extends TestConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestConfigGroupByArgs['orderBy'] }
        : { orderBy?: TestConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestConfig model
   */
  readonly fields: TestConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testRun<T extends TestRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestRunDefaultArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TestConfig model
   */
  interface TestConfigFieldRefs {
    readonly id: FieldRef<"TestConfig", 'String'>
    readonly testRunId: FieldRef<"TestConfig", 'String'>
    readonly testDuration: FieldRef<"TestConfig", 'Int'>
    readonly requestRate: FieldRef<"TestConfig", 'Int'>
    readonly concurrencyLevel: FieldRef<"TestConfig", 'Int'>
    readonly headers: FieldRef<"TestConfig", 'Json'>
    readonly body: FieldRef<"TestConfig", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * TestConfig findUnique
   */
  export type TestConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestConfig
     */
    select?: TestConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestConfig
     */
    omit?: TestConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestConfigInclude<ExtArgs> | null
    /**
     * Filter, which TestConfig to fetch.
     */
    where: TestConfigWhereUniqueInput
  }

  /**
   * TestConfig findUniqueOrThrow
   */
  export type TestConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestConfig
     */
    select?: TestConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestConfig
     */
    omit?: TestConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestConfigInclude<ExtArgs> | null
    /**
     * Filter, which TestConfig to fetch.
     */
    where: TestConfigWhereUniqueInput
  }

  /**
   * TestConfig findFirst
   */
  export type TestConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestConfig
     */
    select?: TestConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestConfig
     */
    omit?: TestConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestConfigInclude<ExtArgs> | null
    /**
     * Filter, which TestConfig to fetch.
     */
    where?: TestConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestConfigs to fetch.
     */
    orderBy?: TestConfigOrderByWithRelationInput | TestConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestConfigs.
     */
    cursor?: TestConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestConfigs.
     */
    distinct?: TestConfigScalarFieldEnum | TestConfigScalarFieldEnum[]
  }

  /**
   * TestConfig findFirstOrThrow
   */
  export type TestConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestConfig
     */
    select?: TestConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestConfig
     */
    omit?: TestConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestConfigInclude<ExtArgs> | null
    /**
     * Filter, which TestConfig to fetch.
     */
    where?: TestConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestConfigs to fetch.
     */
    orderBy?: TestConfigOrderByWithRelationInput | TestConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestConfigs.
     */
    cursor?: TestConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestConfigs.
     */
    distinct?: TestConfigScalarFieldEnum | TestConfigScalarFieldEnum[]
  }

  /**
   * TestConfig findMany
   */
  export type TestConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestConfig
     */
    select?: TestConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestConfig
     */
    omit?: TestConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestConfigInclude<ExtArgs> | null
    /**
     * Filter, which TestConfigs to fetch.
     */
    where?: TestConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestConfigs to fetch.
     */
    orderBy?: TestConfigOrderByWithRelationInput | TestConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestConfigs.
     */
    cursor?: TestConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestConfigs.
     */
    skip?: number
    distinct?: TestConfigScalarFieldEnum | TestConfigScalarFieldEnum[]
  }

  /**
   * TestConfig create
   */
  export type TestConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestConfig
     */
    select?: TestConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestConfig
     */
    omit?: TestConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a TestConfig.
     */
    data: XOR<TestConfigCreateInput, TestConfigUncheckedCreateInput>
  }

  /**
   * TestConfig createMany
   */
  export type TestConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestConfigs.
     */
    data: TestConfigCreateManyInput | TestConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestConfig createManyAndReturn
   */
  export type TestConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestConfig
     */
    select?: TestConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestConfig
     */
    omit?: TestConfigOmit<ExtArgs> | null
    /**
     * The data used to create many TestConfigs.
     */
    data: TestConfigCreateManyInput | TestConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestConfig update
   */
  export type TestConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestConfig
     */
    select?: TestConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestConfig
     */
    omit?: TestConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a TestConfig.
     */
    data: XOR<TestConfigUpdateInput, TestConfigUncheckedUpdateInput>
    /**
     * Choose, which TestConfig to update.
     */
    where: TestConfigWhereUniqueInput
  }

  /**
   * TestConfig updateMany
   */
  export type TestConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestConfigs.
     */
    data: XOR<TestConfigUpdateManyMutationInput, TestConfigUncheckedUpdateManyInput>
    /**
     * Filter which TestConfigs to update
     */
    where?: TestConfigWhereInput
    /**
     * Limit how many TestConfigs to update.
     */
    limit?: number
  }

  /**
   * TestConfig updateManyAndReturn
   */
  export type TestConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestConfig
     */
    select?: TestConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestConfig
     */
    omit?: TestConfigOmit<ExtArgs> | null
    /**
     * The data used to update TestConfigs.
     */
    data: XOR<TestConfigUpdateManyMutationInput, TestConfigUncheckedUpdateManyInput>
    /**
     * Filter which TestConfigs to update
     */
    where?: TestConfigWhereInput
    /**
     * Limit how many TestConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestConfig upsert
   */
  export type TestConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestConfig
     */
    select?: TestConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestConfig
     */
    omit?: TestConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the TestConfig to update in case it exists.
     */
    where: TestConfigWhereUniqueInput
    /**
     * In case the TestConfig found by the `where` argument doesn't exist, create a new TestConfig with this data.
     */
    create: XOR<TestConfigCreateInput, TestConfigUncheckedCreateInput>
    /**
     * In case the TestConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestConfigUpdateInput, TestConfigUncheckedUpdateInput>
  }

  /**
   * TestConfig delete
   */
  export type TestConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestConfig
     */
    select?: TestConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestConfig
     */
    omit?: TestConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestConfigInclude<ExtArgs> | null
    /**
     * Filter which TestConfig to delete.
     */
    where: TestConfigWhereUniqueInput
  }

  /**
   * TestConfig deleteMany
   */
  export type TestConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestConfigs to delete
     */
    where?: TestConfigWhereInput
    /**
     * Limit how many TestConfigs to delete.
     */
    limit?: number
  }

  /**
   * TestConfig without action
   */
  export type TestConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestConfig
     */
    select?: TestConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestConfig
     */
    omit?: TestConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestConfigInclude<ExtArgs> | null
  }


  /**
   * Model TestResult
   */

  export type AggregateTestResult = {
    _count: TestResultCountAggregateOutputType | null
    _avg: TestResultAvgAggregateOutputType | null
    _sum: TestResultSumAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  export type TestResultAvgAggregateOutputType = {
    avgLatency: number | null
    avgThroughput: number | null
    totalRequests: number | null
    successRate: number | null
    errorRate: number | null
  }

  export type TestResultSumAggregateOutputType = {
    avgLatency: number | null
    avgThroughput: number | null
    totalRequests: number | null
    successRate: number | null
    errorRate: number | null
  }

  export type TestResultMinAggregateOutputType = {
    id: string | null
    testRunId: string | null
    avgLatency: number | null
    avgThroughput: number | null
    totalRequests: number | null
    successRate: number | null
    errorRate: number | null
    createdAt: Date | null
  }

  export type TestResultMaxAggregateOutputType = {
    id: string | null
    testRunId: string | null
    avgLatency: number | null
    avgThroughput: number | null
    totalRequests: number | null
    successRate: number | null
    errorRate: number | null
    createdAt: Date | null
  }

  export type TestResultCountAggregateOutputType = {
    id: number
    testRunId: number
    avgLatency: number
    avgThroughput: number
    totalRequests: number
    successRate: number
    errorRate: number
    createdAt: number
    _all: number
  }


  export type TestResultAvgAggregateInputType = {
    avgLatency?: true
    avgThroughput?: true
    totalRequests?: true
    successRate?: true
    errorRate?: true
  }

  export type TestResultSumAggregateInputType = {
    avgLatency?: true
    avgThroughput?: true
    totalRequests?: true
    successRate?: true
    errorRate?: true
  }

  export type TestResultMinAggregateInputType = {
    id?: true
    testRunId?: true
    avgLatency?: true
    avgThroughput?: true
    totalRequests?: true
    successRate?: true
    errorRate?: true
    createdAt?: true
  }

  export type TestResultMaxAggregateInputType = {
    id?: true
    testRunId?: true
    avgLatency?: true
    avgThroughput?: true
    totalRequests?: true
    successRate?: true
    errorRate?: true
    createdAt?: true
  }

  export type TestResultCountAggregateInputType = {
    id?: true
    testRunId?: true
    avgLatency?: true
    avgThroughput?: true
    totalRequests?: true
    successRate?: true
    errorRate?: true
    createdAt?: true
    _all?: true
  }

  export type TestResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestResult to aggregate.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestResults
    **/
    _count?: true | TestResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestResultMaxAggregateInputType
  }

  export type GetTestResultAggregateType<T extends TestResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTestResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestResult[P]>
      : GetScalarType<T[P], AggregateTestResult[P]>
  }




  export type TestResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestResultWhereInput
    orderBy?: TestResultOrderByWithAggregationInput | TestResultOrderByWithAggregationInput[]
    by: TestResultScalarFieldEnum[] | TestResultScalarFieldEnum
    having?: TestResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestResultCountAggregateInputType | true
    _avg?: TestResultAvgAggregateInputType
    _sum?: TestResultSumAggregateInputType
    _min?: TestResultMinAggregateInputType
    _max?: TestResultMaxAggregateInputType
  }

  export type TestResultGroupByOutputType = {
    id: string
    testRunId: string
    avgLatency: number
    avgThroughput: number
    totalRequests: number
    successRate: number
    errorRate: number
    createdAt: Date
    _count: TestResultCountAggregateOutputType | null
    _avg: TestResultAvgAggregateOutputType | null
    _sum: TestResultSumAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  type GetTestResultGroupByPayload<T extends TestResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestResultGroupByOutputType[P]>
            : GetScalarType<T[P], TestResultGroupByOutputType[P]>
        }
      >
    >


  export type TestResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    avgLatency?: boolean
    avgThroughput?: boolean
    totalRequests?: boolean
    successRate?: boolean
    errorRate?: boolean
    createdAt?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    avgLatency?: boolean
    avgThroughput?: boolean
    totalRequests?: boolean
    successRate?: boolean
    errorRate?: boolean
    createdAt?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    avgLatency?: boolean
    avgThroughput?: boolean
    totalRequests?: boolean
    successRate?: boolean
    errorRate?: boolean
    createdAt?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectScalar = {
    id?: boolean
    testRunId?: boolean
    avgLatency?: boolean
    avgThroughput?: boolean
    totalRequests?: boolean
    successRate?: boolean
    errorRate?: boolean
    createdAt?: boolean
  }

  export type TestResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testRunId" | "avgLatency" | "avgThroughput" | "totalRequests" | "successRate" | "errorRate" | "createdAt", ExtArgs["result"]["testResult"]>
  export type TestResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }
  export type TestResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }
  export type TestResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }

  export type $TestResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestResult"
    objects: {
      testRun: Prisma.$TestRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      testRunId: string
      avgLatency: number
      avgThroughput: number
      totalRequests: number
      successRate: number
      errorRate: number
      createdAt: Date
    }, ExtArgs["result"]["testResult"]>
    composites: {}
  }

  type TestResultGetPayload<S extends boolean | null | undefined | TestResultDefaultArgs> = $Result.GetResult<Prisma.$TestResultPayload, S>

  type TestResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestResultCountAggregateInputType | true
    }

  export interface TestResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestResult'], meta: { name: 'TestResult' } }
    /**
     * Find zero or one TestResult that matches the filter.
     * @param {TestResultFindUniqueArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestResultFindUniqueArgs>(args: SelectSubset<T, TestResultFindUniqueArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestResultFindUniqueOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestResultFindUniqueOrThrowArgs>(args: SelectSubset<T, TestResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestResultFindFirstArgs>(args?: SelectSubset<T, TestResultFindFirstArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestResultFindFirstOrThrowArgs>(args?: SelectSubset<T, TestResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestResults
     * const testResults = await prisma.testResult.findMany()
     * 
     * // Get first 10 TestResults
     * const testResults = await prisma.testResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testResultWithIdOnly = await prisma.testResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestResultFindManyArgs>(args?: SelectSubset<T, TestResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestResult.
     * @param {TestResultCreateArgs} args - Arguments to create a TestResult.
     * @example
     * // Create one TestResult
     * const TestResult = await prisma.testResult.create({
     *   data: {
     *     // ... data to create a TestResult
     *   }
     * })
     * 
     */
    create<T extends TestResultCreateArgs>(args: SelectSubset<T, TestResultCreateArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestResults.
     * @param {TestResultCreateManyArgs} args - Arguments to create many TestResults.
     * @example
     * // Create many TestResults
     * const testResult = await prisma.testResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestResultCreateManyArgs>(args?: SelectSubset<T, TestResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestResults and returns the data saved in the database.
     * @param {TestResultCreateManyAndReturnArgs} args - Arguments to create many TestResults.
     * @example
     * // Create many TestResults
     * const testResult = await prisma.testResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestResults and only return the `id`
     * const testResultWithIdOnly = await prisma.testResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestResultCreateManyAndReturnArgs>(args?: SelectSubset<T, TestResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestResult.
     * @param {TestResultDeleteArgs} args - Arguments to delete one TestResult.
     * @example
     * // Delete one TestResult
     * const TestResult = await prisma.testResult.delete({
     *   where: {
     *     // ... filter to delete one TestResult
     *   }
     * })
     * 
     */
    delete<T extends TestResultDeleteArgs>(args: SelectSubset<T, TestResultDeleteArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestResult.
     * @param {TestResultUpdateArgs} args - Arguments to update one TestResult.
     * @example
     * // Update one TestResult
     * const testResult = await prisma.testResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestResultUpdateArgs>(args: SelectSubset<T, TestResultUpdateArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestResults.
     * @param {TestResultDeleteManyArgs} args - Arguments to filter TestResults to delete.
     * @example
     * // Delete a few TestResults
     * const { count } = await prisma.testResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestResultDeleteManyArgs>(args?: SelectSubset<T, TestResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestResults
     * const testResult = await prisma.testResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestResultUpdateManyArgs>(args: SelectSubset<T, TestResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults and returns the data updated in the database.
     * @param {TestResultUpdateManyAndReturnArgs} args - Arguments to update many TestResults.
     * @example
     * // Update many TestResults
     * const testResult = await prisma.testResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestResults and only return the `id`
     * const testResultWithIdOnly = await prisma.testResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestResultUpdateManyAndReturnArgs>(args: SelectSubset<T, TestResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestResult.
     * @param {TestResultUpsertArgs} args - Arguments to update or create a TestResult.
     * @example
     * // Update or create a TestResult
     * const testResult = await prisma.testResult.upsert({
     *   create: {
     *     // ... data to create a TestResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestResult we want to update
     *   }
     * })
     */
    upsert<T extends TestResultUpsertArgs>(args: SelectSubset<T, TestResultUpsertArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultCountArgs} args - Arguments to filter TestResults to count.
     * @example
     * // Count the number of TestResults
     * const count = await prisma.testResult.count({
     *   where: {
     *     // ... the filter for the TestResults we want to count
     *   }
     * })
    **/
    count<T extends TestResultCountArgs>(
      args?: Subset<T, TestResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestResultAggregateArgs>(args: Subset<T, TestResultAggregateArgs>): Prisma.PrismaPromise<GetTestResultAggregateType<T>>

    /**
     * Group by TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultGroupByArgs} args - Group by arguments.
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
      T extends TestResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestResultGroupByArgs['orderBy'] }
        : { orderBy?: TestResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestResult model
   */
  readonly fields: TestResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testRun<T extends TestRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestRunDefaultArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TestResult model
   */
  interface TestResultFieldRefs {
    readonly id: FieldRef<"TestResult", 'String'>
    readonly testRunId: FieldRef<"TestResult", 'String'>
    readonly avgLatency: FieldRef<"TestResult", 'Float'>
    readonly avgThroughput: FieldRef<"TestResult", 'Float'>
    readonly totalRequests: FieldRef<"TestResult", 'Int'>
    readonly successRate: FieldRef<"TestResult", 'Float'>
    readonly errorRate: FieldRef<"TestResult", 'Float'>
    readonly createdAt: FieldRef<"TestResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestResult findUnique
   */
  export type TestResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult findUniqueOrThrow
   */
  export type TestResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult findFirst
   */
  export type TestResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult findFirstOrThrow
   */
  export type TestResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult findMany
   */
  export type TestResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResults to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult create
   */
  export type TestResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The data needed to create a TestResult.
     */
    data: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
  }

  /**
   * TestResult createMany
   */
  export type TestResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestResults.
     */
    data: TestResultCreateManyInput | TestResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestResult createManyAndReturn
   */
  export type TestResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * The data used to create many TestResults.
     */
    data: TestResultCreateManyInput | TestResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestResult update
   */
  export type TestResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The data needed to update a TestResult.
     */
    data: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
    /**
     * Choose, which TestResult to update.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult updateMany
   */
  export type TestResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestResults.
     */
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyInput>
    /**
     * Filter which TestResults to update
     */
    where?: TestResultWhereInput
    /**
     * Limit how many TestResults to update.
     */
    limit?: number
  }

  /**
   * TestResult updateManyAndReturn
   */
  export type TestResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * The data used to update TestResults.
     */
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyInput>
    /**
     * Filter which TestResults to update
     */
    where?: TestResultWhereInput
    /**
     * Limit how many TestResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestResult upsert
   */
  export type TestResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The filter to search for the TestResult to update in case it exists.
     */
    where: TestResultWhereUniqueInput
    /**
     * In case the TestResult found by the `where` argument doesn't exist, create a new TestResult with this data.
     */
    create: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
    /**
     * In case the TestResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
  }

  /**
   * TestResult delete
   */
  export type TestResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter which TestResult to delete.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult deleteMany
   */
  export type TestResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestResults to delete
     */
    where?: TestResultWhereInput
    /**
     * Limit how many TestResults to delete.
     */
    limit?: number
  }

  /**
   * TestResult without action
   */
  export type TestResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
  }


  /**
   * Model TestHistory
   */

  export type AggregateTestHistory = {
    _count: TestHistoryCountAggregateOutputType | null
    _avg: TestHistoryAvgAggregateOutputType | null
    _sum: TestHistorySumAggregateOutputType | null
    _min: TestHistoryMinAggregateOutputType | null
    _max: TestHistoryMaxAggregateOutputType | null
  }

  export type TestHistoryAvgAggregateOutputType = {
    requestCount: number | null
    duration: number | null
    errorRate: number | null
    avgResponseTime: number | null
    maxResponseTime: number | null
  }

  export type TestHistorySumAggregateOutputType = {
    requestCount: number | null
    duration: number | null
    errorRate: number | null
    avgResponseTime: number | null
    maxResponseTime: number | null
  }

  export type TestHistoryMinAggregateOutputType = {
    id: string | null
    testRunId: string | null
    userId: string | null
    testName: string | null
    url: string | null
    method: string | null
    requestCount: number | null
    duration: number | null
    errorRate: number | null
    avgResponseTime: number | null
    maxResponseTime: number | null
    createdAt: Date | null
  }

  export type TestHistoryMaxAggregateOutputType = {
    id: string | null
    testRunId: string | null
    userId: string | null
    testName: string | null
    url: string | null
    method: string | null
    requestCount: number | null
    duration: number | null
    errorRate: number | null
    avgResponseTime: number | null
    maxResponseTime: number | null
    createdAt: Date | null
  }

  export type TestHistoryCountAggregateOutputType = {
    id: number
    testRunId: number
    userId: number
    testName: number
    url: number
    method: number
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt: number
    _all: number
  }


  export type TestHistoryAvgAggregateInputType = {
    requestCount?: true
    duration?: true
    errorRate?: true
    avgResponseTime?: true
    maxResponseTime?: true
  }

  export type TestHistorySumAggregateInputType = {
    requestCount?: true
    duration?: true
    errorRate?: true
    avgResponseTime?: true
    maxResponseTime?: true
  }

  export type TestHistoryMinAggregateInputType = {
    id?: true
    testRunId?: true
    userId?: true
    testName?: true
    url?: true
    method?: true
    requestCount?: true
    duration?: true
    errorRate?: true
    avgResponseTime?: true
    maxResponseTime?: true
    createdAt?: true
  }

  export type TestHistoryMaxAggregateInputType = {
    id?: true
    testRunId?: true
    userId?: true
    testName?: true
    url?: true
    method?: true
    requestCount?: true
    duration?: true
    errorRate?: true
    avgResponseTime?: true
    maxResponseTime?: true
    createdAt?: true
  }

  export type TestHistoryCountAggregateInputType = {
    id?: true
    testRunId?: true
    userId?: true
    testName?: true
    url?: true
    method?: true
    requestCount?: true
    duration?: true
    errorRate?: true
    avgResponseTime?: true
    maxResponseTime?: true
    createdAt?: true
    _all?: true
  }

  export type TestHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestHistory to aggregate.
     */
    where?: TestHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestHistories to fetch.
     */
    orderBy?: TestHistoryOrderByWithRelationInput | TestHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestHistories
    **/
    _count?: true | TestHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestHistoryMaxAggregateInputType
  }

  export type GetTestHistoryAggregateType<T extends TestHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTestHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestHistory[P]>
      : GetScalarType<T[P], AggregateTestHistory[P]>
  }




  export type TestHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestHistoryWhereInput
    orderBy?: TestHistoryOrderByWithAggregationInput | TestHistoryOrderByWithAggregationInput[]
    by: TestHistoryScalarFieldEnum[] | TestHistoryScalarFieldEnum
    having?: TestHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestHistoryCountAggregateInputType | true
    _avg?: TestHistoryAvgAggregateInputType
    _sum?: TestHistorySumAggregateInputType
    _min?: TestHistoryMinAggregateInputType
    _max?: TestHistoryMaxAggregateInputType
  }

  export type TestHistoryGroupByOutputType = {
    id: string
    testRunId: string
    userId: string
    testName: string
    url: string
    method: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt: Date
    _count: TestHistoryCountAggregateOutputType | null
    _avg: TestHistoryAvgAggregateOutputType | null
    _sum: TestHistorySumAggregateOutputType | null
    _min: TestHistoryMinAggregateOutputType | null
    _max: TestHistoryMaxAggregateOutputType | null
  }

  type GetTestHistoryGroupByPayload<T extends TestHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TestHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TestHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    userId?: boolean
    testName?: boolean
    url?: boolean
    method?: boolean
    requestCount?: boolean
    duration?: boolean
    errorRate?: boolean
    avgResponseTime?: boolean
    maxResponseTime?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testHistory"]>

  export type TestHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    userId?: boolean
    testName?: boolean
    url?: boolean
    method?: boolean
    requestCount?: boolean
    duration?: boolean
    errorRate?: boolean
    avgResponseTime?: boolean
    maxResponseTime?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testHistory"]>

  export type TestHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    userId?: boolean
    testName?: boolean
    url?: boolean
    method?: boolean
    requestCount?: boolean
    duration?: boolean
    errorRate?: boolean
    avgResponseTime?: boolean
    maxResponseTime?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testHistory"]>

  export type TestHistorySelectScalar = {
    id?: boolean
    testRunId?: boolean
    userId?: boolean
    testName?: boolean
    url?: boolean
    method?: boolean
    requestCount?: boolean
    duration?: boolean
    errorRate?: boolean
    avgResponseTime?: boolean
    maxResponseTime?: boolean
    createdAt?: boolean
  }

  export type TestHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testRunId" | "userId" | "testName" | "url" | "method" | "requestCount" | "duration" | "errorRate" | "avgResponseTime" | "maxResponseTime" | "createdAt", ExtArgs["result"]["testHistory"]>
  export type TestHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }
  export type TestHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }
  export type TestHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }

  export type $TestHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      testRun: Prisma.$TestRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      testRunId: string
      userId: string
      testName: string
      url: string
      method: string
      requestCount: number
      duration: number
      errorRate: number
      avgResponseTime: number
      maxResponseTime: number
      createdAt: Date
    }, ExtArgs["result"]["testHistory"]>
    composites: {}
  }

  type TestHistoryGetPayload<S extends boolean | null | undefined | TestHistoryDefaultArgs> = $Result.GetResult<Prisma.$TestHistoryPayload, S>

  type TestHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestHistoryCountAggregateInputType | true
    }

  export interface TestHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestHistory'], meta: { name: 'TestHistory' } }
    /**
     * Find zero or one TestHistory that matches the filter.
     * @param {TestHistoryFindUniqueArgs} args - Arguments to find a TestHistory
     * @example
     * // Get one TestHistory
     * const testHistory = await prisma.testHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestHistoryFindUniqueArgs>(args: SelectSubset<T, TestHistoryFindUniqueArgs<ExtArgs>>): Prisma__TestHistoryClient<$Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestHistoryFindUniqueOrThrowArgs} args - Arguments to find a TestHistory
     * @example
     * // Get one TestHistory
     * const testHistory = await prisma.testHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TestHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestHistoryClient<$Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestHistoryFindFirstArgs} args - Arguments to find a TestHistory
     * @example
     * // Get one TestHistory
     * const testHistory = await prisma.testHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestHistoryFindFirstArgs>(args?: SelectSubset<T, TestHistoryFindFirstArgs<ExtArgs>>): Prisma__TestHistoryClient<$Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestHistoryFindFirstOrThrowArgs} args - Arguments to find a TestHistory
     * @example
     * // Get one TestHistory
     * const testHistory = await prisma.testHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TestHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestHistoryClient<$Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestHistories
     * const testHistories = await prisma.testHistory.findMany()
     * 
     * // Get first 10 TestHistories
     * const testHistories = await prisma.testHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testHistoryWithIdOnly = await prisma.testHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestHistoryFindManyArgs>(args?: SelectSubset<T, TestHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestHistory.
     * @param {TestHistoryCreateArgs} args - Arguments to create a TestHistory.
     * @example
     * // Create one TestHistory
     * const TestHistory = await prisma.testHistory.create({
     *   data: {
     *     // ... data to create a TestHistory
     *   }
     * })
     * 
     */
    create<T extends TestHistoryCreateArgs>(args: SelectSubset<T, TestHistoryCreateArgs<ExtArgs>>): Prisma__TestHistoryClient<$Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestHistories.
     * @param {TestHistoryCreateManyArgs} args - Arguments to create many TestHistories.
     * @example
     * // Create many TestHistories
     * const testHistory = await prisma.testHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestHistoryCreateManyArgs>(args?: SelectSubset<T, TestHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestHistories and returns the data saved in the database.
     * @param {TestHistoryCreateManyAndReturnArgs} args - Arguments to create many TestHistories.
     * @example
     * // Create many TestHistories
     * const testHistory = await prisma.testHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestHistories and only return the `id`
     * const testHistoryWithIdOnly = await prisma.testHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TestHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestHistory.
     * @param {TestHistoryDeleteArgs} args - Arguments to delete one TestHistory.
     * @example
     * // Delete one TestHistory
     * const TestHistory = await prisma.testHistory.delete({
     *   where: {
     *     // ... filter to delete one TestHistory
     *   }
     * })
     * 
     */
    delete<T extends TestHistoryDeleteArgs>(args: SelectSubset<T, TestHistoryDeleteArgs<ExtArgs>>): Prisma__TestHistoryClient<$Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestHistory.
     * @param {TestHistoryUpdateArgs} args - Arguments to update one TestHistory.
     * @example
     * // Update one TestHistory
     * const testHistory = await prisma.testHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestHistoryUpdateArgs>(args: SelectSubset<T, TestHistoryUpdateArgs<ExtArgs>>): Prisma__TestHistoryClient<$Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestHistories.
     * @param {TestHistoryDeleteManyArgs} args - Arguments to filter TestHistories to delete.
     * @example
     * // Delete a few TestHistories
     * const { count } = await prisma.testHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestHistoryDeleteManyArgs>(args?: SelectSubset<T, TestHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestHistories
     * const testHistory = await prisma.testHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestHistoryUpdateManyArgs>(args: SelectSubset<T, TestHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestHistories and returns the data updated in the database.
     * @param {TestHistoryUpdateManyAndReturnArgs} args - Arguments to update many TestHistories.
     * @example
     * // Update many TestHistories
     * const testHistory = await prisma.testHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestHistories and only return the `id`
     * const testHistoryWithIdOnly = await prisma.testHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TestHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestHistory.
     * @param {TestHistoryUpsertArgs} args - Arguments to update or create a TestHistory.
     * @example
     * // Update or create a TestHistory
     * const testHistory = await prisma.testHistory.upsert({
     *   create: {
     *     // ... data to create a TestHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestHistory we want to update
     *   }
     * })
     */
    upsert<T extends TestHistoryUpsertArgs>(args: SelectSubset<T, TestHistoryUpsertArgs<ExtArgs>>): Prisma__TestHistoryClient<$Result.GetResult<Prisma.$TestHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestHistoryCountArgs} args - Arguments to filter TestHistories to count.
     * @example
     * // Count the number of TestHistories
     * const count = await prisma.testHistory.count({
     *   where: {
     *     // ... the filter for the TestHistories we want to count
     *   }
     * })
    **/
    count<T extends TestHistoryCountArgs>(
      args?: Subset<T, TestHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestHistoryAggregateArgs>(args: Subset<T, TestHistoryAggregateArgs>): Prisma.PrismaPromise<GetTestHistoryAggregateType<T>>

    /**
     * Group by TestHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestHistoryGroupByArgs} args - Group by arguments.
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
      T extends TestHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TestHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestHistory model
   */
  readonly fields: TestHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testRun<T extends TestRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestRunDefaultArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TestHistory model
   */
  interface TestHistoryFieldRefs {
    readonly id: FieldRef<"TestHistory", 'String'>
    readonly testRunId: FieldRef<"TestHistory", 'String'>
    readonly userId: FieldRef<"TestHistory", 'String'>
    readonly testName: FieldRef<"TestHistory", 'String'>
    readonly url: FieldRef<"TestHistory", 'String'>
    readonly method: FieldRef<"TestHistory", 'String'>
    readonly requestCount: FieldRef<"TestHistory", 'Int'>
    readonly duration: FieldRef<"TestHistory", 'Float'>
    readonly errorRate: FieldRef<"TestHistory", 'Float'>
    readonly avgResponseTime: FieldRef<"TestHistory", 'Float'>
    readonly maxResponseTime: FieldRef<"TestHistory", 'Float'>
    readonly createdAt: FieldRef<"TestHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestHistory findUnique
   */
  export type TestHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TestHistory to fetch.
     */
    where: TestHistoryWhereUniqueInput
  }

  /**
   * TestHistory findUniqueOrThrow
   */
  export type TestHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TestHistory to fetch.
     */
    where: TestHistoryWhereUniqueInput
  }

  /**
   * TestHistory findFirst
   */
  export type TestHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TestHistory to fetch.
     */
    where?: TestHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestHistories to fetch.
     */
    orderBy?: TestHistoryOrderByWithRelationInput | TestHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestHistories.
     */
    cursor?: TestHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestHistories.
     */
    distinct?: TestHistoryScalarFieldEnum | TestHistoryScalarFieldEnum[]
  }

  /**
   * TestHistory findFirstOrThrow
   */
  export type TestHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TestHistory to fetch.
     */
    where?: TestHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestHistories to fetch.
     */
    orderBy?: TestHistoryOrderByWithRelationInput | TestHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestHistories.
     */
    cursor?: TestHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestHistories.
     */
    distinct?: TestHistoryScalarFieldEnum | TestHistoryScalarFieldEnum[]
  }

  /**
   * TestHistory findMany
   */
  export type TestHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TestHistories to fetch.
     */
    where?: TestHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestHistories to fetch.
     */
    orderBy?: TestHistoryOrderByWithRelationInput | TestHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestHistories.
     */
    cursor?: TestHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestHistories.
     */
    skip?: number
    distinct?: TestHistoryScalarFieldEnum | TestHistoryScalarFieldEnum[]
  }

  /**
   * TestHistory create
   */
  export type TestHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TestHistory.
     */
    data: XOR<TestHistoryCreateInput, TestHistoryUncheckedCreateInput>
  }

  /**
   * TestHistory createMany
   */
  export type TestHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestHistories.
     */
    data: TestHistoryCreateManyInput | TestHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestHistory createManyAndReturn
   */
  export type TestHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TestHistories.
     */
    data: TestHistoryCreateManyInput | TestHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestHistory update
   */
  export type TestHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TestHistory.
     */
    data: XOR<TestHistoryUpdateInput, TestHistoryUncheckedUpdateInput>
    /**
     * Choose, which TestHistory to update.
     */
    where: TestHistoryWhereUniqueInput
  }

  /**
   * TestHistory updateMany
   */
  export type TestHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestHistories.
     */
    data: XOR<TestHistoryUpdateManyMutationInput, TestHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TestHistories to update
     */
    where?: TestHistoryWhereInput
    /**
     * Limit how many TestHistories to update.
     */
    limit?: number
  }

  /**
   * TestHistory updateManyAndReturn
   */
  export type TestHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TestHistories.
     */
    data: XOR<TestHistoryUpdateManyMutationInput, TestHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TestHistories to update
     */
    where?: TestHistoryWhereInput
    /**
     * Limit how many TestHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestHistory upsert
   */
  export type TestHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TestHistory to update in case it exists.
     */
    where: TestHistoryWhereUniqueInput
    /**
     * In case the TestHistory found by the `where` argument doesn't exist, create a new TestHistory with this data.
     */
    create: XOR<TestHistoryCreateInput, TestHistoryUncheckedCreateInput>
    /**
     * In case the TestHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestHistoryUpdateInput, TestHistoryUncheckedUpdateInput>
  }

  /**
   * TestHistory delete
   */
  export type TestHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryInclude<ExtArgs> | null
    /**
     * Filter which TestHistory to delete.
     */
    where: TestHistoryWhereUniqueInput
  }

  /**
   * TestHistory deleteMany
   */
  export type TestHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestHistories to delete
     */
    where?: TestHistoryWhereInput
    /**
     * Limit how many TestHistories to delete.
     */
    limit?: number
  }

  /**
   * TestHistory without action
   */
  export type TestHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestHistory
     */
    select?: TestHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestHistory
     */
    omit?: TestHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestHistoryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TestRunScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    testName: 'testName',
    url: 'url',
    method: 'method',
    status: 'status',
    requestCount: 'requestCount',
    duration: 'duration',
    errorRate: 'errorRate',
    avgResponseTime: 'avgResponseTime',
    maxResponseTime: 'maxResponseTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestRunScalarFieldEnum = (typeof TestRunScalarFieldEnum)[keyof typeof TestRunScalarFieldEnum]


  export const MetricScalarFieldEnum: {
    id: 'id',
    testRunId: 'testRunId',
    timestamp: 'timestamp',
    latency: 'latency',
    throughput: 'throughput',
    statusCode: 'statusCode'
  };

  export type MetricScalarFieldEnum = (typeof MetricScalarFieldEnum)[keyof typeof MetricScalarFieldEnum]


  export const TestConfigScalarFieldEnum: {
    id: 'id',
    testRunId: 'testRunId',
    testDuration: 'testDuration',
    requestRate: 'requestRate',
    concurrencyLevel: 'concurrencyLevel',
    headers: 'headers',
    body: 'body'
  };

  export type TestConfigScalarFieldEnum = (typeof TestConfigScalarFieldEnum)[keyof typeof TestConfigScalarFieldEnum]


  export const TestResultScalarFieldEnum: {
    id: 'id',
    testRunId: 'testRunId',
    avgLatency: 'avgLatency',
    avgThroughput: 'avgThroughput',
    totalRequests: 'totalRequests',
    successRate: 'successRate',
    errorRate: 'errorRate',
    createdAt: 'createdAt'
  };

  export type TestResultScalarFieldEnum = (typeof TestResultScalarFieldEnum)[keyof typeof TestResultScalarFieldEnum]


  export const TestHistoryScalarFieldEnum: {
    id: 'id',
    testRunId: 'testRunId',
    userId: 'userId',
    testName: 'testName',
    url: 'url',
    method: 'method',
    requestCount: 'requestCount',
    duration: 'duration',
    errorRate: 'errorRate',
    avgResponseTime: 'avgResponseTime',
    maxResponseTime: 'maxResponseTime',
    createdAt: 'createdAt'
  };

  export type TestHistoryScalarFieldEnum = (typeof TestHistoryScalarFieldEnum)[keyof typeof TestHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    testRuns?: TestRunListRelationFilter
    testHistories?: TestHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testRuns?: TestRunOrderByRelationAggregateInput
    testHistories?: TestHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    testRuns?: TestRunListRelationFilter
    testHistories?: TestHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TestRunWhereInput = {
    AND?: TestRunWhereInput | TestRunWhereInput[]
    OR?: TestRunWhereInput[]
    NOT?: TestRunWhereInput | TestRunWhereInput[]
    id?: UuidFilter<"TestRun"> | string
    userId?: UuidFilter<"TestRun"> | string
    testName?: StringFilter<"TestRun"> | string
    url?: StringFilter<"TestRun"> | string
    method?: StringFilter<"TestRun"> | string
    status?: StringFilter<"TestRun"> | string
    requestCount?: IntFilter<"TestRun"> | number
    duration?: FloatFilter<"TestRun"> | number
    errorRate?: FloatFilter<"TestRun"> | number
    avgResponseTime?: FloatFilter<"TestRun"> | number
    maxResponseTime?: FloatFilter<"TestRun"> | number
    createdAt?: DateTimeFilter<"TestRun"> | Date | string
    updatedAt?: DateTimeFilter<"TestRun"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    metrics?: MetricListRelationFilter
    testConfig?: XOR<TestConfigNullableScalarRelationFilter, TestConfigWhereInput> | null
    testResult?: XOR<TestResultNullableScalarRelationFilter, TestResultWhereInput> | null
    testHistories?: TestHistoryListRelationFilter
  }

  export type TestRunOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    testName?: SortOrder
    url?: SortOrder
    method?: SortOrder
    status?: SortOrder
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    metrics?: MetricOrderByRelationAggregateInput
    testConfig?: TestConfigOrderByWithRelationInput
    testResult?: TestResultOrderByWithRelationInput
    testHistories?: TestHistoryOrderByRelationAggregateInput
  }

  export type TestRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestRunWhereInput | TestRunWhereInput[]
    OR?: TestRunWhereInput[]
    NOT?: TestRunWhereInput | TestRunWhereInput[]
    userId?: UuidFilter<"TestRun"> | string
    testName?: StringFilter<"TestRun"> | string
    url?: StringFilter<"TestRun"> | string
    method?: StringFilter<"TestRun"> | string
    status?: StringFilter<"TestRun"> | string
    requestCount?: IntFilter<"TestRun"> | number
    duration?: FloatFilter<"TestRun"> | number
    errorRate?: FloatFilter<"TestRun"> | number
    avgResponseTime?: FloatFilter<"TestRun"> | number
    maxResponseTime?: FloatFilter<"TestRun"> | number
    createdAt?: DateTimeFilter<"TestRun"> | Date | string
    updatedAt?: DateTimeFilter<"TestRun"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    metrics?: MetricListRelationFilter
    testConfig?: XOR<TestConfigNullableScalarRelationFilter, TestConfigWhereInput> | null
    testResult?: XOR<TestResultNullableScalarRelationFilter, TestResultWhereInput> | null
    testHistories?: TestHistoryListRelationFilter
  }, "id">

  export type TestRunOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    testName?: SortOrder
    url?: SortOrder
    method?: SortOrder
    status?: SortOrder
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestRunCountOrderByAggregateInput
    _avg?: TestRunAvgOrderByAggregateInput
    _max?: TestRunMaxOrderByAggregateInput
    _min?: TestRunMinOrderByAggregateInput
    _sum?: TestRunSumOrderByAggregateInput
  }

  export type TestRunScalarWhereWithAggregatesInput = {
    AND?: TestRunScalarWhereWithAggregatesInput | TestRunScalarWhereWithAggregatesInput[]
    OR?: TestRunScalarWhereWithAggregatesInput[]
    NOT?: TestRunScalarWhereWithAggregatesInput | TestRunScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TestRun"> | string
    userId?: UuidWithAggregatesFilter<"TestRun"> | string
    testName?: StringWithAggregatesFilter<"TestRun"> | string
    url?: StringWithAggregatesFilter<"TestRun"> | string
    method?: StringWithAggregatesFilter<"TestRun"> | string
    status?: StringWithAggregatesFilter<"TestRun"> | string
    requestCount?: IntWithAggregatesFilter<"TestRun"> | number
    duration?: FloatWithAggregatesFilter<"TestRun"> | number
    errorRate?: FloatWithAggregatesFilter<"TestRun"> | number
    avgResponseTime?: FloatWithAggregatesFilter<"TestRun"> | number
    maxResponseTime?: FloatWithAggregatesFilter<"TestRun"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TestRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestRun"> | Date | string
  }

  export type MetricWhereInput = {
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    id?: UuidFilter<"Metric"> | string
    testRunId?: UuidFilter<"Metric"> | string
    timestamp?: DateTimeFilter<"Metric"> | Date | string
    latency?: FloatFilter<"Metric"> | number
    throughput?: FloatFilter<"Metric"> | number
    statusCode?: IntFilter<"Metric"> | number
    testRun?: XOR<TestRunScalarRelationFilter, TestRunWhereInput>
  }

  export type MetricOrderByWithRelationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    timestamp?: SortOrder
    latency?: SortOrder
    throughput?: SortOrder
    statusCode?: SortOrder
    testRun?: TestRunOrderByWithRelationInput
  }

  export type MetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    testRunId?: UuidFilter<"Metric"> | string
    timestamp?: DateTimeFilter<"Metric"> | Date | string
    latency?: FloatFilter<"Metric"> | number
    throughput?: FloatFilter<"Metric"> | number
    statusCode?: IntFilter<"Metric"> | number
    testRun?: XOR<TestRunScalarRelationFilter, TestRunWhereInput>
  }, "id">

  export type MetricOrderByWithAggregationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    timestamp?: SortOrder
    latency?: SortOrder
    throughput?: SortOrder
    statusCode?: SortOrder
    _count?: MetricCountOrderByAggregateInput
    _avg?: MetricAvgOrderByAggregateInput
    _max?: MetricMaxOrderByAggregateInput
    _min?: MetricMinOrderByAggregateInput
    _sum?: MetricSumOrderByAggregateInput
  }

  export type MetricScalarWhereWithAggregatesInput = {
    AND?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    OR?: MetricScalarWhereWithAggregatesInput[]
    NOT?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Metric"> | string
    testRunId?: UuidWithAggregatesFilter<"Metric"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Metric"> | Date | string
    latency?: FloatWithAggregatesFilter<"Metric"> | number
    throughput?: FloatWithAggregatesFilter<"Metric"> | number
    statusCode?: IntWithAggregatesFilter<"Metric"> | number
  }

  export type TestConfigWhereInput = {
    AND?: TestConfigWhereInput | TestConfigWhereInput[]
    OR?: TestConfigWhereInput[]
    NOT?: TestConfigWhereInput | TestConfigWhereInput[]
    id?: UuidFilter<"TestConfig"> | string
    testRunId?: UuidFilter<"TestConfig"> | string
    testDuration?: IntFilter<"TestConfig"> | number
    requestRate?: IntFilter<"TestConfig"> | number
    concurrencyLevel?: IntFilter<"TestConfig"> | number
    headers?: JsonFilter<"TestConfig">
    body?: JsonNullableFilter<"TestConfig">
    testRun?: XOR<TestRunScalarRelationFilter, TestRunWhereInput>
  }

  export type TestConfigOrderByWithRelationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    testDuration?: SortOrder
    requestRate?: SortOrder
    concurrencyLevel?: SortOrder
    headers?: SortOrder
    body?: SortOrderInput | SortOrder
    testRun?: TestRunOrderByWithRelationInput
  }

  export type TestConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    testRunId?: string
    AND?: TestConfigWhereInput | TestConfigWhereInput[]
    OR?: TestConfigWhereInput[]
    NOT?: TestConfigWhereInput | TestConfigWhereInput[]
    testDuration?: IntFilter<"TestConfig"> | number
    requestRate?: IntFilter<"TestConfig"> | number
    concurrencyLevel?: IntFilter<"TestConfig"> | number
    headers?: JsonFilter<"TestConfig">
    body?: JsonNullableFilter<"TestConfig">
    testRun?: XOR<TestRunScalarRelationFilter, TestRunWhereInput>
  }, "id" | "testRunId">

  export type TestConfigOrderByWithAggregationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    testDuration?: SortOrder
    requestRate?: SortOrder
    concurrencyLevel?: SortOrder
    headers?: SortOrder
    body?: SortOrderInput | SortOrder
    _count?: TestConfigCountOrderByAggregateInput
    _avg?: TestConfigAvgOrderByAggregateInput
    _max?: TestConfigMaxOrderByAggregateInput
    _min?: TestConfigMinOrderByAggregateInput
    _sum?: TestConfigSumOrderByAggregateInput
  }

  export type TestConfigScalarWhereWithAggregatesInput = {
    AND?: TestConfigScalarWhereWithAggregatesInput | TestConfigScalarWhereWithAggregatesInput[]
    OR?: TestConfigScalarWhereWithAggregatesInput[]
    NOT?: TestConfigScalarWhereWithAggregatesInput | TestConfigScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TestConfig"> | string
    testRunId?: UuidWithAggregatesFilter<"TestConfig"> | string
    testDuration?: IntWithAggregatesFilter<"TestConfig"> | number
    requestRate?: IntWithAggregatesFilter<"TestConfig"> | number
    concurrencyLevel?: IntWithAggregatesFilter<"TestConfig"> | number
    headers?: JsonWithAggregatesFilter<"TestConfig">
    body?: JsonNullableWithAggregatesFilter<"TestConfig">
  }

  export type TestResultWhereInput = {
    AND?: TestResultWhereInput | TestResultWhereInput[]
    OR?: TestResultWhereInput[]
    NOT?: TestResultWhereInput | TestResultWhereInput[]
    id?: UuidFilter<"TestResult"> | string
    testRunId?: UuidFilter<"TestResult"> | string
    avgLatency?: FloatFilter<"TestResult"> | number
    avgThroughput?: FloatFilter<"TestResult"> | number
    totalRequests?: IntFilter<"TestResult"> | number
    successRate?: FloatFilter<"TestResult"> | number
    errorRate?: FloatFilter<"TestResult"> | number
    createdAt?: DateTimeFilter<"TestResult"> | Date | string
    testRun?: XOR<TestRunScalarRelationFilter, TestRunWhereInput>
  }

  export type TestResultOrderByWithRelationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    avgLatency?: SortOrder
    avgThroughput?: SortOrder
    totalRequests?: SortOrder
    successRate?: SortOrder
    errorRate?: SortOrder
    createdAt?: SortOrder
    testRun?: TestRunOrderByWithRelationInput
  }

  export type TestResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    testRunId?: string
    AND?: TestResultWhereInput | TestResultWhereInput[]
    OR?: TestResultWhereInput[]
    NOT?: TestResultWhereInput | TestResultWhereInput[]
    avgLatency?: FloatFilter<"TestResult"> | number
    avgThroughput?: FloatFilter<"TestResult"> | number
    totalRequests?: IntFilter<"TestResult"> | number
    successRate?: FloatFilter<"TestResult"> | number
    errorRate?: FloatFilter<"TestResult"> | number
    createdAt?: DateTimeFilter<"TestResult"> | Date | string
    testRun?: XOR<TestRunScalarRelationFilter, TestRunWhereInput>
  }, "id" | "testRunId">

  export type TestResultOrderByWithAggregationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    avgLatency?: SortOrder
    avgThroughput?: SortOrder
    totalRequests?: SortOrder
    successRate?: SortOrder
    errorRate?: SortOrder
    createdAt?: SortOrder
    _count?: TestResultCountOrderByAggregateInput
    _avg?: TestResultAvgOrderByAggregateInput
    _max?: TestResultMaxOrderByAggregateInput
    _min?: TestResultMinOrderByAggregateInput
    _sum?: TestResultSumOrderByAggregateInput
  }

  export type TestResultScalarWhereWithAggregatesInput = {
    AND?: TestResultScalarWhereWithAggregatesInput | TestResultScalarWhereWithAggregatesInput[]
    OR?: TestResultScalarWhereWithAggregatesInput[]
    NOT?: TestResultScalarWhereWithAggregatesInput | TestResultScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TestResult"> | string
    testRunId?: UuidWithAggregatesFilter<"TestResult"> | string
    avgLatency?: FloatWithAggregatesFilter<"TestResult"> | number
    avgThroughput?: FloatWithAggregatesFilter<"TestResult"> | number
    totalRequests?: IntWithAggregatesFilter<"TestResult"> | number
    successRate?: FloatWithAggregatesFilter<"TestResult"> | number
    errorRate?: FloatWithAggregatesFilter<"TestResult"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TestResult"> | Date | string
  }

  export type TestHistoryWhereInput = {
    AND?: TestHistoryWhereInput | TestHistoryWhereInput[]
    OR?: TestHistoryWhereInput[]
    NOT?: TestHistoryWhereInput | TestHistoryWhereInput[]
    id?: UuidFilter<"TestHistory"> | string
    testRunId?: UuidFilter<"TestHistory"> | string
    userId?: UuidFilter<"TestHistory"> | string
    testName?: StringFilter<"TestHistory"> | string
    url?: StringFilter<"TestHistory"> | string
    method?: StringFilter<"TestHistory"> | string
    requestCount?: IntFilter<"TestHistory"> | number
    duration?: FloatFilter<"TestHistory"> | number
    errorRate?: FloatFilter<"TestHistory"> | number
    avgResponseTime?: FloatFilter<"TestHistory"> | number
    maxResponseTime?: FloatFilter<"TestHistory"> | number
    createdAt?: DateTimeFilter<"TestHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    testRun?: XOR<TestRunScalarRelationFilter, TestRunWhereInput>
  }

  export type TestHistoryOrderByWithRelationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    userId?: SortOrder
    testName?: SortOrder
    url?: SortOrder
    method?: SortOrder
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    testRun?: TestRunOrderByWithRelationInput
  }

  export type TestHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestHistoryWhereInput | TestHistoryWhereInput[]
    OR?: TestHistoryWhereInput[]
    NOT?: TestHistoryWhereInput | TestHistoryWhereInput[]
    testRunId?: UuidFilter<"TestHistory"> | string
    userId?: UuidFilter<"TestHistory"> | string
    testName?: StringFilter<"TestHistory"> | string
    url?: StringFilter<"TestHistory"> | string
    method?: StringFilter<"TestHistory"> | string
    requestCount?: IntFilter<"TestHistory"> | number
    duration?: FloatFilter<"TestHistory"> | number
    errorRate?: FloatFilter<"TestHistory"> | number
    avgResponseTime?: FloatFilter<"TestHistory"> | number
    maxResponseTime?: FloatFilter<"TestHistory"> | number
    createdAt?: DateTimeFilter<"TestHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    testRun?: XOR<TestRunScalarRelationFilter, TestRunWhereInput>
  }, "id">

  export type TestHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    userId?: SortOrder
    testName?: SortOrder
    url?: SortOrder
    method?: SortOrder
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
    createdAt?: SortOrder
    _count?: TestHistoryCountOrderByAggregateInput
    _avg?: TestHistoryAvgOrderByAggregateInput
    _max?: TestHistoryMaxOrderByAggregateInput
    _min?: TestHistoryMinOrderByAggregateInput
    _sum?: TestHistorySumOrderByAggregateInput
  }

  export type TestHistoryScalarWhereWithAggregatesInput = {
    AND?: TestHistoryScalarWhereWithAggregatesInput | TestHistoryScalarWhereWithAggregatesInput[]
    OR?: TestHistoryScalarWhereWithAggregatesInput[]
    NOT?: TestHistoryScalarWhereWithAggregatesInput | TestHistoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TestHistory"> | string
    testRunId?: UuidWithAggregatesFilter<"TestHistory"> | string
    userId?: UuidWithAggregatesFilter<"TestHistory"> | string
    testName?: StringWithAggregatesFilter<"TestHistory"> | string
    url?: StringWithAggregatesFilter<"TestHistory"> | string
    method?: StringWithAggregatesFilter<"TestHistory"> | string
    requestCount?: IntWithAggregatesFilter<"TestHistory"> | number
    duration?: FloatWithAggregatesFilter<"TestHistory"> | number
    errorRate?: FloatWithAggregatesFilter<"TestHistory"> | number
    avgResponseTime?: FloatWithAggregatesFilter<"TestHistory"> | number
    maxResponseTime?: FloatWithAggregatesFilter<"TestHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TestHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    testRuns?: TestRunCreateNestedManyWithoutUserInput
    testHistories?: TestHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    testRuns?: TestRunUncheckedCreateNestedManyWithoutUserInput
    testHistories?: TestHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRuns?: TestRunUpdateManyWithoutUserNestedInput
    testHistories?: TestHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRuns?: TestRunUncheckedUpdateManyWithoutUserNestedInput
    testHistories?: TestHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestRunCreateInput = {
    id?: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTestRunsInput
    metrics?: MetricCreateNestedManyWithoutTestRunInput
    testConfig?: TestConfigCreateNestedOneWithoutTestRunInput
    testResult?: TestResultCreateNestedOneWithoutTestRunInput
    testHistories?: TestHistoryCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUncheckedCreateInput = {
    id?: string
    userId: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: MetricUncheckedCreateNestedManyWithoutTestRunInput
    testConfig?: TestConfigUncheckedCreateNestedOneWithoutTestRunInput
    testResult?: TestResultUncheckedCreateNestedOneWithoutTestRunInput
    testHistories?: TestHistoryUncheckedCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestRunsNestedInput
    metrics?: MetricUpdateManyWithoutTestRunNestedInput
    testConfig?: TestConfigUpdateOneWithoutTestRunNestedInput
    testResult?: TestResultUpdateOneWithoutTestRunNestedInput
    testHistories?: TestHistoryUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: MetricUncheckedUpdateManyWithoutTestRunNestedInput
    testConfig?: TestConfigUncheckedUpdateOneWithoutTestRunNestedInput
    testResult?: TestResultUncheckedUpdateOneWithoutTestRunNestedInput
    testHistories?: TestHistoryUncheckedUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunCreateManyInput = {
    id?: string
    userId: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricCreateInput = {
    id?: string
    timestamp?: Date | string
    latency: number
    throughput: number
    statusCode: number
    testRun: TestRunCreateNestedOneWithoutMetricsInput
  }

  export type MetricUncheckedCreateInput = {
    id?: string
    testRunId: string
    timestamp?: Date | string
    latency: number
    throughput: number
    statusCode: number
  }

  export type MetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latency?: FloatFieldUpdateOperationsInput | number
    throughput?: FloatFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
    testRun?: TestRunUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type MetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testRunId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latency?: FloatFieldUpdateOperationsInput | number
    throughput?: FloatFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
  }

  export type MetricCreateManyInput = {
    id?: string
    testRunId: string
    timestamp?: Date | string
    latency: number
    throughput: number
    statusCode: number
  }

  export type MetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latency?: FloatFieldUpdateOperationsInput | number
    throughput?: FloatFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
  }

  export type MetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    testRunId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latency?: FloatFieldUpdateOperationsInput | number
    throughput?: FloatFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
  }

  export type TestConfigCreateInput = {
    id?: string
    testDuration: number
    requestRate: number
    concurrencyLevel: number
    headers: JsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    testRun: TestRunCreateNestedOneWithoutTestConfigInput
  }

  export type TestConfigUncheckedCreateInput = {
    id?: string
    testRunId: string
    testDuration: number
    requestRate: number
    concurrencyLevel: number
    headers: JsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TestConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testDuration?: IntFieldUpdateOperationsInput | number
    requestRate?: IntFieldUpdateOperationsInput | number
    concurrencyLevel?: IntFieldUpdateOperationsInput | number
    headers?: JsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    testRun?: TestRunUpdateOneRequiredWithoutTestConfigNestedInput
  }

  export type TestConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testRunId?: StringFieldUpdateOperationsInput | string
    testDuration?: IntFieldUpdateOperationsInput | number
    requestRate?: IntFieldUpdateOperationsInput | number
    concurrencyLevel?: IntFieldUpdateOperationsInput | number
    headers?: JsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TestConfigCreateManyInput = {
    id?: string
    testRunId: string
    testDuration: number
    requestRate: number
    concurrencyLevel: number
    headers: JsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TestConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testDuration?: IntFieldUpdateOperationsInput | number
    requestRate?: IntFieldUpdateOperationsInput | number
    concurrencyLevel?: IntFieldUpdateOperationsInput | number
    headers?: JsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TestConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    testRunId?: StringFieldUpdateOperationsInput | string
    testDuration?: IntFieldUpdateOperationsInput | number
    requestRate?: IntFieldUpdateOperationsInput | number
    concurrencyLevel?: IntFieldUpdateOperationsInput | number
    headers?: JsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TestResultCreateInput = {
    id?: string
    avgLatency: number
    avgThroughput: number
    totalRequests: number
    successRate: number
    errorRate: number
    createdAt?: Date | string
    testRun: TestRunCreateNestedOneWithoutTestResultInput
  }

  export type TestResultUncheckedCreateInput = {
    id?: string
    testRunId: string
    avgLatency: number
    avgThroughput: number
    totalRequests: number
    successRate: number
    errorRate: number
    createdAt?: Date | string
  }

  export type TestResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    avgLatency?: FloatFieldUpdateOperationsInput | number
    avgThroughput?: FloatFieldUpdateOperationsInput | number
    totalRequests?: IntFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRun?: TestRunUpdateOneRequiredWithoutTestResultNestedInput
  }

  export type TestResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testRunId?: StringFieldUpdateOperationsInput | string
    avgLatency?: FloatFieldUpdateOperationsInput | number
    avgThroughput?: FloatFieldUpdateOperationsInput | number
    totalRequests?: IntFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultCreateManyInput = {
    id?: string
    testRunId: string
    avgLatency: number
    avgThroughput: number
    totalRequests: number
    successRate: number
    errorRate: number
    createdAt?: Date | string
  }

  export type TestResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    avgLatency?: FloatFieldUpdateOperationsInput | number
    avgThroughput?: FloatFieldUpdateOperationsInput | number
    totalRequests?: IntFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    testRunId?: StringFieldUpdateOperationsInput | string
    avgLatency?: FloatFieldUpdateOperationsInput | number
    avgThroughput?: FloatFieldUpdateOperationsInput | number
    totalRequests?: IntFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestHistoryCreateInput = {
    id?: string
    testName: string
    url: string
    method: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTestHistoriesInput
    testRun: TestRunCreateNestedOneWithoutTestHistoriesInput
  }

  export type TestHistoryUncheckedCreateInput = {
    id?: string
    testRunId: string
    userId: string
    testName: string
    url: string
    method: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
  }

  export type TestHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestHistoriesNestedInput
    testRun?: TestRunUpdateOneRequiredWithoutTestHistoriesNestedInput
  }

  export type TestHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testRunId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestHistoryCreateManyInput = {
    id?: string
    testRunId: string
    userId: string
    testName: string
    url: string
    method: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
  }

  export type TestHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    testRunId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TestRunListRelationFilter = {
    every?: TestRunWhereInput
    some?: TestRunWhereInput
    none?: TestRunWhereInput
  }

  export type TestHistoryListRelationFilter = {
    every?: TestHistoryWhereInput
    some?: TestHistoryWhereInput
    none?: TestHistoryWhereInput
  }

  export type TestRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MetricListRelationFilter = {
    every?: MetricWhereInput
    some?: MetricWhereInput
    none?: MetricWhereInput
  }

  export type TestConfigNullableScalarRelationFilter = {
    is?: TestConfigWhereInput | null
    isNot?: TestConfigWhereInput | null
  }

  export type TestResultNullableScalarRelationFilter = {
    is?: TestResultWhereInput | null
    isNot?: TestResultWhereInput | null
  }

  export type MetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestRunCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testName?: SortOrder
    url?: SortOrder
    method?: SortOrder
    status?: SortOrder
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestRunAvgOrderByAggregateInput = {
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
  }

  export type TestRunMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testName?: SortOrder
    url?: SortOrder
    method?: SortOrder
    status?: SortOrder
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestRunMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    testName?: SortOrder
    url?: SortOrder
    method?: SortOrder
    status?: SortOrder
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestRunSumOrderByAggregateInput = {
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TestRunScalarRelationFilter = {
    is?: TestRunWhereInput
    isNot?: TestRunWhereInput
  }

  export type MetricCountOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    timestamp?: SortOrder
    latency?: SortOrder
    throughput?: SortOrder
    statusCode?: SortOrder
  }

  export type MetricAvgOrderByAggregateInput = {
    latency?: SortOrder
    throughput?: SortOrder
    statusCode?: SortOrder
  }

  export type MetricMaxOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    timestamp?: SortOrder
    latency?: SortOrder
    throughput?: SortOrder
    statusCode?: SortOrder
  }

  export type MetricMinOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    timestamp?: SortOrder
    latency?: SortOrder
    throughput?: SortOrder
    statusCode?: SortOrder
  }

  export type MetricSumOrderByAggregateInput = {
    latency?: SortOrder
    throughput?: SortOrder
    statusCode?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TestConfigCountOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    testDuration?: SortOrder
    requestRate?: SortOrder
    concurrencyLevel?: SortOrder
    headers?: SortOrder
    body?: SortOrder
  }

  export type TestConfigAvgOrderByAggregateInput = {
    testDuration?: SortOrder
    requestRate?: SortOrder
    concurrencyLevel?: SortOrder
  }

  export type TestConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    testDuration?: SortOrder
    requestRate?: SortOrder
    concurrencyLevel?: SortOrder
  }

  export type TestConfigMinOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    testDuration?: SortOrder
    requestRate?: SortOrder
    concurrencyLevel?: SortOrder
  }

  export type TestConfigSumOrderByAggregateInput = {
    testDuration?: SortOrder
    requestRate?: SortOrder
    concurrencyLevel?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type TestResultCountOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    avgLatency?: SortOrder
    avgThroughput?: SortOrder
    totalRequests?: SortOrder
    successRate?: SortOrder
    errorRate?: SortOrder
    createdAt?: SortOrder
  }

  export type TestResultAvgOrderByAggregateInput = {
    avgLatency?: SortOrder
    avgThroughput?: SortOrder
    totalRequests?: SortOrder
    successRate?: SortOrder
    errorRate?: SortOrder
  }

  export type TestResultMaxOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    avgLatency?: SortOrder
    avgThroughput?: SortOrder
    totalRequests?: SortOrder
    successRate?: SortOrder
    errorRate?: SortOrder
    createdAt?: SortOrder
  }

  export type TestResultMinOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    avgLatency?: SortOrder
    avgThroughput?: SortOrder
    totalRequests?: SortOrder
    successRate?: SortOrder
    errorRate?: SortOrder
    createdAt?: SortOrder
  }

  export type TestResultSumOrderByAggregateInput = {
    avgLatency?: SortOrder
    avgThroughput?: SortOrder
    totalRequests?: SortOrder
    successRate?: SortOrder
    errorRate?: SortOrder
  }

  export type TestHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    userId?: SortOrder
    testName?: SortOrder
    url?: SortOrder
    method?: SortOrder
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type TestHistoryAvgOrderByAggregateInput = {
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
  }

  export type TestHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    userId?: SortOrder
    testName?: SortOrder
    url?: SortOrder
    method?: SortOrder
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type TestHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    userId?: SortOrder
    testName?: SortOrder
    url?: SortOrder
    method?: SortOrder
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
    createdAt?: SortOrder
  }

  export type TestHistorySumOrderByAggregateInput = {
    requestCount?: SortOrder
    duration?: SortOrder
    errorRate?: SortOrder
    avgResponseTime?: SortOrder
    maxResponseTime?: SortOrder
  }

  export type TestRunCreateNestedManyWithoutUserInput = {
    create?: XOR<TestRunCreateWithoutUserInput, TestRunUncheckedCreateWithoutUserInput> | TestRunCreateWithoutUserInput[] | TestRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutUserInput | TestRunCreateOrConnectWithoutUserInput[]
    createMany?: TestRunCreateManyUserInputEnvelope
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
  }

  export type TestHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<TestHistoryCreateWithoutUserInput, TestHistoryUncheckedCreateWithoutUserInput> | TestHistoryCreateWithoutUserInput[] | TestHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestHistoryCreateOrConnectWithoutUserInput | TestHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TestHistoryCreateManyUserInputEnvelope
    connect?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
  }

  export type TestRunUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TestRunCreateWithoutUserInput, TestRunUncheckedCreateWithoutUserInput> | TestRunCreateWithoutUserInput[] | TestRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutUserInput | TestRunCreateOrConnectWithoutUserInput[]
    createMany?: TestRunCreateManyUserInputEnvelope
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
  }

  export type TestHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TestHistoryCreateWithoutUserInput, TestHistoryUncheckedCreateWithoutUserInput> | TestHistoryCreateWithoutUserInput[] | TestHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestHistoryCreateOrConnectWithoutUserInput | TestHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TestHistoryCreateManyUserInputEnvelope
    connect?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TestRunUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestRunCreateWithoutUserInput, TestRunUncheckedCreateWithoutUserInput> | TestRunCreateWithoutUserInput[] | TestRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutUserInput | TestRunCreateOrConnectWithoutUserInput[]
    upsert?: TestRunUpsertWithWhereUniqueWithoutUserInput | TestRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestRunCreateManyUserInputEnvelope
    set?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    disconnect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    delete?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    update?: TestRunUpdateWithWhereUniqueWithoutUserInput | TestRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestRunUpdateManyWithWhereWithoutUserInput | TestRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
  }

  export type TestHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestHistoryCreateWithoutUserInput, TestHistoryUncheckedCreateWithoutUserInput> | TestHistoryCreateWithoutUserInput[] | TestHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestHistoryCreateOrConnectWithoutUserInput | TestHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TestHistoryUpsertWithWhereUniqueWithoutUserInput | TestHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestHistoryCreateManyUserInputEnvelope
    set?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    disconnect?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    delete?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    connect?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    update?: TestHistoryUpdateWithWhereUniqueWithoutUserInput | TestHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestHistoryUpdateManyWithWhereWithoutUserInput | TestHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestHistoryScalarWhereInput | TestHistoryScalarWhereInput[]
  }

  export type TestRunUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestRunCreateWithoutUserInput, TestRunUncheckedCreateWithoutUserInput> | TestRunCreateWithoutUserInput[] | TestRunUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutUserInput | TestRunCreateOrConnectWithoutUserInput[]
    upsert?: TestRunUpsertWithWhereUniqueWithoutUserInput | TestRunUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestRunCreateManyUserInputEnvelope
    set?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    disconnect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    delete?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    update?: TestRunUpdateWithWhereUniqueWithoutUserInput | TestRunUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestRunUpdateManyWithWhereWithoutUserInput | TestRunUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
  }

  export type TestHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestHistoryCreateWithoutUserInput, TestHistoryUncheckedCreateWithoutUserInput> | TestHistoryCreateWithoutUserInput[] | TestHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestHistoryCreateOrConnectWithoutUserInput | TestHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TestHistoryUpsertWithWhereUniqueWithoutUserInput | TestHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestHistoryCreateManyUserInputEnvelope
    set?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    disconnect?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    delete?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    connect?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    update?: TestHistoryUpdateWithWhereUniqueWithoutUserInput | TestHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestHistoryUpdateManyWithWhereWithoutUserInput | TestHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestHistoryScalarWhereInput | TestHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTestRunsInput = {
    create?: XOR<UserCreateWithoutTestRunsInput, UserUncheckedCreateWithoutTestRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestRunsInput
    connect?: UserWhereUniqueInput
  }

  export type MetricCreateNestedManyWithoutTestRunInput = {
    create?: XOR<MetricCreateWithoutTestRunInput, MetricUncheckedCreateWithoutTestRunInput> | MetricCreateWithoutTestRunInput[] | MetricUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutTestRunInput | MetricCreateOrConnectWithoutTestRunInput[]
    createMany?: MetricCreateManyTestRunInputEnvelope
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
  }

  export type TestConfigCreateNestedOneWithoutTestRunInput = {
    create?: XOR<TestConfigCreateWithoutTestRunInput, TestConfigUncheckedCreateWithoutTestRunInput>
    connectOrCreate?: TestConfigCreateOrConnectWithoutTestRunInput
    connect?: TestConfigWhereUniqueInput
  }

  export type TestResultCreateNestedOneWithoutTestRunInput = {
    create?: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput>
    connectOrCreate?: TestResultCreateOrConnectWithoutTestRunInput
    connect?: TestResultWhereUniqueInput
  }

  export type TestHistoryCreateNestedManyWithoutTestRunInput = {
    create?: XOR<TestHistoryCreateWithoutTestRunInput, TestHistoryUncheckedCreateWithoutTestRunInput> | TestHistoryCreateWithoutTestRunInput[] | TestHistoryUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestHistoryCreateOrConnectWithoutTestRunInput | TestHistoryCreateOrConnectWithoutTestRunInput[]
    createMany?: TestHistoryCreateManyTestRunInputEnvelope
    connect?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
  }

  export type MetricUncheckedCreateNestedManyWithoutTestRunInput = {
    create?: XOR<MetricCreateWithoutTestRunInput, MetricUncheckedCreateWithoutTestRunInput> | MetricCreateWithoutTestRunInput[] | MetricUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutTestRunInput | MetricCreateOrConnectWithoutTestRunInput[]
    createMany?: MetricCreateManyTestRunInputEnvelope
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
  }

  export type TestConfigUncheckedCreateNestedOneWithoutTestRunInput = {
    create?: XOR<TestConfigCreateWithoutTestRunInput, TestConfigUncheckedCreateWithoutTestRunInput>
    connectOrCreate?: TestConfigCreateOrConnectWithoutTestRunInput
    connect?: TestConfigWhereUniqueInput
  }

  export type TestResultUncheckedCreateNestedOneWithoutTestRunInput = {
    create?: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput>
    connectOrCreate?: TestResultCreateOrConnectWithoutTestRunInput
    connect?: TestResultWhereUniqueInput
  }

  export type TestHistoryUncheckedCreateNestedManyWithoutTestRunInput = {
    create?: XOR<TestHistoryCreateWithoutTestRunInput, TestHistoryUncheckedCreateWithoutTestRunInput> | TestHistoryCreateWithoutTestRunInput[] | TestHistoryUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestHistoryCreateOrConnectWithoutTestRunInput | TestHistoryCreateOrConnectWithoutTestRunInput[]
    createMany?: TestHistoryCreateManyTestRunInputEnvelope
    connect?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTestRunsNestedInput = {
    create?: XOR<UserCreateWithoutTestRunsInput, UserUncheckedCreateWithoutTestRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestRunsInput
    upsert?: UserUpsertWithoutTestRunsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestRunsInput, UserUpdateWithoutTestRunsInput>, UserUncheckedUpdateWithoutTestRunsInput>
  }

  export type MetricUpdateManyWithoutTestRunNestedInput = {
    create?: XOR<MetricCreateWithoutTestRunInput, MetricUncheckedCreateWithoutTestRunInput> | MetricCreateWithoutTestRunInput[] | MetricUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutTestRunInput | MetricCreateOrConnectWithoutTestRunInput[]
    upsert?: MetricUpsertWithWhereUniqueWithoutTestRunInput | MetricUpsertWithWhereUniqueWithoutTestRunInput[]
    createMany?: MetricCreateManyTestRunInputEnvelope
    set?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    disconnect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    delete?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    update?: MetricUpdateWithWhereUniqueWithoutTestRunInput | MetricUpdateWithWhereUniqueWithoutTestRunInput[]
    updateMany?: MetricUpdateManyWithWhereWithoutTestRunInput | MetricUpdateManyWithWhereWithoutTestRunInput[]
    deleteMany?: MetricScalarWhereInput | MetricScalarWhereInput[]
  }

  export type TestConfigUpdateOneWithoutTestRunNestedInput = {
    create?: XOR<TestConfigCreateWithoutTestRunInput, TestConfigUncheckedCreateWithoutTestRunInput>
    connectOrCreate?: TestConfigCreateOrConnectWithoutTestRunInput
    upsert?: TestConfigUpsertWithoutTestRunInput
    disconnect?: TestConfigWhereInput | boolean
    delete?: TestConfigWhereInput | boolean
    connect?: TestConfigWhereUniqueInput
    update?: XOR<XOR<TestConfigUpdateToOneWithWhereWithoutTestRunInput, TestConfigUpdateWithoutTestRunInput>, TestConfigUncheckedUpdateWithoutTestRunInput>
  }

  export type TestResultUpdateOneWithoutTestRunNestedInput = {
    create?: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput>
    connectOrCreate?: TestResultCreateOrConnectWithoutTestRunInput
    upsert?: TestResultUpsertWithoutTestRunInput
    disconnect?: TestResultWhereInput | boolean
    delete?: TestResultWhereInput | boolean
    connect?: TestResultWhereUniqueInput
    update?: XOR<XOR<TestResultUpdateToOneWithWhereWithoutTestRunInput, TestResultUpdateWithoutTestRunInput>, TestResultUncheckedUpdateWithoutTestRunInput>
  }

  export type TestHistoryUpdateManyWithoutTestRunNestedInput = {
    create?: XOR<TestHistoryCreateWithoutTestRunInput, TestHistoryUncheckedCreateWithoutTestRunInput> | TestHistoryCreateWithoutTestRunInput[] | TestHistoryUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestHistoryCreateOrConnectWithoutTestRunInput | TestHistoryCreateOrConnectWithoutTestRunInput[]
    upsert?: TestHistoryUpsertWithWhereUniqueWithoutTestRunInput | TestHistoryUpsertWithWhereUniqueWithoutTestRunInput[]
    createMany?: TestHistoryCreateManyTestRunInputEnvelope
    set?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    disconnect?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    delete?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    connect?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    update?: TestHistoryUpdateWithWhereUniqueWithoutTestRunInput | TestHistoryUpdateWithWhereUniqueWithoutTestRunInput[]
    updateMany?: TestHistoryUpdateManyWithWhereWithoutTestRunInput | TestHistoryUpdateManyWithWhereWithoutTestRunInput[]
    deleteMany?: TestHistoryScalarWhereInput | TestHistoryScalarWhereInput[]
  }

  export type MetricUncheckedUpdateManyWithoutTestRunNestedInput = {
    create?: XOR<MetricCreateWithoutTestRunInput, MetricUncheckedCreateWithoutTestRunInput> | MetricCreateWithoutTestRunInput[] | MetricUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutTestRunInput | MetricCreateOrConnectWithoutTestRunInput[]
    upsert?: MetricUpsertWithWhereUniqueWithoutTestRunInput | MetricUpsertWithWhereUniqueWithoutTestRunInput[]
    createMany?: MetricCreateManyTestRunInputEnvelope
    set?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    disconnect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    delete?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    update?: MetricUpdateWithWhereUniqueWithoutTestRunInput | MetricUpdateWithWhereUniqueWithoutTestRunInput[]
    updateMany?: MetricUpdateManyWithWhereWithoutTestRunInput | MetricUpdateManyWithWhereWithoutTestRunInput[]
    deleteMany?: MetricScalarWhereInput | MetricScalarWhereInput[]
  }

  export type TestConfigUncheckedUpdateOneWithoutTestRunNestedInput = {
    create?: XOR<TestConfigCreateWithoutTestRunInput, TestConfigUncheckedCreateWithoutTestRunInput>
    connectOrCreate?: TestConfigCreateOrConnectWithoutTestRunInput
    upsert?: TestConfigUpsertWithoutTestRunInput
    disconnect?: TestConfigWhereInput | boolean
    delete?: TestConfigWhereInput | boolean
    connect?: TestConfigWhereUniqueInput
    update?: XOR<XOR<TestConfigUpdateToOneWithWhereWithoutTestRunInput, TestConfigUpdateWithoutTestRunInput>, TestConfigUncheckedUpdateWithoutTestRunInput>
  }

  export type TestResultUncheckedUpdateOneWithoutTestRunNestedInput = {
    create?: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput>
    connectOrCreate?: TestResultCreateOrConnectWithoutTestRunInput
    upsert?: TestResultUpsertWithoutTestRunInput
    disconnect?: TestResultWhereInput | boolean
    delete?: TestResultWhereInput | boolean
    connect?: TestResultWhereUniqueInput
    update?: XOR<XOR<TestResultUpdateToOneWithWhereWithoutTestRunInput, TestResultUpdateWithoutTestRunInput>, TestResultUncheckedUpdateWithoutTestRunInput>
  }

  export type TestHistoryUncheckedUpdateManyWithoutTestRunNestedInput = {
    create?: XOR<TestHistoryCreateWithoutTestRunInput, TestHistoryUncheckedCreateWithoutTestRunInput> | TestHistoryCreateWithoutTestRunInput[] | TestHistoryUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestHistoryCreateOrConnectWithoutTestRunInput | TestHistoryCreateOrConnectWithoutTestRunInput[]
    upsert?: TestHistoryUpsertWithWhereUniqueWithoutTestRunInput | TestHistoryUpsertWithWhereUniqueWithoutTestRunInput[]
    createMany?: TestHistoryCreateManyTestRunInputEnvelope
    set?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    disconnect?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    delete?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    connect?: TestHistoryWhereUniqueInput | TestHistoryWhereUniqueInput[]
    update?: TestHistoryUpdateWithWhereUniqueWithoutTestRunInput | TestHistoryUpdateWithWhereUniqueWithoutTestRunInput[]
    updateMany?: TestHistoryUpdateManyWithWhereWithoutTestRunInput | TestHistoryUpdateManyWithWhereWithoutTestRunInput[]
    deleteMany?: TestHistoryScalarWhereInput | TestHistoryScalarWhereInput[]
  }

  export type TestRunCreateNestedOneWithoutMetricsInput = {
    create?: XOR<TestRunCreateWithoutMetricsInput, TestRunUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutMetricsInput
    connect?: TestRunWhereUniqueInput
  }

  export type TestRunUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<TestRunCreateWithoutMetricsInput, TestRunUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutMetricsInput
    upsert?: TestRunUpsertWithoutMetricsInput
    connect?: TestRunWhereUniqueInput
    update?: XOR<XOR<TestRunUpdateToOneWithWhereWithoutMetricsInput, TestRunUpdateWithoutMetricsInput>, TestRunUncheckedUpdateWithoutMetricsInput>
  }

  export type TestRunCreateNestedOneWithoutTestConfigInput = {
    create?: XOR<TestRunCreateWithoutTestConfigInput, TestRunUncheckedCreateWithoutTestConfigInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutTestConfigInput
    connect?: TestRunWhereUniqueInput
  }

  export type TestRunUpdateOneRequiredWithoutTestConfigNestedInput = {
    create?: XOR<TestRunCreateWithoutTestConfigInput, TestRunUncheckedCreateWithoutTestConfigInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutTestConfigInput
    upsert?: TestRunUpsertWithoutTestConfigInput
    connect?: TestRunWhereUniqueInput
    update?: XOR<XOR<TestRunUpdateToOneWithWhereWithoutTestConfigInput, TestRunUpdateWithoutTestConfigInput>, TestRunUncheckedUpdateWithoutTestConfigInput>
  }

  export type TestRunCreateNestedOneWithoutTestResultInput = {
    create?: XOR<TestRunCreateWithoutTestResultInput, TestRunUncheckedCreateWithoutTestResultInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutTestResultInput
    connect?: TestRunWhereUniqueInput
  }

  export type TestRunUpdateOneRequiredWithoutTestResultNestedInput = {
    create?: XOR<TestRunCreateWithoutTestResultInput, TestRunUncheckedCreateWithoutTestResultInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutTestResultInput
    upsert?: TestRunUpsertWithoutTestResultInput
    connect?: TestRunWhereUniqueInput
    update?: XOR<XOR<TestRunUpdateToOneWithWhereWithoutTestResultInput, TestRunUpdateWithoutTestResultInput>, TestRunUncheckedUpdateWithoutTestResultInput>
  }

  export type UserCreateNestedOneWithoutTestHistoriesInput = {
    create?: XOR<UserCreateWithoutTestHistoriesInput, UserUncheckedCreateWithoutTestHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type TestRunCreateNestedOneWithoutTestHistoriesInput = {
    create?: XOR<TestRunCreateWithoutTestHistoriesInput, TestRunUncheckedCreateWithoutTestHistoriesInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutTestHistoriesInput
    connect?: TestRunWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTestHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutTestHistoriesInput, UserUncheckedCreateWithoutTestHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestHistoriesInput
    upsert?: UserUpsertWithoutTestHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestHistoriesInput, UserUpdateWithoutTestHistoriesInput>, UserUncheckedUpdateWithoutTestHistoriesInput>
  }

  export type TestRunUpdateOneRequiredWithoutTestHistoriesNestedInput = {
    create?: XOR<TestRunCreateWithoutTestHistoriesInput, TestRunUncheckedCreateWithoutTestHistoriesInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutTestHistoriesInput
    upsert?: TestRunUpsertWithoutTestHistoriesInput
    connect?: TestRunWhereUniqueInput
    update?: XOR<XOR<TestRunUpdateToOneWithWhereWithoutTestHistoriesInput, TestRunUpdateWithoutTestHistoriesInput>, TestRunUncheckedUpdateWithoutTestHistoriesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TestRunCreateWithoutUserInput = {
    id?: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: MetricCreateNestedManyWithoutTestRunInput
    testConfig?: TestConfigCreateNestedOneWithoutTestRunInput
    testResult?: TestResultCreateNestedOneWithoutTestRunInput
    testHistories?: TestHistoryCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUncheckedCreateWithoutUserInput = {
    id?: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: MetricUncheckedCreateNestedManyWithoutTestRunInput
    testConfig?: TestConfigUncheckedCreateNestedOneWithoutTestRunInput
    testResult?: TestResultUncheckedCreateNestedOneWithoutTestRunInput
    testHistories?: TestHistoryUncheckedCreateNestedManyWithoutTestRunInput
  }

  export type TestRunCreateOrConnectWithoutUserInput = {
    where: TestRunWhereUniqueInput
    create: XOR<TestRunCreateWithoutUserInput, TestRunUncheckedCreateWithoutUserInput>
  }

  export type TestRunCreateManyUserInputEnvelope = {
    data: TestRunCreateManyUserInput | TestRunCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TestHistoryCreateWithoutUserInput = {
    id?: string
    testName: string
    url: string
    method: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    testRun: TestRunCreateNestedOneWithoutTestHistoriesInput
  }

  export type TestHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    testRunId: string
    testName: string
    url: string
    method: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
  }

  export type TestHistoryCreateOrConnectWithoutUserInput = {
    where: TestHistoryWhereUniqueInput
    create: XOR<TestHistoryCreateWithoutUserInput, TestHistoryUncheckedCreateWithoutUserInput>
  }

  export type TestHistoryCreateManyUserInputEnvelope = {
    data: TestHistoryCreateManyUserInput | TestHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TestRunUpsertWithWhereUniqueWithoutUserInput = {
    where: TestRunWhereUniqueInput
    update: XOR<TestRunUpdateWithoutUserInput, TestRunUncheckedUpdateWithoutUserInput>
    create: XOR<TestRunCreateWithoutUserInput, TestRunUncheckedCreateWithoutUserInput>
  }

  export type TestRunUpdateWithWhereUniqueWithoutUserInput = {
    where: TestRunWhereUniqueInput
    data: XOR<TestRunUpdateWithoutUserInput, TestRunUncheckedUpdateWithoutUserInput>
  }

  export type TestRunUpdateManyWithWhereWithoutUserInput = {
    where: TestRunScalarWhereInput
    data: XOR<TestRunUpdateManyMutationInput, TestRunUncheckedUpdateManyWithoutUserInput>
  }

  export type TestRunScalarWhereInput = {
    AND?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
    OR?: TestRunScalarWhereInput[]
    NOT?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
    id?: UuidFilter<"TestRun"> | string
    userId?: UuidFilter<"TestRun"> | string
    testName?: StringFilter<"TestRun"> | string
    url?: StringFilter<"TestRun"> | string
    method?: StringFilter<"TestRun"> | string
    status?: StringFilter<"TestRun"> | string
    requestCount?: IntFilter<"TestRun"> | number
    duration?: FloatFilter<"TestRun"> | number
    errorRate?: FloatFilter<"TestRun"> | number
    avgResponseTime?: FloatFilter<"TestRun"> | number
    maxResponseTime?: FloatFilter<"TestRun"> | number
    createdAt?: DateTimeFilter<"TestRun"> | Date | string
    updatedAt?: DateTimeFilter<"TestRun"> | Date | string
  }

  export type TestHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: TestHistoryWhereUniqueInput
    update: XOR<TestHistoryUpdateWithoutUserInput, TestHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<TestHistoryCreateWithoutUserInput, TestHistoryUncheckedCreateWithoutUserInput>
  }

  export type TestHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: TestHistoryWhereUniqueInput
    data: XOR<TestHistoryUpdateWithoutUserInput, TestHistoryUncheckedUpdateWithoutUserInput>
  }

  export type TestHistoryUpdateManyWithWhereWithoutUserInput = {
    where: TestHistoryScalarWhereInput
    data: XOR<TestHistoryUpdateManyMutationInput, TestHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type TestHistoryScalarWhereInput = {
    AND?: TestHistoryScalarWhereInput | TestHistoryScalarWhereInput[]
    OR?: TestHistoryScalarWhereInput[]
    NOT?: TestHistoryScalarWhereInput | TestHistoryScalarWhereInput[]
    id?: UuidFilter<"TestHistory"> | string
    testRunId?: UuidFilter<"TestHistory"> | string
    userId?: UuidFilter<"TestHistory"> | string
    testName?: StringFilter<"TestHistory"> | string
    url?: StringFilter<"TestHistory"> | string
    method?: StringFilter<"TestHistory"> | string
    requestCount?: IntFilter<"TestHistory"> | number
    duration?: FloatFilter<"TestHistory"> | number
    errorRate?: FloatFilter<"TestHistory"> | number
    avgResponseTime?: FloatFilter<"TestHistory"> | number
    maxResponseTime?: FloatFilter<"TestHistory"> | number
    createdAt?: DateTimeFilter<"TestHistory"> | Date | string
  }

  export type UserCreateWithoutTestRunsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    testHistories?: TestHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTestRunsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    testHistories?: TestHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTestRunsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestRunsInput, UserUncheckedCreateWithoutTestRunsInput>
  }

  export type MetricCreateWithoutTestRunInput = {
    id?: string
    timestamp?: Date | string
    latency: number
    throughput: number
    statusCode: number
  }

  export type MetricUncheckedCreateWithoutTestRunInput = {
    id?: string
    timestamp?: Date | string
    latency: number
    throughput: number
    statusCode: number
  }

  export type MetricCreateOrConnectWithoutTestRunInput = {
    where: MetricWhereUniqueInput
    create: XOR<MetricCreateWithoutTestRunInput, MetricUncheckedCreateWithoutTestRunInput>
  }

  export type MetricCreateManyTestRunInputEnvelope = {
    data: MetricCreateManyTestRunInput | MetricCreateManyTestRunInput[]
    skipDuplicates?: boolean
  }

  export type TestConfigCreateWithoutTestRunInput = {
    id?: string
    testDuration: number
    requestRate: number
    concurrencyLevel: number
    headers: JsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TestConfigUncheckedCreateWithoutTestRunInput = {
    id?: string
    testDuration: number
    requestRate: number
    concurrencyLevel: number
    headers: JsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TestConfigCreateOrConnectWithoutTestRunInput = {
    where: TestConfigWhereUniqueInput
    create: XOR<TestConfigCreateWithoutTestRunInput, TestConfigUncheckedCreateWithoutTestRunInput>
  }

  export type TestResultCreateWithoutTestRunInput = {
    id?: string
    avgLatency: number
    avgThroughput: number
    totalRequests: number
    successRate: number
    errorRate: number
    createdAt?: Date | string
  }

  export type TestResultUncheckedCreateWithoutTestRunInput = {
    id?: string
    avgLatency: number
    avgThroughput: number
    totalRequests: number
    successRate: number
    errorRate: number
    createdAt?: Date | string
  }

  export type TestResultCreateOrConnectWithoutTestRunInput = {
    where: TestResultWhereUniqueInput
    create: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput>
  }

  export type TestHistoryCreateWithoutTestRunInput = {
    id?: string
    testName: string
    url: string
    method: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTestHistoriesInput
  }

  export type TestHistoryUncheckedCreateWithoutTestRunInput = {
    id?: string
    userId: string
    testName: string
    url: string
    method: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
  }

  export type TestHistoryCreateOrConnectWithoutTestRunInput = {
    where: TestHistoryWhereUniqueInput
    create: XOR<TestHistoryCreateWithoutTestRunInput, TestHistoryUncheckedCreateWithoutTestRunInput>
  }

  export type TestHistoryCreateManyTestRunInputEnvelope = {
    data: TestHistoryCreateManyTestRunInput | TestHistoryCreateManyTestRunInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTestRunsInput = {
    update: XOR<UserUpdateWithoutTestRunsInput, UserUncheckedUpdateWithoutTestRunsInput>
    create: XOR<UserCreateWithoutTestRunsInput, UserUncheckedCreateWithoutTestRunsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestRunsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestRunsInput, UserUncheckedUpdateWithoutTestRunsInput>
  }

  export type UserUpdateWithoutTestRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testHistories?: TestHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTestRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testHistories?: TestHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MetricUpsertWithWhereUniqueWithoutTestRunInput = {
    where: MetricWhereUniqueInput
    update: XOR<MetricUpdateWithoutTestRunInput, MetricUncheckedUpdateWithoutTestRunInput>
    create: XOR<MetricCreateWithoutTestRunInput, MetricUncheckedCreateWithoutTestRunInput>
  }

  export type MetricUpdateWithWhereUniqueWithoutTestRunInput = {
    where: MetricWhereUniqueInput
    data: XOR<MetricUpdateWithoutTestRunInput, MetricUncheckedUpdateWithoutTestRunInput>
  }

  export type MetricUpdateManyWithWhereWithoutTestRunInput = {
    where: MetricScalarWhereInput
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyWithoutTestRunInput>
  }

  export type MetricScalarWhereInput = {
    AND?: MetricScalarWhereInput | MetricScalarWhereInput[]
    OR?: MetricScalarWhereInput[]
    NOT?: MetricScalarWhereInput | MetricScalarWhereInput[]
    id?: UuidFilter<"Metric"> | string
    testRunId?: UuidFilter<"Metric"> | string
    timestamp?: DateTimeFilter<"Metric"> | Date | string
    latency?: FloatFilter<"Metric"> | number
    throughput?: FloatFilter<"Metric"> | number
    statusCode?: IntFilter<"Metric"> | number
  }

  export type TestConfigUpsertWithoutTestRunInput = {
    update: XOR<TestConfigUpdateWithoutTestRunInput, TestConfigUncheckedUpdateWithoutTestRunInput>
    create: XOR<TestConfigCreateWithoutTestRunInput, TestConfigUncheckedCreateWithoutTestRunInput>
    where?: TestConfigWhereInput
  }

  export type TestConfigUpdateToOneWithWhereWithoutTestRunInput = {
    where?: TestConfigWhereInput
    data: XOR<TestConfigUpdateWithoutTestRunInput, TestConfigUncheckedUpdateWithoutTestRunInput>
  }

  export type TestConfigUpdateWithoutTestRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    testDuration?: IntFieldUpdateOperationsInput | number
    requestRate?: IntFieldUpdateOperationsInput | number
    concurrencyLevel?: IntFieldUpdateOperationsInput | number
    headers?: JsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TestConfigUncheckedUpdateWithoutTestRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    testDuration?: IntFieldUpdateOperationsInput | number
    requestRate?: IntFieldUpdateOperationsInput | number
    concurrencyLevel?: IntFieldUpdateOperationsInput | number
    headers?: JsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TestResultUpsertWithoutTestRunInput = {
    update: XOR<TestResultUpdateWithoutTestRunInput, TestResultUncheckedUpdateWithoutTestRunInput>
    create: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput>
    where?: TestResultWhereInput
  }

  export type TestResultUpdateToOneWithWhereWithoutTestRunInput = {
    where?: TestResultWhereInput
    data: XOR<TestResultUpdateWithoutTestRunInput, TestResultUncheckedUpdateWithoutTestRunInput>
  }

  export type TestResultUpdateWithoutTestRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    avgLatency?: FloatFieldUpdateOperationsInput | number
    avgThroughput?: FloatFieldUpdateOperationsInput | number
    totalRequests?: IntFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestResultUncheckedUpdateWithoutTestRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    avgLatency?: FloatFieldUpdateOperationsInput | number
    avgThroughput?: FloatFieldUpdateOperationsInput | number
    totalRequests?: IntFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestHistoryUpsertWithWhereUniqueWithoutTestRunInput = {
    where: TestHistoryWhereUniqueInput
    update: XOR<TestHistoryUpdateWithoutTestRunInput, TestHistoryUncheckedUpdateWithoutTestRunInput>
    create: XOR<TestHistoryCreateWithoutTestRunInput, TestHistoryUncheckedCreateWithoutTestRunInput>
  }

  export type TestHistoryUpdateWithWhereUniqueWithoutTestRunInput = {
    where: TestHistoryWhereUniqueInput
    data: XOR<TestHistoryUpdateWithoutTestRunInput, TestHistoryUncheckedUpdateWithoutTestRunInput>
  }

  export type TestHistoryUpdateManyWithWhereWithoutTestRunInput = {
    where: TestHistoryScalarWhereInput
    data: XOR<TestHistoryUpdateManyMutationInput, TestHistoryUncheckedUpdateManyWithoutTestRunInput>
  }

  export type TestRunCreateWithoutMetricsInput = {
    id?: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTestRunsInput
    testConfig?: TestConfigCreateNestedOneWithoutTestRunInput
    testResult?: TestResultCreateNestedOneWithoutTestRunInput
    testHistories?: TestHistoryCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUncheckedCreateWithoutMetricsInput = {
    id?: string
    userId: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    testConfig?: TestConfigUncheckedCreateNestedOneWithoutTestRunInput
    testResult?: TestResultUncheckedCreateNestedOneWithoutTestRunInput
    testHistories?: TestHistoryUncheckedCreateNestedManyWithoutTestRunInput
  }

  export type TestRunCreateOrConnectWithoutMetricsInput = {
    where: TestRunWhereUniqueInput
    create: XOR<TestRunCreateWithoutMetricsInput, TestRunUncheckedCreateWithoutMetricsInput>
  }

  export type TestRunUpsertWithoutMetricsInput = {
    update: XOR<TestRunUpdateWithoutMetricsInput, TestRunUncheckedUpdateWithoutMetricsInput>
    create: XOR<TestRunCreateWithoutMetricsInput, TestRunUncheckedCreateWithoutMetricsInput>
    where?: TestRunWhereInput
  }

  export type TestRunUpdateToOneWithWhereWithoutMetricsInput = {
    where?: TestRunWhereInput
    data: XOR<TestRunUpdateWithoutMetricsInput, TestRunUncheckedUpdateWithoutMetricsInput>
  }

  export type TestRunUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestRunsNestedInput
    testConfig?: TestConfigUpdateOneWithoutTestRunNestedInput
    testResult?: TestResultUpdateOneWithoutTestRunNestedInput
    testHistories?: TestHistoryUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testConfig?: TestConfigUncheckedUpdateOneWithoutTestRunNestedInput
    testResult?: TestResultUncheckedUpdateOneWithoutTestRunNestedInput
    testHistories?: TestHistoryUncheckedUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunCreateWithoutTestConfigInput = {
    id?: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTestRunsInput
    metrics?: MetricCreateNestedManyWithoutTestRunInput
    testResult?: TestResultCreateNestedOneWithoutTestRunInput
    testHistories?: TestHistoryCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUncheckedCreateWithoutTestConfigInput = {
    id?: string
    userId: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: MetricUncheckedCreateNestedManyWithoutTestRunInput
    testResult?: TestResultUncheckedCreateNestedOneWithoutTestRunInput
    testHistories?: TestHistoryUncheckedCreateNestedManyWithoutTestRunInput
  }

  export type TestRunCreateOrConnectWithoutTestConfigInput = {
    where: TestRunWhereUniqueInput
    create: XOR<TestRunCreateWithoutTestConfigInput, TestRunUncheckedCreateWithoutTestConfigInput>
  }

  export type TestRunUpsertWithoutTestConfigInput = {
    update: XOR<TestRunUpdateWithoutTestConfigInput, TestRunUncheckedUpdateWithoutTestConfigInput>
    create: XOR<TestRunCreateWithoutTestConfigInput, TestRunUncheckedCreateWithoutTestConfigInput>
    where?: TestRunWhereInput
  }

  export type TestRunUpdateToOneWithWhereWithoutTestConfigInput = {
    where?: TestRunWhereInput
    data: XOR<TestRunUpdateWithoutTestConfigInput, TestRunUncheckedUpdateWithoutTestConfigInput>
  }

  export type TestRunUpdateWithoutTestConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestRunsNestedInput
    metrics?: MetricUpdateManyWithoutTestRunNestedInput
    testResult?: TestResultUpdateOneWithoutTestRunNestedInput
    testHistories?: TestHistoryUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateWithoutTestConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: MetricUncheckedUpdateManyWithoutTestRunNestedInput
    testResult?: TestResultUncheckedUpdateOneWithoutTestRunNestedInput
    testHistories?: TestHistoryUncheckedUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunCreateWithoutTestResultInput = {
    id?: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTestRunsInput
    metrics?: MetricCreateNestedManyWithoutTestRunInput
    testConfig?: TestConfigCreateNestedOneWithoutTestRunInput
    testHistories?: TestHistoryCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUncheckedCreateWithoutTestResultInput = {
    id?: string
    userId: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: MetricUncheckedCreateNestedManyWithoutTestRunInput
    testConfig?: TestConfigUncheckedCreateNestedOneWithoutTestRunInput
    testHistories?: TestHistoryUncheckedCreateNestedManyWithoutTestRunInput
  }

  export type TestRunCreateOrConnectWithoutTestResultInput = {
    where: TestRunWhereUniqueInput
    create: XOR<TestRunCreateWithoutTestResultInput, TestRunUncheckedCreateWithoutTestResultInput>
  }

  export type TestRunUpsertWithoutTestResultInput = {
    update: XOR<TestRunUpdateWithoutTestResultInput, TestRunUncheckedUpdateWithoutTestResultInput>
    create: XOR<TestRunCreateWithoutTestResultInput, TestRunUncheckedCreateWithoutTestResultInput>
    where?: TestRunWhereInput
  }

  export type TestRunUpdateToOneWithWhereWithoutTestResultInput = {
    where?: TestRunWhereInput
    data: XOR<TestRunUpdateWithoutTestResultInput, TestRunUncheckedUpdateWithoutTestResultInput>
  }

  export type TestRunUpdateWithoutTestResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestRunsNestedInput
    metrics?: MetricUpdateManyWithoutTestRunNestedInput
    testConfig?: TestConfigUpdateOneWithoutTestRunNestedInput
    testHistories?: TestHistoryUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateWithoutTestResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: MetricUncheckedUpdateManyWithoutTestRunNestedInput
    testConfig?: TestConfigUncheckedUpdateOneWithoutTestRunNestedInput
    testHistories?: TestHistoryUncheckedUpdateManyWithoutTestRunNestedInput
  }

  export type UserCreateWithoutTestHistoriesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    testRuns?: TestRunCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTestHistoriesInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    testRuns?: TestRunUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTestHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestHistoriesInput, UserUncheckedCreateWithoutTestHistoriesInput>
  }

  export type TestRunCreateWithoutTestHistoriesInput = {
    id?: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTestRunsInput
    metrics?: MetricCreateNestedManyWithoutTestRunInput
    testConfig?: TestConfigCreateNestedOneWithoutTestRunInput
    testResult?: TestResultCreateNestedOneWithoutTestRunInput
  }

  export type TestRunUncheckedCreateWithoutTestHistoriesInput = {
    id?: string
    userId: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: MetricUncheckedCreateNestedManyWithoutTestRunInput
    testConfig?: TestConfigUncheckedCreateNestedOneWithoutTestRunInput
    testResult?: TestResultUncheckedCreateNestedOneWithoutTestRunInput
  }

  export type TestRunCreateOrConnectWithoutTestHistoriesInput = {
    where: TestRunWhereUniqueInput
    create: XOR<TestRunCreateWithoutTestHistoriesInput, TestRunUncheckedCreateWithoutTestHistoriesInput>
  }

  export type UserUpsertWithoutTestHistoriesInput = {
    update: XOR<UserUpdateWithoutTestHistoriesInput, UserUncheckedUpdateWithoutTestHistoriesInput>
    create: XOR<UserCreateWithoutTestHistoriesInput, UserUncheckedCreateWithoutTestHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestHistoriesInput, UserUncheckedUpdateWithoutTestHistoriesInput>
  }

  export type UserUpdateWithoutTestHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRuns?: TestRunUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTestHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRuns?: TestRunUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TestRunUpsertWithoutTestHistoriesInput = {
    update: XOR<TestRunUpdateWithoutTestHistoriesInput, TestRunUncheckedUpdateWithoutTestHistoriesInput>
    create: XOR<TestRunCreateWithoutTestHistoriesInput, TestRunUncheckedCreateWithoutTestHistoriesInput>
    where?: TestRunWhereInput
  }

  export type TestRunUpdateToOneWithWhereWithoutTestHistoriesInput = {
    where?: TestRunWhereInput
    data: XOR<TestRunUpdateWithoutTestHistoriesInput, TestRunUncheckedUpdateWithoutTestHistoriesInput>
  }

  export type TestRunUpdateWithoutTestHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestRunsNestedInput
    metrics?: MetricUpdateManyWithoutTestRunNestedInput
    testConfig?: TestConfigUpdateOneWithoutTestRunNestedInput
    testResult?: TestResultUpdateOneWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateWithoutTestHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: MetricUncheckedUpdateManyWithoutTestRunNestedInput
    testConfig?: TestConfigUncheckedUpdateOneWithoutTestRunNestedInput
    testResult?: TestResultUncheckedUpdateOneWithoutTestRunNestedInput
  }

  export type TestRunCreateManyUserInput = {
    id?: string
    testName: string
    url: string
    method: string
    status: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestHistoryCreateManyUserInput = {
    id?: string
    testRunId: string
    testName: string
    url: string
    method: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
  }

  export type TestRunUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: MetricUpdateManyWithoutTestRunNestedInput
    testConfig?: TestConfigUpdateOneWithoutTestRunNestedInput
    testResult?: TestResultUpdateOneWithoutTestRunNestedInput
    testHistories?: TestHistoryUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: MetricUncheckedUpdateManyWithoutTestRunNestedInput
    testConfig?: TestConfigUncheckedUpdateOneWithoutTestRunNestedInput
    testResult?: TestResultUncheckedUpdateOneWithoutTestRunNestedInput
    testHistories?: TestHistoryUncheckedUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRun?: TestRunUpdateOneRequiredWithoutTestHistoriesNestedInput
  }

  export type TestHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    testRunId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    testRunId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricCreateManyTestRunInput = {
    id?: string
    timestamp?: Date | string
    latency: number
    throughput: number
    statusCode: number
  }

  export type TestHistoryCreateManyTestRunInput = {
    id?: string
    userId: string
    testName: string
    url: string
    method: string
    requestCount: number
    duration: number
    errorRate: number
    avgResponseTime: number
    maxResponseTime: number
    createdAt?: Date | string
  }

  export type MetricUpdateWithoutTestRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latency?: FloatFieldUpdateOperationsInput | number
    throughput?: FloatFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
  }

  export type MetricUncheckedUpdateWithoutTestRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latency?: FloatFieldUpdateOperationsInput | number
    throughput?: FloatFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
  }

  export type MetricUncheckedUpdateManyWithoutTestRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    latency?: FloatFieldUpdateOperationsInput | number
    throughput?: FloatFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
  }

  export type TestHistoryUpdateWithoutTestRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestHistoriesNestedInput
  }

  export type TestHistoryUncheckedUpdateWithoutTestRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestHistoryUncheckedUpdateManyWithoutTestRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requestCount?: IntFieldUpdateOperationsInput | number
    duration?: FloatFieldUpdateOperationsInput | number
    errorRate?: FloatFieldUpdateOperationsInput | number
    avgResponseTime?: FloatFieldUpdateOperationsInput | number
    maxResponseTime?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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