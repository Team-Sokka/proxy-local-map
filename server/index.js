require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT;

app.use(express.static(path.join(__dirname,'../public')));

app.get('/', (req, res)=>{
  res.sendFile('index')
})

app.listen(port, ()=>{
  console.log(`Server is running at http://127.0.0.1:${port}`)
})