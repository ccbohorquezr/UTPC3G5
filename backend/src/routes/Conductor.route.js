const {Router}  = require('express')
const router = Router()
const conductorCtrl = require('../controller/Conductor.controller')
const Auth = require('../helper/Auth')

router.post('/crearConductor',Auth.verificarToken, conductorCtrl.crearConductor)
router.post('/login', conductorCtrl.login)
router.get('/listarConductores', conductorCtrl.listarConductores)
router.get('/listar/:id',Auth.verificarToken, conductorCtrl.listarId)
router.delete('/eliminarConductor/:id',Auth.verificarToken, conductorCtrl.eliminarConductor)
router.put('/actualizarConductor/:id',Auth.verificarToken, conductorCtrl.actualizarConductor)


module.exports = router