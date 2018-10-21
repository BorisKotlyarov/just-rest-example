# Just Rest Example #
A sample app using [Just-REST](https://www.npmjs.com/package/just-rest)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/BorisKotlyarov/just-rest-example/tree/master)

## Use ##
```bash
git clone https://github.com/BorisKotlyarov/just-rest-example.git
cd just-rest-example
npm i
node server.js
```

## REST API ##

### Module "main" ###
Module path:  ./modules/main/index.js

**Request**
```HTTP
GET http://localhost:3002/
Content-Type: application/json

###


```
**Response**
```JSON
{
  "information":"this is response JSON"
}
```

### Module "profile" ###
Module path:  ./modules/profile/index.js

**Request** (Unauthorized)
```HTTP
GET http://localhost:3002/profile/me
Content-Type: application/json

###


```
**Response**
```JSON
{ 
  "error":401,
  "message":"Unauthorized"
}
```

**Request** with all permissions
```HTTP
GET http://localhost:3002/profile/me
Content-Type: application/json
token: token1

###


```
**Response**
```JSON
{ 
  "username":"Boris",
  "permissions":["all"],
  "isAuthorized":true
}
```

**Request** with read permissions
```HTTP
GET http://localhost:3002/profile/me
Content-Type: application/json
token: token2

###


```
**Response**
```JSON
{
  "username":"User 2",
  "permissions":["read.me"],
  "isAuthorized":true
}
```

**Request** without read permissions
```HTTP
GET http://localhost:3002/profile/me
Content-Type: application/json
token: token3

###


```
**Response**
```JSON
{
  "error":403,
  "message":"Forbidden"
}
```

### Module "test" ###
Module path:  ./modules/test/index.js

**Request**
```HTTP
GET http://localhost:3002/test/1
Content-Type: application/json

###


```
**Response**
```JSON
[
  "/test/1",
  "1",
  null
]
```

**Request**
```HTTP
POST http://localhost:3002/test
Content-Type: application/json

{   "testProperty":"testData" }

###


```
**Response**
```JSON
{ 
  "testProperty":"testData"
}
```

