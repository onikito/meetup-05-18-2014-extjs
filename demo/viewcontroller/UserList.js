Ext.define('UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',
    controller: 'userlist',

    tbar: [{
        text: 'Add',
        listeners: {
            click: 'onAddClick'
        }
    }, {
        text: 'Delete',
        reference: 'delete',
        listeners: {
            click: 'onDeleteClick'
        }
    }],
    store: {
        model: 'User'
    },
    selModel: {
        type: 'rowmodel'
    },
    columns: [{
        flex: 1,
        dataIndex: 'name',
        text: 'Name'
    }, {
        flex: 1,
        dataIndex: 'phone',
        text: 'Phone'
    }]
});
