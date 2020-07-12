
const Article_Schema = require('../modal/article-moldal');
const _ = require("lodash");

module.exports.createArticle = (req,res)=>{   
    const file = req.files;
    const {title, content, type, high} = req.body; 
    if (!file || Object.keys(file).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    
    let sampleFile = file.file; 
    sampleFile.mv(`${__dirname}/../../images/files/${sampleFile.name}`, function(err) {
        if (err) 
            return res.status(500).send(err);
    });
    const item = {
        title:title,
        content:content,
        category: type,
        high: high ,
        background: sampleFile.name,
        created_date: '2020-06-11T16:18:47.540Z'
    }
    const inertArticle = new Article_Schema({...item});
        inertArticle.save()
        .then(articles =>{
            if(articles){
                return res.send({code: 0, message: 'sucess', data: articles}).end()
            }
        })
    Article_Schema.getPagination(query, requestParam)
        .then(data =>{
            // console.log(data,'==============?')
            return res.send({code: 0, message: 'sucess', data}).end() 
        })
}
 module.exports.updateArticle = (req,res)=>{
    const file = req.files;
    const {title, content, type, high} = req.body; 
    const {id} = req.params;
    let sampleFile = file.file;
    sampleFile.mv(`${__dirname}/../../images/files/${sampleFile.name}`, function(err) {
        if (err)
            return res.status(500).send(err);
    });
    const query ={
        _id: id
    }
    const edit = {$set:{title:title,high:high, content:content, background: sampleFile.name, category: type, created_update: new Date()}}; 
    Article_Schema.findOne({title:title})
        .then(article=>{
            if(article){
                if(article._id == id) {
                    Article_Schema.updateOne(query,edit) 
                    .then(edit_data =>{
                        if(edit_data){
                            return res.send({code: 0, message: 'sucess', data: edit_data}).end()
                        }
                    })
                }else{
                    return res.send({code: 1, message: 'title is existed'}).end() 
                }
            }else{
                Article_Schema.updateOne(query,edit) 
                .then(edit_data =>{ 
                    if(edit_data){
                        return res.send({code: 0, message: 'sucess', data: edit_data}).end()
                    }
                })
            }
        })
}
module.exports.countViews = (req, res)=>{
    const {param,id} =  req.params;
    let count = parseInt(param) + 1; 
    const edit = {$set:{views: count}} ;
    let query = {
        _id: id
    }
    Article_Schema.updateOne(query, edit)
    .then(result =>{
        if(result){
            Article_Schema.findOne(query)
            .then(article =>{
                if(article){
                    return res.send({code: 1, message: 'succes', data: article}).end() 
                }else{
                    return res.send({code: 2, message: 'not find article'}).end() 
                }
            })
        }
    })
}
module.exports.deleteArticle = (req, res)=>{
    const {id} = req.params;
    Article_Schema.findByIdAndRemove(id)
    .then(data_del =>{
        if(data_del){ 
            return res.send({code: 0, message: 'sucess', data: data_del}).end()
        }
    })
}
module.exports.getArticleById = (req, res)=>{
    const {id} = req.params; 
    const query = {
        _id:id
}  
    Article_Schema.findById(query) 
    .then(article =>{ 
        if(article){
            return res.send({code: 1, message: 'succes', data: article}).end() 
        }else{
            return res.send({code: 2, message: 'not find article'}).end() 
        }
    })
}
module.exports.fetchArticles = (req, res)=>{
    const {search,size,page} = req.query;
    const searchArticle = {};
    if(search){
        searchArticle.$or = [{title:{$regex: `.*${search}*`, $options:'ig'}}];
    }
    const requestParam = {
        size:  size || 15,
        page:  page || 1
    }
    const query = {
        ...searchArticle
    }
    Article_Schema.getPagination(query, requestParam)
    .then(data =>{
        // console.log(data,'==============?')
        return res.send({code: 0, message: 'sucess', data: data}).end() 
    })
}