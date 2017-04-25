//Declaration of useful functions. To be set in an other js file in the future.
var country_dict = {"Arab World":"ARB", "Central Europe and the Baltics":"CEB", "Caribbean small states":"CSS", "East Asia & Pacific":"EAP", "East Asia & Pacific (all income levels)":"EAS", "Europe & Central Asia":"ECA", "Europe & Central Asia (all income levels)":"ECS", "Euro area":"EMU", "European Union":"EUU", "Fragile and conflict affected situations":"FCS", "High income":"HIC", "Heavily indebted poor countries (HIPC)":"HPC", "Latin America & Caribbean":"LAC", "Latin America & Caribbean (all income levels)":"LCN", "Least developed countries: UN classification":"LDC", "Low income":"LIC", "Lower middle income":"LMC", "Low & middle income":"LMY", "Middle East & North Africa (all income levels)":"MEA", "Middle income":"MIC", "Middle East & North Africa":"MNA", "North America":"NAC","High income":"HIC","High income: nonOECD":"NOC", "High income: OECD":"OEC", "OECD members":"OED", "Other small states":"OSS", "Pacific island small states":"PSS", "South Asia":"SAS", "Sub-Saharan Africa":"SSA", "Sub-Saharan Africa (all income levels)":"SSF", "Small states":"SST", "Upper middle income":"UMC", "World":"WLD","Ivory Coast":"CIV","Curacao":"CUW","Sao Tome and Principe":"STP","American Samoa":"ASM","Australia":"AUS","Brunei Darussalam":"BRN","China":"CHN","Fiji":"FJI","Micronesia, Fed. Sts.":"FSM","Guam":"GUM","Hong Kong SAR, China":"HKG","Indonesia":"IDN","Japan":"JPN","Cambodia":"KHM","Kiribati":"KIR","Korea, Rep.":"KOR","Lao PDR":"LAO","Macao SAR, China":"MAC","Marshall Islands":"MHL","Myanmar":"MMR","Mongolia":"MNG","Northern Mariana Islands":"MNP","Malaysia":"MYS","New Caledonia":"NCL","New Zealand":"NZL","Philippines":"PHL","Palau":"PLW","Papua New Guinea":"PNG","Korea, Dem. Rep.":"PRK","French Polynesia":"PYF","Singapore":"SGP","Solomon Islands":"SLB","Thailand":"THA","Timor-Leste":"TLS","Tonga":"TON","Tuvalu":"TUV","Taiwan, China":"TWN","Vietnam":"VNM","Vanuatu":"VUT","Samoa":"WSM","Albania":"ALB","Andorra":"AND","Armenia":"ARM","Austria":"AUT","Azerbaijan":"AZE","Belgium":"BEL","Bulgaria":"BGR","Bosnia and Herzegovina":"BIH","Belarus":"BLR","Switzerland":"CHE","Channel Islands":"CHI","Cyprus":"CYP","Czech Republic":"CZE","Germany":"DEU","Denmark":"DNK","Spain":"ESP","Estonia":"EST","Finland":"FIN","France":"FRA","Faeroe Islands":"FRO","United Kingdom":"GBR","Georgia":"GEO","Greece":"GRC","Greenland":"GRL","Croatia":"HRV","Hungary":"HUN","Isle of Man":"IMN","Ireland":"IRL","Iceland":"ISL","Italy":"ITA","Kazakhstan":"KAZ","Kyrgyz Republic":"KGZ","Liechtenstein":"LIE","Lithuania":"LTU","Luxembourg":"LUX","Latvia":"LVA","Monaco":"MCO","Moldova":"MDA","Macedonia, FYR":"MKD","Montenegro":"MNE","Netherlands":"NLD","Norway":"NOR","Poland":"POL","Portugal":"PRT","Romania":"ROU","Russian Federation":"RUS","San Marino":"SMR","Serbia":"SRB","Slovak Republic":"SVK","Slovenia":"SVN","Sweden":"SWE","Tajikistan":"TJK","Turkmenistan":"TKM","Turkey":"TUR","Ukraine":"UKR","Uzbekistan":"UZB","Aruba":"ABW","Argentina":"ARG","Antigua and Barbuda":"ATG","Bahamas, The":"BHS","Belize":"BLZ","Bolivia":"BOL","Brazil":"BRA","Barbados":"BRB","Chile":"CHL","Colombia":"COL","Costa Rica":"CRI","Cuba":"CUB","Curaçao":"CUW","Cayman Islands":"CYM","Dominica":"DMA","Dominican Republic":"DOM","Ecuador":"ECU","Grenada":"GRD","Guatemala":"GTM","Guyana":"GUY","Honduras":"HND","Haiti":"HTI","Jamaica":"JAM","St. Kitts and Nevis":"KNA","St. Lucia":"LCA","St. Martin (French part)":"MAF","Mexico":"MEX","Nicaragua":"NIC","Panama":"PAN","Peru":"PER","Puerto Rico":"PRI","Paraguay":"PRY","El Salvador":"SLV","Suriname":"SUR","Sint Maarten (Dutch part)":"SXM","Turks and Caicos Islands":"TCA","Trinidad and Tobago":"TTO","Uruguay":"URY","St. Vincent and the Grenadines":"VCT","Venezuela, RB":"VEN","Virgin Islands (U.S.)":"VIR","United Arab Emirates":"ARE","Bahrain":"BHR","Djibouti":"DJI","Algeria":"DZA","Egypt, Arab Rep.":"EGY","Iran, Islamic Rep.":"IRN","Iraq":"IRQ","Israel":"ISR","Jordan":"JOR","Kuwait":"KWT","Lebanon":"LBN","Libya":"LBY","Morocco":"MAR","Malta":"MLT","Oman":"OMN","West Bank and Gaza":"PSE","Qatar":"QAT","Saudi Arabia":"SAU","Syrian Arab Republic":"SYR","Tunisia":"TUN","Yemen, Rep.":"YEM","Bermuda":"BMU","Canada":"CAN","United States":"USA","Afghanistan":"AFG","Bangladesh":"BGD","Bhutan":"BTN","India":"IND","Sri Lanka":"LKA","Maldives":"MDV","Nepal":"NPL","Pakistan":"PAK","Angola":"AGO","Burundi":"BDI","Benin":"BEN","Burkina Faso":"BFA","Botswana":"BWA","Central African Republic":"CAF","Cote d'Ivoire":"CIV","Cameroon":"CMR","Congo, Dem. Rep.":"COD","Congo, Rep.":"COG","Comoros":"COM","Cabo Verde":"CPV","Eritrea":"ERI","Ethiopia":"ETH","Gabon":"GAB","Ghana":"GHA","Guinea":"GIN","Gambia, The":"GMB","Guinea-Bissau":"GNB","Equatorial Guinea":"GNQ","Kenya":"KEN","Liberia":"LBR","Lesotho":"LSO","Madagascar":"MDG","Mali":"MLI","Mozambique":"MOZ","Mauritania":"MRT","Mauritius":"MUS","Malawi":"MWI","Namibia":"NAM","Niger":"NER","Nigeria":"NGA","Rwanda":"RWA","Sudan":"SDN","Senegal":"SEN","Sierra Leone":"SLE","Somalia":"SOM","South Sudan":"SSD","São Tomé and Principe":"STP","Swaziland":"SWZ","Seychelles":"SYC","Chad":"TCD","Togo":"TGO","Tanzania":"TZA","Uganda":"UGA","South Africa":"ZAF","Zambia":"ZMB","Zimbabwe":"ZWE"} 


