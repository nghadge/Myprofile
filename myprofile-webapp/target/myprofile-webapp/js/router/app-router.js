define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    console.log("I m here 1.3");
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'main',
            'test': 'test'
        }
    });

    var initialize = function() {
        console.log("I m here 1.4");
        var app_router = new AppRouter;
        app_router.on('route:main', function() {
            console.debug("started in main");
        })

        app_router.on('', function() {
            console.debug("started in test");
        });
;        Backbone.history.start({ pushState: true, root: "/" });
    };

    return {
        initialize: initialize
    };
});