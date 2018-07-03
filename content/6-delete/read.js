// PostMan: https://www.getpostman.com/apps
import express from 'express';
import { Song } from '../../db';

const app = express();

// Finding and deleting
app.delete('/songs/:id.json', (req, res) => {
   Song.findById(req.params.id).then(song => {
     song.destroy();
     res.send(song);
   });
});

// Get All Songs
app.get('/songs.json', (req, res) => {
  Song.findAll().then(songs => {
    res.send(songs);
  });
});

app.listen(3000, () => console.log('Corriendo Servidor'));
