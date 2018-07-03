import Sequelize from 'sequelize';

export const sequelize = new Sequelize('null', 'null', 'null', {
  dialect: 'sqlite',
  storage: 'test.sqlite'
});

export const Person = sequelize.define('user', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING }
});

export const Artist = sequelize.define('artist', {
  name: { type: Sequelize.STRING }
});

export const Song = sequelize.define('song', {
  name: { type: Sequelize.STRING },
  played: { type: Sequelize.INTEGER }
});

Artist.hasMany(Song);
Song.belongsTo(Artist);

sequelize.sync({ force: true }).then(() => {
  Person.create({
    firstName: 'Abraham',
    lastName: 'Kuri'
  });

  Artist.create({
    name: 'Actic Monkeys'
  }).then((artist) => {
    artist.createSong({
      name: 'Fluorescent Adolescent',
      played: 100000
    });
    artist.createSong({
      name: 'Brianstorm',
      played: 10000
    });
  });
});
