const Auth= {}
const jwt = require('jsonwebtoken')

Auth.verificarToken= (req,res,next)=>{
    if(!req.headers.autorizacion){
        return res.json({
            mensaje: 'No estas autorizado Header'
        })
    }

    const token = req.headers.autorizacion
    if(token===null){
        return res.json({
            mensaje: 'No estas autorizado null'
        })

    }

    jwt.verify(token, 'Secreta',(error,resultado)=>{
        if(error)
        return res.json({
          mensaje: 'No estas autorizado error'
        })
        next();
    })
}

module.exports= Auth