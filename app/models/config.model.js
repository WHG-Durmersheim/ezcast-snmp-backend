const mongoose = require('mongoose');

const configSchema = mongoose.Schema({
	configName: String,
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
	otaURL: String
})

module.exports = mongoose.model('Config', configSchema);
