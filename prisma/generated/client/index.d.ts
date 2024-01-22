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
 * Model OldTenants
 *
 */
export type OldTenants = $Result.DefaultSelection<Prisma.$OldTenantsPayload>;

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
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number },
  ): $Utils.JsPromise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>;

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
   * `prisma.oldTenants`: Exposes CRUD operations for the **OldTenants** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more OldTenants
   * const oldTenants = await prisma.oldTenants.findMany()
   * ```
   */
  get oldTenants(): Prisma.OldTenantsDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
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
    OldTenants: 'OldTenants';
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
      modelProps: 'analytics' | 'oldTenants';
      txIsolationLevel: never;
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
          findRaw: {
            args: Prisma.AnalyticsFindRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          aggregateRaw: {
            args: Prisma.AnalyticsAggregateRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          count: {
            args: Prisma.AnalyticsCountArgs<ExtArgs>;
            result: $Utils.Optional<AnalyticsCountAggregateOutputType> | number;
          };
        };
      };
      OldTenants: {
        payload: Prisma.$OldTenantsPayload<ExtArgs>;
        fields: Prisma.OldTenantsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OldTenantsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OldTenantsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OldTenantsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OldTenantsPayload>;
          };
          findFirst: {
            args: Prisma.OldTenantsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OldTenantsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OldTenantsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OldTenantsPayload>;
          };
          findMany: {
            args: Prisma.OldTenantsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OldTenantsPayload>[];
          };
          create: {
            args: Prisma.OldTenantsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OldTenantsPayload>;
          };
          createMany: {
            args: Prisma.OldTenantsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.OldTenantsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OldTenantsPayload>;
          };
          update: {
            args: Prisma.OldTenantsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OldTenantsPayload>;
          };
          deleteMany: {
            args: Prisma.OldTenantsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.OldTenantsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.OldTenantsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OldTenantsPayload>;
          };
          aggregate: {
            args: Prisma.OldTenantsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOldTenants>;
          };
          groupBy: {
            args: Prisma.OldTenantsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OldTenantsGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.OldTenantsFindRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          aggregateRaw: {
            args: Prisma.OldTenantsAggregateRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          count: {
            args: Prisma.OldTenantsCountArgs<ExtArgs>;
            result: $Utils.Optional<OldTenantsCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject;
          result: Prisma.JsonObject;
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
   * Count Type OldTenantsCountOutputType
   */

  export type OldTenantsCountOutputType = {
    analytics: number;
  };

  export type OldTenantsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    analytics?: boolean | OldTenantsCountOutputTypeCountAnalyticsArgs;
  };

  // Custom InputTypes

  /**
   * OldTenantsCountOutputType without action
   */
  export type OldTenantsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OldTenantsCountOutputType
     */
    select?: OldTenantsCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OldTenantsCountOutputType without action
   */
  export type OldTenantsCountOutputTypeCountAnalyticsArgs<
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
    user_id: number | null;
  };

  export type AnalyticsSumAggregateOutputType = {
    user_id: number | null;
  };

  export type AnalyticsMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    uuid: string | null;
    url: string | null;
    user_id: number | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AnalyticsMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    uuid: string | null;
    url: string | null;
    user_id: number | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AnalyticsCountAggregateOutputType = {
    id: number;
    name: number;
    uuid: number;
    url: number;
    user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AnalyticsAvgAggregateInputType = {
    user_id?: true;
  };

  export type AnalyticsSumAggregateInputType = {
    user_id?: true;
  };

  export type AnalyticsMinAggregateInputType = {
    id?: true;
    name?: true;
    uuid?: true;
    url?: true;
    user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AnalyticsMaxAggregateInputType = {
    id?: true;
    name?: true;
    uuid?: true;
    url?: true;
    user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AnalyticsCountAggregateInputType = {
    id?: true;
    name?: true;
    uuid?: true;
    url?: true;
    user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
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
    id: string;
    name: string;
    uuid: string;
    url: string | null;
    user_id: number | null;
    tenant_id: string | null;
    created_at: Date;
    updated_at: Date;
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
        created_at?: boolean;
        updated_at?: boolean;
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
    created_at?: boolean;
    updated_at?: boolean;
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
      tenant: Prisma.$OldTenantsPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        uuid: string;
        url: string | null;
        user_id: number | null;
        tenant_id: string | null;
        created_at: Date;
        updated_at: Date;
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
     * Find zero or more Analytics that matches the filter.
     * @param {AnalyticsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const analytics = await prisma.analytics.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: AnalyticsFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Analytics.
     * @param {AnalyticsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const analytics = await prisma.analytics.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(args?: AnalyticsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

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
    ): Prisma__OldTenantsClient<
      $Result.GetResult<Prisma.$OldTenantsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
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
    readonly id: FieldRef<'Analytics', 'String'>;
    readonly name: FieldRef<'Analytics', 'String'>;
    readonly uuid: FieldRef<'Analytics', 'String'>;
    readonly url: FieldRef<'Analytics', 'String'>;
    readonly user_id: FieldRef<'Analytics', 'Int'>;
    readonly tenant_id: FieldRef<'Analytics', 'String'>;
    readonly created_at: FieldRef<'Analytics', 'DateTime'>;
    readonly updated_at: FieldRef<'Analytics', 'DateTime'>;
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
   * Analytics findRaw
   */
  export type AnalyticsFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Analytics aggregateRaw
   */
  export type AnalyticsAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Analytics.tenant
   */
  export type Analytics$tenantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OldTenants
     */
    select?: OldTenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OldTenantsInclude<ExtArgs> | null;
    where?: OldTenantsWhereInput;
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
   * Model OldTenants
   */

  export type AggregateOldTenants = {
    _count: OldTenantsCountAggregateOutputType | null;
    _min: OldTenantsMinAggregateOutputType | null;
    _max: OldTenantsMaxAggregateOutputType | null;
  };

  export type OldTenantsMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    domain: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OldTenantsMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    domain: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OldTenantsCountAggregateOutputType = {
    id: number;
    name: number;
    domain: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OldTenantsMinAggregateInputType = {
    id?: true;
    name?: true;
    domain?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OldTenantsMaxAggregateInputType = {
    id?: true;
    name?: true;
    domain?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OldTenantsCountAggregateInputType = {
    id?: true;
    name?: true;
    domain?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OldTenantsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OldTenants to aggregate.
     */
    where?: OldTenantsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OldTenants to fetch.
     */
    orderBy?: OldTenantsOrderByWithRelationInput | OldTenantsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OldTenantsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OldTenants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OldTenants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OldTenants
     **/
    _count?: true | OldTenantsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OldTenantsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OldTenantsMaxAggregateInputType;
  };

  export type GetOldTenantsAggregateType<T extends OldTenantsAggregateArgs> = {
    [P in keyof T & keyof AggregateOldTenants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOldTenants[P]>
      : GetScalarType<T[P], AggregateOldTenants[P]>;
  };

  export type OldTenantsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OldTenantsWhereInput;
    orderBy?: OldTenantsOrderByWithAggregationInput | OldTenantsOrderByWithAggregationInput[];
    by: OldTenantsScalarFieldEnum[] | OldTenantsScalarFieldEnum;
    having?: OldTenantsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OldTenantsCountAggregateInputType | true;
    _min?: OldTenantsMinAggregateInputType;
    _max?: OldTenantsMaxAggregateInputType;
  };

  export type OldTenantsGroupByOutputType = {
    id: string;
    name: string;
    domain: string;
    created_at: Date;
    updated_at: Date;
    _count: OldTenantsCountAggregateOutputType | null;
    _min: OldTenantsMinAggregateOutputType | null;
    _max: OldTenantsMaxAggregateOutputType | null;
  };

  type GetOldTenantsGroupByPayload<T extends OldTenantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OldTenantsGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OldTenantsGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OldTenantsGroupByOutputType[P]>
          : GetScalarType<T[P], OldTenantsGroupByOutputType[P]>;
      }
    >
  >;

  export type OldTenantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        domain?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        analytics?: boolean | OldTenants$analyticsArgs<ExtArgs>;
        _count?: boolean | OldTenantsCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['oldTenants']
    >;

  export type OldTenantsSelectScalar = {
    id?: boolean;
    name?: boolean;
    domain?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type OldTenantsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    analytics?: boolean | OldTenants$analyticsArgs<ExtArgs>;
    _count?: boolean | OldTenantsCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $OldTenantsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'OldTenants';
    objects: {
      analytics: Prisma.$AnalyticsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        domain: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['oldTenants']
    >;
    composites: {};
  };

  type OldTenantsGetPayload<S extends boolean | null | undefined | OldTenantsDefaultArgs> =
    $Result.GetResult<Prisma.$OldTenantsPayload, S>;

  type OldTenantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OldTenantsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OldTenantsCountAggregateInputType | true;
    };

  export interface OldTenantsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['OldTenants'];
      meta: { name: 'OldTenants' };
    };
    /**
     * Find zero or one OldTenants that matches the filter.
     * @param {OldTenantsFindUniqueArgs} args - Arguments to find a OldTenants
     * @example
     * // Get one OldTenants
     * const oldTenants = await prisma.oldTenants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends OldTenantsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OldTenantsFindUniqueArgs<ExtArgs>>,
    ): Prisma__OldTenantsClient<
      $Result.GetResult<Prisma.$OldTenantsPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one OldTenants that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {OldTenantsFindUniqueOrThrowArgs} args - Arguments to find a OldTenants
     * @example
     * // Get one OldTenants
     * const oldTenants = await prisma.oldTenants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends OldTenantsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OldTenantsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OldTenantsClient<
      $Result.GetResult<Prisma.$OldTenantsPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first OldTenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldTenantsFindFirstArgs} args - Arguments to find a OldTenants
     * @example
     * // Get one OldTenants
     * const oldTenants = await prisma.oldTenants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends OldTenantsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OldTenantsFindFirstArgs<ExtArgs>>,
    ): Prisma__OldTenantsClient<
      $Result.GetResult<Prisma.$OldTenantsPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first OldTenants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldTenantsFindFirstOrThrowArgs} args - Arguments to find a OldTenants
     * @example
     * // Get one OldTenants
     * const oldTenants = await prisma.oldTenants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends OldTenantsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OldTenantsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OldTenantsClient<
      $Result.GetResult<Prisma.$OldTenantsPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more OldTenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldTenantsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OldTenants
     * const oldTenants = await prisma.oldTenants.findMany()
     *
     * // Get first 10 OldTenants
     * const oldTenants = await prisma.oldTenants.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const oldTenantsWithIdOnly = await prisma.oldTenants.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends OldTenantsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OldTenantsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OldTenantsPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a OldTenants.
     * @param {OldTenantsCreateArgs} args - Arguments to create a OldTenants.
     * @example
     * // Create one OldTenants
     * const OldTenants = await prisma.oldTenants.create({
     *   data: {
     *     // ... data to create a OldTenants
     *   }
     * })
     *
     **/
    create<T extends OldTenantsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OldTenantsCreateArgs<ExtArgs>>,
    ): Prisma__OldTenantsClient<
      $Result.GetResult<Prisma.$OldTenantsPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many OldTenants.
     *     @param {OldTenantsCreateManyArgs} args - Arguments to create many OldTenants.
     *     @example
     *     // Create many OldTenants
     *     const oldTenants = await prisma.oldTenants.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends OldTenantsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OldTenantsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a OldTenants.
     * @param {OldTenantsDeleteArgs} args - Arguments to delete one OldTenants.
     * @example
     * // Delete one OldTenants
     * const OldTenants = await prisma.oldTenants.delete({
     *   where: {
     *     // ... filter to delete one OldTenants
     *   }
     * })
     *
     **/
    delete<T extends OldTenantsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OldTenantsDeleteArgs<ExtArgs>>,
    ): Prisma__OldTenantsClient<
      $Result.GetResult<Prisma.$OldTenantsPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one OldTenants.
     * @param {OldTenantsUpdateArgs} args - Arguments to update one OldTenants.
     * @example
     * // Update one OldTenants
     * const oldTenants = await prisma.oldTenants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends OldTenantsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OldTenantsUpdateArgs<ExtArgs>>,
    ): Prisma__OldTenantsClient<
      $Result.GetResult<Prisma.$OldTenantsPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more OldTenants.
     * @param {OldTenantsDeleteManyArgs} args - Arguments to filter OldTenants to delete.
     * @example
     * // Delete a few OldTenants
     * const { count } = await prisma.oldTenants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends OldTenantsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OldTenantsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OldTenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldTenantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OldTenants
     * const oldTenants = await prisma.oldTenants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends OldTenantsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OldTenantsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one OldTenants.
     * @param {OldTenantsUpsertArgs} args - Arguments to update or create a OldTenants.
     * @example
     * // Update or create a OldTenants
     * const oldTenants = await prisma.oldTenants.upsert({
     *   create: {
     *     // ... data to create a OldTenants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OldTenants we want to update
     *   }
     * })
     **/
    upsert<T extends OldTenantsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OldTenantsUpsertArgs<ExtArgs>>,
    ): Prisma__OldTenantsClient<
      $Result.GetResult<Prisma.$OldTenantsPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more OldTenants that matches the filter.
     * @param {OldTenantsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const oldTenants = await prisma.oldTenants.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: OldTenantsFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a OldTenants.
     * @param {OldTenantsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const oldTenants = await prisma.oldTenants.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(args?: OldTenantsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of OldTenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldTenantsCountArgs} args - Arguments to filter OldTenants to count.
     * @example
     * // Count the number of OldTenants
     * const count = await prisma.oldTenants.count({
     *   where: {
     *     // ... the filter for the OldTenants we want to count
     *   }
     * })
     **/
    count<T extends OldTenantsCountArgs>(
      args?: Subset<T, OldTenantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OldTenantsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a OldTenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldTenantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OldTenantsAggregateArgs>(
      args: Subset<T, OldTenantsAggregateArgs>,
    ): Prisma.PrismaPromise<GetOldTenantsAggregateType<T>>;

    /**
     * Group by OldTenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OldTenantsGroupByArgs} args - Group by arguments.
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
      T extends OldTenantsGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OldTenantsGroupByArgs['orderBy'] }
        : { orderBy?: OldTenantsGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, OldTenantsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOldTenantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OldTenants model
     */
    readonly fields: OldTenantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OldTenants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OldTenantsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    analytics<T extends OldTenants$analyticsArgs<ExtArgs> = {}>(
      args?: Subset<T, OldTenants$analyticsArgs<ExtArgs>>,
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
   * Fields of the OldTenants model
   */
  interface OldTenantsFieldRefs {
    readonly id: FieldRef<'OldTenants', 'String'>;
    readonly name: FieldRef<'OldTenants', 'String'>;
    readonly domain: FieldRef<'OldTenants', 'String'>;
    readonly created_at: FieldRef<'OldTenants', 'DateTime'>;
    readonly updated_at: FieldRef<'OldTenants', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * OldTenants findUnique
   */
  export type OldTenantsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OldTenants
     */
    select?: OldTenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OldTenantsInclude<ExtArgs> | null;
    /**
     * Filter, which OldTenants to fetch.
     */
    where: OldTenantsWhereUniqueInput;
  };

  /**
   * OldTenants findUniqueOrThrow
   */
  export type OldTenantsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OldTenants
     */
    select?: OldTenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OldTenantsInclude<ExtArgs> | null;
    /**
     * Filter, which OldTenants to fetch.
     */
    where: OldTenantsWhereUniqueInput;
  };

  /**
   * OldTenants findFirst
   */
  export type OldTenantsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OldTenants
     */
    select?: OldTenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OldTenantsInclude<ExtArgs> | null;
    /**
     * Filter, which OldTenants to fetch.
     */
    where?: OldTenantsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OldTenants to fetch.
     */
    orderBy?: OldTenantsOrderByWithRelationInput | OldTenantsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OldTenants.
     */
    cursor?: OldTenantsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OldTenants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OldTenants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OldTenants.
     */
    distinct?: OldTenantsScalarFieldEnum | OldTenantsScalarFieldEnum[];
  };

  /**
   * OldTenants findFirstOrThrow
   */
  export type OldTenantsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OldTenants
     */
    select?: OldTenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OldTenantsInclude<ExtArgs> | null;
    /**
     * Filter, which OldTenants to fetch.
     */
    where?: OldTenantsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OldTenants to fetch.
     */
    orderBy?: OldTenantsOrderByWithRelationInput | OldTenantsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OldTenants.
     */
    cursor?: OldTenantsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OldTenants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OldTenants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OldTenants.
     */
    distinct?: OldTenantsScalarFieldEnum | OldTenantsScalarFieldEnum[];
  };

  /**
   * OldTenants findMany
   */
  export type OldTenantsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OldTenants
     */
    select?: OldTenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OldTenantsInclude<ExtArgs> | null;
    /**
     * Filter, which OldTenants to fetch.
     */
    where?: OldTenantsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OldTenants to fetch.
     */
    orderBy?: OldTenantsOrderByWithRelationInput | OldTenantsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OldTenants.
     */
    cursor?: OldTenantsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OldTenants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OldTenants.
     */
    skip?: number;
    distinct?: OldTenantsScalarFieldEnum | OldTenantsScalarFieldEnum[];
  };

  /**
   * OldTenants create
   */
  export type OldTenantsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OldTenants
     */
    select?: OldTenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OldTenantsInclude<ExtArgs> | null;
    /**
     * The data needed to create a OldTenants.
     */
    data: XOR<OldTenantsCreateInput, OldTenantsUncheckedCreateInput>;
  };

  /**
   * OldTenants createMany
   */
  export type OldTenantsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many OldTenants.
     */
    data: OldTenantsCreateManyInput | OldTenantsCreateManyInput[];
  };

  /**
   * OldTenants update
   */
  export type OldTenantsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OldTenants
     */
    select?: OldTenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OldTenantsInclude<ExtArgs> | null;
    /**
     * The data needed to update a OldTenants.
     */
    data: XOR<OldTenantsUpdateInput, OldTenantsUncheckedUpdateInput>;
    /**
     * Choose, which OldTenants to update.
     */
    where: OldTenantsWhereUniqueInput;
  };

  /**
   * OldTenants updateMany
   */
  export type OldTenantsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update OldTenants.
     */
    data: XOR<OldTenantsUpdateManyMutationInput, OldTenantsUncheckedUpdateManyInput>;
    /**
     * Filter which OldTenants to update
     */
    where?: OldTenantsWhereInput;
  };

  /**
   * OldTenants upsert
   */
  export type OldTenantsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OldTenants
     */
    select?: OldTenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OldTenantsInclude<ExtArgs> | null;
    /**
     * The filter to search for the OldTenants to update in case it exists.
     */
    where: OldTenantsWhereUniqueInput;
    /**
     * In case the OldTenants found by the `where` argument doesn't exist, create a new OldTenants with this data.
     */
    create: XOR<OldTenantsCreateInput, OldTenantsUncheckedCreateInput>;
    /**
     * In case the OldTenants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OldTenantsUpdateInput, OldTenantsUncheckedUpdateInput>;
  };

  /**
   * OldTenants delete
   */
  export type OldTenantsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OldTenants
     */
    select?: OldTenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OldTenantsInclude<ExtArgs> | null;
    /**
     * Filter which OldTenants to delete.
     */
    where: OldTenantsWhereUniqueInput;
  };

  /**
   * OldTenants deleteMany
   */
  export type OldTenantsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OldTenants to delete
     */
    where?: OldTenantsWhereInput;
  };

  /**
   * OldTenants findRaw
   */
  export type OldTenantsFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * OldTenants aggregateRaw
   */
  export type OldTenantsAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * OldTenants.analytics
   */
  export type OldTenants$analyticsArgs<
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
   * OldTenants without action
   */
  export type OldTenantsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OldTenants
     */
    select?: OldTenantsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OldTenantsInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const AnalyticsScalarFieldEnum: {
    id: 'id';
    name: 'name';
    uuid: 'uuid';
    url: 'url';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AnalyticsScalarFieldEnum =
    (typeof AnalyticsScalarFieldEnum)[keyof typeof AnalyticsScalarFieldEnum];

  export const OldTenantsScalarFieldEnum: {
    id: 'id';
    name: 'name';
    domain: 'domain';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OldTenantsScalarFieldEnum =
    (typeof OldTenantsScalarFieldEnum)[keyof typeof OldTenantsScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type AnalyticsWhereInput = {
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[];
    OR?: AnalyticsWhereInput[];
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[];
    id?: StringFilter<'Analytics'> | string;
    name?: StringFilter<'Analytics'> | string;
    uuid?: StringFilter<'Analytics'> | string;
    url?: StringNullableFilter<'Analytics'> | string | null;
    user_id?: IntNullableFilter<'Analytics'> | number | null;
    tenant_id?: StringNullableFilter<'Analytics'> | string | null;
    created_at?: DateTimeFilter<'Analytics'> | Date | string;
    updated_at?: DateTimeFilter<'Analytics'> | Date | string;
    tenant?: XOR<OldTenantsNullableRelationFilter, OldTenantsWhereInput> | null;
  };

  export type AnalyticsOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    uuid?: SortOrder;
    url?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant?: OldTenantsOrderByWithRelationInput;
  };

  export type AnalyticsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AnalyticsWhereInput | AnalyticsWhereInput[];
      OR?: AnalyticsWhereInput[];
      NOT?: AnalyticsWhereInput | AnalyticsWhereInput[];
      name?: StringFilter<'Analytics'> | string;
      uuid?: StringFilter<'Analytics'> | string;
      url?: StringNullableFilter<'Analytics'> | string | null;
      user_id?: IntNullableFilter<'Analytics'> | number | null;
      tenant_id?: StringNullableFilter<'Analytics'> | string | null;
      created_at?: DateTimeFilter<'Analytics'> | Date | string;
      updated_at?: DateTimeFilter<'Analytics'> | Date | string;
      tenant?: XOR<OldTenantsNullableRelationFilter, OldTenantsWhereInput> | null;
    },
    'id'
  >;

  export type AnalyticsOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    uuid?: SortOrder;
    url?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
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
    id?: StringWithAggregatesFilter<'Analytics'> | string;
    name?: StringWithAggregatesFilter<'Analytics'> | string;
    uuid?: StringWithAggregatesFilter<'Analytics'> | string;
    url?: StringNullableWithAggregatesFilter<'Analytics'> | string | null;
    user_id?: IntNullableWithAggregatesFilter<'Analytics'> | number | null;
    tenant_id?: StringNullableWithAggregatesFilter<'Analytics'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'Analytics'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Analytics'> | Date | string;
  };

  export type OldTenantsWhereInput = {
    AND?: OldTenantsWhereInput | OldTenantsWhereInput[];
    OR?: OldTenantsWhereInput[];
    NOT?: OldTenantsWhereInput | OldTenantsWhereInput[];
    id?: StringFilter<'OldTenants'> | string;
    name?: StringFilter<'OldTenants'> | string;
    domain?: StringFilter<'OldTenants'> | string;
    created_at?: DateTimeFilter<'OldTenants'> | Date | string;
    updated_at?: DateTimeFilter<'OldTenants'> | Date | string;
    analytics?: AnalyticsListRelationFilter;
  };

  export type OldTenantsOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    domain?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    analytics?: AnalyticsOrderByRelationAggregateInput;
  };

  export type OldTenantsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      domain?: string;
      AND?: OldTenantsWhereInput | OldTenantsWhereInput[];
      OR?: OldTenantsWhereInput[];
      NOT?: OldTenantsWhereInput | OldTenantsWhereInput[];
      name?: StringFilter<'OldTenants'> | string;
      created_at?: DateTimeFilter<'OldTenants'> | Date | string;
      updated_at?: DateTimeFilter<'OldTenants'> | Date | string;
      analytics?: AnalyticsListRelationFilter;
    },
    'id' | 'domain'
  >;

  export type OldTenantsOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    domain?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: OldTenantsCountOrderByAggregateInput;
    _max?: OldTenantsMaxOrderByAggregateInput;
    _min?: OldTenantsMinOrderByAggregateInput;
  };

  export type OldTenantsScalarWhereWithAggregatesInput = {
    AND?: OldTenantsScalarWhereWithAggregatesInput | OldTenantsScalarWhereWithAggregatesInput[];
    OR?: OldTenantsScalarWhereWithAggregatesInput[];
    NOT?: OldTenantsScalarWhereWithAggregatesInput | OldTenantsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'OldTenants'> | string;
    name?: StringWithAggregatesFilter<'OldTenants'> | string;
    domain?: StringWithAggregatesFilter<'OldTenants'> | string;
    created_at?: DateTimeWithAggregatesFilter<'OldTenants'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'OldTenants'> | Date | string;
  };

  export type AnalyticsCreateInput = {
    id?: string;
    name: string;
    uuid: string;
    url?: string | null;
    user_id?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant?: OldTenantsCreateNestedOneWithoutAnalyticsInput;
  };

  export type AnalyticsUncheckedCreateInput = {
    id?: string;
    name: string;
    uuid: string;
    url?: string | null;
    user_id?: number | null;
    tenant_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AnalyticsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: OldTenantsUpdateOneWithoutAnalyticsNestedInput;
  };

  export type AnalyticsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnalyticsCreateManyInput = {
    id?: string;
    name: string;
    uuid: string;
    url?: string | null;
    user_id?: number | null;
    tenant_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AnalyticsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnalyticsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
    tenant_id?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OldTenantsCreateInput = {
    id?: string;
    name: string;
    domain: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    analytics?: AnalyticsCreateNestedManyWithoutTenantInput;
  };

  export type OldTenantsUncheckedCreateInput = {
    id?: string;
    name: string;
    domain: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    analytics?: AnalyticsUncheckedCreateNestedManyWithoutTenantInput;
  };

  export type OldTenantsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    domain?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    analytics?: AnalyticsUpdateManyWithoutTenantNestedInput;
  };

  export type OldTenantsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    domain?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    analytics?: AnalyticsUncheckedUpdateManyWithoutTenantNestedInput;
  };

  export type OldTenantsCreateManyInput = {
    id?: string;
    name: string;
    domain: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type OldTenantsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    domain?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OldTenantsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string;
    domain?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type OldTenantsNullableRelationFilter = {
    is?: OldTenantsWhereInput | null;
    isNot?: OldTenantsWhereInput | null;
  };

  export type AnalyticsCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    uuid?: SortOrder;
    url?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type AnalyticsAvgOrderByAggregateInput = {
    user_id?: SortOrder;
  };

  export type AnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    uuid?: SortOrder;
    url?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type AnalyticsMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    uuid?: SortOrder;
    url?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type AnalyticsSumOrderByAggregateInput = {
    user_id?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
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
    isSet?: boolean;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type AnalyticsListRelationFilter = {
    every?: AnalyticsWhereInput;
    some?: AnalyticsWhereInput;
    none?: AnalyticsWhereInput;
  };

  export type AnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OldTenantsCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    domain?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type OldTenantsMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    domain?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type OldTenantsMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    domain?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type OldTenantsCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<
      OldTenantsCreateWithoutAnalyticsInput,
      OldTenantsUncheckedCreateWithoutAnalyticsInput
    >;
    connectOrCreate?: OldTenantsCreateOrConnectWithoutAnalyticsInput;
    connect?: OldTenantsWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
    unset?: boolean;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
    unset?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type OldTenantsUpdateOneWithoutAnalyticsNestedInput = {
    create?: XOR<
      OldTenantsCreateWithoutAnalyticsInput,
      OldTenantsUncheckedCreateWithoutAnalyticsInput
    >;
    connectOrCreate?: OldTenantsCreateOrConnectWithoutAnalyticsInput;
    upsert?: OldTenantsUpsertWithoutAnalyticsInput;
    disconnect?: boolean;
    delete?: OldTenantsWhereInput | boolean;
    connect?: OldTenantsWhereUniqueInput;
    update?: XOR<
      XOR<
        OldTenantsUpdateToOneWithWhereWithoutAnalyticsInput,
        OldTenantsUpdateWithoutAnalyticsInput
      >,
      OldTenantsUncheckedUpdateWithoutAnalyticsInput
    >;
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
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
    isSet?: boolean;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
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
    isSet?: boolean;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type OldTenantsCreateWithoutAnalyticsInput = {
    id?: string;
    name: string;
    domain: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type OldTenantsUncheckedCreateWithoutAnalyticsInput = {
    id?: string;
    name: string;
    domain: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type OldTenantsCreateOrConnectWithoutAnalyticsInput = {
    where: OldTenantsWhereUniqueInput;
    create: XOR<
      OldTenantsCreateWithoutAnalyticsInput,
      OldTenantsUncheckedCreateWithoutAnalyticsInput
    >;
  };

  export type OldTenantsUpsertWithoutAnalyticsInput = {
    update: XOR<
      OldTenantsUpdateWithoutAnalyticsInput,
      OldTenantsUncheckedUpdateWithoutAnalyticsInput
    >;
    create: XOR<
      OldTenantsCreateWithoutAnalyticsInput,
      OldTenantsUncheckedCreateWithoutAnalyticsInput
    >;
    where?: OldTenantsWhereInput;
  };

  export type OldTenantsUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: OldTenantsWhereInput;
    data: XOR<
      OldTenantsUpdateWithoutAnalyticsInput,
      OldTenantsUncheckedUpdateWithoutAnalyticsInput
    >;
  };

  export type OldTenantsUpdateWithoutAnalyticsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    domain?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OldTenantsUncheckedUpdateWithoutAnalyticsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    domain?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnalyticsCreateWithoutTenantInput = {
    id?: string;
    name: string;
    uuid: string;
    url?: string | null;
    user_id?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AnalyticsUncheckedCreateWithoutTenantInput = {
    id?: string;
    name: string;
    uuid: string;
    url?: string | null;
    user_id?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AnalyticsCreateOrConnectWithoutTenantInput = {
    where: AnalyticsWhereUniqueInput;
    create: XOR<AnalyticsCreateWithoutTenantInput, AnalyticsUncheckedCreateWithoutTenantInput>;
  };

  export type AnalyticsCreateManyTenantInputEnvelope = {
    data: AnalyticsCreateManyTenantInput | AnalyticsCreateManyTenantInput[];
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
    id?: StringFilter<'Analytics'> | string;
    name?: StringFilter<'Analytics'> | string;
    uuid?: StringFilter<'Analytics'> | string;
    url?: StringNullableFilter<'Analytics'> | string | null;
    user_id?: IntNullableFilter<'Analytics'> | number | null;
    tenant_id?: StringNullableFilter<'Analytics'> | string | null;
    created_at?: DateTimeFilter<'Analytics'> | Date | string;
    updated_at?: DateTimeFilter<'Analytics'> | Date | string;
  };

  export type AnalyticsCreateManyTenantInput = {
    id?: string;
    name: string;
    uuid: string;
    url?: string | null;
    user_id?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type AnalyticsUpdateWithoutTenantInput = {
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnalyticsUncheckedUpdateWithoutTenantInput = {
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AnalyticsUncheckedUpdateManyWithoutTenantInput = {
    name?: StringFieldUpdateOperationsInput | string;
    uuid?: StringFieldUpdateOperationsInput | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use OldTenantsCountOutputTypeDefaultArgs instead
   */
  export type OldTenantsCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = OldTenantsCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AnalyticsDefaultArgs instead
   */
  export type AnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    AnalyticsDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OldTenantsDefaultArgs instead
   */
  export type OldTenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OldTenantsDefaultArgs<ExtArgs>;

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
