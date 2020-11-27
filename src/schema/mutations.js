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
	name: 'rootMutationType',
	type: 'mutation',
	fields: {
		addCategory: {
			type: CategoryType,
			args: {
				id: { type: GraphQLID },
				cat_name: { type: GraphQLString },
				user_id: { type: GraphQLInt },
			},
			resolve(parentValue, args) {
				const query = `INSERT INTO categories(cat_name, user_id) VALUES ($1, $2)`;
				const values = [args.cat_name, args.user_id];

				return db
					.one(query, values)
					.then((res) => res)
					.catch((err) => err);
			},
		},
	},
});

module.export = { RootMutation };
