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
		  if (err) console.error(err)
		 
			resultData.result.push(response.links[2]);
			res.json(resultData)
		  // for (var i = 0; i < res.links.length; ++i) {
		  //   var link = res.links[i];
		  //   console.log(link.title + ' - ' + link.href)
		  //   console.log(link.description + "\n")



		    // if(i == 2){

		    // }
		  // }
		 
		  // if (nextCounter < 4) {
		  //   nextCounter += 1
		  //   if (res.next) res.next()
		  // }
		})	    	    
	}
}