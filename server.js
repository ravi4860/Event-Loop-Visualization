const express = require("express");

const app = express();
app.use(express.static('app'));
const port = 8080;

app.get("/",(req,res)=>{
    // res.send("hello world");
    res.sendFile(__dirname + "/app/index.html");
});

app.listen(port,()=>{
    console.log("server started at port: " + port);
})

