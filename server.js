const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

// DB Config
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:%21superman@mern-test-4sgqg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    // Insert New Document
    const collection = client.db("mern-test").collection("test").insertOne({
        xxx2: "hahahaha",
        key2: "yyy"
    });
    console.log(collection)
    // perform actions on the collection object
    client.close();
  });

app.listen(5000, () => {
    console.log('Server Started !!!!')
})