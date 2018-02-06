# primeNumbers
Javascript module for listing prime numbers

#### To Install
npm install

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


### To run the project 

npm start
