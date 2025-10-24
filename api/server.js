import app from '../src/app.js';
import dotenv from 'dotenv';

dotenv.config();

console.log('🔍 Variáveis carregadas:', process.env.DB_USER, process.env.DB_PASSWORD);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
