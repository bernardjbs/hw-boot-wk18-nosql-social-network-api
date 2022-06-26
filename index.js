const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Declaring which port to use
const PORT = process.env.PORT || 3001; // process.env.PORT is used for deployment

// Create an instance of express
const app = express();

// Use Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Once the connection is open, console log message which port the server in running on 
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for social media is running on port ${PORT}`);
  });
});