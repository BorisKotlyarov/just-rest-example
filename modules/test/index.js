const {Errors} = require('just-rest');

module.exports = {

    //Example get request with RegExp path
    GET: {
        //use GET: http://localhost:3002/test/123
        '/test/([0-9]{1,})': function (request, response, matched) {
            response.resp(matched);
        }
    },

    //Example post request
    POST: {
        //use POST: http://localhost:3002/test
        '/test': async function (request, response) {
            response.resp({response: "ok", body: {...request.body}});
        }
    }
};
s