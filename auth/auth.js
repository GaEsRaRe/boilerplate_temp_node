require('dotenv/config')

const firebase = require('firebase-admin');
const admin = require('firebase-admin');

var serviceAccount = require("../server-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_PROJECT
});

const isAdmin2 = (userData) => {
  return new Promise((resolve,reject) =>{
  console.log(userData)
  admin.auth().getUser(userData.uid)
    .then((m) => {resolve(m)})
    .catch((error) => {reject(error)});
})} 

const createUser = (userData) => {
  return new Promise((resolve,reject) =>{
    admin.auth().createUser(userData)
    .then((r) => {resolve(r)})
    .catch((e) => {reject(e)})
  })
}


module.exports = {
  isAdmin2
}