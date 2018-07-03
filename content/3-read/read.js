import express from 'express';
import { Song } from '../../db';

const app = express();

// List all songs
app.get('/songs.json', (req, res) => {
  Song.findAll().then(songs => {
    res.send(songs);
  });
});

// Get 1 Song
app.get('/songs/:id.json', (req, res) => {
  console.log(req.params.id);
  Song.find({ where: { id: req.params.id} }).then(song => {
    res.send(song);
  });
});

app.listen(3000, () => console.log('Corriendo Servidor'));
