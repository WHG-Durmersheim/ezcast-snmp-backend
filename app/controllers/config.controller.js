const Config = require('../models/config.model.js');

// Create and Save a new Config
exports.create = (req, res) => {
  // Validate request
  if (!req.body.configName) {
    return res.status(400).send({
      message: "Config configName can not be empty"
    });
  }

  // Create a Config
  const config = new Config({
    configName: req.body.configName,
    wifiPassword: req.body.wifiPassword || null,
    hideSSID: req.body.hideSSID || null,
    streamingSettings: req.body.streamingSettings || null,
    deviceLanguage: req.body.deviceLanguage || null,
    outputResolution: req.body.outputResolution || null,
    maximumSimultaneousClients: req.body.maximumSimultaneousClients || null,
    castcodeSetting: req.body.castcodeSetting || null,
    internetAccessControl: req.body.internetAccessControl || null,
    hidePassword: req.body.hidePassword || null,
    routerOrDirectOnly: req.body.routerOrDirectOnly || null,
    otaURL: req.body.otaURL || null
  });

  // Save Config
  config.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Config."
      });
    });
};

// Retrieve and return all configs from the database.
exports.findAll = (req, res) => {
  Config.find()
    .then(configs => {
      res.send(configs);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving configs."
      });
    });
};

// Find a single config with a configId
exports.findOne = (req, res) => {
  Config.findById(req.params.configId)
    .then(config => {
      if (!config) {
        return res.status(404).send({
          message: "Config not found with id " + req.params.configId
        });
      }
      res.send(config);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Config not found with id " + req.params.configId
        });
      }
      return res.status(500).send({
        message: "Error retrieving config with id " + req.params.configId
      });
    });
};

// Update a config identified by the configId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.configName) {
    return res.status(400).send({
      message: "Config configName can not be empty"
    });
  } else if (!req.body.room) {
    return res.status(400).send({
      message: "Config room can not be empty"
    });
  } else if (!req.body.wifiPassword) {
    return res.status(400).send({
      message: "Config wifiPassword can not be empty"
    });
  } else if (!req.body.hideSSID) {
    return res.status(400).send({
      message: "Config hideSSID can not be empty"
    });
  } else if (!req.body.streamingSettings) {
    return res.status(400).send({
      message: "Config streamingSettings can not be empty"
    });
  } else if (!req.body.deviceLanguage) {
    return res.status(400).send({
      message: "Config deviceLanguage can not be empty"
    });
  } else if (!req.body.outputResolution) {
    return res.status(400).send({
      message: "Config outputResolution can not be empty"
    });
  } else if (!req.body.maximumSimultaneousClients) {
    return res.status(400).send({
      message: "Config maximumSimultaneousClients can not be empty"
    });
  } else if (!req.body.castcodeSetting) {
    return res.status(400).send({
      message: "Config castcodeSetting can not be empty"
    });
  } else if (!req.body.internetAccessControl) {
    return res.status(400).send({
      message: "Config internetAccessControl can not be empty"
    });
  } else if (!req.body.hidePassword) {
    return res.status(400).send({
      message: "Config hidePassword can not be empty"
    });
  } else if (!req.body.routerOrDirectOnly) {
    return res.status(400).send({
      message: "Config routerOrDirectOnly can not be empty"
    });
  }

  // Find Config and update it with the request body
  Config.findByIdAndUpdate(req.params.configId, {
      configName: req.body.configName,
      wifiPassword: req.body.wifiPassword,
      hideSSID: req.body.hideSSID,
      streamingSettings: req.body.streamingSettings,
      deviceLanguage: req.body.deviceLanguage,
      outputResolution: req.body.outputResolution,
      maximumSimultaneousClients: req.body.maximumSimultaneousClients,
      castcodeSetting: req.body.castcodeSetting,
      internetAccessControl: req.body.internetAccessControl,
      hidePassword: req.body.hidePassword || true,
      routerOrDirectOnly: req.body.routerOrDirectOnly,
      otaURL: req.body.otaURL || ""
    }, {
      new: true
    })
    .then(config => {
      if (!config) {
        return res.status(404).send({
          message: "Config not found with id " + req.params.configId
        });
      }
      res.send(config);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Config not found with id " + req.params.configId
        });
      }
      return res.status(500).send({
        message: "Error updating Config with id " + req.params.configId
      });
    });
};

// Delete a config with the specified configId in the request
exports.delete = (req, res) => {
  Config.findByIdAndRemove(req.params.configId)
    .then(config => {
      if (!config) {
        return res.status(404).send({
          message: "Config not found with id " + req.params.configId
        });
      }
      res.send({
        message: "Config deleted successfully!"
      });
    }).catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: "Config not found with id " + req.params.configId
        });
      }
      return res.status(500).send({
        message: "Could not delete config with id " + req.params.configId
      });
    });
};
