const express = require('express');
const student = require('./routes/student')
const app =express();
app.use(express.json())
app.use(student)


app.listen(3000 , (err)=> {
    if(err) {
        console.log("Problem in running server");
    } else {
        console.log("Server is running on 3000...");
    }
})

// url on browser --> go to index.js --> check for the route --> it shifts to included files or folder