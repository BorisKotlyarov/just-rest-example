const {Modules, Server, Middlewares} = require('just-rest');

//Define interceptor(s)
Modules.defineResponseInterceptor('./interceptors/response/corsAllowHeaders.js');

//Define middleware
Modules.defineGlobalMiddleware('just-rest-cookies'); //cookies parser. Remove this string if you don't use cookies
Modules.defineGlobalMiddleware(Middlewares.bodyJson); //body parser

//Define modules
Modules.define('./modules/main/index.js');
Modules.define('./modules/test/index.js');
Modules.define('./modules/profile/index.js');

//start your server on port 3002
new Server({Modules, port: 3002});
