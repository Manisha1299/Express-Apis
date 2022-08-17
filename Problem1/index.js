const express = require('express')
const app = express();
const port = process.env.PORT || 8080
const student = require('./student/getDetails.json')

app.get('/', (req, res) => {
    res.send("api is running...")

});

app.post('/student/getDetails', (req, res) => {
    res.json(student)
});


app.listen(port, () => console.log("server is running..."));

