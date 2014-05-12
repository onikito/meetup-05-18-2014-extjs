Ext.define('UserListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userlist',

    init: function() {
        this.userCount = 0;
        var users = [],
            i;

        for (i = 0; i < 5; ++i) {
            users.push(this.getUser());
        }
        this.getView().getStore().add(users);
    },

    onAddClick: function() {
        this.addUser();
    },

    onDeleteClick: function() {
        var view = this.getView(),
            selected = view.getSelectionModel().getSelection()[0],
            store = view.getStore();

        store.remove(selected);
    },

    getUser: function() {
        ++this.userCount;
        return {
            name: 'User ' + this.userCount,
            phone: this.generatePhone()
        };
    },

    addUser: function() {
        this.getView().getStore().add(this.getUser());
    },

    generatePhone: function() {
        var num = '',
            i;

        for (i = 0; i < 7; ++i) {
            num += Ext.Number.randomInt(0, 9);
            if (num.length === 3) {
                num += '-';
            }
        }
        return num;
    }
});