(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
/*
"customerId":"5700:999","firstName":"Lucy","lastName":"Anderson","customerNumber":53094515,"isActive":false}
*/
        var cols = [{
            id: "customerId",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "firstName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "lastName",
            alias: "lastName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "customerNumber",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "isActive",
            dataType: tableau.dataTypeEnum.string
        }];

        var tableSchema = {
            id: "customers",
            alias: "Customers from sandbox",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
    $.ajaxSetup({
 		 headers : {   
    	'X-Sonnys-API-ID' : 'happyswash',
	'X-Sonnys-API-Key' : '6334661aadd1ab6c8b00035bc5f6a'
  	}
	});
        $.getJSON("https://sandboxapi.sonnyscontrols.com/v1/customer", function(resp) {
            var feat = resp.data.customers,
                tableData = [];
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "customerId": feat[i].customerId,
                    "firstName": feat[i].firstName,
                    "lastName": feat[i].lastName,
                    "customerNumber": feat[i].customerNumber,
                    "isActive": feat[i].isActive
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "Carwash data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
