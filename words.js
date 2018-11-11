wordArr = [{
        "id": "cleanish",
        "word": "cleanish"
    },
    {
        "id": "clean-limbed",
        "word": "clean-limbed"
    },
    {
        "id": "clean-living",
        "word": "clean-living"
    },
    {
        "id": "cleanly",
        "word": "cleanly"
    },
    {
        "id": "clean-shaven",
        "word": "clean-shaven"
    },
    {
        "id": "cleansing",
        "word": "cleansing"
    },
    {
        "id": "clear",
        "word": "clear"
    },
    {
        "id": "clearable",
        "word": "clearable"
    },
    {
        "id": "clear-cut",
        "word": "clear-cut"
    },
    {
        "id": "clear-eyed",
        "word": "clear-eyed"
    },
    {
        "id": "expert",
        "language": "en",
        "text": "expert"
    },
    {
        "id": "master",
        "language": "en",
        "text": "master"
    },
    {
        "id": "genius",
        "language": "en",
        "text": "genius"
    },
    {
        "id": "virtuoso",
        "language": "en",
        "text": "virtuoso"
    },
    {
        "id": "maestro",
        "language": "en",
        "text": "maestro"
    },
    {
        "id": "professional",
        "language": "en",
        "text": "professional"
    },
    {
        "id": "adept",
        "language": "en",
        "text": "adept"
    },
    {
        "id": "past_master",
        "language": "en",
        "text": "past master"
    },
    {
        "id": "doyen",
        "language": "en",
        "text": "doyen"
    },
    {
        "id": "champion",
        "language": "en",
        "text": "champion"
    },
    {
        "id": "star",
        "language": "en",
        "text": "star"
    },
    {
        "id": "winner",
        "language": "en",
        "text": "winner"
    },
    {
        "id": "great",
        "language": "en",
        "text": "great"
    },
    {
        "id": "terrific",
        "language": "en",
        "text": "terrific"
    },
    {
        "id": "tremendous",
        "language": "en",
        "text": "tremendous"
    },
    {
        "id": "superb",
        "language": "en",
        "text": "superb"
    },
    {
        "id": "smashing",
        "language": "en",
        "text": "smashing"
    },
    {
        "id": "fantastic",
        "language": "en",
        "text": "fantastic"
    },
    {
        "id": "stellar",
        "language": "en",
        "text": "stellar"
    },
    {
        "id": "sensational",
        "language": "en",
        "text": "sensational"
    },
    {
        "id": "fabulous",
        "language": "en",
        "text": "fabulous"
    },
    {
        "id": "fab",
        "language": "en",
        "text": "fab"
    },
    {
        "id": "crack",
        "language": "en",
        "text": "crack"
    },
    {
        "id": "hotshot",
        "language": "en",
        "text": "hotshot"
    },
    {
        "id": "a1",
        "language": "en",
        "text": "A1"
    },
    {
        "id": "mean",
        "language": "en",
        "text": "mean"
    },
    {
        "id": "demon",
        "language": "en",
        "text": "demon"
    },
    {
        "id": "awesome",
        "language": "en",
        "text": "awesome"
    },
    {
        "id": "magic",
        "language": "en",
        "text": "magic"
    },
    {
        "id": "wicked",
        "language": "en",
        "text": "wicked"
    },
    {
        "id": "tip-top",
        "language": "en",
        "text": "tip-top"
    },
    {
        "id": "top-notch",
        "language": "en",
        "text": "top-notch"
    }
];


const q = require('q');

module.exports = {
    getwords: function () {

        var _self = this;
        var deferred = q.defer();
        if (wordArr.length) {
            deferred.resolve(wordArr);
        } else {
            deferred.reject(wordArr);
        }
        return deferred.promise;
    }
}