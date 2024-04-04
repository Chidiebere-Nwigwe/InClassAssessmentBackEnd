const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute')

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

// convert form data to javascript object and put into request body
app.use(express.urlencoded({extended: false}))

// convert json to javascript object and put into request body
app.use(express.json())
app.use(userRoute)

app.listen(4231, ()=>{
    console.log("Listening for request on port 4231")
})