const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
} = graphql;

const UserType = new GraphQLObjectType({
	name: 'User',
	type: 'Query',
	fields: {
		id: { type: GraphQLID },
		username: { type: GraphQLString },
		password: { type: GraphQLString },
	},
});

const CategoryType = new GraphQLObjectType({
	name: 'Category',
	type: 'Query',
	fields: {
		id: { type: GraphQLID },
		cat_name: { type: GraphQLString },
		user_id: { type: GraphQLInt },
	},
});

const PromptType = new GraphQLObjectType({
	name: 'Prompt',
	type: 'Query',
	fields: {
		id: { type: GraphQLID },
		cat_id: { type: GraphQLInt },
		prompt: { type: GraphQLString },
		route_one_txt: { type: GraphQLString },
		route_one: { type: GraphQLInt },
		route_two_txt: { type: GraphQLString },
		route_two: { type: GraphQLInt },
	},
});

module.exports = { UserType, CategoryType, PromptType };
