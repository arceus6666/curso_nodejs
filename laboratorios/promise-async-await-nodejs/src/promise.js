(() => {
  let getUsuarios = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('usuarios 8000 leidos')
    }, 8000)
  })

  let getProyectos = new Promise((resolve, rejet) => {
    setTimeout(() => {
      resolve('Proyectos 4000 leidos')
    }, 4000)
  })

  let getReclamos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Reclamos 7000 leidos')
    }, 7000)
  })

  getUsuarios.then(resp => {
    console.log(resp)
    getProyectos.then(resp => {
      console.log(resp)
      getReclamos.then(resp => {
        console.log(resp)
      })
    })
  })
})()
