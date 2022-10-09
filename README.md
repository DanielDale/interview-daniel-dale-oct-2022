# Running #
To get to run, do the following with the current LTS version for node (v16.17.1):

```
npm install
npm run start
```

Then go to **http://localhost:3000** to see and use the UI.

# Usage #
Typing in a new link will add to the SQLite db and present the shortened link to click or copy.

Typing in an already existing link will avoid the insert and just return the correct shortened url.

Unfortunately, due to time constraints, the link must be http://address as the handling for without http has not been implemented
