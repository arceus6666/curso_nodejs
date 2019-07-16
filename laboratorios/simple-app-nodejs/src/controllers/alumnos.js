const fs = require('fs');
const ROUTE = `src/data/alumnos.json`;

const getAll = () => {
  var alumnos = JSON.parse(fs.readFileSync(ROUTE, 'utf-8'))
  return { ok: true, msg: alumnos };
}

const getOne = (ci) => {
  var alumnos = JSON.parse(fs.readFileSync(ROUTE, 'utf-8'))
  let alumno = alumnos.find(alumno => alumno.ci === ci)
  if (!alumno)
    return { ok: false, msg: 'no encontrado' }
  return { ok: true, msg: alumno }
}

const add = (a) => {
  var alumnos = JSON.parse(fs.readFileSync(ROUTE, 'utf-8'))
  let found = alumnos.find(alumno => alumno.ci === a.ci)
  if (found)
    return { ok: false, msg: 'ya existe' }
  alumnos.push(a)
  fs.writeFileSync(ROUTE, JSON.stringify(alumnos, null, 2))
  return { ok: true, msg: a }
}

const modify = (ci, a) => {
  var alumnos = JSON.parse(fs.readFileSync(ROUTE, 'utf-8'))
  const index = alumnos.findIndex(alumno => alumno.ci === ci)
  if (index === -1)
    return { ok: false, msg: 'no encontrado' }
  let na = { ci: ci, nombre: a.nombre, apellido: a.apellido, curso: a.curso }
  alumnos[index] = na
  fs.writeFileSync(ROUTE, JSON.stringify(alumnos, null, 2))
  return { ok: true, msg: na }
}

const remove = (ci) => {
  var alumnos = JSON.parse(fs.readFileSync(ROUTE, 'utf-8'))
  const index = alumnos.findIndex(alumno => alumno.ci === ci)
  if (index === -1)
    return { ok: false, msg: 'no encontrado' }
  alumnos.splice(index, 1)
  fs.writeFileSync(ROUTE, JSON.stringify(alumnos, null, 2))
  return { ok: true, msg: 'hecho' }
}

module.exports = {
  getAll,
  getOne,
  add,
  modify,
  remove
}