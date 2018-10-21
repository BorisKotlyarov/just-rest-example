module.exports = {
    GET: {
        '/': function (request, response) {

            let responseData = {
                information: 'this is response JSON'
            };

            response.resp(responseData);
        }
    }
};