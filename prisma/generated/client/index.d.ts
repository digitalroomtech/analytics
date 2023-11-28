/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Analytics
 *
 */
export type Analytics = $Result.DefaultSelection<Prisma.$AnalyticsPayload>;
/**
 * Model Tenants
 *
 */
export type Tenants = $Result.DefaultSelection<Prisma.$TenantsPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Analytics
 * const analytics = await prisma.analytics.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Analytics
   * const analytics = await prisma.analytics.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.analytics`: Exposes CRUD operations for the **Analytics** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Analytics
   * const analytics = await prisma.analytics.findMany()
   * ```
   */
  get analytics(): Prisma.AnalyticsDelegate<ExtArgs>;

  /**
   * `prisma.tenants`: Exposes CRUD operations for the **Tenants** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenants.findMany()
   * ```
   */
  get tenants(): Prisma.TenantsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray
    | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

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
            : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I,
  ) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Analytics: 'Analytics';
    Tenants: 'Tenants';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'analytics' | 'tenants';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Analytics: {
        payload: Prisma.$AnalyticsPayload<ExtArgs>;
        fields: Prisma.AnalyticsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AnalyticsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AnalyticsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
          };
          findFirst: {
            args: Prisma.AnalyticsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AnalyticsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
          };
          findMany: {
            args: Prisma.AnalyticsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[];
          };
          create: {
            args: Prisma.AnalyticsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
          };
          createMany: {
            args: Prisma.AnalyticsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.AnalyticsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
          };
          update: {
            args: Prisma.AnalyticsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
          };
          deleteMany: {
            args: Prisma.AnalyticsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.AnalyticsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.AnalyticsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
          };
          aggregate: {
            args: Prisma.AnalyticsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAnalytics>;
          };
          groupBy: {
            args: Prisma.AnalyticsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AnalyticsGroupByOutputType>[];
          };
          count: {
            args: Prisma.AnalyticsCountArgs<ExtArgs>;
            result: $Utils.Optional<AnalyticsCountAggregateOutputType> | number;
          };
        };
      };
      Tenants: {
        payload: Prisma.$TenantsPayload<ExtArgs>;
        fields: Prisma.TenantsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TenantsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TenantsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>;
          };
          findFirst: {
            args: Prisma.TenantsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TenantsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>;
          };
          findMany: {
            args: Prisma.TenantsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>[];
          };
          create: {
            args: Prisma.TenantsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>;
          };
          createMany: {
            args: Prisma.TenantsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.TenantsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>;
          };
          update: {
            args: Prisma.TenantsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>;
          };
          deleteMany: {
            args: Prisma.TenantsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.TenantsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.TenantsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TenantsPayload>;
          };
          aggregate: {
            args: Prisma.TenantsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTenants>;
          };
          groupBy: {
            args: Prisma.TenantsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TenantsGroupByOutputType>[];
          };
          count: {
            args: Prisma.TenantsCountArgs<ExtArgs>;
            result: $Utils.Optional<TenantsCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type TenantsCountOutputType
   */

  export type TenantsCountOutputType = {
    analytics: number;
  };

  export type TenantsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    analytics?: boolean | TenantsCountOutputTypeCountAnalyticsArgs;
  };

  // Custom InputTypes

  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TenantsCountOutputType
     */
    select?: TenantsCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeCountAnalyticsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnalyticsWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Analytics
   */

  export type AggregateAnalytics = {
    _count: AnalyticsCountAggregateOutputType | null;
    _avg: AnalyticsAvgAggregateOutputType | null;
    _sum: AnalyticsSumAggregateOutputType | null;
    _min: AnalyticsMinAggregateOutputType | null;
    _max: AnalyticsMaxAggregateOutputType | null;
  };

  export type AnalyticsAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    tenant_id: number | null;
  };

  export type AnalyticsSumAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    tenant_id: number | null;
  };

  export type AnalyticsMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    uuid: string | null;
    url: string | null;
    user_id: number | null;
    tenant_id: number | null;
  };

  export type AnalyticsMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    uuid: string | null;
    url: string | null;
    user_id: number | null;
    tenant_id: number | null;
  };

  export type AnalyticsCountAggregateOutputType = {
    id: number;
    name: number;
    uuid: number;
    url: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type AnalyticsAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type AnalyticsSumAggregateInputType = {
    id?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type AnalyticsMinAggregateInputType = {
    id?: true;
    name?: true;
    uuid?: true;
    url?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type AnalyticsMaxAggregateInputType = {
    id?: true;
    name?: true;
    uuid?: true;
    url?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type AnalyticsCountAggregateInputType = {
    id?: true;
    name?: true;
    uuid?: true;
    url?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type AnalyticsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Analytics to aggregate.
     */
    where?: AnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Analytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Analytics
     **/
    _count?: true | AnalyticsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AnalyticsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AnalyticsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AnalyticsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AnalyticsMaxAggregateInputType;
  };

  export type GetAnalyticsAggregateType<T extends AnalyticsAggregateArgs> = {
    [P in keyof T & keyof AggregateAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalytics[P]>
      : GetScalarType<T[P], AggregateAnalytics[P]>;
  };

  export type AnalyticsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AnalyticsWhereInput;
    orderBy?: AnalyticsOrderByWithAggregationInput | AnalyticsOrderByWithAggregationInput[];
    by: AnalyticsScalarFieldEnum[] | AnalyticsScalarFieldEnum;
    having?: AnalyticsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnalyticsCountAggregateInputType | true;
    _avg?: AnalyticsAvgAggregateInputType;
    _sum?: AnalyticsSumAggregateInputType;
    _min?: AnalyticsMinAggregateInputType;
    _max?: AnalyticsMaxAggregateInputType;
  };

  export type AnalyticsGroupByOutputType = {
    id: number;
    name: string;
    uuid: string;
    url: string | null;
    user_id: number | null;
    tenant_id: number | null;
    _count: AnalyticsCountAggregateOutputType | null;
    _avg: AnalyticsAvgAggregateOutputType | null;
    _sum: AnalyticsSumAggregateOutputType | null;
    _min: AnalyticsMinAggregateOutputType | null;
    _max: AnalyticsMaxAggregateOutputType | null;
  };

  type GetAnalyticsGroupByPayload<T extends AnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AnalyticsGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
          : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>;
      }
    >
  >;

  export type AnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        uuid?: boolean;
        url?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        tenant?: boolean | Analytics$tenantArgs<ExtArgs>;
      },
      ExtArgs['result']['analytics']
    >;

  export type AnalyticsSelectScalar = {
    id?: boolean;
    name?: boolean;
    uuid?: boolean;
    url?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type AnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      tenant?: boolean | Analytics$tenantArgs<ExtArgs>;
    };

  export type $AnalyticsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Analytics';
    objects: {
      tenant: Prisma.$TenantsPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        uuid: string;
        url: string | null;
        user_id: number | null;
        tenant_id: number | null;
      },
      ExtArgs['result']['analytics']
    >;
    composites: {};
  };

  type AnalyticsGetPayload<S extends boolean | null | undefined | AnalyticsDefaultArgs> =
    $Result.GetResult<Prisma.$AnalyticsPayload, S>;

  type AnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnalyticsCountAggregateInputType | true;
    };

  export interface AnalyticsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Analytics'];
      meta: { name: 'Analytics' };
    };
    /**
     * Find zero or one Analytics that matches the filter.
     * @param {AnalyticsFindUniqueArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends AnalyticsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AnalyticsFindUniqueArgs<ExtArgs>>,
    ): Prisma__AnalyticsClient<
      $Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Analytics that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {AnalyticsFindUniqueOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends AnalyticsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnalyticsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AnalyticsClient<
      $Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends AnalyticsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AnalyticsFindFirstArgs<ExtArgs>>,
    ): Prisma__AnalyticsClient<
      $Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends AnalyticsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnalyticsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AnalyticsClient<
      $Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analytics
     * const analytics = await prisma.analytics.findMany()
     *
     * // Get first 10 Analytics
     * const analytics = await prisma.analytics.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const analyticsWithIdOnly = await prisma.analytics.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends AnalyticsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnalyticsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Analytics.
     * @param {AnalyticsCreateArgs} args - Arguments to create a Analytics.
     * @example
     * // Create one Analytics
     * const Analytics = await prisma.analytics.create({
     *   data: {
     *     // ... data to create a Analytics
     *   }
     * })
     *
     **/
    create<T extends AnalyticsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnalyticsCreateArgs<ExtArgs>>,
    ): Prisma__AnalyticsClient<
      $Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Analytics.
     *     @param {AnalyticsCreateManyArgs} args - Arguments to create many Analytics.
     *     @example
     *     // Create many Analytics
     *     const analytics = await prisma.analytics.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends AnalyticsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnalyticsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Analytics.
     * @param {AnalyticsDeleteArgs} args - Arguments to delete one Analytics.
     * @example
     * // Delete one Analytics
     * const Analytics = await prisma.analytics.delete({
     *   where: {
     *     // ... filter to delete one Analytics
     *   }
     * })
     *
     **/
    delete<T extends AnalyticsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnalyticsDeleteArgs<ExtArgs>>,
    ): Prisma__AnalyticsClient<
      $Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Analytics.
     * @param {AnalyticsUpdateArgs} args - Arguments to update one Analytics.
     * @example
     * // Update one Analytics
     * const analytics = await prisma.analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends AnalyticsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnalyticsUpdateArgs<ExtArgs>>,
    ): Prisma__AnalyticsClient<
      $Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Analytics.
     * @param {AnalyticsDeleteManyArgs} args - Arguments to filter Analytics to delete.
     * @example
     * // Delete a few Analytics
     * const { count } = await prisma.analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends AnalyticsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnalyticsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends AnalyticsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnalyticsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Analytics.
     * @param {AnalyticsUpsertArgs} args - Arguments to update or create a Analytics.
     * @example
     * // Update or create a Analytics
     * const analytics = await prisma.analytics.upsert({
     *   create: {
     *     // ... data to create a Analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analytics we want to update
     *   }
     * })
     **/
    upsert<T extends AnalyticsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnalyticsUpsertArgs<ExtArgs>>,
    ): Prisma__AnalyticsClient<
      $Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsCountArgs} args - Arguments to filter Analytics to count.
     * @example
     * // Count the number of Analytics
     * const count = await prisma.analytics.count({
     *   where: {
     *     // ... the filter for the Analytics we want to count
     *   }
     * })
     **/
    count<T extends AnalyticsCountArgs>(
      args?: Subset<T, AnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsAggregateArgs>(
      args: Subset<T, AnalyticsAggregateArgs>,
    ): Prisma.PrismaPromise<GetAnalyticsAggregateType<T>>;

    /**
     * Group by Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AnalyticsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Analytics model
     */
    readonly fields: AnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tenant<T extends Analytics$tenantArgs<ExtArgs> = {}>(
      args?: Subset<T, Analytics$tenantArgs<ExtArgs>>,
    ): Prisma__TenantsClient<
      $Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Analytics model
   */
  interface AnalyticsFieldRefs {
    readonly id: FieldRef<'Analytics', 'Int'>;
    readonly name: FieldRef<'Analytics', 'String'>;
    readonly uuid: FieldRef<'Analytics', 'String'>;
    readonly url: FieldRef<'Analytics', 'String'>;
    readonly user_id: FieldRef<'Analytics', 'Int'>;
    readonly tenant_id: FieldRef<'Analytics', 'Int'>;
  }

  // Custom InputTypes

  /**
   * Analytics findUnique
   */
  export type AnalyticsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnalyticsInclude<ExtArgs> | null;
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput;
  };

  /**
   * Analytics findUniqueOrThrow
   */
  export type AnalyticsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnalyticsInclude<ExtArgs> | null;
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput;
  };

  /**
   * Analytics findFirst
   */
  export type AnalyticsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnalyticsInclude<ExtArgs> | null;
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Analytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[];
  };

  /**
   * Analytics findFirstOrThrow
   */
  export type AnalyticsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnalyticsInclude<ExtArgs> | null;
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Analytics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[];
  };

  /**
   * Analytics findMany
   */
  export type AnalyticsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnalyticsInclude<ExtArgs> | null;
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Analytics.
     */
    skip?: number;
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[];
  };

  /**
   * Analytics create
   */
  export type AnalyticsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnalyticsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Analytics.
     */
    data: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>;
  };

  /**
   * Analytics createMany
   */
  export type AnalyticsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Analytics update
   */
  export type AnalyticsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnalyticsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Analytics.
     */
    data: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>;
    /**
     * Choose, which Analytics to update.
     */
    where: AnalyticsWhereUniqueInput;
  };

  /**
   * Analytics updateMany
   */
  export type AnalyticsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>;
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput;
  };

  /**
   * Analytics upsert
   */
  export type AnalyticsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnalyticsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Analytics to update in case it exists.
     */
    where: AnalyticsWhereUniqueInput;
    /**
     * In case the Analytics found by the `where` argument doesn't exist, create a new Analytics with this data.
     */
    create: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>;
    /**
     * In case the Analytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>;
  };

  /**
   * Analytics delete
   */
  export type AnalyticsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnalyticsInclude<ExtArgs> | null;
    /**
     * Filter which Analytics to delete.
     */
    where: AnalyticsWhereUniqueInput;
  };

  /**
   * Analytics deleteMany
   */
  export type AnalyticsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Analytics to delete
     */
    where?: AnalyticsWhereInput;
  };

  /**
   * Analytics.tenant
   */
  export type Analytics$tenantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantsInclude<ExtArgs> | null;
    where?: TenantsWhereInput;
  };

  /**
   * Analytics without action
   */
  export type AnalyticsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnalyticsInclude<ExtArgs> | null;
  };

  /**
   * Model Tenants
   */

  export type AggregateTenants = {
    _count: TenantsCountAggregateOutputType | null;
    _avg: TenantsAvgAggregateOutputType | null;
    _sum: TenantsSumAggregateOutputType | null;
    _min: TenantsMinAggregateOutputType | null;
    _max: TenantsMaxAggregateOutputType | null;
  };

  export type TenantsAvgAggregateOutputType = {
    id: number | null;
  };

  export type TenantsSumAggregateOutputType = {
    id: number | null;
  };

  export type TenantsMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    domain: string | null;
  };

  export type TenantsMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    domain: string | null;
  };

  export type TenantsCountAggregateOutputType = {
    id: number;
    name: number;
    domain: number;
    _all: number;
  };

  export type TenantsAvgAggregateInputType = {
    id?: true;
  };

  export type TenantsSumAggregateInputType = {
    id?: true;
  };

  export type TenantsMinAggregateInputType = {
    id?: true;
    name?: true;
    domain?: true;
  };

  export type TenantsMaxAggregateInputType = {
    id?: true;
    name?: true;
    domain?: true;
  };

  export type TenantsCountAggregateInputType = {
    id?: true;
    name?: true;
    domain?: true;
    _all?: true;
  };

  export type TenantsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tenants to aggregate.
     */
    where?: TenantsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantsOrderByWithRelationInput | TenantsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TenantsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tenants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tenants
     **/
    _count?: true | TenantsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TenantsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TenantsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TenantsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TenantsMaxAggregateInputType;
  };

  export type GetTenantsAggregateType<T extends TenantsAggregateArgs> = {
    [P in keyof T & keyof AggregateTenants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenants[P]>
      : GetScalarType<T[P], AggregateTenants[P]>;
  };

  export type TenantsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TenantsWhereInput;
    orderBy?: TenantsOrderByWithAggregationInput | TenantsOrderByWithAggregationInput[];
    by: TenantsScalarFieldEnum[] | TenantsScalarFieldEnum;
    having?: TenantsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TenantsCountAggregateInputType | true;
    _avg?: TenantsAvgAggregateInputType;
    _sum?: TenantsSumAggregateInputType;
    _min?: TenantsMinAggregateInputType;
    _max?: TenantsMaxAggregateInputType;
  };

  export type TenantsGroupByOutputType = {
    id: number;
    name: string;
    domain: string;
    _count: TenantsCountAggregateOutputType | null;
    _avg: TenantsAvgAggregateOutputType | null;
    _sum: TenantsSumAggregateOutputType | null;
    _min: TenantsMinAggregateOutputType | null;
    _max: TenantsMaxAggregateOutputType | null;
  };

  type GetTenantsGroupByPayload<T extends TenantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantsGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TenantsGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TenantsGroupByOutputType[P]>
          : GetScalarType<T[P], TenantsGroupByOutputType[P]>;
      }
    >
  >;

  export type TenantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        domain?: boolean;
        analytics?: boolean | Tenants$analyticsArgs<ExtArgs>;
        _count?: boolean | TenantsCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['tenants']
    >;

  export type TenantsSelectScalar = {
    id?: boolean;
    name?: boolean;
    domain?: boolean;
  };

  export type TenantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analytics?: boolean | Tenants$analyticsArgs<ExtArgs>;
    _count?: boolean | TenantsCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $TenantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Tenants';
      objects: {
        analytics: Prisma.$AnalyticsPayload<ExtArgs>[];
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: number;
          name: string;
          domain: string;
        },
        ExtArgs['result']['tenants']
      >;
      composites: {};
    };

  type TenantsGetPayload<S extends boolean | null | undefined | TenantsDefaultArgs> =
    $Result.GetResult<Prisma.$TenantsPayload, S>;

  type TenantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    TenantsFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TenantsCountAggregateInputType | true;
  };

  export interface TenantsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenants']; meta: { name: 'Tenants' } };
    /**
     * Find zero or one Tenants that matches the filter.
     * @param {TenantsFindUniqueArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends TenantsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TenantsFindUniqueArgs<ExtArgs>>,
    ): Prisma__TenantsClient<
      $Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Tenants that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {TenantsFindUniqueOrThrowArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends TenantsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TenantsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TenantsClient<
      $Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsFindFirstArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends TenantsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TenantsFindFirstArgs<ExtArgs>>,
    ): Prisma__TenantsClient<
      $Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Tenants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsFindFirstOrThrowArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends TenantsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TenantsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TenantsClient<
      $Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenants.findMany()
     *
     * // Get first 10 Tenants
     * const tenants = await prisma.tenants.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tenantsWithIdOnly = await prisma.tenants.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends TenantsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TenantsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Tenants.
     * @param {TenantsCreateArgs} args - Arguments to create a Tenants.
     * @example
     * // Create one Tenants
     * const Tenants = await prisma.tenants.create({
     *   data: {
     *     // ... data to create a Tenants
     *   }
     * })
     *
     **/
    create<T extends TenantsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TenantsCreateArgs<ExtArgs>>,
    ): Prisma__TenantsClient<
      $Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Tenants.
     *     @param {TenantsCreateManyArgs} args - Arguments to create many Tenants.
     *     @example
     *     // Create many Tenants
     *     const tenants = await prisma.tenants.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends TenantsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TenantsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Tenants.
     * @param {TenantsDeleteArgs} args - Arguments to delete one Tenants.
     * @example
     * // Delete one Tenants
     * const Tenants = await prisma.tenants.delete({
     *   where: {
     *     // ... filter to delete one Tenants
     *   }
     * })
     *
     **/
    delete<T extends TenantsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TenantsDeleteArgs<ExtArgs>>,
    ): Prisma__TenantsClient<
      $Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Tenants.
     * @param {TenantsUpdateArgs} args - Arguments to update one Tenants.
     * @example
     * // Update one Tenants
     * const tenants = await prisma.tenants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends TenantsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TenantsUpdateArgs<ExtArgs>>,
    ): Prisma__TenantsClient<
      $Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Tenants.
     * @param {TenantsDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends TenantsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TenantsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenants = await prisma.tenants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends TenantsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TenantsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Tenants.
     * @param {TenantsUpsertArgs} args - Arguments to update or create a Tenants.
     * @example
     * // Update or create a Tenants
     * const tenants = await prisma.tenants.upsert({
     *   create: {
     *     // ... data to create a Tenants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenants we want to update
     *   }
     * })
     **/
    upsert<T extends TenantsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TenantsUpsertArgs<ExtArgs>>,
    ): Prisma__TenantsClient<
      $Result.GetResult<Prisma.$TenantsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenants.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
     **/
    count<T extends TenantsCountArgs>(
      args?: Subset<T, TenantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantsAggregateArgs>(
      args: Subset<T, TenantsAggregateArgs>,
    ): Prisma.PrismaPromise<GetTenantsAggregateType<T>>;

    /**
     * Group by Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsGroupByArgs} args - Group by arguments.
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
      T extends TenantsGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantsGroupByArgs['orderBy'] }
        : { orderBy?: TenantsGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TenantsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTenantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Tenants model
     */
    readonly fields: TenantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    analytics<T extends Tenants$analyticsArgs<ExtArgs> = {}>(
      args?: Subset<T, Tenants$analyticsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Tenants model
   */
  interface TenantsFieldRefs {
    readonly id: FieldRef<'Tenants', 'Int'>;
    readonly name: FieldRef<'Tenants', 'String'>;
    readonly domain: FieldRef<'Tenants', 'String'>;
  }

  // Custom InputTypes

  /**
   * Tenants findUnique
   */
  export type TenantsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantsInclude<ExtArgs> | null;
    /**
     * Filter, which Tenants to fetch.
     */
    where: TenantsWhereUniqueInput;
  };

  /**
   * Tenants findUniqueOrThrow
   */
  export type TenantsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantsInclude<ExtArgs> | null;
    /**
     * Filter, which Tenants to fetch.
     */
    where: TenantsWhereUniqueInput;
  };

  /**
   * Tenants findFirst
   */
  export type TenantsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantsInclude<ExtArgs> | null;
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantsOrderByWithRelationInput | TenantsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tenants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[];
  };

  /**
   * Tenants findFirstOrThrow
   */
  export type TenantsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantsInclude<ExtArgs> | null;
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantsOrderByWithRelationInput | TenantsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tenants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[];
  };

  /**
   * Tenants findMany
   */
  export type TenantsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantsInclude<ExtArgs> | null;
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantsOrderByWithRelationInput | TenantsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tenants.
     */
    cursor?: TenantsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tenants.
     */
    skip?: number;
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[];
  };

  /**
   * Tenants create
   */
  export type TenantsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Tenants.
     */
    data: XOR<TenantsCreateInput, TenantsUncheckedCreateInput>;
  };

  /**
   * Tenants createMany
   */
  export type TenantsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantsCreateManyInput | TenantsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Tenants update
   */
  export type TenantsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Tenants.
     */
    data: XOR<TenantsUpdateInput, TenantsUncheckedUpdateInput>;
    /**
     * Choose, which Tenants to update.
     */
    where: TenantsWhereUniqueInput;
  };

  /**
   * Tenants updateMany
   */
  export type TenantsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantsUpdateManyMutationInput, TenantsUncheckedUpdateManyInput>;
    /**
     * Filter which Tenants to update
     */
    where?: TenantsWhereInput;
  };

  /**
   * Tenants upsert
   */
  export type TenantsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Tenants to update in case it exists.
     */
    where: TenantsWhereUniqueInput;
    /**
     * In case the Tenants found by the `where` argument doesn't exist, create a new Tenants with this data.
     */
    create: XOR<TenantsCreateInput, TenantsUncheckedCreateInput>;
    /**
     * In case the Tenants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantsUpdateInput, TenantsUncheckedUpdateInput>;
  };

  /**
   * Tenants delete
   */
  export type TenantsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantsInclude<ExtArgs> | null;
    /**
     * Filter which Tenants to delete.
     */
    where: TenantsWhereUniqueInput;
  };

  /**
   * Tenants deleteMany
   */
  export type TenantsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantsWhereInput;
  };

  /**
   * Tenants.analytics
   */
  export type Tenants$analyticsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnalyticsInclude<ExtArgs> | null;
    where?: AnalyticsWhereInput;
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[];
    cursor?: AnalyticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[];
  };

  /**
   * Tenants without action
   */
  export type TenantsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tenants
     */
    select?: TenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TenantsInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AnalyticsScalarFieldEnum: {
    id: 'id';
    name: 'name';
    uuid: 'uuid';
    url: 'url';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type AnalyticsScalarFieldEnum =
    (typeof AnalyticsScalarFieldEnum)[keyof typeof AnalyticsScalarFieldEnum];

  export const TenantsScalarFieldEnum: {
    id: 'id';
    name: 'name';
    domain: 'domain';
  };

  export type TenantsScalarFieldEnum =
    (typeof TenantsScalarFieldEnum)[keyof typeof TenantsScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Deep Input Types
   */

  export type AnalyticsWhereInput = {
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[];
    OR?: AnalyticsWhereInput[];
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[];
    id?: IntFilter<'Analytics'> | number;
    name?: StringFilter<'Analytics'> | string;
    uuid?: StringFilter<'Analytics'> | string;
    url?: StringNullableFilter<'Analytics'> | string | null;
    user_id?: IntNullableFilter<'Analytics'> | number | null;
    tenant_id?: IntNullableFilter<'Analytics'> | number | null;
    tenant?: XOR<TenantsNullableRelationFilter, TenantsWhereInput> | null;
  };

  export type AnalyticsOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    uuid?: SortOrder;
    url?: SortOrderInput | SortOrder;
    user_id?: SortOrderInput | SortOrder;
    tenant_id?: SortOrderInput | SortOrder;
    tenant?: TenantsOrderByWithRelationInput;
  };

  export type AnalyticsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      uuid?: string;
      AND?: AnalyticsWhereInput | AnalyticsWhereInput[];
      OR?: AnalyticsWhereInput[];
      NOT?: AnalyticsWhereInput | AnalyticsWhereInput[];
      name?: StringFilter<'Analytics'> | string;
      url?: StringNullableFilter<'Analytics'> | string | null;
      user_id?: IntNullableFilter<'Analytics'> | number | null;
      tenant_id?: IntNullableFilter<'Analytics'> | number | null;
      tenant?: XOR<TenantsNullableRelationFilter, TenantsWhereInput> | null;
    },
    'id' | 'uuid'
  >;

  export type AnalyticsOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    uuid?: SortOrder;
    url?: SortOrderInput | SortOrder;
    user_id?: SortOrderInput | SortOrder;
    tenant_id?: SortOrderInput | SortOrder;
    _count?: AnalyticsCountOrderByAggregateInput;
    _avg?: AnalyticsAvgOrderByAggregateInput;
    _max?: AnalyticsMaxOrderByAggregateInput;
    _min?: AnalyticsMinOrderByAggregateInput;
    _sum?: AnalyticsSumOrderByAggregateInput;
  };

  export type AnalyticsScalarWhereWithAggregatesInput = {
    AND?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[];
    OR?: AnalyticsScalarWhereWithAggregatesInput[];
    NOT?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Analytics'> | number;
    name?: StringWithAggregatesFilter<'Analytics'> | string;
    uuid?: StringWithAggregatesFilter<'Analytics'> | string;
    url?: StringNullableWithAggregatesFilter<'Analytics'> | string | null;
    user_id?: IntNullableWithAggregatesFilter<'Analytics'> | number | null;
    tenant_id?: IntNullableWithAggregatesFilter<'Analytics'> | number | null;
  };

  export type TenantsWhereInput = {
    AND?: TenantsWhereInput | TenantsWhereInput[];
    OR?: TenantsWhereInput[];
    NOT?: TenantsWhereInput | TenantsWhereInput[];
    id?: IntFilter<'Tenants'> | number;
    name?: StringFilter<'Tenants'> | string;
    domain?: StringFilter<'Tenants'> | string;
    analytics?: AnalyticsListRelationFilter;
  };

  export type TenantsOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    domain?: SortOrder;
    analytics?: AnalyticsOrderByRelationAggregateInput;
  };

  export type TenantsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      domain?: string;
      AND?: TenantsWhereInput | TenantsWhereInput[];
      OR?: TenantsWhereInput[];
      NOT?: TenantsWhereInput | TenantsWhereInput[];
      name?: StringFilter<'Tenants'> | string;
      analytics?: AnalyticsListRelationFilter;
    },
    'id' | 'domain'
  >;

  export type TenantsOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    domain?: SortOrder;
    _count?: TenantsCountOrderByAggregateInput;
    _avg?: TenantsAvgOrderByAggregateInput;
    _max?: TenantsMaxOrderByAggregateInput;
    _min?: TenantsMinOrderByAggregateInput;
    _sum?: TenantsSumOrderByAggregateInput;
  };

  export type TenantsScalarWhereWithAggregatesInput = {
    AND?: TenantsScalarWhereWithAggregatesInput | TenantsScalarWhereWithAggregatesInput[];
    OR?: TenantsScalarWhereWithAggregatesInput[];
    NOT?: TenantsScalarWhereWithAggregatesInput | TenantsScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Tenants'> | number;
    name?: StringWithAggregatesFilter<'Tenants'> | string;
    domain?: StringWithAggregatesFilter<'Tenants'> | string;
  };

  export type AnalyticsCreateInput = {
    name: string;
    uuid: string;
    url?: string | null;
    user_id?: number | null;
    tenant?: TenantsCreateNestedOneWithoutAnalyticsInput;
  };

  export type AnalyticsUncheckedCreateInput = {
    id?: number;
    name: string;
    uuid: string;
    url?: string | null;
    user_id?: number | null;
    tenant_id?: number | null;
  };

  export type AnalyticsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
    tenant?: TenantsUpdateOneWithoutAnalyticsNestedInput;
  };

  export type AnalyticsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
    tenant_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type AnalyticsCreateManyInput = {
    id?: number;
    name: string;
    uuid: string;
    url?: string | null;
    user_id?: number | null;
    tenant_id?: number | null;
  };

  export type AnalyticsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type AnalyticsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
    tenant_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type TenantsCreateInput = {
    name: string;
    domain: string;
    analytics?: AnalyticsCreateNestedManyWithoutTenantInput;
  };

  export type TenantsUncheckedCreateInput = {
    id?: number;
    name: string;
    domain: string;
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutTenantInput;
  };

  export type TenantsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    domain?: StringFieldUpdateOperationsInput | string;
    analytics?: AnalyticsUpdateManyWithoutTenantNestedInput;
  };

  export type TenantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    domain?: StringFieldUpdateOperationsInput | string;
    analytics?: AnalyticsUncheckedUpdateManyWithoutTenantNestedInput;
  };

  export type TenantsCreateManyInput = {
    id?: number;
    name: string;
    domain: string;
  };

  export type TenantsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    domain?: StringFieldUpdateOperationsInput | string;
  };

  export type TenantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    domain?: StringFieldUpdateOperationsInput | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type TenantsNullableRelationFilter = {
    is?: TenantsWhereInput | null;
    isNot?: TenantsWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type AnalyticsCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    uuid?: SortOrder;
    url?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type AnalyticsAvgOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type AnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    uuid?: SortOrder;
    url?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type AnalyticsMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    uuid?: SortOrder;
    url?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type AnalyticsSumOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type AnalyticsListRelationFilter = {
    every?: AnalyticsWhereInput;
    some?: AnalyticsWhereInput;
    none?: AnalyticsWhereInput;
  };

  export type AnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TenantsCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    domain?: SortOrder;
  };

  export type TenantsAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type TenantsMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    domain?: SortOrder;
  };

  export type TenantsMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    domain?: SortOrder;
  };

  export type TenantsSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type TenantsCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<TenantsCreateWithoutAnalyticsInput, TenantsUncheckedCreateWithoutAnalyticsInput>;
    connectOrCreate?: TenantsCreateOrConnectWithoutAnalyticsInput;
    connect?: TenantsWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type TenantsUpdateOneWithoutAnalyticsNestedInput = {
    create?: XOR<TenantsCreateWithoutAnalyticsInput, TenantsUncheckedCreateWithoutAnalyticsInput>;
    connectOrCreate?: TenantsCreateOrConnectWithoutAnalyticsInput;
    upsert?: TenantsUpsertWithoutAnalyticsInput;
    disconnect?: TenantsWhereInput | boolean;
    delete?: TenantsWhereInput | boolean;
    connect?: TenantsWhereUniqueInput;
    update?: XOR<
      XOR<TenantsUpdateToOneWithWhereWithoutAnalyticsInput, TenantsUpdateWithoutAnalyticsInput>,
      TenantsUncheckedUpdateWithoutAnalyticsInput
    >;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type AnalyticsCreateNestedManyWithoutTenantInput = {
    create?:
      | XOR<AnalyticsCreateWithoutTenantInput, AnalyticsUncheckedCreateWithoutTenantInput>
      | AnalyticsCreateWithoutTenantInput[]
      | AnalyticsUncheckedCreateWithoutTenantInput[];
    connectOrCreate?:
      | AnalyticsCreateOrConnectWithoutTenantInput
      | AnalyticsCreateOrConnectWithoutTenantInput[];
    createMany?: AnalyticsCreateManyTenantInputEnvelope;
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[];
  };

  export type AnalyticsUncheckedCreateNestedManyWithoutTenantInput = {
    create?:
      | XOR<AnalyticsCreateWithoutTenantInput, AnalyticsUncheckedCreateWithoutTenantInput>
      | AnalyticsCreateWithoutTenantInput[]
      | AnalyticsUncheckedCreateWithoutTenantInput[];
    connectOrCreate?:
      | AnalyticsCreateOrConnectWithoutTenantInput
      | AnalyticsCreateOrConnectWithoutTenantInput[];
    createMany?: AnalyticsCreateManyTenantInputEnvelope;
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[];
  };

  export type AnalyticsUpdateManyWithoutTenantNestedInput = {
    create?:
      | XOR<AnalyticsCreateWithoutTenantInput, AnalyticsUncheckedCreateWithoutTenantInput>
      | AnalyticsCreateWithoutTenantInput[]
      | AnalyticsUncheckedCreateWithoutTenantInput[];
    connectOrCreate?:
      | AnalyticsCreateOrConnectWithoutTenantInput
      | AnalyticsCreateOrConnectWithoutTenantInput[];
    upsert?:
      | AnalyticsUpsertWithWhereUniqueWithoutTenantInput
      | AnalyticsUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: AnalyticsCreateManyTenantInputEnvelope;
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[];
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[];
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[];
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[];
    update?:
      | AnalyticsUpdateWithWhereUniqueWithoutTenantInput
      | AnalyticsUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?:
      | AnalyticsUpdateManyWithWhereWithoutTenantInput
      | AnalyticsUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[];
  };

  export type AnalyticsUncheckedUpdateManyWithoutTenantNestedInput = {
    create?:
      | XOR<AnalyticsCreateWithoutTenantInput, AnalyticsUncheckedCreateWithoutTenantInput>
      | AnalyticsCreateWithoutTenantInput[]
      | AnalyticsUncheckedCreateWithoutTenantInput[];
    connectOrCreate?:
      | AnalyticsCreateOrConnectWithoutTenantInput
      | AnalyticsCreateOrConnectWithoutTenantInput[];
    upsert?:
      | AnalyticsUpsertWithWhereUniqueWithoutTenantInput
      | AnalyticsUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: AnalyticsCreateManyTenantInputEnvelope;
    set?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[];
    disconnect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[];
    delete?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[];
    connect?: AnalyticsWhereUniqueInput | AnalyticsWhereUniqueInput[];
    update?:
      | AnalyticsUpdateWithWhereUniqueWithoutTenantInput
      | AnalyticsUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?:
      | AnalyticsUpdateManyWithWhereWithoutTenantInput
      | AnalyticsUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[];
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type TenantsCreateWithoutAnalyticsInput = {
    name: string;
    domain: string;
  };

  export type TenantsUncheckedCreateWithoutAnalyticsInput = {
    id?: number;
    name: string;
    domain: string;
  };

  export type TenantsCreateOrConnectWithoutAnalyticsInput = {
    where: TenantsWhereUniqueInput;
    create: XOR<TenantsCreateWithoutAnalyticsInput, TenantsUncheckedCreateWithoutAnalyticsInput>;
  };

  export type TenantsUpsertWithoutAnalyticsInput = {
    update: XOR<TenantsUpdateWithoutAnalyticsInput, TenantsUncheckedUpdateWithoutAnalyticsInput>;
    create: XOR<TenantsCreateWithoutAnalyticsInput, TenantsUncheckedCreateWithoutAnalyticsInput>;
    where?: TenantsWhereInput;
  };

  export type TenantsUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: TenantsWhereInput;
    data: XOR<TenantsUpdateWithoutAnalyticsInput, TenantsUncheckedUpdateWithoutAnalyticsInput>;
  };

  export type TenantsUpdateWithoutAnalyticsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    domain?: StringFieldUpdateOperationsInput | string;
  };

  export type TenantsUncheckedUpdateWithoutAnalyticsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    domain?: StringFieldUpdateOperationsInput | string;
  };

  export type AnalyticsCreateWithoutTenantInput = {
    name: string;
    uuid: string;
    url?: string | null;
    user_id?: number | null;
  };

  export type AnalyticsUncheckedCreateWithoutTenantInput = {
    id?: number;
    name: string;
    uuid: string;
    url?: string | null;
    user_id?: number | null;
  };

  export type AnalyticsCreateOrConnectWithoutTenantInput = {
    where: AnalyticsWhereUniqueInput;
    create: XOR<AnalyticsCreateWithoutTenantInput, AnalyticsUncheckedCreateWithoutTenantInput>;
  };

  export type AnalyticsCreateManyTenantInputEnvelope = {
    data: AnalyticsCreateManyTenantInput | AnalyticsCreateManyTenantInput[];
    skipDuplicates?: boolean;
  };

  export type AnalyticsUpsertWithWhereUniqueWithoutTenantInput = {
    where: AnalyticsWhereUniqueInput;
    update: XOR<AnalyticsUpdateWithoutTenantInput, AnalyticsUncheckedUpdateWithoutTenantInput>;
    create: XOR<AnalyticsCreateWithoutTenantInput, AnalyticsUncheckedCreateWithoutTenantInput>;
  };

  export type AnalyticsUpdateWithWhereUniqueWithoutTenantInput = {
    where: AnalyticsWhereUniqueInput;
    data: XOR<AnalyticsUpdateWithoutTenantInput, AnalyticsUncheckedUpdateWithoutTenantInput>;
  };

  export type AnalyticsUpdateManyWithWhereWithoutTenantInput = {
    where: AnalyticsScalarWhereInput;
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyWithoutTenantInput>;
  };

  export type AnalyticsScalarWhereInput = {
    AND?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[];
    OR?: AnalyticsScalarWhereInput[];
    NOT?: AnalyticsScalarWhereInput | AnalyticsScalarWhereInput[];
    id?: IntFilter<'Analytics'> | number;
    name?: StringFilter<'Analytics'> | string;
    uuid?: StringFilter<'Analytics'> | string;
    url?: StringNullableFilter<'Analytics'> | string | null;
    user_id?: IntNullableFilter<'Analytics'> | number | null;
    tenant_id?: IntNullableFilter<'Analytics'> | number | null;
  };

  export type AnalyticsCreateManyTenantInput = {
    id?: number;
    name: string;
    uuid: string;
    url?: string | null;
    user_id?: number | null;
  };

  export type AnalyticsUpdateWithoutTenantInput = {
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type AnalyticsUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type AnalyticsUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use TenantsCountOutputTypeDefaultArgs instead
   */
  export type TenantsCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = TenantsCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AnalyticsDefaultArgs instead
   */
  export type AnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    AnalyticsDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TenantsDefaultArgs instead
   */
  export type TenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TenantsDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
