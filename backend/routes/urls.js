const { Router } = require('express');
const router = Router();
const validUrl = require('valid-url');
// const shortid = require('shortid');
const { nanoid } = require('nanoid');

const path = require('path');

const Url = require('../models/Url');
// http://localhost:3000/api/urls/shorten
// Converts longUrl to shortUrl

// This list all the db elements
router.get('/shorten', async (req, res) => {
  const urls = await Url.find().sort('-_id');
	res.json(urls);
});

// User post the long url
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.BASE_URL;

  // Check base url
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base url');
  }

  // Create url code
  const urlCode = nanoid();

  // Check long url
  if (validUrl.isUri(longUrl)) {
    try {
			// Search in DB
      let url = await Url.findOne({ longUrl });
			// If found return long url else create url with the id
      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + '/' + urlCode;
				// Insert to the db
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          created_at: new Date()
        });

        await url.save();

        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  } else {
    res.status(401).json('Invalid long url');
  }
});

module.exports = router;