function create_featurelayer(iconUrl, color, kind,identity){
	var style = {
		"color": color,
		"backgroundColor": "#f00000",
		"weight": 5,
		"opacity": 0.65
	};

	var Icon = L.icon({
		iconUrl: iconUrl,
		iconSize: [32, 32],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
	});

	var poly = new L.GeoJSON.AJAX("json/"+identity+"-"+kind+".geojson", {
		style: style,
		onEachFeature: onEachFeature,
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: Icon
			});
		}

	});

	var center = new L.GeoJSON.AJAX("json/"+identity+"-"+kind+"-center.geojson", {
		style: style,
		onEachFeature: onEachFeature,

		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: Icon
			});
		}
	});

	return L.layerGroup([poly, center]);
}
	
function addmap(gps, identity, arguments){
// This function create the map with gps coordinates, add the layers (today hospital/ uni/market/ townhall), add a scale


	// Add baselayer
	var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/etibdv/cj0kv2vnc003a2rt8m01gpf4h/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXRpYmR2IiwiYSI6ImNpejhvdWJmcjAwMW8yd28weTkzMnA1aDkifQ.i8UKq0M_sIN1qq8F6UAgFw", {
		maxZoom: 18,
		attribution: "Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors, " +
		"<a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, " +
		"Imagery © <a href='http://mapbox.com'>Mapbox</a>",
		id: "mapbox.streets"
	});

	var carte = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXRpYmR2IiwiYSI6ImNpejhvdWJmcjAwMW8yd28weTkzMnA1aDkifQ.i8UKq0M_sIN1qq8F6UAgFw", {
			maxZoom: 18,
			attribution: "Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors, " +
			"<a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, " +
			"Imagery © <a href='http://mapbox.com'>Mapbox</a>",
			id: "mapbox.streets"
		});

	var worldpop = L.tileLayer("https://api.mapbox.com/styles/v1/etibdv/cj1g3m3um000m2rmthg1f63pe/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXRpYmR2IiwiYSI6ImNpejhvdWJmcjAwMW8yd28weTkzMnA1aDkifQ.i8UKq0M_sIN1qq8F6UAgFw", {
		maxZoom: 18,
		attribution: "Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors, " +
		"<a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, " +
		"Imagery © <a href='http://mapbox.com'>Mapbox</a>",
		id: "mapbox.streets"
	});

	var guflayer = L.tileLayer.wms('http://geoservice.dlr.de/eoc/land/ows?service=WMS', {
		layers: 'GUF28_DLR_v1_Mosaic',
		format: 'image/png',
		transparent: true,
		attribution:"Global Urban Footprint - DLR",

	});




	//Creation of the map
	var mymap = L.map("mapid", {
		zoom: 13,
		minZoom: 11,
		layers: [worldpop, guflayer, carte, satellite]
	});





	//Add hospital layer + icon
	var hospital = create_featurelayer("icons/hospitalicon.png",  "#f00000", "hospital", identity)
	var uni = create_featurelayer("icons/uniicon.png",  "#12a81c", "uni",identity)
	var market = create_featurelayer( "icons/marketicon.png",  "#e9e223", "marketplace", identity)
	var townhall = create_featurelayer("icons/townhallicon.png",  "#0000ff", "townhall", identity)


	// Creation of controller 1: BaseLayers
	// Creation of controller 2: FeatureLayers

	var overlayMaps = {"Marchés":market," Universités":uni,"Mairie(s)":townhall,"Hôpitaux":hospital}


	if (arguments != undefined) {
		switch (arguments) {
			case "Transport":
			var routes = new L.GeoJSON.AJAX("json/"+identity+"-routes.geojson", {
				style: {
					"color": "#000000",
					"weight": 5,
					"opacity": 0.03,
				},
				onEachFeature: onEachFeature,
			});
			overlayMaps["Transports en commun"] = routes;
			break;
		}
	}

	var baseMaps ={};






	L.control.layers(baseMaps, overlayMaps, {
		collapsed:true,
		position:'topleft'
	}).addTo(mymap);
	var control = L.geoportalControl.LayerSwitcher({
	        layers : [{
	            layer : carte,
	            config : {
	                title : "Vue carte",
	                description : "Carte OpenStreetMap",
	            }
	        },
	       	{layer : satellite,
	            config : {
	                title : "Vue Satellite",
	                description : "Mapbox/Digital Globe",

	            }
	        },
	       	{layer : worldpop,
	            config : {
	                title : "Bassins de population (>50pph)",
	                description : "Données issues de Worldpop (www.worlpop.co.uk). Ce modèle créé à partir d'images satellites et de statistiques nationales et infra-national permet une estimation de la densité à l'hectare. La fiabilité est donc à prendre avec du recul, de nombreux points aberrants pouvant apparaitre.",

	            }
	        },
	       	{layer : guflayer,
	            config : {
	                title : "Global Urban Footprint",
	                description : "Issue de l'analyse d'image satellite par l'Agence Spatiale Allemande (DLR), cette couche présente les territoires urbanisés en 2012.",

	            }
	        },
	        ],
	        options : {
	            collapsed : true,
	        },
	        position:'topleft'

	    })

	mymap.addControl(
		control
	    
	);
	// Add scale to the map

	L.control.scale({"imperial": false, "maxWidth" : 200}).addTo(mymap);
	mymap.setView(gps)


}




