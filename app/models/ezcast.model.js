const mongoose = require('mongoose');

const ezcastSchema = mongoose.Schema({
	name: String,
	room: String,
	wifiPassword: String,
	hideSSID: Boolean,
	streamingSettings: Boolean,
	deviceLanguage: Number,
	outputResolution: Number,
	maximumSimultaneousClients: Number,
	castcodeSetting: Number,
	internetAccessControl: Number,
	hidePassword: Boolean,
	routerOrDirectOnly: Number,
	otaURL: String,
	mainIP: String,
	firmwareVersion: String,
	latestVersionAvailable: String,
	numberOfLoggedInUsers: Number,
	internetConnectionStatus: Boolean,
	isReachable: Boolean,
	needsConfigUpdate: Boolean
})

module.exports = mongoose.model('EZcast', ezcastSchema);
