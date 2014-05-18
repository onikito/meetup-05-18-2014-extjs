Ext.onReady(function() {
    new Ext.container.Viewport({
        renderTo: Ext.getBody(),
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        style: {
            backgroundColor: 'gray'
        },
        items: [{
            xtype: 'usergrid',
            flex: 1
        },{
            xtype: 'usergrid',
            flex: 1
        }]
    });
});
