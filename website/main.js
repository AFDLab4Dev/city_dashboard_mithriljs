//Declaration of useful functions. To be set in an other js file in the future.

function addmap(gps, identity){
// This function create the map with gps coordinates, add the layers (today hospital/ uni/market/ townhall), add a scale

//Creation of the map
	var mymap = L.map("mapid", {
		center: gps,
		zoom: 13,
		minZoom: 12
	});

// Add baselayer

	L.tileLayer("https://api.mapbox.com/styles/v1/etibdv/cj0kv2vnc003a2rt8m01gpf4h/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXRpYmR2IiwiYSI6ImNpejhvdWJmcjAwMW8yd28weTkzMnA1aDkifQ.i8UKq0M_sIN1qq8F6UAgFw", {
		maxZoom: 18,
		attribution: "Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors, " +
		"<a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, " +
		"Imagery © <a href='http://mapbox.com'>Mapbox</a>",
		id: "mapbox.streets"
	}).addTo(mymap);

	
	//Add hospital layer + icon

	var style_hospital = {
		"color": "#f00000",
		"backgroundColor": "#f00000",
		"weight": 5,
		"opacity": 0.65
	};

	var hospitalIcon = L.icon({
		iconUrl: "icons/hospital.png",
		iconSize: [32, 32],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
	});

	var geojsonLayer_hospital = new L.GeoJSON.AJAX("json/"+identity+"-hospital.geojson", {
		style: style_hospital,
		onEachFeature: onEachFeature,

		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: hospitalIcon
			});
		}
	});
	geojsonLayer_hospital.addTo(mymap);

	//Add university layer + icon

	var style_uni = {
		"color": "#12a81c",
		"weight": 5,
		"opacity": 0.65
	};

	var uniIcon = L.icon({
		iconUrl: "icons/uni.png",
		iconSize: [32, 32],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
	});

	var geojsonLayer_uni = new L.GeoJSON.AJAX("json/"+identity+"-uni.geojson", {
		onEachFeature: onEachFeature,
		style: style_uni,
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: uniIcon
			});
		}
	});

	//Add townhall layer + icon


	geojsonLayer_uni.addTo(mymap);
	var townhallIcon = L.icon({
		iconUrl: "icons/townhall.png",
		iconSize: [32, 32],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
	});
	var geojsonLayer_townhall = new L.GeoJSON.AJAX("json/"+identity+"-townhall.geojson", {
		onEachFeature: onEachFeature,
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: townhallIcon
			});
		}
	});
	geojsonLayer_townhall.addTo(mymap)

	//Add marketplace layer + icon

	var style_marketplace = {
		"color": "#e9e223",
		"weight": 5,
		"opacity": 0.65
	};

	var marketIcon = L.icon({
		iconUrl: "icons/market.png",
		iconSize: [32, 32],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
	});

	var geojsonLayer_marketplace = new L.GeoJSON.AJAX("json/"+identity+"-marketplace.geojson", {
		onEachFeature: onEachFeature,
		style: style_marketplace,
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: marketIcon
			});
		}
	});


	geojsonLayer_marketplace.addTo(mymap)

	// Creation of controller

	var baseMaps ={}
	var overlayMaps = {"Marchés":geojsonLayer_marketplace,"Universités":geojsonLayer_uni,"Mairie(s)":geojsonLayer_townhall,"Hôpitaux":geojsonLayer_hospital}

	L.control.layers(baseMaps, overlayMaps, {
		collapsed:true,
		position:'topright'
	}).addTo(mymap);

	// Add scale to the map

	L.control.scale({"imperial": false, "maxWidth" : 200}).addTo(mymap);



	

};



function onEachFeature(feature, layer) {
	// When one click on an item, it returns more information about the object
	var popupContent = "Type: " + feature.properties.amenity + "</br> Name: " +
	feature.properties.name;

	if (feature.properties && feature.properties.popupContent) {
		popupContent += feature.properties.popupContent;
	}

	layer.bindPopup(popupContent);
};



// It will be useful for mithril js 
var root = document.body;


// An object which contains informations and functions to change city on the city dashboard. To be simplified
var City = {
	mymap: "",

	// list to generate the select menu

	list: [{id: 1, name:"Surabaya" },{id: 2, name:"Kénitra" },{id: 3, name:"Ngaoundéré" },{id: 4, name:"Oujda" },{id: 5, name:"Saint Domingue" },{id: 6, name:"Fès" },{id: 7, name:"Safi" },{id: 8, name:"Marrakech" },{id: 9, name:"Bafoussam" },{id: 10, name:"Tanger" },{id: 11, name:"Yaoundé" },{id: 12, name:"Khourigba" },{id: 13, name:"Ej Jadida" },{id: 14, name:"Jakarta" },{id: 15, name:"Rabat" },{id: 16, name:"Bandung" },{id: 17, name:"Agadir" },{id: 18, name:"Khenisset" },{id: 19, name:"Settat" },{id: 20, name:"Beni melal" },{id: 21, name:"Nkongsamba" },{id: 22, name:"Laayoune" },{id: 23, name:"Meknes" },{id: 24, name:"Bamenda" },{id: 25, name:"Douala" },] ,

	// Dict From id to name
	dict: {1:"Surabaya",2:"Kénitra",3:"Ngaoundéré",4:"Oujda",5:"Saint Domingue",6:"Fès",7:"Safi",8:"Marrakech",9:"Bafoussam",10:"Tanger",11:"Yaoundé",12:"Khourigba",13:"Ej Jadida",14:"Jakarta",15:"Rabat",16:"Bandung",17:"Agadir",18:"Khenisset",19:"Settat",20:"Beni melal",21:"Nkongsamba",22:"Laayoune",23:"Meknes",24:"Bamenda",25:"Douala"},
	
	// Dict From id to coordinate
	dict_gps: {1:[-7.2574719, 112.7520883],2:[34.2540503, -6.5890166],3:[7.338148800000001, 13.5668302],4:[34.681962, -1.900155],5:[18.4860575, -69.93121169999999],6:[34.0181246, -5.0078451],7:[32.3008151, -9.2272033],8:[31.6294723, -7.981084500000001],9:[5.4807517, 10.4284178],10:[35.7594651, -5.833954299999999],11:[3.8480325, 11.5020752],12:[32.886023, -6.9208655],13:[33.2316326, -8.500711599999999],14:[-6.1744651, 106.822745],15:[33.9715904, -6.8498129],16:[-6.9174639, 107.6191228],17:[30.4277547, -9.5981072],18:[33.8153704, -6.0573302],19:[32.99242419999999, -7.622266499999999],20:[32.342443, -6.375799],21:[4.974116899999999, 9.9353318],22:[27.1252867, -13.1625005],23:[33.8730164, -5.5407299],24:[5.9630513, 10.1591213],25:[4.0510564, 9.7678687]},
	
	// displayed city
	selected: "Surabaya",

	//displayed coordinates
	selectedgps: [-7.2574719, 112.7520883],

	// method to execute when we change the city 
	refresh: function() {
		
		// Mount an empty vnode on leafletmap node
		m.mount(document.getElementById("leafletmap"), null);

		// Mount on leafletmap node the new map
		m.mount(document.getElementById("leafletmap"), Map);
		addmap(this.selectedgps, this.selected);
	}



};


