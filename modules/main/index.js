module.exports = {
    GET: {
        '/': function(request, response){

            let responseData = {
                information: 'this is response string'
            };

            response.resp(responseData);
        }
    }
};