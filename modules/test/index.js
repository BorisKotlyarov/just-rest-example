module.exports = {

    //Example get request with RegExp path
    GET: {
        '/test/([0-9]{1,})': function(request, response, matched){
            //use http://localhost:3002/test/123
            response.resp(matched);
        }
    },

    //Example post request
    POST : {
        '/test': async function(request, response){
            try {
                let body = await request.body;
                response.resp(body);
            } catch (error){
                //body is not JSON
                response.error(400, error.message);
            }
        }
    }
};