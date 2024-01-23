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

const typeDefs = [authTypeDefs, userTypeDefs].toString();

const httpServer = http.createServer(expressServer);
export const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers: {
    Upload: GraphQLUpload,
    Query: {
      ...authQueryResolvers,
      ...userQueryResolvers,
    },
    Mutation: {
      ...authMutationResolvers,
    },
  },
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
