const ServiciosCtrl = {};
const Servicio = require("../models/Servicio.models");

ServiciosCtrl.crearServicio = async (req, res) => {
  try {
    const { factura, nombreConductor, cliente, placaVehiculo, total } =
      req.body;
    const NuevoServicio = new Servicio({
      factura,
      nombreConductor,
      cliente,
      placaVehiculo,
      total,
    });

    const facturaServicio = await Servicio.findOne({ factura: factura });
    if (facturaServicio) {
      res.json({ mensaje: "Factura ya registrada" });
    } else {
      const respuesta = await NuevoServicio.save();
      res.json({ mensaje: "Servicio resgistrado", respuesta });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error en al crear servicio", error });
  }
};

ServiciosCtrl.listarServicios = async (req, res) => {
  try {
    const respuesta = await Servicio.find();
    res.json({ respuesta });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error en al listarServicios", error });
  }
};

ServiciosCtrl.eliminarServicio = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Servicio.findByIdAndRemove({ _id: id });
    res.json({ mensaje: "Servicio Eliminado", respuesta });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error en al eliminarServicio", error });
  }
};

ServiciosCtrl.actualizarServicios = async (req, res) => {

    try {
        const id = req.params.id;
        const respuesta = await Servicio.findByIdAndUpdate({ _id: id }, req.body);
        res.json({ mensaje: "Servicio actualizado", respuesta });
    } catch (error) {
        return res
      .status(400)
      .json({ message: "Error en al actualizarServicios", error });
    }
}

module.exports = ServiciosCtrl;
