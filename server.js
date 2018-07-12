const {Modules, Server} = require('just-rest');

Modules.define(__dirname + '/modules/main/index.js');

new Server({Modules, port: 3002 });
