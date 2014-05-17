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
                width: 400,
                height: 200,
                items: {
                    xtype: 'textfield',
                    fieldLabel: 'Title',
                    labelWidth: 50
                }
            }]
        });
    }
});
