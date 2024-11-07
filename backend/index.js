require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send("Hey");
});

//the app is listening for requests on a specific port and will log a message when it's ready
app.listen(port, (req,res) => {
    console.log(`ChatApp backend listening at http://localhost:${port}`);
});