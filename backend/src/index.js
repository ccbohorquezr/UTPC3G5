//dependencias

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express()
require('./database')


//config
app.set('Port',process.env.PORT|| 4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors({ origen : '*' }))


app.use('/servicio',require('./routes/Servicio.route'))
app.use('/conductor',require('./routes/Conductor.route'))

app.listen(app.get('Port'),() => {
    console.log('listening on port: ', app.get('Port'))
})