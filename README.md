<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Endpoints

## Users
| Method | Endpoint | Description |
| ------ | ------ | ------ |
| GET | /api/users/ | User List |
| GET | /api/users/id/ | Retrieve User |
| PUT | /api/users/id/ | Update User |
| POST | /api/users/ | Create User |
| Delete | /api/users/id/ | Delete User |

#### User Object

```javascript
{
    username: "JohnBet",
    password: "aa0c8d12686d38a1524df75e69e09512225ee33a75e9a06127a5fddeb960f24d",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 555-1234",
}
```

## BlackJackCoins
| Method | Endpoint | Description |
| ------ | ------ | ------ |
| PUT | /api/users/id/updateBJCoins | Update User Black Jack Coins |


#### Query

```javascript
{
    oneCoins: 10,
    fiveCoins: 20,
    twentyFiveCoins: 30,
    hundredCoins: 40,
    fiveHundredCoins: 50 
}
```

#### Result

```javascript
{
    blackJackCoins: {
        oneCoins: 10,
        fiveCoins: 20,
        twentyFiveCoins: 30,
        hundredCoins: 40,
        fiveHundredCoins: 50 
    },
    _id: "615cfc1ed88ec4e9997106a2",
    username: "Pedro",
    email: "johndasdasd.doe@example.com",
    password: "aa0c8d12686d38a1524df75e69e09512225ee33a75e9a06127a5fddeb960f24d",
    firstName: "Mariano",
    lastName: "Merdasd",
    phone: "+1 (555) 555-1234",
    coins: 0,
    status: false,
    date: "2021-10-06T01:30:06.216Z",
    __v: 0
}
```

