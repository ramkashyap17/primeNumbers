var expect  = require('chai').expect;
var request = require('request');
var config = require('../config/config');

describe('List prime numbers till X (While X is 10): ', function() {
	it('Brute force Algorithm', function(done) {
	    request(config.stagingURL + '/prime/list/10' , function(error, res, body) {
	    	var response = JSON.parse(res.body);        	

	    	expect(res.statusCode).to.equal(200)
	    	
	    	expect(response.status).to.equal('Success')
	    	expect(response.algorithm).to.equal('Brute Force')
	    	expect(response.result).to.deep.equal([2,3,5,7])    	
	        
	        done();
	    });
	});

	it('SQRT Algorithm', function(done) {
	    request(config.stagingURL + '/prime/list/10?algorithm=sqrt' , function(error, res, body) {
	    	var response = JSON.parse(res.body);        	

	    	expect(res.statusCode).to.equal(200)
	    	
	    	expect(response.status).to.equal('Success')
	    	expect(response.algorithm).to.equal('SQRT algorithm')
	    	expect(response.result).to.deep.equal([2,3,5,7])    	
	        
	        done();
	    });
	});
});

describe('List prime numbers till X (While X is -1): ', function() {
	it('Brute force Algorithm', function(done) {
	    request(config.stagingURL + '/prime/list/-1' , function(error, res, body) {
	    	var response = JSON.parse(res.body);        	

	    	expect(res.statusCode).to.equal(200)
    	
	    	expect(response.code).to.equal(0)
	    	expect(response.algorithm).to.equal('Brute Force')
	    	expect(response.result).to.deep.equal([])    	
	        
	        done();
	    });
	});

	it('SQRT Algorithm', function(done) {
	    request(config.stagingURL + '/prime/list/-1?algorithm=sqrt' , function(error, res, body) {
	    	var response = JSON.parse(res.body);        	

	    	expect(res.statusCode).to.equal(200)
	    	
	    	expect(response.code).to.equal(0)
	    	expect(response.algorithm).to.equal('SQRT algorithm')
	    	expect(response.result).to.deep.equal([])  	
	        
	        done();
	    });
	});
});

describe('List prime numbers till X (While X is 0): ', function() {
	it('Brute force Algorithm', function(done) {
	    request(config.stagingURL + '/prime/list/0' , function(error, res, body) {
	    	var response = JSON.parse(res.body);        	

	    	expect(res.statusCode).to.equal(200)
    	
	    	expect(response.code).to.equal(0)
	    	expect(response.algorithm).to.equal('Brute Force')
	    	expect(response.result).to.deep.equal([])    	
	        
	        done();
	    });
	});

	it('SQRT Algorithm', function(done) {
	    request(config.stagingURL + '/prime/list/0?algorithm=sqrt' , function(error, res, body) {
	    	var response = JSON.parse(res.body);        	

	    	expect(res.statusCode).to.equal(200)
	    	
	    	expect(response.code).to.equal(0)
	    	expect(response.algorithm).to.equal('SQRT algorithm')
	    	expect(response.result).to.deep.equal([])  	
	        
	        done();
	    });
	});
});

describe('List prime numbers till X (While X is 50001): ', function() {
	it('Brute force Algorithm', function(done) {
	    request(config.stagingURL + '/prime/list/50001' , function(error, res, body) {
	    	var response = JSON.parse(res.body);        	

	    	expect(res.statusCode).to.equal(200)
    	
	    	expect(response.code).to.equal(0)
	    	expect(response.algorithm).to.equal('Brute Force')
	    	expect(response.result).to.deep.equal([])    	
	        
	        done();
	    });
	});

	it('SQRT Algorithm', function(done) {
	    request(config.stagingURL + '/prime/list/50001?algorithm=sqrt' , function(error, res, body) {
	    	var response = JSON.parse(res.body);        	

	    	expect(res.statusCode).to.equal(200)
	    	
	    	expect(response.code).to.equal(0)
	    	expect(response.algorithm).to.equal('SQRT algorithm')
	    	expect(response.result).to.deep.equal([])  	
	        
	        done();
	    });
	});
});

describe('List prime numbers till X (While X is abc): ', function() {
	it('Brute force Algorithm', function(done) {
	    request(config.stagingURL + '/prime/list/abc' , function(error, res, body) {
	    	var response = JSON.parse(res.body);        	

	    	expect(res.statusCode).to.equal(200)
    	
	    	expect(response.code).to.equal(0)
	    	expect(response.algorithm).to.equal('Brute Force')
	    	expect(response.result).to.deep.equal([])    	
	        
	        done();
	    });
	});

	it('SQRT Algorithm', function(done) {
	    request(config.stagingURL + '/prime/list/abc?algorithm=sqrt' , function(error, res, body) {
	    	var response = JSON.parse(res.body);        	

	    	expect(res.statusCode).to.equal(200)
	    	
	    	expect(response.code).to.equal(0)
	    	expect(response.algorithm).to.equal('SQRT algorithm')
	    	expect(response.result).to.deep.equal([])  	
	        
	        done();
	    });
	});
});