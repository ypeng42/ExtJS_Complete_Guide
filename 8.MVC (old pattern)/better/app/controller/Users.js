Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

	// views: [
		// 'user.List'
	// ],
	
    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
			
			'userlist': {
                itemdblclick: this.editUser
            },
			
			'useredit button[action=save_stuff]': {
                click: this.updateUser
            }
        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    },
	
	editUser: function(grid, record) {
		// record.set({
			// email: "sad",
			// name: "asas"
		// });
		
		var view = Ext.widget('useredit');
		
		view.down('form').loadRecord(record); // this is cruicial, later we can have a reference to record
		
    },
	
	updateUser: function(button) {
        var win = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(); // record is 'store'
		
		form.updateRecord(record);
		// same effect
        // values = form.getValues();
		// record.set(values);
		
		win.close();
    }
	
	
});