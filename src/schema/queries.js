const { UserType, CategoryType, PromptType } = require('./types');
const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql');
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
		category: {
			type: CategoryType,
			args: { id: { type: GraphQLID } },
			resolve(parentValue, args) {
				const query = 'SELECT * FROM categories WHERE id=$1';
				const values = [args.id];

				return db
					.one(query, values)
					.then((res) => res)
					.catch((err) => err);
			},
		},
		categoryList: {
			type: new GraphQLList(CategoryType),
			args: {},
			resolve(parentValue, args) {
				const query = 'SELECT * FROM categories';

				return db
					.any(query)
					.then((res) => res)
					.catch((err) => err);
			},
		},
		// prompt: {

		// }
	},
});
module.exports = { RootQuery };
// exports.query = RootQuery;

// db.any(query, values).then((data) => {
// 	data.forEach((row, index, data) => {
// 		// process the row
// 	});
// 	return data;
// });
