Ext.onReady(function() {
    new Ext.container.Viewport({
        renderTo: Ext.getBody(),
        layout: 'vbox',
        style: {
            backgroundColor: 'gray'
        },
        items: [{
            xtype: 'usergrid',
            width: 800,
            height: 500
        },{
            xtype: 'usergrid',
            width: 800,
            height: 500
        }]
    });
});
