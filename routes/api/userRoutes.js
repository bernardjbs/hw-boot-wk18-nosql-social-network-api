const router = require('express').Router();
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  addFriend, 
  deleteFriend

} = require('../../controllers/userController');


// Defining the http requests route for /api/users
router.route('/')
  .get(getUsers)
  .post(createUser);

// Defining the http requests route for /api/users/:userId (with id)
router.route('/:userId')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend); 

module.exports = router;