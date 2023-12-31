var User = require('../models/user.model');
const JWT = require('../common/_JWT');
exports.get_list = function(req, res) {

    User.get_all(function(data){

        res.send({result: data});
    });

}

//c2 book-model
exports.detail = function(req, res) {
    
    User.getById(req.params.id, function (respnse){
        res.send({result: respnse});
    });

     
}

//body-parser
exports.add_user= function(req, res){
    var data = req.body;
    User.create(data, function (respnse){
        res.send({result: respnse}); 
    });
}

exports.remove_user= function(req, res){
    var id = req.params.id;
    User.remove(id, function (respnse){
        res.send({result: respnse});
    })
}

exports.update_user= function(req, res){
    var data = req.body;
    User.update(data, function (respnse){
        res.send({result: respnse}); 
    });
}

exports.login= function(req, res){
    var data = req.body;
    User.check_login(data, async function (respnse){
        if(respnse){
            const _token =  await JWT.make(respnse);
            res.send({result: _token});
        }
        res.send({result: respnse}); 
    });
}