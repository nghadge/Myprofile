define([
    'backbone',
    'home/views/homeView'
], function (Backbone, HomeView) {
    return Backbone.Router.extend({
        routes: {
            '': 'home'
        },
        home: function () {
            var homeView = new HomeView()
            homeView.render();
        }
    });
});