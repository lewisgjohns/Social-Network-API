//this file is for creating a new user
const router = require('express').Router();
const { User } = require('../../models');
router.post('/', async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;