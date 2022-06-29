const router = require('express').Router();
const {
  getThoughts,
  createThought, 
  getThought,
  updateThought, 
  deleteThought
} = require('../../controllers/thoughtController');


// Defining the http requests route for /api/thoughts
router.route('/')
  .get(getThoughts)
  .post(createThought);

// Defining the http requests route for /api/thoughts/:thoughtId (with id)
router.route('/:thoughtId')
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;