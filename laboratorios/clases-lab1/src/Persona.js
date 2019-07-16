// ES6 get and set
class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get genero() {
    return this._genero;
  }

  set genero(genero) {
    this._genero = genero;
  }

  nombreCompleto() {
    return `${this._nombre} ${this._apellido}`;
  }

}


module.exports = Persona