### Graphiql error ""Query root type must be provided."

- This is because graphql expects the root query to be in an key-value pair object with the keyword "query" as the key and the query as the value.
- read more [here](https://www.npmjs.com/package/graphql) - ctrl+find "schema" to find the relevant section

### Getting multiple rows from postgres database in graphql query

- When doing this, you need to wrap the type in a new graphqlList as shown below:

```javascript=
	categoryList: {
			type: new GraphQLList(CategoryType),
			args: {},

```
