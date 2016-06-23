//Custom Javascript
/*
(function ($) {
	 $(document).ready(function() {

		// Load JSON Data from local file using loop
		$.getJSON("links.json", function(data) {
			for (var i = 0; i < data.length; i++) {
				
				// Store object
				var jsonObj = data[i];
				
				// Get link property from json object
				var hrefLink = jsonObj.link;
				console.log(hrefLink); // For debugging

				// Get secondary category from json object
				var secondaryCategory = jsonObj.secondarycategory;

				// Get current page address
				var pageAddress = window.location.href;

				console.log(pageAddress);

				// check if link property is the same as page address
				if(hrefLink == pageAddress) {
					switch(secondaryCategory) {
						case "Agro Ecological Zone":
						active_panel = 0;
						break;
					case "Water Management":
						active_panel = 1;
						break;
					case "Sustainable & Organic Agriculture":
						active_panel = 2;
						break;
					case "Conservation Agriculture":
						active_panel = 3;
						break;
					case "Agroforestry":
						active_panel = 4;
						break;
					case "Trees":
						active_panel = 5;
						break;
					case "Processing & Value Addition":
						active_panel = 6;
						break;
					}

					// open the panel that is active
					$(".accordion-sidebar").accordion({
						collapsible: true,
						header: "h3",
						active: active_panel,
						animated: false,
						icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
					});
				}
			}
		});
	 });
})(jQuery);
*/

// pure javascript code for Ajax
// Non jQuery code for the sake of browser compatability
function ajaxFunction() {
	var ajaxRequest;

	try {

		ajaxRequest = new XMLHttpRequest();

	} catch(e) {

		try {

			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");

		} catch(e) {
			try {

				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");

			} catch(e) {

				alert("Your browser broke");
				return false;

			}
		}

	}

	// receive data sent from the server
	ajaxRequest.onreadystatechange = function () {
		if(ajaxRequest.readyState == 4) {
			
			// output to log for debugging
			console.log(ajaxRequest.responseText);
		}
	}

	ajaxRequest.open("GET","links.json",true);
	
	// since the request is GET, the send string is NULL
	ajaxRequest.send(null);

}