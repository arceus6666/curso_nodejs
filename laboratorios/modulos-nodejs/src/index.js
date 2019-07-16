
const logModule = require('./log')
const operaciones = require('./operaciones')
const param1 = 23
const param2 = 10

logModule.info('nodejs iniciado')
logModule.warning('nodejs no esta configurado')
logModule.error('Error acceso denegado')

console.log(`la suma de ${param1} y ${param2} es: ${operaciones.sumar(param1, param2)}`)
console.log(`la resta de ${param1} y ${param2} es: ${operaciones.resta(param1, param2)}`)
