
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./server/db');
const cors = require('cors');

const PORT = process.env.PORT || 3333;
const _ = require('lodash');
const Bcrypt = require('bcryptjs');
const dotenv = require('dotenv') ; 
const path = require('path');
const fileUpload  = require('express-fileupload');

const User_Schema = require('./server/modal/user-moldal');
const Article_Schema = require('./server/modal/article-moldal');
const Category_Schema = require('./server/modal/category-moldal')
const {senGmail} = require('./lib/email/service');
const api = require('./server/api');

dotenv.config();

db.ready.then(() => {
    app.use(bodyParser.json({ limit: "50mb", extended: true })); 
    if (process.env.NODE_ENV !== "production") {
        app.use(
            cors({
                origin: "http://localhost:3000",
                optionsSuccessStatus: 200
            })
        );
    }
    app.use(
        bodyParser.urlencoded({
            limit: "50mb",
            extended: true,
            parameterLimit: 1000000
        })
    );
    app.use(fileUpload());
    app.use('/images', express.static(path.resolve(process.cwd(), 'images')));
    app.use('/api/',api);
})

app.listen(PORT, err =>{
    console.log('listion okess',`${PORT}`)
})


