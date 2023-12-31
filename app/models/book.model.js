const db = require('../common/connect');
const Book = function(book){
    this.id = book.id;
    this.name = book.name;
    this.image = book.image;
    this.author_id = book.author_id;
    this.price = book.price
}

Book.get_all = function(result){

    db.query("SELECT * FROM book", function(err, book){
        
        if(err){
            result(null);
        }
        else {
            result(book);
        }
        
    });

    
}

//c2
Book.getById = function(id, result){
    db.query("SELECT * FROM book WHERE id = ?", id, function(err, book){
        
        if(err || book.length == 0){
            result(null);
        }
        else {
            result(book[0]);
        }
        
    });

    
}

Book.create = function(data, result){
    
    db.query("INSERT INTO book SET ?", data, function(err, book){
        if(err ){
            result(null);
        }
        else {
            result({id: book.insertID, ...data });
        }
    })
}

Book.remove = function(id, result){
    console.log(id);
    db.query("DELETE FROM book WHERE id = ?", id, function(err, book){
        console.log(err);
        if(err){
            result(null);
        }
        else {
            result("xoa du lieu thanh cong" );
        }
        
    });
}

Book.update = function(b, result){
    
    db.query("UPDATE book SET name = ?, image = ?, author_id = ?, price = ? WHERE id = ? ", [b.name, b.image, b.author_id, b.price, b.id], function(err, book){
        if(err ){
            result(null);
        }
        else {
            result(b);
        }
    })
}

module.exports = Book;