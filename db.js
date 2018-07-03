import Sequelize from 'sequelize';

export const sequelize = new Sequelize('null', 'null', 'null', {
  dialect: 'sqlite',
  storage: 'test.sqlite'
});

// Small Test
export const Person = sequelize.define('person', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING }
});

// Artists and Songs
export const Artist = sequelize.define('artist', {
  name: { type: Sequelize.STRING }
});

export const Song = sequelize.define('song', {
  name: { type: Sequelize.STRING },
  played: { type: Sequelize.INTEGER }
});
Artist.hasMany(Song);
Song.belongsTo(Artist);

// User and Tweets

export const User = sequelize.define('user', {
  username: { type: Sequelize.STRING }
});

export const Tweet = sequelize.define('tweet', {
  body: { type: Sequelize.STRING },
  likes: { type: Sequelize.INTEGER },
  retweets: { type: Sequelize.INTEGER }
});
User.hasMany(Tweet);
Tweet.belongsTo(User);

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
      played: 0
    });
    artist.createSong({
      name: 'Brianstorm',
      played: 1
    });
  });

  // Twitter
  User.create({
    username: 'realDonaldTrump'
  }).then((trump) => {
    trump.createTweet({
      body: 'Build That Wall!',
      likes: 0,
      retweets: 0
    });
  });
  User.create({
    username: 'neilTyson'
  }).then((neil) => {
    neil.createTweet({
      body: 'Yup, the rumor is true. Flat Earthers have supporters all around the globe.',
      likes: 0,
      retweets: 0
    });
  });

});
