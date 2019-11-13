// Routes of the User REST endpoint

module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/api/v1/users', users.create);

    // Retrieve all Users
    app.get('/api/v1/users', users.findAll);

    // Retrieve a single User with userId
    app.get('/api/v1/users/:userId', users.findOne);

    // Update a User with userId
    app.put('/api/v1/users/:userId', users.update);

    // Delete a User with userId
    app.delete('/api/v1/users/:userId', users.delete);
}
