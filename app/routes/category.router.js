module.exports = function(router){

    var categoryController = require('../controllers/category.controller')

    router.get("/category/list", categoryController.get_list);

    router.post("/category/add", categoryController.add_book);

    router.delete("/category/delete/:id", categoryController.remove_book);

    router.put("/category/update", categoryController.update_book);
}