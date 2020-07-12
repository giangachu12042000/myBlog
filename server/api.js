
const express = require('express');
const router = express.Router();
require('./routes/articles-route').connect(router);
require('./routes/categories-route').connect(router);
require('./routes/contacts-route').connect(router);
require('./routes/users-route').connect(router);
require('./routes/coments-route').connect(router);
require('./routes/login-route').connect(router);
require('./routes/comform-route').connect(router);
module.exports = router;
