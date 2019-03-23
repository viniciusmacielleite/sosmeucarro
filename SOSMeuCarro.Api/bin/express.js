const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//Routers
const categoriaRouter = require('../routes/categoria-router');
const pedidoRouter = require('../routes/pedido-router');
const usuarioRouter = require('../routes/usuario-router');

//Invocando a Api/WebServer do Express
const app = express();

//Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Configuração da conexão com o MongoDB Atlas - BD
mongoose.connect(variables.Database.connection, {dbName: "sosmeucarro", useNewUrlParser: true}).catch((error) => { console.log(error); });

//Configuração de rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/pedido', pedidoRouter);
app.use('/api/usuario', usuarioRouter);

module.exports = app;