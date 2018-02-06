var express = require('express');
var router = express.Router();

var primeNumber = require('../routeHandlers/prime'); 
var google = require('../routeHandlers/google'); 

//you can next enhance this module with localhost/prime/getLargest 
//												 /prime/check...


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/prime/list/:number', function(req, res, next){
	primeNumber.list(req, res);	
})

router.get('/prime/sqrt/:number', function(req, res, next){
	console.log('Entered here')
	primeNumber.listWithSqrtAlgorithm(req, res);	
})

router.get('/google/search/:query', function(req, res, next){
	google.searchString(req, res);	
})

module.exports = router;
