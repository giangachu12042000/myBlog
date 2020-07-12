
const Category_Schema = require('../modal/category-moldal');
const Article_Schema = require('../modal/article-moldal');
const _ = require("lodash");

  module.exports.createCategroy = (req, res)=>{ 
    const {name,des} = req.body;
    const file = req.files;
    if (!file || Object.keys(file).length === 0) {
        return res.status(400).send('No files were uploaded.');
    } 
    let sampleFile = file.file;
    sampleFile.mv(`${__dirname}/../../images/files/${sampleFile.name}`, function(err) {
        if (err)
            return res.status(500).send(err);
    }); 
    const item = { 
        name:name,
        background: sampleFile.name,
        description: des,
        created_date: new Date()
    }
    const inertCategory = new Category_Schema({...item});
        inertCategory.save()
            .then(categories =>{
                if(categories){ 
                    return res.send({code: 0, message: 'sucess', data: categories}).end()
                }
            })
}
module.exports.fetchCategories = (req, res)=>{
    const data = req.query.search; 
     const search = {};
     if(data){
         search.$or = [{title:{$regex: `.*${data}*`, $options:'ig'}}]
     }
    const query = {
         ...search
    }
    Category_Schema.find(query)
    .then(categories =>{
        if(categories){
            return res.send({code: 0, message: 'sucess', data: categories}).end()
        }
    })
}
module.exports.updateCategory = (req,res)=>{ 
    const {file} = req.files;
    const {name,des} = req.body;
    const {id} = req.params;
    file.mv(`${__dirname}/../../images/files/${file.name}`, function(err) {
        if (err)
            return res.status(500).send(err);
    }); 
    const query ={
        _id: id
    }
    const edit = {$set:{name:name, background:file.name,description:des, created_update: new Date()}};
        Category_Schema.updateOne(query,edit)
        .then(edit_data =>{
            if(edit_data){
                return res.send({code: 0, message: 'sucess', data: edit_data}).end()
            }
        })
}
module.exports.delete = (req, res)=>{
    const {id} = req.params; 
    Category_Schema.findByIdAndRemove(id)
    .then(categories=>{
        return res.send({code: 1, message: 'sucess', data: categories}).end()
    })
}
module.exports.getById = (req, res)=>{
    const {id} = req.params;
    const query = {
        category:id
    }
    Article_Schema.find(query)
    .then(articles =>{
        if(articles){ 
            return res.send({code: 1, message: 'sucess', data: articles}).end()
        }
    })
}