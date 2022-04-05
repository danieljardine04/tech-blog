
const { User } = require('../models');

const userdata = [
  {
    username: 'chocolatechipcookiedough',
    email: 'chocolatechipcookiedough@gmail.com',
    password: 'password123'
  },
  {
    username: 'cookiesandcream',
    email: 'cookiesandcream@yahoo.com',
    password: 'password123'
  },
  {
    username: 'chocolate',
    email: 'chocolate1234@gmail.com',
    password: 'password123'
  },
  {
    username: 'vanilla',
    email: 'vanilla@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'neopolotin',
    email:'neopolitin@weather.com',
    password: 'password123'
  },
  {
    username: 'strawberry',
    email: 'strawberry@imdb.com',
    password: 'password123'
  },
  {
    username: 'mint',
    email: 'mint@feedburner.com',
    password: 'password123'
  },
  {
    username: 'mintcookiecrumble',
    email: 'mintcookiecrumble@gmail.com',
    password: 'password123'
  },
  {
    username: 'peanutbutterpandemonium',
    email: 'peanutbutterpandemonium@yahoo.com',
    password: 'password123'
  },
  {
    username: 'creame',
    email: 'creame@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;