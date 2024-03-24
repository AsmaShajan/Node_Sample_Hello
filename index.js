const { createServer } = require('node:http');

const express = require ('express');
const ejs = require('ejs');
const hostname = '127.0.0.1';
const port = 3000;

const app = express();

const server = createServer(app) ;

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/',(req,res)=>{
  res.render('dashboard');
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});