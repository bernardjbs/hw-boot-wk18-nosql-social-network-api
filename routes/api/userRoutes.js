const router = require('express').Router();
const {
  getUsers,
  createUser, 
  getUser
} = require('../../controllers/userController');


// Defining the http requests route for /api/users
router.route('/')
  .get(getUsers)
  .post(createUser);

// Defining the http requests route for /api/users/:userId (with id)
router.route('/:userId')
  .get(getUser)
  .put()
  .delete();

module.exports = router;