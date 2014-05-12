Ext.define('WidgetGrid', {
    extend: 'Ext.grid.Panel',
    title: 'Widget Column Demo',

    columns: [{
        text: 'Test Number',
        dataIndex: 'name',
        flex: 1
    }, {
        xtype: 'widgetcolumn',
        text: 'Progress',
        flex: 2,
        dataIndex: 'progress',
        widget: {
            xtype: 'progressbarwidget',
            textTpl: '{value:percent}'
        }
    }]
});