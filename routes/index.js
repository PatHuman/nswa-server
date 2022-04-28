var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/subscribe', function(req, res, next) {
  res.render('up and running');
  // res.json({ok:"tested"})
});

module.exports = router;
