const router = require('express').Router();
const { User } = require('../../models');
router.put('/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'No user found with this id' });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;