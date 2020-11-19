const { UserType, CategoryType, PromptType } = require('./types');
const { GraphQLObjectType, GraphQLID } = require('graphql');
const db = require('../database/connection');
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	type: 'Query',
	fields: {
		user: {
			type: UserType,
			args: { id: { type: GraphQLID } },
			resolve(parentValue, args) {
				const query = `SELECT * FROM users WHERE id=$1`;
				const values = [args.id];

				return db
					.one(query, values)
					.then((res) => res)
					.catch((err) => err);
			},
		},
	},
});
module.exports = { RootQuery };
// exports.query = RootQuery;
