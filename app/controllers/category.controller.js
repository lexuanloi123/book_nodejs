var Category = require('../models/category.model');
exports.get_list = function(req, res) {

    Category.get_all(function(data){

        res.send({result: data});
    });

}


//body-parser
exports.add_book= function(req, res){
    var data = req.body;
    Category.create(data, function (respnse){
        res.send({result: respnse}); 
    });
}

exports.remove_book= function(req, res){
    var id = req.params.id;
    Category.remove(id, function (respnse){
        res.send({result: respnse});
    })
}

exports.update_book= function(req, res){
    var data = req.body;
    Category.update(data, function (respnse){
        res.send({result: respnse}); 
    });
}