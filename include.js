const request = require('request');

const reqstHeaders = {
    url: '',
    headers: {
        "Accept": "application/json",
        "app_id": "f1afbff7",
        "app_key": "9c66e8e224d0ab1dc4f547280c601b9a"
    }
}
module.exports = {
    getDef(word) {
        reqstHeaders.url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/' + word;
        request.get(reqstHeaders, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var body = JSON.parse(body);
                console.log('definitions of ' + word);

                const results = body.results[0].lexicalEntries;

                for (var i = 0; i < results.length; i++) {
                    var entries = results[i].entries;
                    for (var j = 0; j < entries.length; j++) {
                        var senses = entries[j].senses;
                        senses.forEach(element => {
                            if (element.hasOwnProperty("domains"))
                                console.log("domain: " + element.domains + "- definition: " + element.definitions);
                            else
                                console.log("definition: " + element.definitions);
                        });
                    }

                }

            }
        });
    },


    getSyn(word) {
        reqstHeaders.url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/' + word + '/synonyms';
        request.get(reqstHeaders, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var body = JSON.parse(body);
                console.log('synonyms of ' + word);

                const results = body.results[0].lexicalEntries;

                for (var i = 0; i < results.length; i++) {
                    var entries = results[i].entries;
                    console.log('category: ' + results[i].lexicalCategory);
                    for (var j = 0; j < entries.length; j++) {
                        var senses = entries[j].senses;

                        senses.forEach(element => {
                            var synonyms = element.synonyms;
                            // console.log(synonyms);
                            var synms = "";
                            synonyms.forEach(syn => {

                                if (synms == "")
                                    synms = syn.text;
                                synms = synms + ", " + syn.text;
                                /*
                                 syn.forEach(str => {
                                    
                                 });
                                 if (syn.hasOwnProperty("regions")) {
                                     console.log(syn.regions);
                                     console.log(synms);
                                 }
                                 */

                            });
                            console.log(synms);
                        });
                    }

                }
            }
        });
    },

    getAnt(word) {
        reqstHeaders.url = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/' + word + '/antonyms';
        request.get(reqstHeaders, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var body = JSON.parse(body);
                console.log('antonyms of ' + word);

                const results = body.results[0].lexicalEntries;

                for (var i = 0; i < results.length; i++) {
                    var entries = results[i].entries;
                    console.log('category: ' + results[i].lexicalCategory);
                    for (var j = 0; j < entries.length; j++) {
                        var senses = entries[j].senses;
                        senses.forEach(element => {
                            
                            var anty = element.antonyms;
                            var ants = "";
                            anty.forEach(ant => {
                                if (ants == "")
                                        ants = ant.text;
                                ants = ants + ", " + ant.text;
                                

                            });
                            console.log(ants);
                        });
                    }

                }

            }
        });
    }

    // 'https://api.wordnik.com/v4/word.json/sorry/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=' + YOURAPIKEY
}