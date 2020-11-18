const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
} = graphql;

export const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: { type: GraphQLID },
		username: { type: GraphQLString },
		password: { type: GraphQLString },
	}),
});

export const CategoryType = new GraphQLObjectType({
	name: 'Category',
	fields: () => ({
		id: { type: GraphQLID },
		cat_name: { type: GraphQLString },
		user_id: { type: GraphQLInt },
	}),
});

export const PromptType = new GraphQLObjectType({
	name: 'Prompt',
	fields: () => ({
		id: { type: GraphQLID },
		cat_id: { type: GraphQLInt },
		prompt: { type: GraphQLString },
		route_one_txt: { type: GraphQLString },
		route_one: { type: GraphQLInt },
		route_two_txt: { type: GraphQLString },
		route_two: { type: GraphQLInt },
	}),
});
