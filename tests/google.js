var expect  = require('chai').expect;
var request = require('request');
var config = require('../config/config');

describe('Second google search result for query Q(While Q is Elon Musk): ', function() {	
	it('Google search for query: "Elon Musk"', function(done) {
	    request(config.stagingURL + '/google/search/elon%20musk' , function(error, res, body) {	    	
	    	var response = JSON.parse(res.body);        	

	    	expect(res.statusCode).to.equal(200)
	    	
	    	expect(response.status).to.equal('Success')    	
	    	expect(response.result).to.not.equal([])    	
	        
	        done()
	    });
	});
});

describe('Second google search result for query Q(While Q is sdkfjs;dafjasld13412342341234123): ', function() {	
	it('Google search for query: sdkfjs;dafjasld13412342341234123', function(done) {
	    request(config.stagingURL + '/google/search/sdkfjs;dafjasld13412342341234123' , function(error, res, body) {	    	
	    	var response = JSON.parse(res.body);        	

	    	expect(res.statusCode).to.equal(200)
	    	
	    	expect(response.code).to.equal(0)    	
	    	expect(response.result).to.deep.equal([])    	
	        
	        done()
	    });
	});
});
