const express = require('express');
const admin = require('firebase-admin');

// Inicialização do SDK Firebase
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const seção = db.collection('seção');
const todos = seção.get().then(snapshot => {
  snapshot.forEach(doc => {
    console.log(doc.id, '|=>', doc.data());
  });
});

// Inicialização do Express
const app = express();

// Configurando ejs como Template Engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000);
