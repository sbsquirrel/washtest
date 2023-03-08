(function() {


    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {


      console.log("Getting data:");         
  
          
  $.ajax({
            url: "https://sandboxapi.sonnyscontrols.com/v1/customer",
            type: 'GET', 
            crossDomain: true,
            dataType: 'json',
            headers : {   
               'X-Sonnys-API-ID' : 'happyswash',
               'X-Sonnys-API-Key' : '6334661aadd1ab6c8b00035bc5f6a',
               'Content-type': 'application/x-www-form-urlencoded',
               'Accept': 'application/json'

        },
          
          //  contentType: 'application/json; charset=utf-8',
            success: function (result) {
               // CallBack(result);
              console.log("OK");
	   
            },
            error: function (error) {
           
		console.dir(error);
            }
        });          
                 
          
         console.log("Done!");
  

    });
});
})();
