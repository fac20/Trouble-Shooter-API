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

		addPrompt: {
			type: PromptType,
			args: {
				cat_id: { type: GraphQLInt },
				prompt_id: { type: GraphQLInt },
				prompt: { type: GraphQLString },
				route_one_txt: { type: GraphQLString },
				route_one: { type: GraphQLInt },
				route_two_txt: { type: GraphQLString },
				route_two: { type: GraphQLInt },
			},
			resolve(parentValue, args) {
				const query = `INSERT INTO prompts (cat_id, prompt_id, prompt, route_one_txt, route_one, route_two_txt, route_two) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING cat_id, prompt_id, prompt, route_one_txt, route_one, route_two_txt, route_two`;
				const values = [
					args.cat_id,
					args.prompt_id,
					args.prompt,
					args.route_one_txt,
					args.route_one,
					args.route_two_txt,
					args.route_two,
				];

				return db
					.one(query, values)
					.then((res) => res)
					.catch((err) => err);
			},
		},
	},
});

module.exports = { RootMutation };
