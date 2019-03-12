import { makeExecutableSchema } from 'graphql-tools';
import fs from 'fs';
import getThings from './db';
const typeDefs = fs.readFileSync(require.resolve('./schema.gql')).toString();

const resolvers = {
  Query: {
    things(root, args, context, info) {
      return getThings();
    }
  }
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
