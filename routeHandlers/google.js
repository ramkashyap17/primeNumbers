var google = require('google')
google.tld = 'in'

module.exports = {	
	searchString: function(req, res, next){
		
		var Q = req.params.query;		
		
		google.resultsPerPage = 10
		var nextCounter = 0

		var resultData = {
	    	status: "Success",
	    	code: 1,	    	
	    	result:[]
	    }
		 
		google(Q, function (err, response){
			
			if (err) 
				console.error(err)
		 
			resultData.result.push(response.links[2]);
			res.json(resultData)		  
		})	    	    
	}
}