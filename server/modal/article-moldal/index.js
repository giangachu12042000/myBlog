
var mongoose = require('mongoose');
const ObjectId = require("mongodb").ObjectId;

const Schame = mongoose.Schema; 
  const ArticleSchema = new Schame({

    title: { type: String },
    background: { type: String },
    content: { type: String },
    category: { type: String },
    created_date: { type:Date },
    created_update: { type:Date },
    created_by: { type: String },
    update_by: { type: String },
    high: { type:Boolean, default: false },
    views: { type:Number, default: 0 }, 
})

ArticleSchema.statics.findById = function(query){
  console.log(query)
    return this.findOne(query)
}
ArticleSchema.statics.getPagination = function(query,requestParam){
  const getSize = Number(requestParam.size) > 0 ? Number(requestParam.size) : 15;
    // if(size > 15){
    //     size = 15;
    // } 
    const getPage = Number(requestParam.page) > 0 ? Number(requestParam.page) : 1;  
   return this.find(query)
    .skip(getSize * getPage - getSize)
    .limit(getSize)
    .then(articles =>{
        if(articles){
          // try with this
           return this.countDocuments(query).then(counts=>({ 
            results: articles || [],
            pagination: {
              size: Math.ceil(counts / getSize),
              page:getPage,
              total: counts
            }
            }))
        }
    })
}


module.exports = mongoose.model('articles',ArticleSchema)



