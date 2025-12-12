const path = require('path');
const express = require('express');

const app = express();

const publicDir = path.join(__dirname, '../public');

// Servir assets estáticos y la página principal desde /public
app.use(express.static(publicDir));

// Asegurar que la raíz responda con el HTML incluso si el index no se resuelve
app.get('/', (_req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

// Endpoint JSON para pruebas / API
app.get('/api', (_req, res) => {
  res.json({ message: 'Hola Mundo' });
});

module.exports = app;