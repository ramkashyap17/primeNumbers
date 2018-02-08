var google = require('google')

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
			
			if (err){
				resultData.status = JSON.stringify(err)
				resultData.code = 0								
			} 			
		 	else if(response.links && response.links[2]){
		 		resultData.result.push(response.links[2]);
		 	}			
		 	else{
		 		resultData.status = "No search results found for this query."
				resultData.code = 0
		 	}
			res.json(resultData)		  
		})	    	    
	}
}