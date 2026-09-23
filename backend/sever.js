const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Objeto do produto
const produto = {
  nome: "Smartphone Galaxy S23",
  preco: 3499.00,
  categoria: "Eletrônicos"
};

// Rota GET /
app.get('/', (req, res) => {
  res.json(produto);
});

// Servidor escutando na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});