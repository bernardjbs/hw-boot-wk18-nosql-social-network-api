# Social Network API
This is an API backend for a social network RESTful appplication using MongoDB with Mongoose as its Object Data Modeling(ODM), and ExpressJS to manage routes. The social network has users where they can share their thoughts, and also react to their friends' thoughts. A user should be able to perform CRUD operations on User, Friends, Thoughts and Reactions. When a user is deleted, their associated data are deleted as well. 

## Installation
> Clone the app
```
> git clone (clone_addess) 
```
> Initialise and installing necessary npm packages and dependencies
```
> npm install
```

> Connect to MongoDB by adding your connection string to '/config/connection.js'
```js
const connectionString = 'YOUR_CONNECTION_STRING';
```

## Usage
To run the routes with insomnia

> Run the following command in the command line
```
> node index.js
```
Open Insomnia and the following routes are available: 
* Get all Users and Post User: ```http://localhost:3001/api/users/```
* Get User by Id, Put and Delete Users: ```http://localhost:3001/api/users/:userId```
* Get all Thoughts and Post Thought: ```http://localhost:3001/api/thoughts/```
*  Get Thought by Id, Put and Delete Thoughts: ```http://localhost:3001/api/thoughts/:thoughtId```
