import express from 'express';
const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(3000,()=>{
    console.log('Server listening to the port 3000')
})