var google = require('google')

module.exports = {	
	searchString: function(req, res, next){
		
		var Q = req.params.query;
		
		google.resultsPerPage = 10
		var nextCounter = 0
		 
		google(Q, function (err, res){
		  if (err) console.error(err)
		 
		  for (var i = 0; i < res.links.length; ++i) {
		    var link = res.links[i];
		    console.log(link.title + ' - ' + link.href)
		    console.log(link.description + "\n")
		  }
		 
		  if (nextCounter < 4) {
		    nextCounter += 1
		    if (res.next) res.next()
		  }
		})	    	    
	}
}