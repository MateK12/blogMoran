require('./server/config/config');

const path = require('path');
const express = require('express')
const handlebars = require('express-handlebars');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const URL = "mongodb://root:example@192.168.44.117:27017/"; //url de coneccion a Mongodb

const cliente = new MongoClient(URL);

const dbnombre = "users";
const coleccion = "Usuarios";
let DB_coleccion = cliente.db(dbnombre).collection(coleccion); //node_prueba.Usuarios

app.use(bodyParser.urlencoded({
  extended: true
}));
// parse application/json
app.use(bodyParser.json())

app.use(express.json({ type: "*/*" }))

app.use(cors())

app.engine('handlebars', handlebars.engine());
app.set("", __dirname+"/views");
app.set("view engine", 'handlebars');

// Configuracion global de rutas
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/server"));
app.use(express.json());

app.get('/index', (req, res)=> {
  const index = path.resolve(__dirname, '../Proyecto', './public', './page', 'index.html' );
  res.sendFile(index);
});

app.get('/noticias', (req, res)=> {
  returnData().then(result => {
    console.log(result); //This logs undefined
    res.send(result); //This sends undefined
  });
  const noticias = path.resolve(__dirname, '../Proyecto' ,'./public', './page', 'noticias.html' );
  res.sendFile(noticias);  
});

app.post('/crearCuenta', async (req, res)=>{
  console.log(req.body)
  let insertUser = await DB_coleccion.insertOne(req.body)
 res.send({"msg":"everything went correctly"})
})
app.listen(process.env.PORT, ()=> {
    console.log("Escuchando en http://127.0.0.1:4000");
})

async function returnData() {
  const uri = "mongodb://root:example@192.168.44.117:27017/";

  //Connect to the database and return all documents in the collection
  const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
  try {
      await client.connect();
      const database = client.db('users');
      const collection = database.collection('usuarios');
      const query = {};
      const options = {};
      const cursor = collection.find(query, options);
      await cursor.toArray().then((docs) => {
          console.log(docs); // <- This works and logs all the data to console
          res.render('noticias', {title: "Blog", data: docs})
          return docs;
      });
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}
