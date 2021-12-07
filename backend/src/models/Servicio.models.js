const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServicioSchema = new Schema({
  factura: Number,
  nombreConductor: String,
  cliente: String,
  placaVehiculo: String,
  total: String,
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model("servicio", ServicioSchema);
