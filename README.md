# Printer Facebook Messenger Bot

This messenger bot, communicate with an [escpos-graphql-api](https://www.github.com/MLKiiwy/escpos-graphql-api).
So you can sent message that are going to be printed directly to paper.

See it in action here : [TODO LINK YOUTUBE VIDEO](http://www.youtube.com)

## Setup

### NVM

To use the correct node version run:

```
nvm use
```

If you don't have nvm, [install it first](https://github.com/creationix/nvm).

### Install dependencies with Yarn

Instead of running `npm install` use:

```
yarn install
```

If you don't have yarn, [install it globally](https://yarnpkg.com/en/).

## Configuration

Configuration for the app is defined in `.env`. The example is copied during installation and has the development environment defaults set.
On production server, environment variables are set manually on the server.

| Variable              | Description                                                                            |
| --------------------- | -------------------------------------------------------------------------------------- |
| **`ENV`**             | Environment (development, ci, test or production)                                      |
| **`PORT`**            | Http port to expose the webhook                                                        |
| **`PRINTER_API_URL`** | Url to your instance of the escpos-graphql-ap                                          |
| **`VERIFY_TOKEN`**    | Token used during registration process of the webhook on facebook apps                 |

## Commands

| Command               | Description                                                                            |
| --------------------- | -------------------------------------------------------------------------------------- |
| **`yarn build`**      | Compiles the production version of the app into the `dist` folder.                     |
| **`yarn start`**      | Run the prod server (from `dist` folder)                                               |
| **`yarn test`**       | Run all tests for the project once.                                                    |
| **`yarn test:watch`** | Start test runner and watch for changes. Only tests relevant to changed code will run. |
| **`yarn lint`**       | Run eslint against all files.                                                          |
| **`yarn lint:fix`**   | Attempt to automatically fix any formatting issues. (Runs eslint --fix and prettier).  |
| **`yarn localtunnel`**| Usefull to test your bot locally without deploying it                                  |
| **`yarn start:dev`**  | Run development server with watch mode using nodemon                                   |

## Contributing

If you would like to contribute, please check out [CONTRIBUTING.md](.github/CONTRIBUTING.md).

## Deploy

Deployment for my private use is done on Heroku automatically on master merge and is link to a private facebook bot.
(My instance on Heroku is configured with all the env variables)

You can use this project for your needs and in that case deploy it wherever you want !
