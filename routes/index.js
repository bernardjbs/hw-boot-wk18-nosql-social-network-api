// Import router from express
const router = require('express').Router();

// Defining the api route
const apiRoutes = require('./api');

// Make the router to use the api routes 
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;