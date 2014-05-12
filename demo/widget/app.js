Ext.onReady(function() {
    var store = Ext.create('Ext.data.Store', {
        fields: ['name', 'progress']
    });

    for (var i = 0; i < 30; i++) {
        store.add({
            name: 'Test#' + i,
            progress: Math.random()
        });
    }

    new WidgetGrid({
        store: store,
        renderTo: Ext.getBody(),
        width: 800,
        height: 500
    });
});