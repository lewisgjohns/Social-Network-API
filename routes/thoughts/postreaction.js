const router = require('express').Router();
const { Thought } = require('../../models');
router.post('/:thoughtId/reactions', async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: req.body } },
        { new: true }
      );
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;