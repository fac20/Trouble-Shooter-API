const graphql = require('graphql');
const db = require('../database/connection');
const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
} = graphql;
const { UserType, PromptType, CategoryType } = require('./types');

const RootMutation = new GraphQLObjectType({
	name: 'RootMutationType',
	type: 'Mutation',
	fields: {
		addCategory: {
			type: CategoryType,
			args: {
				id: { type: GraphQLID },
				cat_name: { type: GraphQLString },
				user_id: { type: GraphQLInt },
			},
			resolve(parentValue, args) {
				const query = `INSERT INTO categories(cat_name, user_id) VALUES ($1, $2) RETURNING  cat_name`;
				const values = [args.cat_name, args.user_id];

				return db
					.one(query, values)
					.then((res) => res)
					.catch((err) => err);
			},
		},
		addUser: {
			type: UserType,
			args: {
				id: { type: GraphQLID },
				username: { type: GraphQLString },
				password: { type: GraphQLString },
			},
			resolve(parentValue, args) {
				const query = `INSERT INTO users(username, password) VALUES ($1, $2) RETURNING username`;
				const values = [args.username, args.password];

				return db
					.one(query, values)
					.then((res) => res)
					.catch((err) => err);
			},
		},
	},
});

module.exports = { RootMutation };
