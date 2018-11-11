const argv = process.argv.slice(2);
const api = require('./include');
const word_of_day = require('./words');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('arguments', argv, argv.length);

if (argv.length == 0) {
    // ****  Word of the Day Full Dict  *** //
    var word = "";
    word_of_day.getwords().then(async (res) => {
        if (res && res instanceof Array && res.length > 0) {
            var index = Math.ceil(Math.random() * (39 - 0) + 0);
            console.log(index);
            console.log('Word of the day- "' + res[index].text + '"');
            console.log("");
            detailsOfWord(res[index].text);
        } else {
            console.log('Some error occured! please try again.')
        }
    });

    rl.close();
} else if (argv.length == 1) {
    // ****  all the details  *** //
    if (argv[0] == "play") {

        word_of_day.getwords().then(async (res) => {
            if (res && res instanceof Array && res.length > 0) {
                var index = Math.ceil(Math.random() * (39 - 0) + 0);
               
                play(res[index].text);
            } else {
                console.log('Some error occured! please try again.');
                rl.close();
            }
        });
        // rl.close();
    } else {
        console.log('definitions of ' + argv[0] + ":");
        console.log("");
        detailsOfWord(argv[0]);

    }
} else if (argv.length == 2) {
    if (argv[0] == 'def') {
        console.log('definitions of ' + argv[1] + ":");
        console.log("");
        api.getDef(argv[1]).then(async (res) => {
            if (res && res instanceof Array && res.length > 0) {
                res.forEach(element => {
                    console.log(element + ".");
                });
            } else {
                console.log('Some error occured! please try again.')
            }
            rl.close();
        });

    } else if (argv[0] == 'syn') {

        api.getSyn(argv[1]).then(async (res) => {
            if (res && res instanceof Array && res.length > 0) {
                console.log('synonyms of ' + argv[1] + " :");
                console.log("");
                var synms = "";
                res.forEach(element => {
                    if (synms == "")
                        synms = element;
                    synms = synms + ", " + element;
                });
                console.log(synms);
            } else {
                console.log('Some error occured! please try again.')
            }
            rl.close();
        });
    } else if (argv[0] == 'ant') {

        api.getAnt(argv[1]).then(async (res) => {

            if (res && res instanceof Array && res.length > 0) {
                console.log('antonyms of ' + argv[1] + " :");
                console.log("");
                var ants = "";
                res.forEach(ant => {
                    if (ants == "")
                        ants = ant;
                    ants = ants + ", " + ant;
                });
                console.log(ants);
            } else {
                console.log('Some error occured! please try again.')
            }
            rl.close();
        }).catch((err) => {
            console.log("not found antynoms");
            rl.close();
        });

    } else if (argv[0] == 'ex') {
        api.getExamples(argv[1]).then(async (res) => {
            if (res && res instanceof Array && res.length > 0) {
                console.log('Examples of ' + argv[1]);
                res.forEach(element => {
                    console.log(element);
                });
            } else {
                console.log('Some error occured! please try again.')
            }
            rl.close();
        });
    } else if (argv[0] == 'dict') {
        console.log('definitions of ' + argv[1] + ":");
        console.log("");
        detailsOfWord(argv[1]);
    } else if (argv[0] == 'play') {

    }
} else {
    console.log("If the word has spaces in between,enter the word in quotes");
}

function detailsOfWord(word) {

    api.getDef(word).then(async (res) => {
        if (res && res instanceof Array && res.length > 0) {
            console.log('definitions of ' + word + ":");
            console.log("");
            res.forEach(element => {
                console.log(element);
            });
        } else {
            console.log('Some error occured! please try again.')
        }
        api.getSyn(word).then(async (res1) => {
            console.log("");
            if (res1 && res1 instanceof Array && res1.length > 0) {
                console.log('synonyms of ' + word + " :");
                console.log("");
                var synms = "";
                res1.forEach(element => {
                    if (synms == "")
                        synms = element;
                    synms = synms + ", " + element;
                });
                console.log(synms);

            } else {
                console.log('Some error occured! please try again.')
            }

            api.getAnt(word).then(async (res3) => {
                console.log("");
                if (res3 && res3 instanceof Array && res3.length > 0) {
                    console.log('antonyms of ' + word + " :");
                    console.log("");
                    var ants = "";
                    res3.forEach(ant => {
                        if (ants == "")
                            ants = ant;
                        ants = ants + ", " + ant;
                    });
                    console.log(ants);
                } else {
                    console.log('Some error occured! please try again.')
                }
                api.getExamples(word).then(async (res4) => {
                    console.log("");
                    if (res4 && res4 instanceof Array && res4.length > 0) {
                        console.log('Examples of ' + word + ":");
                        console.log("");

                        res4.forEach(ex => {
                            console.log(ex + ".");
                        });
                        console.log("");
                    } else {
                        console.log('Some error occured! please try again.')
                    }
                    rl.close();
                }).catch((err) => {
                    console.log("not found examples");
                    rl.close();
                });
            }).catch((err) => {
                console.log("not found antynoms");
                rl.close();
            });
        }).catch((err) => {
            console.log("not found synonyms");
            rl.close();
        });
    }).catch((err) => {
        console.log("not found definition");
        rl.close();
    });
}


function play(word) {
    api.getDef(word).then(async (res) => {
        if (res && res instanceof Array && res.length > 0) {
            console.log('definition of the word :');
            console.log("");
            console.log(res[0]);
            api.getSyn(word).then(async (res1) => {
                console.log("");
                if (res1 && res1 instanceof Array && res1.length > 0) {
                    console.log('synonym  of the word:');
                    console.log("");
                    console.log(res1[0]);
                } else {
                    console.log('no synonyms found');
                }

                api.getAnt(word).then(async (res3) => {
                    console.log("");
                    if (res3 && res3 instanceof Array && res3.length > 0) {
                        console.log('antonym  of the word: ');
                        console.log(res3[0]);
                        console.log("can you guess these details belongs to which word?");
                         ques(word,res,res1,res3);

                    } 

                }).catch((err) => {
                    console.log("not found antynoms");
                    rl.close();
                });;
            }).catch((err) => {
                console.log("not found synonyms");
                rl.close();
            });;
        } else {
            console.log('Some error occured in ! please try again.')
        }
    }).catch((err) => {
        console.log("not found definition");
        rl.close();
    });;
}

function ques(word,def,syn,anty) {
    rl.question("enter your word here:   ", function (answer1) {
      
        var synms = syn.splice(1);
        if (answer1 == word || (synms.indexOf(answer1) != -1)) {
            console.log("Bingo, You are right");
            rl.close();
        } else {
            rl.question(" Wrong,Please try agiain: ", function (answer2) {
                if (answer2 == word || (synms.indexOf(answer2) != -1)) {
                    console.log("Bingo, You are right");
                    rl.close();
                }else {
                    console.log('Here is the another hint of synonym: '+synms[1]);
                    synms = syn.splice(2);
                    rl.question("Now guess!:  ", function (answer3) {
                        if (answer3 == word || (synms.indexOf(answer3) != -1)) {
                            console.log("Bingo, You are right");
                            rl.close();
                        }else {
                            console.log('wrong and here is the details of the word: "' + word+ '"');
                            detailsOfWord(word);
                            rl.close();
                        }
                    });
                }
            });
        }

        // rl.question(" enter your word here", function (answer) {
        // });
        // rl.close();
    })
}