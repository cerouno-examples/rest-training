import express from 'express';
import { Person } from '../../db';

const app = express();

app.get('/', (req, res) => {
  Person.findAll().then(people => {
    res.send(people);
  });
});

app.listen(3000, () => console.log('Corriendo Servidor'));
