const { Schema, model } = require('mongoose');

const UrlSchema = new Schema({
	urlCode: { type: String, required: false },
	longUrl: { type: String, required: false },
	shortUrl: { type: String, required: false },
	created_at: { type: Date, default: Date.now }
});

module.exports = model('Url', UrlSchema);