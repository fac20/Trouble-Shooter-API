
<h1 style="text-align: center; font-weight:800;
  background: -webkit-linear-gradient( rgba(231,59,100,1) 0%, rgba(132,151,231,1) 35%, rgba(175,241,126,1) 100%);
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  drop-shadow: -24px 27px 25px -4px rgba(30, 30, 60, 0.27);">Trouble Shooter API</h1>

## About this API

### Background
### How it works - link to "using the API"
### Tech stack
- Postgres
- Express
- Eslint
- Prettier
- Cypress
- Github Actions/ Circle CI
- 


## Contributing to this project
### Familiarising with the project
- Check out open issues and 'In Progress in the (project board)[link to jira board]

### Set up
- Clone this repo to your machine
- Run `npm i`
- Set up local database
  - run `psql` in your terminal
  - `CREATE USER tsuser SUPERUSER PASSWORD mypassword;`
  - `CREATE DATABASE ts_database WITH OWNER tsuser;`
  - `\c ts_database`
  - `\i src/database/init.sql`
  - `\c ts_test_database`
  - `\i src/database/test.sql`
  - create .env file with `DATABASE_URL = postgres://tsuser:mypassword@localhost:5432/ts_database`
- Run tests `npm run test`

### Running project locally
- Run `npm run dev` in your terminal
- [Use the API](#using-the-api)

### Raising issues
- Templates
- Labels
- Project board

### Best practice
- Code quality (guidance?)
- Branch names
- Clear commit messages
```
<type>[optional scope]: <description>

[optional body]
```

### Pull requests
open PR and assign My Hoa / Khadija / Jack to review

## Using the API

Base URL: https://trouble-shooting.heroku.com

- endpoints with example requests and response objects

`GET /` returns an array of available categories for trouble shooting:
```json
[
    "NPM isn't running",
    "I can't install my database",
    "Zoom is rubbish"
]
```

`GET /category/{id}` returns a 'prompts' object with prompts which each reference other prompts, or are themselves the solution:

```json
{
    "NPM isn't running" : {
        prompt:"Do you have a package.json",
        yes: "prompt2",
        no: "prompt3"
    },
    prompt2: {
        prompt:"Are you in the right dir..",
        yes: "prompt5",
        no: "prompt6"
    },
    prompt3: {
        prompt: "run npm init"
    }
}
```

- FAQ

 - Code of Conduct?