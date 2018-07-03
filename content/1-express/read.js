import express from 'express';

// Creating a new app
const app = express();

// Setting up endpoints
app.get('/', (req, res) => res.send('Hola CeroUno!'));

// Listening
app.listen(3000, () => console.log('Corriendo Servidor'));
