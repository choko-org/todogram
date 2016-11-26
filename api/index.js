import apiServer from 'saturn-framework/api';

import { apolloExpress, graphiqlExpress  } from 'apollo-server';

import schema from './schema.graphql'
import resolvers from './resolvers'
import mocks from './mocks';

import bodyParser from 'body-parser';

import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const executableSchema = makeExecutableSchema({
  typeDefs: [schema],
  resolvers,
});

// addMockFunctionsToSchema({
//   schema: executableSchema,
//   resolvers,
//   mocks,
// });

apiServer.use('/graphql', bodyParser.json(), apolloExpress({
  schema: executableSchema,
  context: {},
}));

apiServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

apiServer.start();
