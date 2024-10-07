//this file is for getting a single user by id
const router = require('express').Router();
const { User } = require('../../models');
router.get('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
      if (!user) {
        return res.status(404).json({ message: 'No user found with this id' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;