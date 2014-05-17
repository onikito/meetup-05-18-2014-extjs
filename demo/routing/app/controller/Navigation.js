Ext.define('MyApp.controller.Navigation', {
    extend: 'Ext.app.Controller',

    routes: {
        'users': 'onUsers',
        'user/:id': 'onUser'
    },
    
    refs: [
        { ref: 'tField', selector: 'textfield'}
    ],

    onUsers: function() {
        this.getTField().setValue('Users');
    },

    onUser: function(id) {
        this.getTField().setValue('User #'+id);
    }
});
