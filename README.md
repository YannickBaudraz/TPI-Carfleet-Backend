# How to test to API

Prerequisite :

- Install nodejs with npm -> https://nodejs.org/en/download/
- Install yarn globally `npm install --global yarn`
- Install Postman -> https://www.postman.com/downloads/

1. Clone the repository frmo github
1. Copy the file _src/data/cars.json_ and rename it in _cars_test.json_
1. Run `yarn install`
1. Run `yarn start:dev` for development
1. Import the collection for Postman from _test/postman/CarFleet.postman_collection.json_. This is pre config to 
   test the API
1. Play with postman :)
