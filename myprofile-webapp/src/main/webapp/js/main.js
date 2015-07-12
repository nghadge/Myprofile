// Set the require.js configuration for your application.
require.config({
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        bootstrap: 'lib/bootstrap'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery': {
            exports: '$'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
    }
});
// Load our app module and pass it to our definition function
require(['home'], function(App) {
    console.log("I m here 1.1");
    App.initialize();
});
