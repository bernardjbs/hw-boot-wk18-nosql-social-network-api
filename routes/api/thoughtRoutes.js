const router = require('express').Router();
const {
  getThoughts,
  createThought, 
  getThought,
  updateThought, 
  deleteThought, 
  createReaction, 
  deleteReaction
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

router.route('/:thoughtId/reactions')
  .post(createReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);


module.exports = router;