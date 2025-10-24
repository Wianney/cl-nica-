import express from 'express';
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import path from 'path';
import { fileURLToPath } from 'url';

import clienteRoute from './routes/clienteRoutes.js';
import funcRoute from './routes/funcRoute.js';
import usuarioRoute from './routes/usuarioRoute.js';


dotenv.config();
const app = express();

// Corrige __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações básicas
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'view')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/clientes', clienteRoute);

app.use('/usuarios', usuarioRoute);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});


app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'views', 'index.ejs'));
});

export default app;
