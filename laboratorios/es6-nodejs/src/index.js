const fs = require('fs')
const paises = JSON.parse(fs.readFileSync('./src/data/paises.json', 'utf8'));

//numero de paises
//console.log(` numero de registros : ${paises.length} `)

//filtro pro subregion
const subAmerica = paises.filter(pais => pais.subregion === 'South America')

//lista de paises
//subAmerica.forEach(pais => { console.log(pais.name) })
//console.log(subAmerica.length)
let poblaciones = []

//lista de paises
subAmerica.forEach(pais => {
  poblaciones.push({
    nombre: pais.name,
    capital: pais.capital,
    poblacion: pais.population
  })
})

//console.log(poblaciones)

let maxP = 0
let p = ''
paises.forEach(pais => {
  if (maxP < pais.population) {
    maxP = pais.population
    p = pais.name
  }
})
//console.log(`\nmas alta: ${p}, con ${maxP}`)

const bolivia = paises.find(pais => pais.nativeName === 'Bolivia')

//console.log(bolivia)