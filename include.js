const request = require('request');
const q = require('q');
const reqstHeaders = {
    url: '',
    headers: {
        "Accept": "application/json",
        "app_id": "f1afbff7",
        "app_key": "9c66e8e224d0ab1dc4f547280c601b9a"
    }
}
module.exports = {
    getDef: function (word) {
        reqstHeaders.url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/' + word;
        var _self = this;
        var deferred = q.defer();
        var _self = this;
        var deferred = q.defer();
        request.get(reqstHeaders, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var body = JSON.parse(body);

                const results = body.results[0].lexicalEntries;
                var defArr = []
                for (var i = 0; i < results.length; i++) {
                    var entries = results[i].entries;
                    for (var j = 0; j < entries.length; j++) {
                        var senses = entries[j].senses;
                        senses.forEach(element => {
                            defArr.push(element.definitions[0]);

                        });

                    }
                }
                deferred.resolve(defArr);

            } else {
                if (response.statusCode == 404)
                    console.log('not found');
                console.log(response);
                deferred.reject(response);
            }
        });
        return deferred.promise;
    },


    getSyn(word) {
        var _self = this;
        var deferred = q.defer();
        reqstHeaders.url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/' + word + '/synonyms';
        request.get(reqstHeaders, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var body = JSON.parse(body);

                const results = body.results[0].lexicalEntries;
                var synArr = [];
                for (var i = 0; i < results.length; i++) {
                    var entries = results[i].entries;
                    // console.log('category: ' + results[i].lexicalCategory);
                    for (var j = 0; j < entries.length; j++) {
                        var senses = entries[j].senses;

                        senses.forEach(element => {
                            var synonyms = element.synonyms;
                            // console.log(synonyms);
                            var synms = "";
                            synonyms.forEach(syn => {
                                synArr.push(syn.text);

                            });


                        });

                    }
                }
                deferred.resolve(synArr);
            } else {

                deferred.reject(response);
                console.log(body);
            }
        });
        return deferred.promise;
    },

    getAnt(word) {
        var _self = this;
        var deferred = q.defer();
        var antArr = [];
        reqstHeaders.url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/' + word + '/antonyms';
        request.get(reqstHeaders, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var body = JSON.parse(body);
                const results = body.results[0].lexicalEntries;

                for (var i = 0; i < results.length; i++) {
                    var entries = results[i].entries;
                    // console.log('category: ' + results[i].lexicalCategory);
                    for (var j = 0; j < entries.length; j++) {
                        var senses = entries[j].senses;
                        senses.forEach(element => {

                            var anty = element.antonyms;
                            var ants = "";
                            anty.forEach(ant => {

                                antArr.push(ant.text);
                            });
                            // console.log(ants);

                        });
                        // console.log("");
                    }

                }

                deferred.resolve(antArr);
            } else {
                deferred.reject(response);
                console.log(body);
            }
        });
        return deferred.promise;
    },

    getExamples(word) {
        var _self = this;
        var deferred = q.defer();
        reqstHeaders.url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/' + word;
        request.get(reqstHeaders, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var body = JSON.parse(body);


                const results = body.results[0].lexicalEntries;
                var exArr = [];
                for (var i = 0; i < results.length; i++) {
                    var entries = results[i].entries;

                    for (var j = 0; j < entries.length; j++) {
                        var senses = entries[j].senses;

                        senses.forEach(examp => {
                            // if (examp.hasOwnProperty("domains"))
                            //     console.log("domain: " + examp.domains);
                            if (examp.hasOwnProperty("examples")) {
                                examp.examples.forEach(ex => {

                                    exArr.push(ex.text);
                                });

                            }else{
                               console.log("no examples"); 
                            }

                        });

                    }

                }
                deferred.resolve(exArr);

            } else {
                deferred.reject([]);
                console.log(body);
            }
        });
        return deferred.promise;
    }
    // 'https://api.wordnik.com/v4/word.json/sorry/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=' + YOURAPIKEY
}