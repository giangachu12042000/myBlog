
var mongoose = require('mongoose');

const Schame = mongoose.Schema; 
  CommentSchema = new Schame({
    reply_by: {type: String},
    reply_for: {type: String},
    message: {type: String}, 
    status:{type:String},
    hide: {type:String},
    created_date: {type:Date },
    reply_date: {type:Date }, 
})

module.exports = mongoose.model('comments',CommentSchema)



