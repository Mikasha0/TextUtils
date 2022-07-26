const express = require("express");
const app = express();

// app.listen(3001,()=> {
//     console.log("yay, your server is running on port 3001");
// })
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password@123",
    database: "userauth",
});
