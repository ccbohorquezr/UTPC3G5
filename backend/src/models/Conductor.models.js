const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConductorSchema = new Schema({
  cedula: Number,
  contrasena: String,
  nombreConductor: String,
  placaVehiculo: String,
  telefono: String,
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model("conductor", ConductorSchema);
