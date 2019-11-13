const EZCast = require('../models/ezcast.model.js');

// Create and Save a new EZCast
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    return res.status(400).send({
      message: "EZCast name can not be empty"
    });
  } else if (!req.body.mainIP) {
    return res.status(400).send({
      message: "EZCast mainIP can not be empty"
    });
  }

  // Create a EZCast
  const ezcast = new EZCast({
    name: req.body.name,
    room: req.body.room || null,
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
    otaURL: req.body.otaURL || null,
    mainIP: req.body.mainIP,
    firmwareVersion: req.body.firmwareVersion || null,
    latestVersionAvailable: req.body.latestVersionAvailable || null,
    numberOfLoggedInUsers: req.body.numberOfLoggedInUsers || null,
    internetConnectionStatus: req.body.internetConnectionStatus || null,
    isReachable: req.body.isReachable || null,
    needsConfigUpdate: req.body.needsConfigUpdate || null
  });

  // Save EZCast
  ezcast.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the EZCast."
      });
    });
};

// Retrieve and return all ezcasts from the database.
exports.findAll = (req, res) => {
  EZCast.find()
    .then(ezcasts => {
      res.send(ezcasts);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving ezcasts."
      });
    });
};

// Find a single ezcast with a ezcastId
exports.findOne = (req, res) => {
  EZCast.findById(req.params.ezcastId)
    .then(ezcast => {
      if (!ezcast) {
        return res.status(404).send({
          message: "EZCast not found with id " + req.params.ezcastId
        });
      }
      res.send(ezcast);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "EZCast not found with id " + req.params.ezcastId
        });
      }
      return res.status(500).send({
        message: "Error retrieving ezcast with id " + req.params.ezcastId
      });
    });
};

// Update a ezcast identified by the ezcastId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.name) {
    return res.status(400).send({
      message: "EZCast name can not be empty"
    });
  } else if (!req.body.room) {
    return res.status(400).send({
      message: "EZCast room can not be empty"
    });
  } else if (!req.body.wifiPassword) {
    return res.status(400).send({
      message: "EZCast wifiPassword can not be empty"
    });
  } else if (!req.body.hideSSID) {
    return res.status(400).send({
      message: "EZCast hideSSID can not be empty"
    });
  } else if (!req.body.streamingSettings) {
    return res.status(400).send({
      message: "EZCast streamingSettings can not be empty"
    });
  } else if (!req.body.deviceLanguage) {
    return res.status(400).send({
      message: "EZCast deviceLanguage can not be empty"
    });
  } else if (!req.body.outputResolution) {
    return res.status(400).send({
      message: "EZCast outputResolution can not be empty"
    });
  } else if (!req.body.maximumSimultaneousClients) {
    return res.status(400).send({
      message: "EZCast maximumSimultaneousClients can not be empty"
    });
  } else if (!req.body.castcodeSetting) {
    return res.status(400).send({
      message: "EZCast castcodeSetting can not be empty"
    });
  } else if (!req.body.internetAccessControl) {
    return res.status(400).send({
      message: "EZCast internetAccessControl can not be empty"
    });
  } else if (!req.body.hidePassword) {
    return res.status(400).send({
      message: "EZCast hidePassword can not be empty"
    });
  } else if (!req.body.routerOrDirectOnly) {
    return res.status(400).send({
      message: "EZCast routerOrDirectOnly can not be empty"
    });
  } else if (!req.body.mainIP) {
    return res.status(400).send({
      message: "EZCast mainIP can not be empty"
    });
  }

  // Find EZCast and update it with the request body
  EZCast.findByIdAndUpdate(req.params.ezcastId, {
      name: req.body.name,
      room: req.body.room,
      wifiPassword: req.body.wifiPassword,
      hideSSID: req.body.hideSSID,
      streamingSettings: req.body.streamingSettings,
      deviceLanguage: req.body.deviceLanguage,
      outputResolution: req.body.outputResolution,
      maximumSimultaneousClients: req.body.maximumSimultaneousClients,
      castcodeSetting: req.body.castcodeSetting,
      internetAccessControl: req.body.internetAccessControl,
      hidePassword: req.body.hidePassword,
      routerOrDirectOnly: req.body.routerOrDirectOnly,
      otaURL: req.body.otaURL || "",
      mainIP: req.body.mainIP,
      firmwareVersion: req.body.firmwareVersion || "",
      latestVersionAvailable: req.body.latestVersionAvailable || "",
      numberOfLoggedInUsers: req.body.numberOfLoggedInUsers || "",
      internetConnectionStatus: req.body.internetConnectionStatus || true,
      isReachable: req.body.isReachable || true,
      needsConfigUpdate: req.body.needsConfigUpdate || true
    }, {
      new: true
    })
    .then(ezcast => {
      if (!ezcast) {
        return res.status(404).send({
          message: "EZCast not found with id " + req.params.ezcastId
        });
      }
      res.send(ezcast);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "EZCast not found with id " + req.params.ezcastId
        });
      }
      return res.status(500).send({
        message: "Error updating EZCast with id " + req.params.ezcastId
      });
    });
};

// Delete a ezcast with the specified ezcastId in the request
exports.delete = (req, res) => {
  EZCast.findByIdAndRemove(req.params.ezcastId)
    .then(ezcast => {
        if(!ezcast) {
            return res.status(404).send({
                message: "EZCast not found with id " + req.params.ezcastId
            });
        }
        res.send({message: "EZCast deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "EZCast not found with id " + req.params.ezcastId
            });
        }
        return res.status(500).send({
            message: "Could not delete ezcast with id " + req.params.ezcastId
        });
    });
};
