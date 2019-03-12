import express from 'express';
import graphQlExpress from 'express-graphql';
import { graphiqlExpress } from 'graphql-server-express';
import { schema } from './schema';

const app = express();

app.use(
  '/graphql',
  graphQlExpress({
    schema: schema
  })
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: 'http://localhost:3001/graphql'
  })
);

app.listen(3001, () => console.log('running'));
