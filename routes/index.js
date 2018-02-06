var express = require('express');
var router = express.Router();

var primeNumber = require('../routeHandlers/prime'); 
//you can next enhance this module with localhost/prime/getLargest 
//												 /prime/check...

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/prime/list/:number', function(req, res, next){
	primeNumber.list(req, res);
})

module.exports = router;
