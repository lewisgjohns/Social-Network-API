const router = require('express').Router();
const { Thought, User } = require('../../models');
router.post('/', async (req, res) => {
    try {
      const newThought = await Thought.create(req.body);
      const user = await User.findByIdAndUpdate(
        req.body.userId,
        { $push: { thoughts: newThought._id } },
        { new: true }
      );
      res.json(newThought);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;