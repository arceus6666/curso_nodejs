//mediante una consulta, paises de sudamerica, escribirlos en un archivo en data donde diga sudamerica.json
//nombre poblacion capital lenguaje

const fs = require('fs')
const paises = JSON.parse(fs.readFileSync('./src/data/paises.json', 'utf8'));

const subAmerica = paises.filter(pais => pais.subregion === 'South America')

const sp = []

subAmerica.forEach(pais => {
  sp.push({
    nombre: pais.name,
    poblacion: pais.population,
    capital: pais.capital,
    lenguajes: pais.languages
  })
})

fs.writeFileSync('./src/data/sudamerica.json', JSON.stringify(sp, null, 2))

//2
/*
top 10 paises con mas poblacion
guardado en top paises.json
nombre poblacion
*/

/*
let top = []

for (let i = 0; i < 10; i++) {
  let p = paises[i]
  top.push({
    nombre: p.name,
    poblacion: p.population
  })
}

mysort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].poblacion > arr[i + 1].poblacion) {
      let save = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = save
    }
  }
  return arr;
}
//console.log(top)
top = mysort(top)

paises.forEach(pais => {
  for (let pt in top) {
    if (pais.population > top[pt].poblacion) {
      top[pt] = {
        nombre: pais.name,
        poblacion: pais.population
      }
      break;
    }
  }
  top = mysort(top)
})


top = mysort(top)
*/

paises.sort((a, b) => (a.population > b.population) ? -1 : ((b.population > a.population) ? 1 : 0))
top = []
for (let i = 0; i < 10; i++) {
  let p = paises[i];
  top.push({
    nombre: p.name,
    poblacion: p.population
  })
}
//console.log(paises[paises.length - 1])

fs.writeFileSync('./src/data/toppaises.json', JSON.stringify(top, null, 2))