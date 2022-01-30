const express = require('express');
const router = express.Router();
const request = require('request');
const url = 'http://www.mocky.io/v2/5ba8efb23100007200c2750c';

router.get('/search', (req, res) => [
  request.get(url, { json: true }, (err, response, body) => {
    if (!err) res.status(200).send(body);
    else res.status(404).send(err);
  }),
]);

module.exports = router;
