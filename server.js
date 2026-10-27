const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/send-message', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const subject = req.body.subject;
    const message = req.body.message;

    console.log("New message received:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("Subject: " + subject);
    console.log("Message: " + message);

    res.send("Message received successfully! Thank you " + name);
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});