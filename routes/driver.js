var express = require('express');
var router = express.Router();

// Example route
router.get('/', function(req, res) {
  res.send('Driver main page');
});

router.post('/login', function(req, res) {
    
})

module.exports = router;