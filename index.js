
const wilder = require('./information')

let cowsay = require("cowsay");
console.log(cowsay.say({
    text : `My name is ${wilder.name}, my campus is located in ${wilder.campus}`,
    e : "xO",
    T : "U"
}));
