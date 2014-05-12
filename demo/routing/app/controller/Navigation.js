Ext.define('MyApp.controller.Navigation', {
    extend: 'Ext.app.Controller',

    routes: {
        'users': 'onUsers',
        'user/:id': 'onUser'
    },

    onUsers: function() {
        console.log('Users');
    },

    onUser: function(id) {
        console.log('User#' + id)
    }
});