var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/subscribed', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({ok:"tested"})
});

router.post('/subscribe', function(req, res, next) {
  // res.send('respond with a resource');
  console.log(req.body)
  res.json({ok:req.body})
});


module.exports = router;
