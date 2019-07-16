const Persona = require('./Persona');

class Empleado extends Persona {
  get cargo() {
    return this._cargo;
  }

  set cargo(cargo) {
    this._cargo = cargo;
  }
}

module.exports = Empleado