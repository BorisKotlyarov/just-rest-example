const {Errors} = require('just-rest');

function user(request, response, match){
    let instance = this;

    //TODO get data from real database

    instance.user = {
        username: 'Guest',
        permissions: [],
        isAuthorized: false
    };

    //Emulate database
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

    return; //is required for every middleware
}

function isAuthorized() {
    if (!this.user.isAuthorized) {
        throw  new Errors(401)
    }
    return;
}

function readPermission() {
    if (!this.user.permissions.includes('read.me') && !this.user.permissions.includes('all')) {
        throw  new Errors(403)
    }
    return;
}

function controller(request, response, matched) {
    response.resp(this.user);
}

module.exports = {
    GET: {
        //use http://localhost:3002/profile/me
        '/profile/me': [
            user, // Using middleware. add user variable to instance
            isAuthorized, // Using middleware. check authorize
            readPermission, // Using middleware. check read permissions
            controller
        ]
    }
};
