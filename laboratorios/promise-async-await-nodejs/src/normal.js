(() => {
  getUsuarios = () => {
    setTimeout(() => {
      console.log('Uusarios 8000 leidos')
    }, 8000);
  }

  getProyectos = () => {
    setTimeout(()=>{
      console.log('Proyectos 4000 leidos')
    },4000)
  }

  getReclamos = () => {
    setTimeout(()=>{
      console.log('Reclamos 7000 leidos')
    },7000)
  }

  getUsuarios()
  getProyectos()
  getReclamos()
})()