const data = require("./student/getDetails.json");
const express = require("express");
const app = express();
const port = process.env.PORT || 1010
app.get("/",(req,res)=>{
    res.send("api is running..");
})

app.post("/student/getDetails", function (req, res) {
    res.send(data);
});
app.listen(port, console.log(`server runnig..... `));