function onEachFeature(feature, layer) {
	// When one click on an item, it returns more information about the object


	

	var popupContent = "Type: " + feature.properties.amenity + "</br> Name: " +
	feature.properties.name;

	if (feature.properties && feature.properties.popupContent) {
		popupContent += feature.properties.popupContent;
	}

	layer.bindPopup(popupContent);



	

};

function refresh(){

	m.mount(document.getElementById("leafletmap"), null);
	m.mount(document.getElementById("leafletmap"), Map);
	addmap(City.selectedgps, City.selected, City.addon);
}



// An object which contains informations and functions to change city on the city dashboard. To be simplified

var Country = {

	mymap: "",
	menu: [{id: "3", name:"Cameroon" },{id: "2", name:"Indonesia" },{id: "1", name:"Madagascar" },{id: "4", name:"Morocco" },{id: "5", name:"Gabon" },{id: "6", name:"Dominican Republic" },{id: "7", name:"Congo, Rep." },{id: "8", name:"Burkina Faso" },{id: "9", name:"Benin" },{id: "10", name:"Ghana" },{id: "11", name:"Tunisia" },{id: "12", name:"Togo" },{id: "13", name:"Ivory Coast" },],
	dict: {"3":"Cameroon","2":"Indonesia","1":"Madagascar","4":"Morocco","5":"Gabon","6":"Dominican Republic","7":"Congo, Rep.","8":"Burkina Faso","9":"Benin","10":"Ghana","11":"Tunisia","12":"Togo","13":"Ivory Coast"},
	selected: "Cameroon"
}


