//this route is used to add a friend to a user's friend list
const router = require('express').Router();
const { User } = require('../../models');

//this route is used to add a friend to a user's friend list
router.post('/users/:userId/friends/:friendId', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } }, // Add friend only if it doesn't already exist
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
