import { ApolloServer } from '@apollo/server';
import { GraphQLUpload } from 'graphql-upload-ts';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import { expressServer } from './express.server';
import { authTypeDefs } from '../modules/auth/auth.types';
import { userTypeDefs } from '../modules/user/user.types';
import { authMutationResolvers } from '../modules/auth/auth.mutation.resolvers';
import { authQueryResolvers } from '../modules/auth/auth.query.resolvers';
import { userQueryResolvers } from '../modules/user/user.query.resolvers';
import { metricsQueryResolvers } from '../modules/metrics/metrics.query.resolvers';
import { metricsTypeDefs } from '../modules/metrics/metrics.types';
import { tenantTypeDefs } from '../modules/tenant/tenant.types';
import { tenantQueryResolvers } from '../modules/tenant/tenant.query.resolvers';
import { tenantMutationResolvers } from '../modules/tenant/tenant.mutation.resolvers';
import { planQueryResolvers } from '../modules/plan/plan.query.resolvers';
import { planMutationResolvers } from '../modules/plan/plan.mutation.resolvers';
import { planTypeDefs } from '../modules/plan/plan.types';

const typeDefs = [
  authTypeDefs,
  userTypeDefs,
  metricsTypeDefs,
  tenantTypeDefs,
  planTypeDefs,
].toString();

const httpServer = http.createServer(expressServer);
export const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers: {
    Upload: GraphQLUpload,
    Query: {
      ...authQueryResolvers,
      ...userQueryResolvers,
      ...metricsQueryResolvers,
      ...tenantQueryResolvers,
      ...planQueryResolvers,
    },
    Mutation: {
      ...authMutationResolvers,
      ...tenantMutationResolvers,
      ...planMutationResolvers,
    },
  },
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
