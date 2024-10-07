// Initiate the router and require the routes for all thoughts
const router = require('express').Router();

// Require the routes for all thoughts
const allThoughts = require('./allthoughts');
const deleteReaction = require('./deletereaction');
const newThought = require('./newthought');
const postReaction = require('./postreaction');

// Use the routes
router.use(allThoughts);
router.use(deleteReaction);
router.use(newThought);
router.use(postReaction);

module.exports = router;