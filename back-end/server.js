//server back-End

/* Constant and configs import */
const express = require('express');
const bodyParser = require('body-parser')
const crypto = require('crypto');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const dbConfig = require('./database-cfg');
const tableName = dbConfig.table;

const connectionString = 'mongodb://127.0.0.1:27017/tom:azerty123456';
const databaseName = 'examen_duo_mean';

/* Customised Class */
/*
const userClient = require('./classes/UserClient');

console.log(new userClient.user(1, 1, 1));
*/

MongoClient.connect(connectionString, (err, client) =>{
  if (err) return console.error(err);
  console.log('Connected To Database');
});

MongoClient.connect(connectionString, { useUnifiedTopology: true })
.then(client => {
  console.log('Connected To Database');

  const db = client.db(databaseName);
  /* there goes the middleware + routes */
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    console.log(hash256('123456'));
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify({"Hello": "Hello World"}));
  });

  /* Login And Sign Up*/
  app.post('/sign_up', (req, res) => {
    const userCollection = db.collection('user');
    req.body.password = hash256(req.body.password); //hash the password
    userCollection.insertOne(req.body)
    .then(result => {
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(JSON.stringify({"status": "200", "Message": "You Signed Up"}));
    }).catch(error => {
      console.error(error);
    });
  });

  app.post('/login', (req, res) => {
    const userCollection = db.collection('user');
    const userToken = db.collection('token');
    //hash the password
    req.body.password = hash256(req.body.password);
    userCollection.findOne(req.body)
    .then(result => {
      //set userToken
      let dateNow = new Date();
      console.log("date now: "+dateNow);
      //add one day to session expire
      let dateExpire = addTimeToDate(dateNow, 1);
      console.log(result);
      userToken.insertOne({"value": hash256(result.firstname+dateExpire.toLocaleDateString('en-CA'))})
      .then(result1 => {
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(JSON.stringify({"status": "200",
                "token": hash256(dateNow + dateExpire), "exp": dateExpire.toLocaleDateString('en-CA')}));
      }).catch(error1 => {
        console.error(error1);
      });
    }).catch(error => {
      console.error(error);
    });
  });

  /* Repairs with advancement */
  app.get('/repairs_and_advancement', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify({ "status": "200",
            "carId": req.body.idCar }));
  });

  app.listen(3000, () => {
    console.log('Server Started at 3000');
  });

}).catch(error => {
  error => console.error(error);
});

//hash
function hash256(input){
  return crypto.createHash('sha256').update(JSON.stringify(input)).digest('hex');
}

function addTimeToDate(date, dateAdd){
  //date.setMinutes(date.getMinutes() + minute);
  date.setDate(date.getDate() + dateAdd);
  return date;
}
