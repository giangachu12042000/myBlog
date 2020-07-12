
var mongoose = require('mongoose');
// const slug = require('mongoose-slug-updater');
// mongoose.plugin(slug);

const Schame = mongoose.Schema;
const ObjectId = require('mongodb').ObjectId;
  CategorySchema = new Schame({ 
    name: {type: String},
    description: {type: String},
    background: {type: String},
    created_date: {type:Date, default: Date.now },
    created_update: {type:Date, default: Date.now },
    created_by: {type:Number },
    update_by: {type:Number }
})

module.exports = mongoose.model('categories',CategorySchema)


