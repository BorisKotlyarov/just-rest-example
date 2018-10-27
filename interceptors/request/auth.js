const {Errors} = require('just-rest');

module.exports = {

    ANY: {
        '(.+?)': async function (request, response, match) {
            let instance = this;

            //TODO get data from real database

            instance.user = {
                username: 'Guest',
                permissions: [],
                isAuthorized: false
            };

            let testDatabase = {
                'token1': {
                    username: 'Boris',
                    permissions: ['all'],
                    isAuthorized: true
                },
                'token2': {
                    username: 'User 2',
                    permissions: ['read.me'],
                    isAuthorized: true
                },
                'token3': {
                    username: 'User 3',
                    permissions: ['read.something'],
                    isAuthorized: true
                },
            }

            if (request.headers.token && testDatabase.hasOwnProperty(request.headers.token)) {
                instance.user = testDatabase[request.headers.token];
            }

            /*
                Example middleware making.
                See usage in file "{__PROJECT_DIR__}/modules/profile/index.js"
            */
            this.checkAuth = ()=>{
                if (!instance.user.isAuthorized) {
                    throw  new Errors(401)
                }

                if (!instance.user.permissions.includes('read.me') && !instance.user.permissions.includes('all')) {
                    throw  new Errors(403)
                }
            };

            return;
        }
    }

};