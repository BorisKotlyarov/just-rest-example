const querystring = require('querystring');

module.exports = {
    GET: {
        '/(.+?)': function(request){
            if (request.headers['cookie']){
                request.cookies = querystring.parse(request.headers['cookie']);
            }
        }
    }
};