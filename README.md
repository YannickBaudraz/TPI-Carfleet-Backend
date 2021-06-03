# CarFleet backend v0.4.0

This is the backend application of CarFleet.

## Prerequisite :

- Nodejs with npm -> https://nodejs.org/en/download
- Yarn globally -> `npm install --global yarn`
- MariaDb -> https://mariadb.org/download

## Installation

Run `yarn install`

## Push in a production server

Once you have access to your server, do this tasks in this order :

1. Install the prerequisites
1. Run `yarn install`.
1. Run `yarn build`.
1. Move manually the _dist_ folder your server.
1. Follow the part Usage and Usage->Integration of this page.

## Usage

- Starts MariaDb Service
- Run scripts from _sql_ folder in this order :
    1. _createModel.sql_
    1. _insertCompanies.sql_
    1. _insertDrivers.sql_
    1. _insertVehicles.sql_
    1. _insertUsers.sql_
    1. _createUser.sql_

_In linux environment you will always need to re-create users after creating the database, or they will not have
rights to interact with it._

### Development

Run `yarn start:dev` for a dev server.

The server starts at `http://localhost:3000` and load directly typescript files. The app will automatically reload 
if you change any of the source files.

The api prefix is `/api`, e.g. `http://localhost:3000/api/vehicles`.

### Integration

Run `yarn start:integration` for an integration server. Assume that this command will always be run in a debian 
environment.

The server starts at `http://localhost:3000` and have the same environment as a production, except that the database 
contains fake data.

The integration database used is actually the same as the development database.

## Documentation

Run `yarn gerenate:doc` to generate API documentation in the folder _documentation_.

The command `yarn generate:doc:serve` starts a server at the port 51001 and open the doc in the default browser 
after the generation is complete.

_The doc will not be committed with git._

## Running Tests

### Automatic tests

- Starts mariadb service.
- Create user for database testing with _sql/test/createTestAdminUser.sql_.
- Run `yarn test`.
