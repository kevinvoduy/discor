#Discor Posts Server Developer Documentation

To begin developing on the posts server, run the following from the 'post-server' folder:

```bash
npm i
npm dev
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
        }
```

#Testing

Backend testing is done with Jest. To add new tests, each test needs to open a new port that is not in use.

```bash
npm run test
```