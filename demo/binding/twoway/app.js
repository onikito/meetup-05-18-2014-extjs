Ext.onReady(function() {
    new Ext.container.Viewport({
        renderTo: Ext.getBody(),
        layout: 'center',
        style: {
            backgroundColor: 'gray'
        },
        items: [{
            xtype: 'binding-two-way'
        }]
    });
});