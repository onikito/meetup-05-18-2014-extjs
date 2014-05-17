Ext.application({
    name: 'MyApp',
    appFolder: 'app',
    
    requires: ['Ext.panel.Panel', 'Ext.form.Label'],
    controllers: ['Navigation'],

    defaultToken: 'home',
    
    launch: function(){
        Ext.create('Ext.container.Viewport', {
            renderTo: Ext.getBody(),
            layout: 'center',
            style: {
                backgroundColor: 'gray'
            },
            items: [{
                xtype: 'panel',
                title: 'Hash',
                items: [{
                    xtype: 'label',
                    content: 'hash',
                    style: {
                        fontSize: 40
                    },
                    width: 500,
                    height: 150
                }]
            }]
        });
    }
});
