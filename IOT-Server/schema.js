const mongoose = require('mongoose')

const dataschema = new mongoose.Schema({
  field1:String,
  field2:String,
  field3:String,
  field4:String,
  field5:String,
})
module.exports=mongoose.model('User',dataschema)