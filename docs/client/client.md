#Discor Client Developer Documentation

To begin devloping on the Discor client, run the following from the 'client' folder:

```bash
npm i
npm run dev
```

##Development Environment
Discor client utilizes React/Redux and webpack. To build the environment, run:

```bash
npm run build
```

##Organization
- components
  - home page
    - content switcher
      - feed
        - feed stream
          - comments
          - posts
        - news
        - create post
      - people
      - inbox
        - messages(mail)
        - chat client
      - premium
      - settings
    - navbar
    - sidenav

  - landing page
    - login
    - signup