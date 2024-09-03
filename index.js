const express = require('express');
const app = express();
PORT = 3000;

app.get('/' , (req , res) => {
  res.send("this is first page");
})

app.get('/login' , (req , res) => {
  res.send("this is the login page");
})

app.listen(PORT , () => {
  console.log("helo there : ");
})