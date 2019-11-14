const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res, err)=>{
  res.sendFile(path.join(__dirname, '../index.html'))
});

app.listen(port, ()=>{
  console.log(`Now listening on PORT ${port}`);
})