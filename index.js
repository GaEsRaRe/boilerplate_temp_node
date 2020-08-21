require('dotenv/config')

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const auth = require('./auth/auth.js');
const { isAdmin2 } = require('./auth/auth.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/isAdmin',(req,res) => {
    isAdmin2(req.body)
    .then((e) =>{ res.send("good")})
    .catch((e) => res.send((e)))
})

app.post('/createUser',(req,res) =>{
    
})




app.listen(process.env.PORT, () =>
  console.log(`App running on port ${process.env.PORT}!`),
);