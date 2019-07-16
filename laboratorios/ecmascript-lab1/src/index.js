// ES6 funcion flecha
const fact = (num) => {
  return num <= 0 ? 1 : (num * fact(num - 1))
}

// console.log(fact(6))

//ES6 numerico
const tipo_cambio = new Number('6.96')
// console.log(tipo_cambio * 2)

//ES6 Objetos
const alumnos = {
  nombre: 'Marcelo',
  apellido: 'Moscoso',
  func: () => { return 'hola mundo' },
}

// console.log(alumnos.nombre)
// console.log(alumnos.apellido)
// console.log(alumnos.func())

//ES6 boolean
const val = new Boolean('false')
// if (val) console.log('es verdad')

//ES6 String
const descripcion = new String('porcentaje 10%')
// console.log(descripcion.toLocaleUpperCase())

//ES6 plantillas
const mensaje = () => { return 'plantilla' }
const parametro = '10%'
// console.log(` el paramentro es ${parametro} de la ${mensaje()}`)

//objeto alumnos
const alumnosJSON = {
  alumnos: [
    {
      nombre: "Jorge",
      cursos: [
        {
          nombre: "NodeJS",
          nota1: 30,
          nota2: 20,
          notafinal: 50
        },
        {
          nombre: "Angular",
          nota1: 20,
          nota2: 20,
          notafinal: 40
        }
      ]
    },
    {
      nombre: "Ana",
      cursos: [
        {
          nombre: "NodeJS",
          nota1: 30,
          nota2: 30,
          notafinal: 60
        },
        {
          nombre: "Angular",
          nota1: 20,
          nota2: 10,
          notafinal: 30
        }
      ]
    }
  ]
}

console.log(JSON.stringify(alumnosJSON, null, 2))