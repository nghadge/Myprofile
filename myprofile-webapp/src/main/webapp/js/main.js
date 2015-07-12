// Set the require.js configuration for your application.
require.config({
    baseUrl: './js',
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

