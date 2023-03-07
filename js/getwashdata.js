(function() {

    // Download the data
    $.ajaxSetup({
 		 headers : {   
    	'X-Sonnys-API-ID' : 'happyswash',
	'X-Sonnys-API-Key' : '6334661aadd1ab6c8b00035bc5f6a'
  	}
	});
        $.getJSON("https://sandboxapi.sonnyscontrols.com/v1/customer", function(resp) {
            var feat = resp.data.customers,
        });


    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
//            tableau.connectionName = "Carwash data"; // This will be the data source name in Tableau
//            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
