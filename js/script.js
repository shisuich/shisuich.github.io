$(document).ready (function () {

	NProgress.start ();

	menu.onclick = function myFunction() {
		var x = document.getElementById("myTopnav");

		if(x.className === "topnav") {

			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}

	function initMap() {
		var uluru = {lat: 48.518595, lng: 135.11};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 8,
			center: uluru
		});
		var marker = new google.maps.Marker({
			position: uluru,
			map: map
		});
	}
	NProgress.done ();
});

