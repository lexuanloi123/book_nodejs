let isAuth = async function(req, res, next) {
    var _JWT = require('../common/_JWT');
    var _token = req.headers.authorization;
    if(_token){
        try{
            var auhData = await _JWT.check(_token);

            req.auth = auhData;
            next();
        }catch(err){
            return res.send({data: "ma token ko hop le"})
        }
    }else{
        return res.send({data: "ban chua gui ma token"})
    }

};

module.exports ={
    isAuth: isAuth
}