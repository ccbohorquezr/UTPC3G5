//creacion bd

const mongoose = require('mongoose');


URI=('mongodb://localhost:27017/dbAgl')

mongoose.connect(URI,{
useNewUrlParser: true,
useUnifiedTopology: true

}).then(db => console.log('Connected to database : ',db.connection.name))
.catch (err => console.log('Error connecting to database: ', err))

module.exports = mongoose