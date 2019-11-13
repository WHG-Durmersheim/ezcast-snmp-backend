const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Set up express app
const app = express()

// Configure cross origin
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

// Set port the api should listen on
const port = 9000

// Configure app to use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add Routers
require('./app/routes/status.routes.js')(app);
require('./app/routes/configs.routes.js')(app);
require('./app/routes/ezcasts.routes.js')(app);
require('./app/routes/users.routes.js')(app);

mongoose.connect('mongodb://localhost:27017/ezcast-snmp-backend', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
  .then(() => {
    console.log('Connection to mongoDB was successfully made.');
    app.listen(port, () => {
	console.log('Server is now running API and listening on port ' + port)
	})
  }).catch(() => {
    console.log('Mongodb connection failed.');
  })