// Contain all information for request and parsing of wikipedia request
var Data = {
	wiki: {
		// Fetch: method to do the query 
		fetch: function() {
			m.jsonp({
				url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page="+City.selected+"&callback=?&origin=*",
			})
			.then(function(data) {
				// Parsing function

				var text = data.parse.text["*"].split("table");
				var pText = "<table"+text[1]+"table>";
				
				Data.wiki.content = pText
				console.log(Data);


			})
			.catch(function(e) {
				//Error message

				console.log("Error")
			})
		}
	}
}



//Declaration of components

//Menu component

var Menuafd = {
	view: function(vnode){
		return m("ul",
			[
			m("li", 
				m("a", {class: "active", href:"",id:"home"}, 
					m("i.fa.fa-home.w3-xlarge")
					)
				),
			m("li", 
				m("a",{href:"Country_dashboard.html",id:"Country_Dashboard"}, 
					"Country Dashboard "
					)
				),
			m("li", 
				m("a",{href:"Glance.html",id:"Glance"}, 
					"At a Glance "
					)
				),
			m("li", 
				m("a",{href:"inequalityDashboard.html",id:"Inequality"}, 
					"Inégalités"
					)
				),
			m("li", 
				m("a", {href:"/dataviz/local/Country_dashboard_local.html", id:"local"}, 
					"Cartes DHS"
					)
				),
			m("li", {class:"dropdown"},
				[
				m("a", {class:"dropbtn",href:"javascript:void(0)"}, 
					"#DataStory"
					),
				m("a", {class:"dropdown-content"}, 
					m("a", {href:"http://afd.countrydashboards.com/datastory/Initiative+Sahel.html", id:"Initiative_sahel"}, 
						"Initiative Sahel - construction"
						)
					)
				]
				),
			m("li", {class:"dropdown"},
				[
				m("a", {class:"dropbtn", href:"javascript:void(0)"}, 
					"Big Browser"
					),
				m("div", {class:"dropdown-content"},
					[
					m("a",{href:"http://afd.countrydashboards.com/WDI+browser.html",id:"WDI"}, 
						"World Bank WDI"
						),
					m("a", {href:"http://afd.countrydashboards.com/DHS+browser.html", id:"DHS"}, 
						"Demographic Health Surveys"
						),
					m("a",{href:"http://afd.countrydashboards.com/FAO+browser.html", id:"FAO"}, 
						"FAO crop prices"
						)
					]
					)
				]
				),
			m("li", {style: {float: "right"}}, 
				m("a",{href:"",id:"Data"}, 
					"#DataDriven wiki"
					)
				)
			]
			)
}
}


//Map component
var Map = {	
	view: function(){
		return (m("div",  {id:"mapid"}))
	}
}


//Wikipedia component
var Wiki = {
	oninit: Data.wiki.fetch,


	view: function(vnode) {
		return Data.wiki.error ? [m(".error", Data.wiki.error)
		] : Data.wiki.content? [ 			
		m.trust(Data.wiki.content)
		] : m("a","Loading Data from wikipedia")
	}
}


// Menu to select a city component 
var App = {
	oninit: City.refresh(),

	view: function() {
    // Create a DIV.container
    return m(".container", [
    	m("#country", m(Country, { name: City.selected })),
    	m("hr"),
    	m(Select, { 
        // CSS classes
        className: "form-control",
    })

    	]);
}
}

var Country = {
	view: function(vnode) {
		return m("h3", { className: "text-primary"}, vnode.attrs.name);
	}
}

// Select menu component
var Select = {


	view: function() {
		return m("select", {onchange : function(){ 
			City.selected = City.dict[this.value]; 
			console.log(City.selectedgps)
			City.selectedgps = City.dict_gps[this.value];
			Data.wiki.fetch(); 
			City.refresh();
		}
	},
	City.list.map(function(option) {
		return m("option", { value: option.id }, option.name );
	})
	);
	}
};



// We mount all the component to node of the DOM. Could be improved with component composition. 
m.mount(document.getElementById("wikiintro"),Wiki);

m.mount(document.getElementById("afdmenu"), Menuafd);

m.mount(document.getElementById("leafletmap"), Map);

m.mount(document.getElementById("selectcities"), App);



