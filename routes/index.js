const router = require('express').Router();

const thoughtroutes = require('./thoughts');
const userroutes = require('./users');
router.use('/users', userroutes);
router.use('/thoughts', thoughtroutes);


module.exports = router;