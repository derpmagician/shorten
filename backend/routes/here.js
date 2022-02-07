const { Router } = require('express');
const router = Router();

const Url = require('../models/Url');

router.get('/', async (req, res) => {
	const urls = await Url.find().sort('-_id');
	res.json(urls);
	// res.json("indexes")
  });

module.exports = router;