const argv = process.argv.slice(2);
const api = require('./include');
console.log('arguments', argv);

if (argv.length == 0) {
    // ****  Word of the Day Full Dict  *** //
} if (argv.length == 1) {
    // ****  all the details  *** //
}else {
    if (argv[0] == 'def') {

        api.getDef(argv[1]);

    } else if (argv[0] == 'syn') {
        api.getSyn(argv[1]);
    } else if (argv[0] == 'ant') {
        api.getAnt(argv[1]);
    } else if (argv[0] == 'ex') {

    } else if (argv[0] == 'dict') {

    }else if (argv[0] == 'play') {

    }
}