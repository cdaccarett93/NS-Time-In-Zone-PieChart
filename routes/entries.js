var express = require('express');
var router = express.Router();
var request = require('request');

/* GET entries. */
router.get('/', function(req, res, next) {
  var s = req.query.URL;
  var prefix = 'https://';
  if (s.substr(0, prefix.length) !== prefix) {
    s = prefix + s;
  }
  if (s.substr(-1) != '/') {
    s = s + '/';
  }

  var nsEntries = s + 'api/v1/entries.json?count=288';
  // console.log(nsEntries);
  var results;
  request(nsEntries, function(error, responses, body) {
    if (!error && responses.statusCode == 200) {
      results = JSON.parse(body);
    }
    // console.log('results ', results);
    res.json(results);
  });
});

module.exports = router;
