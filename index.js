var express = require('express');
var app = express();

// cấu hình body- parser
var bodyParser = require('body-parser');

const _AuthMiddleWare = require('./app/common/_AuthMiddleWare');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// các router
require('./app/routes/home.router')(app);
require('./app/routes/account.router')(app);
require('./app/routes/book.router')(app);
require('./app/routes/category.router')(app);
//app.use(_AuthMiddleWare.isAuth);// check token hop le


require('./app/routes/user.router')(app);




app.listen(3000, function () {
    console.log("server listening on http://localhost: 3000");
})