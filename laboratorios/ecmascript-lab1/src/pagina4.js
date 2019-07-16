const horarios = new Map()
horarios.set('0001', { curso: 'nodejs', horario: '19:00-22:00' });
horarios.set('0002', { curso: 'angular', horario: '07:00-09:00' });
horarios.set('0003', { curso: 'react', horario: '12:00-14:00' });
console.log(horarios.get('0002'))

horarios.forEach(hora => { console.log(hora) })

//ES6 control de excepciones
let a = 100
let b = 0
try {
  if (b == 0) throw ('Divide by zero error.')
  else { let c = a / b }
} catch (e) {
  console.log(`Error ${e} `)
}

//ES6 sintaxis spread
sum = (x, y, z) => {
  return x + y + z;
}
sum2 = (x, y, z) => x + y + z

const numbers = [1, 2, 3]
console.log(sum(...numbers))
console.log(sum2(...numbers))

const arr = [1, 2, 3]
const arr1 = [...arr]
arr1.push(4)
console.log(arr1)

const arr2 = [0, 1, 2]
const arr3 = [3, 4, 5]
arr2.push(...arr3)
console.log(arr2)