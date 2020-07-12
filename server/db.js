const mongoose = require('mongoose'); 
const chalk = require('chalk');

const initMongDB = async ()=>{
    try{
        await mongoose.connect(
           "mongodb://localhost:27017/Blog",
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false 
            }
        )
        console.log("%s MongoDB: Connection successful", chalk.green("✓"));
        return true
    }catch(error){
        console.warn("%s MongoDB: Connection failed!", chalk.red("✗"));
    }
}
const ready = initMongDB();
module.exports = {
    ready
}
