const information = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text : `Hello, i'm ${information.surname} from ${information.campus} campus!` ,
    e : "oO",
    T : "U ",
}

));