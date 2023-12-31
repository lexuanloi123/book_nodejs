module.exports = function(router){

    var homeController = require('../controllers/home.controller')
    const JWT = require('../common/_JWT');

    router.get("/", homeController.home);

    router.get("/about", homeController.about);

    router.get("/login", async function(req, res){
        //check thong tin user 
        var user = {
            name: "Admin",
            email: "admin@example.com",
        };
        const _token =  await JWT.make(user);
        res.send({token: _token});
    });

    router.get("/check_token", async function(req, res){
        try{
            var _token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20ifSwiaWF0IjoxNjk5NzgyMzAwLCJleHAiOjE2OTk3ODU5MDB9.4L5BdI2ph24nNVyiUoY8wECg1J-KmzXTO6c-369KuBo";
        
            const data =  await JWT.check(_token);
            res.send({data: data});

        }catch(err){
            res.send({data: " mã ko hợp lệ"});
        }
    });
};