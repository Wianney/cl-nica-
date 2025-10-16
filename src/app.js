import express from 'express';
import dotenv from 'dotenv';
import clienteRoute from './src/routes/clienteRoute.js';
import funcRoute from './src/routes/funcRoute.js';

const express = require('express');

const app = express();

const methodOverride = require('method-override');

app.use(methodOverride('_method'));

const path = require('path');
app.use(express.static(path.join(__dirname, 'view')));

app.use(express.join());
app.use(express.urlencoded({extended: true}));

const clienteRoute = require('./routes/clienteRoute');
app.use('/clientes', clienteRoute);

const funcRoute = require('.routes/funcRoute');
app.use('/funcs', funcRoute);

 module.exports = app;
