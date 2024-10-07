const router = require('express').Router();

const allusers = require('./allusers');
const newuser = require('./newuser');
const deleteuser = require('./deleteuser');
const singleuser = require('./singleusers');
const updateuser = require('./updateuser');

const addfriend = require('./addfriend');
const removefriend = require('./removefriend');

router.use(allusers);
router.use(newuser);
router.use(deleteuser);
router.use(singleuser);
router.use(updateuser);

router.use(addfriend);
router.use(removefriend);

module.exports = router;