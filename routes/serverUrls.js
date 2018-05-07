var express = require('express');
var router = express.Router();

/* GET serverUrls listing. */
router.get('/', function(req, res, next) {
  console.log('aa=======', process.env.KALIX_SERVER_URL);
  var config = {"kalix_server_url": process.env.KALIX_SERVER_URL || "http://localhost:8181"};
  res.send(config);
});

module.exports = router;
