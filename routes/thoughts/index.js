const router = require('express').Router();

const allThoughts = require('./allthoughts');
const deleteReaction = require('./deletereaction');
const newThought = require('./newthought');
const postReaction = require('./postreaction');

router.use(allThoughts);
router.use(deleteReaction);
router.use(newThought);
router.use(postReaction);

module.exports = router;