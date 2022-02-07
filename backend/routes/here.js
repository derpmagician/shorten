const { Router } = require('express');
const router = Router();

const Url = require('../models/Url');

// This is just an extra example that lists all the db elements
router.get('/', async (req, res) => {
	const urls = await Url.find().sort('-_id');
	res.json(urls);
	// res.json("indexes")
  });

module.exports = router;