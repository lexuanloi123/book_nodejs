const db = require('../common/connect');
const User = function(user){
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password
}

User.get_all = function(result){

    db.query("SELECT * FROM users", function(err, book){
        
        if(err){
            result(null);
        }
        else {
            result(user);
        }
        
    });

    
}

//c2
User.getById = function(id, result){
    db.query("SELECT * FROM users WHERE id = ?", id, function(err, user){
        
        if(err || user.length == 0){
            result(null);
        }
        else {
            result(user[0]);
        }
        
    });

    
}

User.create = function(data, result){
    
    db.query("INSERT INTO users SET ?", data, function(err, user){
        if(err ){
            result(null);
        }
        else {
            result({id: user.insertID, ...data });
        }
    })
}

User.remove = function(id, result){
    console.log(id);
    db.query("DELETE FROM users WHERE id = ?", id, function(err, user){
        console.log(err);
        if(err){
            result(null);
        }
        else {
            result("xoa du lieu thanh cong" );
        }
        
    });
}

User.update = function(b, result){
    
    db.query("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ? ", [b.name, b.email, b.password, b.id], function(err, book){
        if(err ){
            result(null);
        }
        else {
            result(b);
        }
    })
}

User.check_login = function(data, result){
    db.query("SELECT * FROM users WHERE email = ? AND password = ?", [data.email, data.password], function(err, user){
        
        if(err || user.length == 0){
            result(null);
        }
        else {
            result(user[0]);
        }
        
    });

    
}

module.exports = User;