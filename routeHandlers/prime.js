function isValid(num){
	num = parseInt(num);
	if(
		(
			num < 2 ||
			num > 13121 ||
			Number.isInteger(num) == false ||
			num == '' ||
			num == null ||
			num == undefined
		)
	)
	{	    		
    	return false
    }
    else{
		return true		    	
    }
}

module.exports = {	
	list: function(req, res, next){
		
		var X = req.params.number;
		
		var resultData = {
	    	status: "Success",
	    	code: 1,
	    	algorithm: "Brute Force",	    	
	    	result:[]	    	
	    }	    

	    if(isValid(X) == false){
	    	resultData.status = "Invalid input value. Please pass a valid number (n): 2 <= X < 13121"
	    	resultData.code = 0	    	
	    	res.json(resultData);
	    }	    
	    else{	   
			X = parseInt(X);		    	 		    	
	    	for (var count = 0; count <= X; count++) {
			    var notPrime = false;		    
			    for (var x = 2; x <= count; x++) {
			        if (count%x===0 && x!==count) {
			            notPrime = true;
			        }
			    }		    
			    if (notPrime === false) {
			    	if(count > 1)
			    		resultData.result.push(count)		        
			    }		    
			}

			res.json(resultData);
	    }		
	},
	listWithSqrtAlgorithm: function(req, res, next){
		
		var X = req.params.number;
		
		var resultData = {
	    	status: "Success",
	    	code: 1,
	    	algorithm: "SQRT algorithm",
	    	result:[]
	    }	    

	    if(isValid(X) == false){
	    	resultData.status = "Invalid input value. Please pass a valid number (n): 2 <= X < 13121"
	    	resultData.code = 0	    	
	    	res.json(resultData);
	    }	    
	    else{	  
	    	X = parseInt(X);		    	 		    	  		    		    			    
		    for (var count = 2; count <= X; count++) {		    	
			    var i = 2;

				var isPrime = true;				

				while (i <= Math.sqrt(count))
				{							    			
					if (count % i == 0){			  		
						isPrime = false;				    
						break;
					}	
					++i;				
				}


				if(isPrime)
					resultData.result.push(count)				  				  			  				  					
		    }
			res.json(resultData);
	    }		
	}
}