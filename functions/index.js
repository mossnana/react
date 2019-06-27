const functions = require('firebase-functions');

const admin = require('firebase-admin')

admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello World with me, Permpoon");
});

// test getScreams API
exports.getScreams = functions.https.onRequest((req, res) => {
    admin.firestore().collection('screams').get()
        .then(data => {
            let screams = []
            data.forEach(doc => {
                screams.push(doc.data())
            })
            return res.json(screams)
        })
        .catch(err => {
            console.log("Error to called getScreams Function")
        })
})

exports.createScreams = functions.https.onRequest((req, res) => {
    const newScreams = {
        body: req.body.body,
        userHandle: req.body.userHandle,
        createdAt: req.body.createdAt
    }

    admin.firestore().collection('screams').add(newScreams)
        .then(data => {
            console.log("New Screams has been created.")
        })
        .catch(err => {
            console.log("Error to create.")
        })
})