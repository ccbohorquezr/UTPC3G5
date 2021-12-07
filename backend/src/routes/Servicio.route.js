const { Router } = require("express");
const router = Router();
const serviciosCtrl = require("../controller/Servicio.controller");

router.post("/crearServicio", serviciosCtrl.crearServicio);
router.get("/listarServicios", serviciosCtrl.listarServicios);
router.delete("/eliminarServicio/:id", serviciosCtrl.eliminarServicio);
router.put("/actualizarServicios/:id", serviciosCtrl.actualizarServicios);

module.exports = router;
