var carte = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXRpYmR2IiwiYSI6ImNpejhvdWJmcjAwMW8yd28weTkzMnA1aDkifQ.i8UKq0M_sIN1qq8F6UAgFw", {
		maxZoom: 18,
		attribution: "Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors, " +
		"<a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, " +
		"Imagery © <a href='http://mapbox.com'>Mapbox</a>",
		id: "mapbox.streets"
	});


var mymap = L.map("map", {
		zoom: 13,
		minZoom: 11,
		layers: [carte]
	});

mymap.setView([5.9630513, 10.1591213])

d3.select("#location")
	.text("Test");
