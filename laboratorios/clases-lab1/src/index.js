//const Persona = require('./Persona');
const Empleado = require('./Empleado');

/*
let persona = new Persona('Marcelo', 'Moscoso');
persona.genero = 'masculino';

console.log(persona.nombreCompleto());
console.log(persona.genero);
*/

let empleado = new Empleado('Marcelo', 'Moscoso');
empleado.cargo = 'Programador';

console.log(empleado.nombreCompleto());
console.log(empleado.cargo)