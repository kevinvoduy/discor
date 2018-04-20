#Discor RESTful Server Developer Documentation

To begin developing on the RESTful JSON Data API, run the following from the 'rest-server' folder:

```bash
npm i
babel-node src/config/database/setup.js
npm run start
```

#Database

##PostgreSQL

Depending on the node `NODE_ENV` value, the API will use either the AWS RDS instance or local instance.

Once promisified, all queries are made through `db.queryAsync(queryString)`.

#API

The API takes the following structure:

```plaintext
Start
|
SQLHelpers
|
Queries
|
Controllers
|
Router
|
End
```

__Endpoints__

```plaintext
- 'api/auth'
  - POST '/signup'
      request
        body: {
          username,
          email,
          password,
        }
  - POST '/login'
      request
        body: {
          username,
          password,
        }

- 'api/users'
  - GET '/fetchAllUsers'

- 'api/friends'
  - POST '/addFriend'
      request
        body: {
          user_id,
          friend_id,
        }
  - GET '/fetchAllFriends/:user_id'
  - DELETE 'deleteFriend/:user_id/:friend_id'

- 'api/chat'
  - POST '/message'
      request
        body: {
          user_id,
          friend_id,
          message,
        }
  - GET '/allMessages/:user_id/:friend_id'
      request
        body: {
          user_id,
          friend_id,
        }
```

#Testing

Backend testing is done with Jest. To add new tests, each test needs to open a new port that is not in use.

```bash
npm run test
```