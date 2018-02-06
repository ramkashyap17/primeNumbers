module.exports = {	
	list: function(req, res, next){
		
		var X = req.params.number;
		
		var resultData = {
	    	status: "Success",
	    	code: 1,	    	
	    	result:[]
	    }

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
		    	
		    	X = parseInt(X);		    	
	    		
	    		return true		    	
		    }
	    }

	    if(isValid(X) == false){
	    	resultData.status = "Invalid input value. Please pass a valid number (n): 2 <= n < 13121"
	    	resultData.code = 0

	    	res.json(resultData);
	    }	    
	    else{	    		    	
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
	}
}