const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { RootQuery } = require('./src/schema/queries');
const { RootMutation } = require('./src/schema/mutations');
const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const app = express();

const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation,
});
console.log('schema ======', schema);
app.use(
	'/',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	}),
);
app.listen(3000, () => {
	console.log('listening...');
});
