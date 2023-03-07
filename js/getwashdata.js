(function() {


    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {

    $.ajaxSetup({
 		 headers : {   
    	'X-Sonnys-API-ID' : 'happyswash',
	'X-Sonnys-API-Key' : '6334661aadd1ab6c8b00035bc5f6a'
  	}
	});
        $.getJSON("https://sandboxapi.sonnyscontrols.com/v1/customer", function(resp) {
            var feat = resp.data.customers,
        });

        });
    });
})();
