const {Modules, Server} = require('just-rest');

Modules.defineRequestInterceptor(__dirname + '/interceptors/request/cookies.js');
Modules.defineResponseInterceptor(__dirname + '/interceptors/response/corsAllowHeaders.js');
Modules.define(__dirname + '/modules/main/index.js');
Modules.define(__dirname + '/modules/test/index.js');

new Server({Modules, port: process.env.PORT || 3002 });
