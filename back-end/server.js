//server back-End

/* Constant and configs import */
const express = require('express');
const url = require('url');
const cors = require('cors');
const queryString = require('querystring');
const bodyParser = require('body-parser')
const crypto = require('crypto');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const dbConfig = require('./database-cfg');
const tableName = dbConfig.table;

//const connectionString = 'mongodb://127.0.0.1:27017/tom:azerty123456';
const connectionString = 'mongodb+srv://repairadmin:tOUu5VAfUfRnF7ZJ@cluster0.eeaglqg.mongodb.net/?retryWrites=true&w=majority';
const databaseName = 'examen_duo_mean';
const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const dbEasyAccess = require('./classes/BasicCrud').basicCrud;
/* Customised Class */
/*
const userClient = require('./classes/UserClient');

console.log(new userClient.user(1, 1, 1));
*/

/*
MongoClient.connect(connectionString, (err, client) =>{
  if (err) return console.error(err);
  console.log('Connected To Database');
});*/

//client.connect(err => {
  console.log('Connected To Database');

  const db = client.db(databaseName);
  /* there goes the middleware + routes */
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(bodyParser.urlencoded({ extended: true }));
  //app.use(cors);
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

  /* Histo Repairs */
  app.get('/histo-repairs/:carId', (req, res) => {
    //*
    //base access
    const client1 = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    client1.connect(err => {
      console.log("tafiditra: "+err);
      const db1 = client1.db(databaseName);
      const carAccess = db1.collection('repairs');
      carAccess.find({ "car": req.params.carId, "advancement": 100 }).toArray()
        .then(results => {
          const allCarAccess = db1.collection('cars');
          allCarAccess.findOne({"_id": req.params.carId})
            .then(result1 => {
              //response
              res.setHeader("Content-Type", "application/json");
              res.setHeader("Access-Control-Allow-Origin", "*");
              res.send(JSON.stringify({ "status": "200",
              "message": "Found",
              "carId": req.params.carId, "car": result1, "result": results }));
              client1.close();
            });
        })
        .catch(error => {
          console.error(error);
          client1.close();
        });
    });
  });

  /* Repairs with advancement */
  app.get('/repairs_and_advancement/:carId', (req, res) => {
    //*
    //base access
    const client1 = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    client1.connect(err => {
      console.log("tafiditra: "+err);
      const db1 = client1.db(databaseName);
      const carAccess = db1.collection('repairs');
      carAccess.find({ "car": req.params.carId }).toArray()
        .then(results => {
          const allCarAccess = db1.collection('cars');
          allCarAccess.findOne({"_id": req.params.carId})
            .then(result1 => {
              //response
              res.setHeader("Content-Type", "application/json");
              res.setHeader("Access-Control-Allow-Origin", "*");
              res.send(JSON.stringify({ "status": "200",
              "message": "Found",
              "carId": req.params.carId, "car": result1, "result": results }));
              client1.close();
            });
        })
        .catch(error => {
          console.error(error);
          client1.close();
        });
    });
  });

  /* Car management to Garage*/
  app.get('/car-to-garage', (req, res) => {
    //*
    //base access
    const client1 = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    client1.connect(err => {
      const db1 = client1.db(databaseName);
      const carAccess = db1.collection('cars');
      carAccess.find({ "status": "waiting" }).toArray()
        .then(results => {
          const allCarAccess = db1.collection('cars');
          allCarAccess.findOne({"status": "ongoing"})
            .then(result1 => {
              //response
              res.setHeader("Content-Type", "application/json");
              res.setHeader("Access-Control-Allow-Origin", "*");
              res.send(JSON.stringify({ "status": "200",
              "message": "STATUS OK",
              "waiting": results, "ongoing": result1 }));
              client1.close();
            });
        })
        .catch(error => {
          console.error(error);
          client1.close();
        });
    });
  });

  app.put('/car-to-garage', (req, res) => {
    console.log(req.body.carUp);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ "status": "200",
    "message": "STATUS OK"}));
    //client1.close();
  });

  app.get("/average-repair-time", (req, res) => {
    const client1 = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    client1.connect(err => {
      const db1 = client1.db(databaseName);
      const repairAccess = db1.collection('repairs');
      repairAccess.aggregate([
            {$group: {_id:"$car", count:{$sum:"$cost"}}}
        ]).toArray()
        .then(results => {
              //response
              res.setHeader("Content-Type", "application/json");
              res.setHeader("Access-Control-Allow-Origin", "*");
              res.send(JSON.stringify({ "status": "200",
              "message": "STATUS OK",
              "group": results}));
              client1.close();
        })
        .catch(error => {
          console.error(error);
          client1.close();
        });
    });
  });

  app.get("/turnover/:type", (req, res) => {
    let data_pip = {};
    if(req.params.type == "month"){
      data_pip = {$group: {_id:{
        year: {$year: "$begin"},
        month: {$month: "$begin"},
      }, count: {$sum:"$cost"}}};
    }else{
      data_pip = {$group: {_id:{
        year: {$year: "$begin"},
        month: {$month: "$begin"},
        date: {$dayOfMonth: "$begin"}
      }, count: {$sum:"$cost"}}};
    }
    const client1 = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    client1.connect(err => {
      const db1 = client1.db(databaseName);
      const repairAccess = db1.collection('repairs');
      repairAccess.aggregate([
            data_pip
        ]).toArray()
        .then(results => {
              //response
              res.setHeader("Content-Type", "application/json");
              res.setHeader("Access-Control-Allow-Origin", "*");
              res.send(JSON.stringify({ "status": "200",
              "message": "STATUS OK",
              "group": results}));
              client1.close();
        })
        .catch(error => {
          console.error(error);
          client1.close();
        });
    });
  });

  app.get("/profit/:salary/:rent/:purchase/:expense", (req, res) => {
    const totalExpense = parseFloat(req.params.salary)+
          parseFloat(req.params.rent)+
          parseFloat(req.params.purchase)+
          parseFloat(req.params.expense);
    const client1 = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    client1.connect(err => {
      const db1 = client1.db(databaseName);
      const repairAccess = db1.collection('repairs');
      repairAccess.aggregate([
            {$group: {_id:{
              year: {$year: "$begin"},
              month: {$month: "$begin"},
              date: {$dayOfMonth: "$begin"}
            }, count: {$sum:"$cost"}}}
        ]).toArray()
        .then(results => {
              //response
              results.forEach((item, i) => {
                results[i].profit = results[i].count - totalExpense;
              });

              res.setHeader("Content-Type", "application/json");
              res.setHeader("Access-Control-Allow-Origin", "*");
              res.send(JSON.stringify({ "status": "200",
              "message": "STATUS OK",
              "group": results, "totalExpense": totalExpense}));
              client1.close();
        })
        .catch(error => {
          console.error(error);
          client1.close();
        });
    });
  });
    /*
    //base access
    const client1 = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    client1.connect(err => {
      const db1 = client1.db(databaseName);
      const carAccess = db1.collection('cars');
      carAccess.find({ "status": "waiting" }).toArray()
        .then(results => {
          const allCarAccess = db1.collection('cars');
          allCarAccess.findOne({"status": "ongoing"})
            .then(result1 => {
              //response
              res.setHeader("Content-Type", "application/json");
              res.setHeader("Access-Control-Allow-Origin", "*");
              res.send(JSON.stringify({ "status": "200",
              "message": "STATUS OK",
              "waiting": results, "ongoing": result1 }));
              client1.close();
            });
        })
        .catch(error => {
          console.error(error);
          client1.close();
        });
    });
    */
  //});

  /* ajout d'un depot de voiture  */

  app.post('/depotVoiture', (res, req) =>
  {
    try
    {
      let carClient = new ClientCars(req.body.make, req.body.model, req.body.year, req.body.registration, req.body.type);
      let carCollection = db.collection('car');
      let result = carCollection.insertOne(carClient);
      res.status(200).json(result);
    } catch (error){
      console.log(error);
      res.status(500).json(error);
    }

  });


  app.listen(3000, () => {
    console.log('Server Started at 3000');
  });

//});
/*
.then(client => {

}).catch(error => {
  error => console.error(error);
});*/

//hash
function hash256(input){
  return crypto.createHash('sha256').update(JSON.stringify(input)).digest('hex');
}

function addTimeToDate(date, dateAdd){
  //date.setMinutes(date.getMinutes() + minute);
  date.setDate(date.getDate() + dateAdd);
  return date;
}
