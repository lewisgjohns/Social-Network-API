const router = require('express').Router();
const { User } = require('../../models');

// DELETE route to remove a friend
router.delete('/users/:userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } }, // Remove friend
      { new: true } // Return the updated document
    );

    if (!user) {
      return res.status(404).json({ message: 'No user found with this id!' });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