var City = {
	mymap: "",

	dict_menu: {"Madagascar":[{id: "1_1", name:"Fianarantsoa" },],"Indonesia":[{id: "2_1", name:"Jakarta" },{id: "2_2", name:"Surabaya" },{id: "2_3", name:"Bandung" },],"Cameroon":[{id: "3_1", name:"Bamenda" },{id: "3_2", name:"Douala" },{id: "3_3", name:"Yaoundé" },{id: "3_4", name:"Bafoussam" },{id: "3_5", name:"Ngaoundéré" },{id: "3_6", name:"Nkongsamba" },{id: "3_7", name:"Belel" },{id: "3_8", name:"Garoua" },{id: "3_9", name:"Maroua" },],"Morocco":[{id: "4_1", name:"Fès" },{id: "4_2", name:"Rabat" },{id: "4_3", name:"Oujda" },{id: "4_4", name:"Agadir" },{id: "4_5", name:"Kénitra" },{id: "4_6", name:"Beni melal" },{id: "4_7", name:"Marrakech" },{id: "4_8", name:"Khourigba" },{id: "4_9", name:"Ej Jadida" },{id: "4_10", name:"Settat" },{id: "4_11", name:"Safi" },{id: "4_12", name:"Khenisset" },{id: "4_13", name:"Laayoune" },{id: "4_14", name:"Meknes" },{id: "4_15", name:"Tanger" },],"Gabon":[{id: "5_1", name:"Libreville" },],"Dominican Republic":[{id: "6_1", name:"Santo Domingo" },],"Congo, Rep.":[{id: "7_1", name:"Brazzaville" },],"Burkina Faso":[{id: "8_1", name:"Bobo-Dioulasso" },],"Benin":[{id: "9_1", name:"Dassa-Zoumé" },{id: "9_2", name:"Cotonou" },{id: "9_3", name:"Sémé-Podji" },],"Ghana":[{id: "10_1", name:"Accra" },],"Tunisia":[{id: "11_1", name:"Beni Khiar" },],"Togo":[{id: "12_1", name:"Tsévié" },{id: "12_2", name:"Lomé" },],"Ivory Coast":[{id: "13_1", name:"Treichville" },{id: "13_2", name:"Yamoussoukro" },{id: "13_3", name:"Bocanda" },]} ,

	dict: {"1_1":"Fianarantsoa","2_1":"Jakarta","2_2":"Surabaya","2_3":"Bandung","3_3":"Yaoundé","3_2":"Douala","3_1":"Bamenda","3_4":"Bafoussam","3_5":"Ngaoundéré","3_6":"Nkongsamba","3_7":"Belel","3_8":"Garoua","3_9":"Maroua","4_1":"Fès","4_2":"Rabat","4_3":"Oujda","4_4":"Agadir","4_5":"Kénitra","4_6":"Beni melal","4_7":"Marrakech","4_8":"Khourigba","4_9":"Ej Jadida","4_10":"Settat","4_11":"Safi","4_12":"Khenisset","4_13":"Laayoune","4_14":"Meknes","4_15":"Tanger","5_1":"Libreville","6_1":"Santo Domingo","7_1":"Brazzaville","8_1":"Bobo-Dioulasso","9_1":"Dassa-Zoumé","9_2":"Cotonou","9_3":"Sémé-Podji","10_1":"Accra","11_1":"Beni Khiar","12_1":"Tsévié","12_2":"Lomé","13_1":"Treichville","13_2":"Yamoussoukro","13_3":"Bocanda"},
	dict_gps: {"1_1":[-21.4546147, 47.08750449999999],"2_1":[-6.1744651, 106.822745],"2_2":[-7.2574719, 112.7520883],"2_3":[-6.9174639, 107.6191228],"3_3":[3.8480325, 11.5020752],"3_2":[4.0510564, 9.7678687],"3_1":[5.9630513, 10.1591213],"3_4":[5.4807517, 10.4284178],"3_5":[7.338148800000001, 13.5668302],"3_6":[4.974116899999999, 9.9353318],"3_7":[7.0513571, 14.4344853],"3_8":[9.322601599999999, 13.393389],"3_9":[10.5925289, 14.3210095],"4_1":[34.0181246, -5.0078451],"4_2":[33.9715904, -6.8498129],"4_3":[34.681962, -1.900155],"4_4":[30.4277547, -9.5981072],"4_5":[34.2540503, -6.5890166],"4_6":[32.342443, -6.375799],"4_7":[31.6294723, -7.981084500000001],"4_8":[32.886023, -6.9208655],"4_9":[33.2316326, -8.500711599999999],"4_10":[32.99242419999999, -7.622266499999999],"4_11":[32.3008151, -9.2272033],"4_12":[33.8153704, -6.0573302],"4_13":[27.1252867, -13.1625005],"4_14":[33.8730164, -5.5407299],"4_15":[35.7594651, -5.833954299999999],"5_1":[0.4161976, 9.4672676],"6_1":[18.4860575, -69.93121169999999],"7_1":[-4.2633597, 15.2428853],"8_1":[11.1649219, -4.3051542],"9_1":[7.784908700000001, 2.1990763],"9_2":[6.3702928, 2.3912362],"9_3":[6.4224777, 2.5990835],"10_1":[5.6037168, -0.1869644],"11_1":[36.4596214, 10.7830826],"12_1":[6.432945699999999, 1.2073261],"12_2":[6.1724969, 1.2313618],"13_1":[5.2920877, -4.013361],"13_2":[6.827622799999999, -5.2893433],"13_3":[7.0659131, -4.495428899999999]},
	selected: "Bamenda",
	selectedgps: [5.9630513, 10.1591213],
	listarg:{"Accra": ["Transport"]},
	addon: false,


};

