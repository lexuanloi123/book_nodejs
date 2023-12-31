const db = require('../common/connect');
const Category = function(category){
    this.id = category.id;
    this.category_book = category.category_book;
    
}

Category.get_all = function(result){

    db.query("SELECT * FROM category", function(err, category){
        
        if(err){
            result(null);
        }
        else {
            result(category);
        }
        
    });

    
}

//c2
// Category.getById = function(id, result){
//     db.query("SELECT * FROM category WHERE id = ?", id, function(err, book){
        
//         if(err || book.length == 0){
//             result(null);
//         }
//         else {
//             result(book[0]);
//         }
        
//     });

    
// }

Category.create = function(data, result){
    
    db.query("INSERT INTO category SET ?", data, function(err, category){
        if(err ){
            result(null);
        }
        else {
            result({id: category.insertID, ...data });
        }
    })
}

Category.remove = function(id, result){
    console.log(id);
    db.query("DELETE FROM category WHERE id = ?", id, function(err, category){
        console.log(err);
        if(err){
            result(null);
        }
        else {
            result("xoa du lieu thanh cong" );
        }
        
    });
}

Category.update = function(b, result){
    
    db.query("UPDATE category SET category_book = ? WHERE id = ? ", [b.category_book, b.id], function(err, book){
        if(err ){
            result(null);
        }
        else {
            result(b);
        }
    })
}

module.exports = Category;