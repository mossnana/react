# After Firebase Function Setup

1. Hello World Function

-   Source Code

```javascript
// import firebase function library
const functions = require("firebase-functions");

// hello world function
exports.helloWorld = functions.https.onRequest((req, res) => {
    res.send("Hello World");
});
```

2. Begin Read Data from firebase

-   Source Code

```javascript
// import firebase function library
const functions = require("firebase-functions");

// like sudo command in ubuntu
const admin = require("firebase-admin");
admin.initializeApp();

// assume "Screams" is collection in firebase
exports.getScreams = functions.https.onRequest((req, res) => {
    // Normal firestore query
    admin
        .firestore()
        .collection("screams")
        .get()
        .then(data => {
            let screams = [];
            data.forEach(doc => {
                screams.push(doc.data());
            });
            return res.json(screams);
        })
        .catch(err => {
            console.log(err);
        });
});
```

3. Created data from firestore

-   Source Code

```javascript
// import firebase function library
const functions = require("firebase-functions");

// like sudo command in ubuntu
const admin = require("firebase-admin");
admin.initializeApp();

exports.createScream = functions.https.onRequest((req, res) => {
    // body in json
    const newScream = {
        body: req.body.body,
        userHandle: req.body.userHandle,
        createdAt: admin.firestore.Timestamp.fromDate(new Date())
    };
    // Normal firestore add
    admin
        .firestore()
        .collection("screams")
        .add(newScream)
        .then(doc => {
            // Return new document -> "doc"
            res.json({ message: `document: ${doc.id} created sucessfully` });
        })
        .catch(err => {
            // set return json 500 error
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });
});
```

-   Test add data

```javascript
{
    'body': 'New Screams', // >>>> req.body.body
    'userHandle' : 'new userHandle' // >>>> req.body.userHandle
}
```

-   Security

```javascript
.
..
...
exports.createScream = functions.https.onRequest((req, res) => {
    // if request method is not post -> return error 400 : client error
    if(req.method !== 'POST') {
        return res.status(400).json({ error : 'Method is not allowed'})
    }
    const newScream = {
        //...
    }
});
...
..
.
```

4. Imprement Express with Cloud Function

-   Preparing

```
npm install -s express
```

-   Source Code

```javascript
const express = require("express");
const app = express();

// Get Method
app.get("/screams", (req, res) => {
    admin
        .firestore()
        .collection("screams")
        .get()
        .then(data => {
            let screams = [];
            data.forEach(doc => {
                screams.push(doc.data());
            });
            return res.json(screams);
        })
        .catch(err => {
            console.log(err);
        });
});

app.post("/screams", (req, res) => {
    const newScream = {
        body: req.body.body,
        userHandle: req.body.userHandle,
        createdAt: admin.firestore.Timestamp.fromDate(new Date())
    };
    // Normal firestore add
    admin
        .firestore()
        .collection("screams")
        .add(newScream)
        .then(doc => {
            // Return new document -> "doc"
            res.json({ message: `document: ${doc.id} created sucessfully` });
        })
        .catch(err => {
            // set return json 500 error
            res.status(500).json({ error: "something went wrong" });
            console.error(err);
        });
});

// function "api" will tiggle app function
// http://base_url/api
exports.api = functions.https.onRequest(app);
```
