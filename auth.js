require('dotenv/config')

const firebase = require('firebase-admin');
const admin = require('firebase-admin');

var serviceAccount = require("./server-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_PROJECT
});
