const path = require('path');
const express = require('express');

const app = express();

// Servir assets estáticos y la página principal desde /public
app.use(express.static(path.join(__dirname, '../public')));

// Endpoint JSON para pruebas / API
app.get('/api', (_req, res) => {
  res.json({ message: 'Hola Mundo' });
});

module.exports = app;