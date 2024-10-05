const router = require('express').Router();

const allusers = require('./allusers');
const newuser = require('./newuser');
const deleteuser = require('./deleteuser');
const singleuser = require('./singleusers');
const updateuser = require('./updateuser');

router.use(allusers);
router.use(newuser);
router.use(deleteuser);
router.use(singleuser);
router.use(updateuser);

module.exports = router;