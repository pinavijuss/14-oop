/*

const Dog = require('./js/Dog');
const Cat = require('./js/Cat');
const Rabbit = require('./js/Rabbit');
*/
const Bmw = require('./masinos/Bmw');
/*
const rexas = new Dog('Rex', 'brown');
rexas.voice();

const rainis = new Cat('Rainis', 'golden');
rainis.voice();

const benas = new Rabbit('Benas', 'black');
benas.voice();
*/
const chuligankeBmw = new Bmw('Bmw', 'Left', 5, 4);
console.log(chuligankeBmw);
console.log(chuligankeBmw.engineIsOn);
chuligankeBmw.turnOnTheEngine();
console.log(chuligankeBmw.engineIsOn);