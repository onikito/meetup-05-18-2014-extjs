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
                title: 'Routing Demo',
                width: 400,
                height: 200,
                bodyPadding: 10,
                items: {
                    xtype: 'textfield',
                    fieldLabel: 'Current user id',
                    content: true,
                    labelWidth: 150
                }
            }]
        });
    }
});
