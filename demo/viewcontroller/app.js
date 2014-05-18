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
            width: 800,
            height: 500
        },{
            xtype: 'usergrid',
            width: 800,
            height: 500
        }]
    });
});
