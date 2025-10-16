 const app = require('./src/app');
 const PORT = process.env.PORT || 3000;
 const clienteRoute = require('./src/routes/clienteRoute')

 app.use('/', clientesRoute);

 app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
 });

