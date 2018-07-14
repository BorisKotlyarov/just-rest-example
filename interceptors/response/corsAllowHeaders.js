function corsAllowHeaders(response){
    const CorsAllowHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Set-Cookies, Access-Token'
    };

    Object.keys(CorsAllowHeaders).forEach((item) => {
        response.setHeader(item, CorsAllowHeaders[item]);
    });
}

module.exports = {

    GET: {
        '/(.+?)': function(response){
            corsAllowHeaders(response);
        }
    },

    POST: {
        '/(.+?)': function(response){
            corsAllowHeaders(response);
        }
    },
    PUT: {
        '/(.+?)': function(response){
            corsAllowHeaders(response);
        }
    },

    DELETE: {
        '/(.+?)': function(response){
            corsAllowHeaders(response);
        }
    },

    OPTIONS: {
        '/(.+?)': function(response){
            corsAllowHeaders(response);
        }
    }

};