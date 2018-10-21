const {Errors} = require('just-rest');

module.exports = {

    //Example get request with RegExp path
    GET: {
        '/profile/me': function (request, response, matched) {
            //use http://localhost:3002/profile/me
            if (!this.user.isAuthorized) {
                throw  new Errors(401)
            }

            if (!this.user.permissions.includes('read.me') && !this.user.permissions.includes('all')) {
                throw  new Errors(403)
            }

            response.resp(this.user);
        }
    }
};