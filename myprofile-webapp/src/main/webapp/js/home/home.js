define([
    'jquery',
    'underscore',
    'backbone',
    'home/router/app-router', // Request router.js
    'bootstrap',
], function($, _, Backbone, Router, Bootstrap){
    var initialize = function(){
        console.log("I m here 1.2");
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});