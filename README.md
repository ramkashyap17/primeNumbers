# primeNumbers
Javascript module for listing prime numbers

#### To Install
Clone the repo and run npm install

## RESTful API documentation

### Prime numbers

#### List prime numbers (Brute Force)

GET http://startupsoci.com:1031/prime/list/:number?algorithm=name

##### example Request

http://startupsoci.com:1031/prime/list/60

##### example Reponse

{
	"status": "Success",
	"code": 1,
	"algorithm": "Brute Force",
	"result": [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
}

##### example Request

http://startupsoci.com:1031/prime/list/60?algorithm=sqrt

##### example Reponse

{
	"status": "Success",
	"code": 1,
	"algorithm": "SQRT algorithm",
	"result": [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
}



##### example Error Request

http://startupsoci.com:1031/prime/list/50001

##### example Error Reponse

{
	"status": "Invalid input value. Please pass a valid number (n): 2 <= X < 50,000",
	"code": 0,
	"algorithm": "Brute Force",
	"result": []
}

### Google Search

GET http://startupsoci.com:1031/google/search/:query

##### example Request

http://startupsoci.com:1031/google/search/elon%20musk

##### example Reponse

{
	"status": "Success",
	"code": 1,
	"result": [{
		"title": "Elon Musk - Wikipedia",
		"link": "https://en.wikipedia.org/wiki/Elon_Musk",
		"description": "Elon Reeve Musk is a South African-American business magnate, investor, \nengineer, and inventor. He is the founder, CEO, and lead designer of SpaceX; co\n-founder, CEO, and product architect of Tesla Inc.; co-chairman of OpenAI; \nfounder and CEO of Neuralink, and founder of The Boring Company. He is also a \nco-founder ...",
		"href": "https://en.wikipedia.org/wiki/Elon_Musk"
	}]
}

### To run the project 

npm start

### To run the unit tests 

npm test
