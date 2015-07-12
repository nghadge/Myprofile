/**
 * Created by nikhilghadge on 7/11/15.
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'lib/text!home/templates/homeTemplate.html'
], function($, _, Backbone, homeTemplate) {
    var ListView = Backbone.View.extend({
        el: $("#backbone-container"),
        render: function() {
            this.$el.html(homeTemplate);
        },
    });
    return ListView;
});