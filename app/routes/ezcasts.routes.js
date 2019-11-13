// Routes of the EZCast REST endpoint

module.exports = (app) => {
    const ezcasts = require('../controllers/ezcast.controller.js');

    // Create a new EZCast
    app.post('/api/v1/ezcasts', ezcasts.create);

    // Retrieve all EZCasts
    app.get('/api/v1/ezcasts', ezcasts.findAll);

    // Retrieve a single EZCast with ezcastId
    app.get('/api/v1/ezcasts/:ezcastId', ezcasts.findOne);

    // Update a EZCast with ezcastId
    app.put('/api/v1/ezcasts/:ezcastId', ezcasts.update);

    // Delete a EZCast with ezcastId
    app.delete('/api/v1/ezcasts/:ezcastId', ezcasts.delete);
}
