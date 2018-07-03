// PostMan: https://www.getpostman.com/apps
import express from 'express';
import bodyParser from 'body-parser';
import { Artist } from '../../db';

const app = express();

// To use JSON in bodies
app.use(bodyParser.json());

// List all songs
app.post('/artists.json', (req, res) => {
   Artist.create({
     name: req.body.name
   }).then(artist => res.send(artist));
});

app.get('/artists.json', (req, res) => {
  Artist.findAll().then(artists => {
    res.send(artists);
  });
});

app.listen(3000, () => console.log('Corriendo Servidor'));
