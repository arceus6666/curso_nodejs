//ES6 array
const cursos = ['nodejs', 'angular', 'react', 'mongodb', 'sql'];
console.log(cursos)
cursos.splice(2, 0, 'postgres') //agrega
console.log(cursos)

const eliminado = cursos.splice(3, 1)
console.log(`${cursos} elemento eliminado: ${eliminado}`)

cursos.push('ms-sqlserver') //agrega al final
console.log(cursos)

const curso = cursos.find(elem => elem == 'mongodb')
if (curso) console.log(`curso encontrado ${curso}`)

for (let i in cursos) {
  console.log(cursos[i]);
  console.log(`indice: `,i);
}

cursos.forEach(curso => {
  console.log(curso)
})

cursos.map((curso, index) => {
  console.log(index, curso)
})

const cursosSinSql = cursos.filter(curso => curso !== 'sql')
console.log(cursosSinSql)

//ES6 Colecciones
const roles = new Map([
  ['r1', 'Usuario'],
  ['r2', 'Invitado'],
  ['r3', 'Admin'],

])
console.log(roles.get('r2'))

const horarios = new Map()
horarios.set('0001', { curso: 'nodejs', horario: '19:00-22:00' });
horarios.set('0002', { curso: 'angular', horario: '07:00-09:00' });
horarios.set('0003', { curso: 'react', horario: '12:00-14:00' });
console.log(horarios.get('0002'))
