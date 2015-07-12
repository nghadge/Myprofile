define('config', ['module'], function (module) {
    return module.config();
});

require([
    'config',
    'backbone',
    'home/HomeRouter' // Request router.js
], function (config, Backbone, HomeRouter) {
    new HomeRouter(config);
    Backbone.history.start();
});