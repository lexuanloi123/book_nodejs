module.exports = function(router){

    var userController = require('../controllers/user.controller')

    router.post("/account/login", userController.login);

    router.post("/account/add", userController.add_user);
}