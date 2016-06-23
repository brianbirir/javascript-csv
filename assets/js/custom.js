//Custom Javascript

	// accordion function
	$( document ).ready(function(){
	
		// Global variables
		var jsonData;

		// Call AJAX function on page load
		$(window).bind("load", function() {
   			ajaxFunction();
		});

		// pure javascript code for Ajax
		// Non jQuery code for the sake of browser compatability
		function ajaxFunction() {
			var ajaxRequest;

			try {

				ajaxRequest = new XMLHttpRequest();

			} catch(e) {
				// if browser is Internet Explorer
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
					//console.log(ajaxRequest.response);
					//console.log(ajaxRequest.responseText);
					// parse text as JSON
					var parsedJSON = JSON.parse(ajaxRequest.responseText);
					readJSON(parsedJSON);
				}
			}

			ajaxRequest.open("GET","links.json",true);
			
			// since the request is GET, the send string is NULL
			ajaxRequest.send(null);

		}

		function readJSON(jsonData) {

			for (var i = 0; i < jsonData.length; i++) {
				
				var jsonObj = jsonData[i];

				//console.log(jsonObj);

				// Get link property from json object
				var hrefLink = jsonObj.link;
				console.log(hrefLink); // For debugging

				// Get secondary category from json object
				var secondaryCategory = jsonObj.secondarycategory;
				console.log(secondaryCategory); // For debugging

				// Get current page address
				var pageAddress = window.location.href;
				// console.log(pageAddress); // For debugging

				// open accordions based on link and secondary category
				selectAccordion(hrefLink,pageAddress,secondaryCategory);
			}
		}

		function selectAccordion(hrefLink,pageAddress,secondaryCategory) {
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