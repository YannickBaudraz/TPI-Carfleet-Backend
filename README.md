# CarFleet backend v0.2.0

This is the backend of CarFleet application.

## Prerequisite :

- Nodejs with npm -> https://nodejs.org/en/download
- Yarn globally -> `npm install --global yarn`
- MariaDb -> https://mariadb.org/download

## Installation

Run `yarn install`

## Usage

- Starts MariaDb Service
- Change _ormconfig.js_ configuration to match you database configuration.
- Run scripts from _sql_ folder in this order :
    1. _createModel.sql_
    1. _insertFakeCompanies.sql_
    1. _insertFakeDrivers.sql_
    1. _insertFakeVehicles.sql_

Run `yarn start:dev` for a dev server. The server starts at `http://localhost:3000`. The app will automatically reload 
if you change any of the source files. The api prerix is `/api`, e.g. `http://localhost:3000/api/vehicles`.

## Documentation

Run `yarn gerenate:doc` to generate API documentation in the folder _doc/generated-doc_. The command `yarn 
generate:doc:serve will start a server and open in the default browser after generation is complete.

## Running Tests

### Automatic tests

Run `yarn test`.

You can also use Postman to test the routes of the API. https://www.postman.com/downloads

- Import the collection from _test/postman/CarFleet.postman_collection.json_. This is a pre config file to test the API.
- Use it !