// Contain all information for request and parsing of wikipedia request
var Data = {
	wiki: "",

		// Fetch: method to do the query 
		fetch: function() {
			m.jsonp({
				url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page="+City.selected+"&callback=?&origin=*",
			})
			.then(function(data) {
				// Parsing function

				//Create dummy DOM element to manipulate data from wikipédia

				var el = document.createElement( 'html' );
				el.innerHTML = data.parse.text["*"];

				var anchors = el.getElementsByTagName("a");

				for(var i =0; i < anchors.length; i++)
					{       var myLink = anchors[i].getAttribute("href");
				if (myLink.substring(0,4) != "http") {
					anchors[i].setAttribute("href","http://en.wikipedia.org/"+myLink);
				}
			}




				//get infobox from wikipédia
				var vcard = el.getElementsByClassName( "vcard")[0];




				//save the innerhtml, to be displayed in a mithril component later

				Data.wiki = "<table class='infobox geography vcard' style='width:22em; width:23em'>" + vcard.innerHTML + '</table>'


			})
			.catch(function(e) {
				//Error message

				Data.wiki = ""
			})
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
				m("a",{href:"afd.countrydashboards.com",id:"Country_Dashboard"}, 
					"Country Dashboard "
					)
				),
			m("li", 
				m("a",{href:"",id:"City_Dashboard"}, 
					"City Dashboard "
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
			
			m("li", {style: {float: "right"}}, 
				m("a",{href:"https://github.com/AFDLab4Dev/Wiki-dataExploration/wiki",id:"Data"}, 
					"#DataDriven wiki"
					)
				),
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
	oninit: Data.fetch,


	view: function(vnode) {
		return Data.error ? [m(".error", Data.error)
		] : Data.wiki? [m.trust(Data.wiki)] : m("a","Loading Data from wikipedia")
	}
}

var Cityinfo = {
	view: function(){
		return [m(Selector), 			
		m("a", {href: "http://afd.countrydashboards.com/Country_dashboard"+country_dict[Country.selected]+".html"}, "Lien vers AFD Country Dashboard"),
		]
	}
}


// Menu to select a city component 
var Selector = {
	oninit: refresh(),

	view: function() {
    // Create a DIV.container

    if (City.addon == false) {


    	return m(".container", [
    		m(Selectcountry),
    		m(Selectcity)

    		]);

    } else {

    	return m(".container", [
    		m(Selectcountry),
    		m(Selectcity),
    		m(Selectcategory)

    		]);

    }
}
}



// Select menu component
var Selectcity = {


	view: function() {
		return m("select", {onchange : function(){ 
			City.selected = City.dict[this.value]; 
			City.selectedgps = City.dict_gps[this.value];
			Data.fetch(); 

			if (City.listarg[City.selected]) {
				City.addon = City.listarg[City.selected][0]
			} else {
				City.addon = false
			}
			refresh();
		}
	},
	City.dict_menu[Country.selected].map(function(option) {
		return m("option", { value: option.id }, option.name );
	})
	);
	}
};

var Selectcountry = {


	view: function() {
		return m("select", {onchange : function(){ 
			Country.selected = Country.dict[this.value]; 
			City.selected = City.dict[this.value+"_1"]; 
			City.selectedgps = City.dict_gps[this.value+"_1"];
			Data.fetch(); 

			if (City.listarg[City.selected]) {
				City.addon = City.listarg[City.selected][0]
			} else {
				City.addon = false
			}

			refresh();
		}
	},
	Country.menu.map(function(option) {
		return m("option", { value: option.id }, option.name );
	})
	);
	}
};


var Selectcategory = {


	view: function() {
		return m("select", {onchange : function(){ 

			City.addon = this.value; 
			Data.fetch(); 
			refresh();
		}
	},
	City.listarg[City.selected].map(function(option) {
		return m("option", { value: option }, option );
	})
	);
	}
};



// We mount all the component to node of the DOM. Could be improved with component composition. 



m.mount(document.getElementById("afdmenu"), Menuafd);

m.mount(document.getElementById("leafletmap"), Map);



m.mount(document.getElementById("wikintro"),Wiki);
m.mount(document.getElementById("selectcities"), Cityinfo);



