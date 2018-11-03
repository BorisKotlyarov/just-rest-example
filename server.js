const {Modules, Server} = require('just-rest');

Modules.defineRequestInterceptor('just-rest-cookies');
Modules.defineResponseInterceptor('./interceptors/response/corsAllowHeaders.js');

Modules.define('./modules/main/index.js');
Modules.define('./modules/test/index.js');
Modules.define('./modules/profile/index.js');

new Server({Modules, port: process.env.PORT || 3002 });
