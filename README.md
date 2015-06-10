Synonym
========================

### Install an app

Run the following command in root directory of an app in command prompt.

###### *Install node packages*

server/ node install

### Run an app

###### *Run Server*

Run the following command in root directory of an app in command prompt.

server/ node server.js

You can see the port number in command prompt after sucessfull run

You can change the settings in server/config/config.js file

### *API Available*

###### *Create Synonyms*

	POST: http://localhost:8080/createSynonyms

	{
	    "originalWord": "classificationId",
	    "synonyms": [
	        "classification.",
	        "classification",
	        "classificationNo."
	    ]
	}

###### *Get All Synonyms*

	GET: http://localhost:8080/getSynonyms

###### *Update Synonyms*

	PUT: http://localhost:8080/updateSynonyms

	{
        "originalWord": "classificationId",
        "synonyms": [
            "classification",
            "classificationNo."
        ]
	}



