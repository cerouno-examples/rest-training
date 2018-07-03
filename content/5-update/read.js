// PostMan: https://www.getpostman.com/apps
import express from 'express';
import bodyParser from 'body-parser';
import { Song } from '../../db';

const app = express();

// To use JSON in bodies
app.use(bodyParser.json());

// Simple updates
app.put('/songs/:id.json', (req, res) => {
   Song.find({
     where: {
       id: req.params.id,
     }
   }).then(song => {
     return song.update({
       name: req.body.name
     })
   }).then(song => res.send(song));
});

// Get All Songs
app.get('/songs.json', (req, res) => {
  Song.findAll().then(songs => {
    res.send(songs);
  });
});

// Embedded updates
app.put('/artists/:artistId/songs/:id.json', (req, res) => {
   Song.find({
     where: {
       id: req.params.id,
       artistId: req.params.artistId
     }
   }).then(song => {
     return song.update({
       name: req.body.name
     })
   }).then(song => res.send(song));
});

// Embedded Song Lists
app.get('/artists/:artistId/songs.json', (req, res) => {
  Song.findAll({
    where: {
      artistId: req.params.artistId
    }
  }).then(songs => {
    res.send(songs);
  });
});

app.listen(3000, () => console.log('Corriendo Servidor'));
