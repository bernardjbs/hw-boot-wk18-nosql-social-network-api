const router = require('express').Router();
const {
  getUsers,
} = require('../../controllers/userController');


// Defining the http requests route for /api/users
router.route('/')
  .get(getUsers)
  .post();

// Defining the http requests route for /api/users/:userId (with id)
router.route('/:userId')
  .get()
  .put()
  .delete();

module.exports = router;