"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const analytics_routes_1 = __importDefault(require("./modules/analytics/analytics.routes"));
const tenant_routes_1 = __importDefault(require("./modules/tenant/tenant.routes"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("./utils/constants");
const metrics_routes_1 = __importDefault(require("./modules/metrics/metrics.routes"));
const graphql_upload_ts_1 = require("graphql-upload-ts");
const express4_1 = require("@apollo/server/express4");
const express_server_1 = require("./config/express.server");
const graphql_server_1 = require("./config/graphql.server");
const authenticateMiddleware_1 = require("./middlewares/authenticateMiddleware");
const upload_routes_1 = __importDefault(require("./modules/upload/upload.routes"));
const httpServer = http_1.default.createServer(express_server_1.expressServer);
const port = process.env.PORT || 3002;
express_server_1.expressServer.use('/analytic', express_1.default.json(), analytics_routes_1.default);
express_server_1.expressServer.use('/tenant', tenant_routes_1.default);
express_server_1.expressServer.use('/metric', metrics_routes_1.default);
express_server_1.expressServer.use('/upload', (0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST'],
    maxAge: 86400,
}), upload_routes_1.default);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(constants_1.MONGODB_URI);
    yield graphql_server_1.graphqlServer.start();
    express_server_1.expressServer.use('/graphql', (0, cors_1.default)(), express_1.default.json(), (0, graphql_upload_ts_1.graphqlUploadExpress)(), (0, express4_1.expressMiddleware)(graphql_server_1.graphqlServer, {
        context: ({ req }) => __awaiter(void 0, void 0, void 0, function* () {
            return ({
                userId: req && req.headers.authorization ? (0, authenticateMiddleware_1.authenticateMiddleware)(req) : null,
            });
        }),
    }));
    yield new Promise((resolve) => httpServer.listen({ port }, resolve));
    // TASK_LISTS.map((cron) => cron.start());
    console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
    console.log(`🚀 Server ready at http://localhost:${port}`);
});
main();
