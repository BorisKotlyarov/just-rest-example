

module.exports = {

    //Example get request with RegExp path
    GET: {
        '/profile/me': function (request, response, matched) {
            //use http://localhost:3002/profile/me

            /*
                Using middleware.
                Make middleware see file "{__PROJECT_DIR__}/interceptors/request/auth.js"
            */
            this.checkAuth();

            response.resp(this.user);
        }
    }
};