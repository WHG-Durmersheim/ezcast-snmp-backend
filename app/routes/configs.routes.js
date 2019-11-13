// Routes of the Config REST endpoint

module.exports = (app) => {
    const configs = require('../controllers/config.controller.js');

    // Create a new Config
    app.post('/api/v1/configs', configs.create);

    // Retrieve all configs
    app.get('/api/v1/configs', configs.findAll);

    // Retrieve a single Config with configId
    app.get('/api/v1/configs/:configId', configs.findOne);

    // Update a Config with configId
    app.put('/api/v1/configs/:configId', configs.update);

    // Delete a Config with configId
    app.delete('/api/v1/configs/:configId', configs.delete);
}
