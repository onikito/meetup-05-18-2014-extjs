Ext.define('TwoWayFormulas', {
    extend: 'Ext.panel.Panel',
    xtype: 'binding-two-way-formulas',

    title: 'Two-Way Formulas',

    autoScroll: true,
    width: 450,
    frame: true,
    resizable: true,

    viewModel: {
        // Formulas are defined by the ViewModel:
        type: 'binding-two-way-formulas',

        data: {
            birthDate: new Date(1971, 4, 3),
            firstName: 'John',
            lastName: 'Doe'
        }
    },

    // The form layout makes labelWidth automatic
    layout: 'form',

    defaultType: 'textfield',
    items: [{
        fieldLabel: 'First Name',
        bind: '{firstName}'
    }, {
        fieldLabel: 'Last Name',
        bind: '{lastName}'
    }, {
        fieldLabel: 'Full Name (virtual)',
        bind: '{fullName}'
    }, {
        xtype: 'fieldcontainer',
        fieldLabel: 'Age',
        layout: {
            type: 'hbox',
            align: 'center'
        },
        items: [{
            xtype: 'numberfield',
            width: 100,
            bind: '{age}'
        }, {
            xtype: 'slider',
            width: 80,
            margin: '0 0 0 8',
            bind: '{age}'
        }, {
            xtype: 'slider',
            width: 80,
            publishOnComplete: true,
            margin: '0 0 0 8',
            bind: '{age}'
        }]
    }, {
        xtype: 'datefield',
        fieldLabel: 'Birth Date',
        bind: '{birthDate}'
    }]
});