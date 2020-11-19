e lath### Graphiql error ""Query root type must be provided."

- This is because graphql expects the root query to be in an key-value pair object with the keyword "query" as the key and the query as the value.
- read more [here](https://www.npmjs.com/package/graphql) - ctrl+find "schema" to find the relevant section
