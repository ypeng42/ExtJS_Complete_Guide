Ext.application({
    requires: ['Ext.container.Viewport'],
	
	controllers: [
        'Users'
    ],
	
	models: [
		'User'
	],
	
	views: [
		'user.List',
		'user.Edit'
	],
	
	stores: [
		'Users'
	],
	
	/* default is 'app' if not specified */
	appFolder: 'app',
	
	/* this is top name space*/
    name: 'AM',

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'userlist',
                }
            ]
        });
    }
});