App.view.define('VCarnet', {
    extend: "Ext.window.Window",
    alias: 'widget.VCarnet',
    initComponent: function() {
        this.width = 750;
        this.height = 630;

        this.layout = {
            type: 'vbox'
        };
        
        this.bodyStyle="background-color:white";

        this.bbar = [
            {
                itemId: "record",
                text: "Enregistrer"
            }
        ];

        this.tbar = [
        ];
		
        this.defaults = {
            split: true
        };

        this.items = [
            {
                layout: "hbox",
                width: "100%",
                border: false,
                items: [
                {
                    xtype: "combo",
                    itemId: "client",
                    padding: 10,
                    flex: 1,
                    fieldLabel: "Client",
                    editable: false,
                    labelAlign: "top",
                    store: App.store.create('sapei://client_origine{Id_client_origine,Lib_client_origine+}',{autoLoad: true}),
                    displayField: "Lib_client_origine",
                    valueField: "Id_client_origine"
                },
                {
                    xtype: "combo",
                    itemId: "service",
                    padding: 10,
                    flex: 1,
                    fieldLabel: "Service",
                    editable: false,
                    labelAlign: "top",
                    store: App.store.create('sapei://client_rattache{Id_client_rattache,Lib_client_rattache+}'),
                    displayField: "Lib_client_rattache",
                    valueField: "Id_client_rattache"
                },
                {
                    xtype: "combo",
                    itemId: "type",
                    padding: 10,
                    width: 100,
                    fieldLabel: "Type",
                    editable: false,
                    labelAlign: "top",
                    store: App.store.create('sapei://type_contact',{autoLoad: true}),
                    displayField: "Lib_type_contact",
                    valueField: "Id_type_contact"
                }                    
                ]
            },
            {
                xtype: "textfield",
                fieldLabel: "Nom, Prénom",
                padding: 10,
                width: "100%",
                labelAlign: "left"
            },
            {
                xtype: "textfield",
                fieldLabel: "Téléphone",
                padding: 10,
                width: "100%",
                labelAlign: "left"
            },
            {
                xtype: "textfield",
                fieldLabel: "Mobile",
                padding: 10,
                width: "100%",
                labelAlign: "left"
            },
            {
                xtype: "textfield",
                fieldLabel: "Mail",
                padding: 10,
                width: "100%",
                labelAlign: "left"
            },
            {
                xtype: "textfield",
                fieldLabel: "Fonction",
                padding: 10,
                width: "100%",
                labelAlign: "left"
            },            
            {
                xtype: "textarea",
                fieldLabel: "Adresse",
                padding: 10,
                width: "100%",
                flex: 1,
                labelAlign: "left"
            },            
            {
                xtype: "grid",
                width: "100%",
                flex: 1,
                columns:[
                {
                    text: "Nom Prénom",
                    dataIndex: "NomPrenom_contact_client"
                },
                {
                    text: "Téléphone",
                    dataIndex: "Tel_contact_client" 
                },
                {
                    text: "Mobile",
                    dataIndex: "Mobile_contact_client" 
                },
                {
                    text: "Mail",
                    dataIndex: "Mail_contact_client" 
                },
                {
                    text: "Fonction",
                    dataIndex: "Fonction_contact_client" 
                },
                {
                    text: "Service",
                    dataIndex: "Lib_client_rattache"
                },
                {
                    text: "Type",
                    dataIndex: "Lib_type_contact"
                }
                ],
                store: App.store.create('sapei://contact_client{*,client_rattache.Lib_client_rattache,type_contact.Lib_type_contact}',{autoLoad: true})
            }
		];

        this.callParent();
    }
});