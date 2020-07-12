var mongoose = require('mongoose');

const Schema = mongoose.Schema; 
  UserSchema = new Schema({
    name: {type: String},
    email: {type: String},
    password: { type: String },
    comfirmed:{
      default: false,
      type: String
    },
    permissions: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    },
    created_date: {type:Date },
    created_update: {type:Date}
    
})

module.exports = mongoose.model('users',UserSchema)