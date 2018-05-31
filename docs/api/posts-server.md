#Discor Posts Server Developer Documentation

To begin developing on the posts server, run the following from the 'post-server' folder:

```bash
npm i
npm dev
```

It is often times required to connect to mongoDB, so run the following in a new terminal window:

```bash
mongod
```

#API

The API takes the following structure:

```plaintext
Start
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
- 'api/posts'
  - POST '/createPost'
      request
        body: {
          owner,
          content,
          image,
        }
```

#Testing

Backend testing is done with Jest. To add new tests, each test needs to open a new port that is not in use.

```bash
npm run test
```