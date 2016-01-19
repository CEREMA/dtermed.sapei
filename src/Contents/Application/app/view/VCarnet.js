App.view.define('VCarnet', {
    extend: "Ext.window.Window",
    alias: 'widget.VCarnet',
    initComponent: function() {
        this.width = 800;
        this.height = 660;

        this.layout = {
            type: 'vbox'
        };

        this.bbar = [
        ];

        this.tbar = [
        ];
		
        this.defaults = {
            split: true
        };

        this.items = [
            {
                xtype: "combo",
                padding: 10,
                width: "100%",
                fieldLabel: "Client",
                editable: false,
                labelAlign: "left",
                store: App.store.create('sapei://client_origine',{autoLoad: true}),
                displayField: "Lib_client_origine",
                valueField: "Id_client_origine"
            }
		];

        this.callParent();
    }
});