const ConductoresCtrl = {};
const Conductor = require("../models/Conductor.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

ConductoresCtrl.crearConductor = async (req, res) => {
  try {
    const { cedula, contrasena, nombreConductor, placaVehiculo, telefono } =
      req.body;

    const NuevoConductor = new Conductor({
      cedula,
      contrasena,
      nombreConductor,
      placaVehiculo,
      telefono,
    });

    const CedulaConductor = await Conductor.findOne({ cedula: cedula });
    if (CedulaConductor) {
      res.json({
        mensaje: "Conductor ya existe",
      });
    } else {
      NuevoConductor.contrasena = await bcrypt.hash(contrasena, 10);
      const token = jwt.sign({ _id: NuevoConductor._id }, 'Secreta');
      const respuesta = await NuevoConductor.save();

      res.json({
        mensaje: "Conductor agregado",
        respuesta,
        id: NuevoConductor._id,
        nombre: NuevoConductor.nombreConductor,
        token,
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en al crear Conductor', error });
  }
};

ConductoresCtrl.login = async (req, res) => {
  try {
    const { cedula, contrasena } = req.body;
    const conductor = await Conductor.findOne({ cedula: cedula });

    if (!conductor) {
      return res.json({ mensaje: 'Cedula incorrecta' });
    }

    const match = await bcrypt.compare(contrasena, conductor.contrasena);
    if (match) {
      const token = jwt.sign({ _id: conductor._id }, 'Secreta');
      res.json({
        mensaje: 'Bienvenido',
        id: conductor._id,
        nombre: conductor.nombreConductor,
        token,
      });
    } else {
      res.json({ mensaje: 'Contraseña incorrecta' });
    }
  } catch (error) {
    return res.status(400).json({ message: 'Error en el login', error });
  }
};

ConductoresCtrl.listarConductores = async (req, res) => {
  try {
    const respuesta = await Conductor.find();
    res.json({ respuesta });
  } catch (error) {
    return res
      .status(400)
      .json({ mensaje: 'Error al listarConductores', error });
  }
};

ConductoresCtrl.listarId = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Conductor.findById({ _id: id });
    res.json({ respuesta });
  } catch (error) {
    return res.status(400).json({ message: 'Error al listarId', error });
  }
};

ConductoresCtrl.eliminarConductor = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Conductor.findByIdAndRemove({ _id: id });
    res.json({ mensaje: 'Conductor Eliminado', respuesta });
  } catch (error) {
    return res
      .status(400)
      .json({ mensaje: 'Error al eliminarConductor', error });
  }
};

ConductoresCtrl.actualizarConductor = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Conductor.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ mensaje: 'Conductor actualizado', respuesta });
  } catch (error) {
    return res
      .status(400)
      .json({ mensaje: 'Error al actualizarConductor', error });
  }
};

module.exports = ConductoresCtrl;
