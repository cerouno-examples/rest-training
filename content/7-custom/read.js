// PostMan: https://www.getpostman.com/apps
import express from 'express';
import { Song } from '../../db';

const app = express();

// Custom Routes
app.put('/songs/:id/play.json', (req, res) => {
   Song.findById(req.params.id).then(song => {
     return song.increment({ played: 1 });
   }).then(song => res.send(song));
});

// Get All Songs
app.get('/songs.json', (req, res) => {
  Song.findAll().then(songs => {
    res.send(songs);
  });
});

app.listen(3000, () => console.log('Corriendo Servidor'));
