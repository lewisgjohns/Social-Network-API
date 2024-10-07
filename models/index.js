//this file will import the User and Thought models and export them as an object so we can easily access them in other parts of our application.
const Thought = require('./thought');
const User = require('./user');

module.exports = { Thought, User };