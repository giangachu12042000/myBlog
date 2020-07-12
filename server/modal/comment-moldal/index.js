
var mongoose = require('mongoose');

const Schame = mongoose.Schema; 
  CommentSchema = new Schame({
    reply_by: {type: String},
    reply_for: {type: String},
    message: {type: String}, 
    status:{type:String},
    reply: {type:[]},
    created_date: {type:Date },
    article: {type:String},
    reply_date: {type:Date }, 
    open: { type:Boolean, default: false },
    parent:{type:String}
})
// article like parent of commnent
module.exports = mongoose.model('contacts',CommentSchema)



