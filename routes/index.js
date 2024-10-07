//this file will be used to collect all of the API routes and package them up for us.
const router = require('express').Router();

//this file is used to route the user requests to the appropriate file
const thoughtroutes = require('./thoughts');
const userroutes = require('./users');
router.use('/users', userroutes);
router.use('/thoughts', thoughtroutes);


module.exports = router;