var objs = [
  { nombre: 'Lazslo', edad: 90 },
  { nombre: 'Pig', edad: 54 },
  { nombre: 'Pirate', edad: 4 }
]

//ascendente
compare = (a, b) => {
  if (a.edad < b.edad)
    return -1;
  if (a.edad > b.edad)
    return 1;
  return 0;
}

objs.sort(compare)

console.log(objs)