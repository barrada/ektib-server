var express = require('express');
var router = express.Router();

/* GET Registration page. */

router.get('/', function(req, res, next) {
  res.status(200).json({'index': { page: 'registration' }});
});

module.exports = router;