Object.defineProperty(exports, '__esModule', { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library');

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: '5.8.1',
  engine: '78caf6feeaed953168c64e15a249c3e9a033ebe2',
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

const path = require('path');

/**
 * Enums
 */
exports.Prisma.AnalyticsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  uuid: 'uuid',
  url: 'url',
  user_id: 'user_id',
  tenant_id: 'tenant_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
};

exports.Prisma.OldTenantsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  domain: 'domain',
  created_at: 'created_at',
  updated_at: 'updated_at',
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc',
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive',
};

exports.Prisma.ModelName = {
  Analytics: 'Analytics',
  OldTenants: 'OldTenants',
};
/**
 * Create the Client
 */
const config = {
  generator: {
    name: 'client',
    provider: {
      fromEnvVar: null,
      value: 'prisma-client-js',
    },
    output: {
      value: 'C:\\Users\\luise\\OneDrive\\Escritorio\\analytics\\prisma\\generated\\client',
      fromEnvVar: null,
    },
    config: {
      engineType: 'library',
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: 'windows',
        native: true,
      },
    ],
    previewFeatures: [],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: '../../../.env',
    schemaEnvPath: '../../../.env',
  },
  relativePath: '../..',
  clientVersion: '5.8.1',
  engineVersion: '78caf6feeaed953168c64e15a249c3e9a033ebe2',
  datasourceNames: ['db'],
  activeProvider: 'mongodb',
  postinstall: true,
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: 'DATABASE_URL',
        value: null,
      },
    },
  },
  inlineSchema:
    'Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4vZ2VuZXJhdGVkL2NsaWVudCINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gIm1vbmdvZGIiDQogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQ0KfQ0KDQptb2RlbCBBbmFseXRpY3Mgew0KICBpZCAgICAgICAgIFN0cmluZyAgICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICBuYW1lICAgICAgIFN0cmluZw0KICB1dWlkICAgICAgIFN0cmluZw0KICB1cmwgICAgICAgIFN0cmluZz8NCiAgdXNlcl9pZCAgICBJbnQ/DQogIHRlbmFudF9pZCAgU3RyaW5nPyAgICAgQGRiLk9iamVjdElkDQogIHRlbmFudCAgICAgT2xkVGVuYW50cz8gQHJlbGF0aW9uKGZpZWxkczogW3RlbmFudF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGNyZWF0ZWRfYXQgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpDQp9DQoNCm1vZGVsIE9sZFRlbmFudHMgew0KICBpZCAgICAgICAgIFN0cmluZyAgICAgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZA0KICBuYW1lICAgICAgIFN0cmluZw0KICBkb21haW4gICAgIFN0cmluZyAgICAgIEB1bmlxdWUNCiAgYW5hbHl0aWNzICBBbmFseXRpY3NbXQ0KICBjcmVhdGVkX2F0IERhdGVUaW1lICAgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkX2F0IERhdGVUaW1lICAgIEBkZWZhdWx0KG5vdygpKQ0KfQ0K',
  inlineSchemaHash: '313d8bd1baf51407549d34bf3cc5601b007ca99111298c38ca777e6f09f317c2',
  noEngine: false,
};

const fs = require('fs');

config.dirname = __dirname;
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = ['prisma/generated/client', 'generated/client'];

  const alternativePath =
    alternativePaths.find((altPath) => {
      return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'));
    }) ?? alternativePaths[0];

  config.dirname = path.join(process.cwd(), alternativePath);
  config.isBundled = true;
}

config.runtimeDataModel = JSON.parse(
  '{"models":{"Analytics":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"auto","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"url","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"tenant_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tenant","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"OldTenants","relationName":"AnalyticsToOldTenants","relationFromFields":["tenant_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"OldTenants":{"dbName":null,"fields":[{"name":"id","dbName":"_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"auto","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"domain","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"analytics","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Analytics","relationName":"AnalyticsToOldTenants","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.getQueryEngineWasmModule = undefined;

const { warnEnvConflicts } = require('./runtime/library');

warnEnvConflicts({
  rootEnvPath:
    config.relativeEnvPaths.rootEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath:
    config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

// file annotations for bundling tools to include these files
path.join(__dirname, 'query_engine-windows.dll.node');
path.join(process.cwd(), 'prisma/generated/client/query_engine-windows.dll.node');
// file annotations for bundling tools to include these files
path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), 'prisma/generated/client/schema.prisma');
