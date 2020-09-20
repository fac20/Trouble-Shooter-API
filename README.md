# Trouble Shooter API
## About this API
- background
- how it works - link to "using the API"
- tech stack

## Contributing to this project
### Familiarising with the project
- Check out open issues and In Progress in the project board

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