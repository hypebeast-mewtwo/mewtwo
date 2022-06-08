import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLResolverMap } from '@apollographql/apollo-tools';
import { DocumentNode } from 'graphql';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const PORT = Number(process.env.REVIEWS_PORT) || 3003;

startApolloServer(typeDefs, resolvers, PORT);

async function startApolloServer(
  typeDefs: DocumentNode,
  resolvers: GraphQLResolverMap<any>,
  apolloPort: number
) {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  await server.start();
  server.applyMiddleware({ app });
  app.listen(apolloPort, () => {
    console.log(`Reviews service listening on port ${apolloPort}...`);
  });
}
