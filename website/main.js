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

	/*

	var poly = new L.GeoJSON.AJAX("json/"+identity+"-"+kind+".geojson", {
		style: style,
		onEachFeature: onEachFeature,
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: Icon
			});
		}

	});

	*/


	var center = new L.GeoJSON.AJAX("json/"+identity+"-"+kind+"-center.geojson", {
		style: style,
		onEachFeature: onEachFeature,

		pointToLayer: function(feature, latlng) {
			return L.marker(latlng, {
				icon: Icon
			});
		}
	});

	return L.layerGroup([center]);
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

	var worldpop = L.tileLayer("https://api.mapbox.com/styles/v1/etibdv/cj1f6c58g00iu2smfbwp8yslt/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXRpYmR2IiwiYSI6ImNpejhvdWJmcjAwMW8yd28weTkzMnA1aDkifQ.i8UKq0M_sIN1qq8F6UAgFw",{
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



	var hash = new L.Hash(mymap);


	//Add hospital layer + icon
	var hospital = create_featurelayer("icons/hospitalicon.png",  "#f00000", "hospital", identity)
	var uni = create_featurelayer("icons/uniicon.png",  "#12a81c", "uni",identity)
	var market = create_featurelayer( "icons/marketicon.png",  "#e9e223", "marketplace", identity)
	var townhall = create_featurelayer("icons/townhallicon.png",  "#0000ff", "townhall", identity)
	var bus = create_featurelayer("icons/busstationicon.png",  "#333333", "bus", identity)



	// Creation of controller 1: BaseLayers
	// Creation of controller 2: FeatureLayers

	var overlayMaps = {"Marchés":market," Universités":uni,"Mairie(s)":townhall,"Hôpitaux":hospital, "Gare routière":bus}


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
	            display: true,
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
menu: [{id: "1", name:"Cameroon" },{id: "2", name:"Ivory coast" },{id: "3", name:"Nigeria" },{id: "4", name:"Benin" },{id: "5", name:"Guinea" },{id: "6", name:"Liberia" },{id: "7", name:"Sierra Leone" },{id: "8", name:"Togo" },{id: "9", name:"Ghana" },],
dict: {"1":"Cameroon","2":"Ivory coast","3":"Nigeria","4":"Benin","5":"Guinea","6":"Liberia","7":"Sierra Leone","8":"Togo","9":"Ghana"},
selected: "Ghana"
}


var City = {
	mymap: "",

	dict_menu: {"Cameroon":[{id: "1_1", name:"Yaoundé" },{id: "1_2", name:"Douala" },{id: "1_3", name:"Garoua" },{id: "1_4", name:"Bamenda" },{id: "1_5", name:"Bafoussam" },{id: "1_6", name:"Maroua" },{id: "1_7", name:"Kousséri" },{id: "1_8", name:"Ngaoundéré" },{id: "1_9", name:"Bertoua" },{id: "1_10", name:"Mokolo" },],"Ivory coast":[{id: "2_1", name:"Abidjan" },{id: "2_2", name:"Yamoussoukro" },{id: "2_3", name:"Bouaké" },{id: "2_4", name:"San-Pédro" },{id: "2_5", name:"Daloa" },{id: "2_6", name:"Abobo" },{id: "2_7", name:"Man" },{id: "2_8", name:"Korhogo" },{id: "2_9", name:"Gagnoa" },{id: "2_10", name:"Divo" },],"Nigeria":[{id: "3_1", name:"Ibadan" },{id: "3_2", name:"Lagos" },{id: "3_3", name:"Kano" },{id: "3_4", name:"Kaduna" },{id: "3_5", name:"Benin City" },{id: "3_6", name:"Maiduguri" },{id: "3_7", name:"Port Harcourt" },{id: "3_8", name:"Abuja" },{id: "3_9", name:"Jos" },{id: "3_10", name:"Aba" },],"Benin":[{id: "4_1", name:"Porto-Novo" },{id: "4_2", name:"Cotonou" },{id: "4_3", name:"Parakou" },{id: "4_4", name:"Djougou" },{id: "4_5", name:"Abomey-Calavi" },{id: "4_6", name:"Kandi" },{id: "4_7", name:"Ouidah" },{id: "4_8", name:"Bohicon" },{id: "4_9", name:"Lokossa" },{id: "4_10", name:"Abomey" },],"Guinea":[{id: "5_1", name:"Conakry" },{id: "5_2", name:"Nzérékoré" },{id: "5_3", name:"Kindia" },{id: "5_4", name:"Kankan" },{id: "5_5", name:"Camayenne" },{id: "5_6", name:"Port Kamsar" },{id: "5_7", name:"Gueckedou" },{id: "5_8", name:"Coyah" },{id: "5_9", name:"Labé" },{id: "5_10", name:"Kissidougou" },],"Liberia":[{id: "6_1", name:"Monrovia" },{id: "6_2", name:"Gbarnga" },{id: "6_3", name:"Kakata" },{id: "6_4", name:"Harper" },{id: "6_5", name:"Buchanan" },{id: "6_6", name:"Bensonville" },{id: "6_7", name:"Voinjama" },{id: "6_8", name:"Zwedru" },{id: "6_9", name:"Greenville" },{id: "6_10", name:"New Yekepa" },],"Sierra Leone":[{id: "7_1", name:"Freetown" },{id: "7_2", name:"Kenema" },{id: "7_3", name:"Bo" },{id: "7_4", name:"Makeni" },{id: "7_5", name:"Koidu" },{id: "7_6", name:"Port Loko" },{id: "7_7", name:"Lunsar" },{id: "7_8", name:"Waterloo" },{id: "7_9", name:"Kabala" },{id: "7_10", name:"Segbwema" },],"Togo":[{id: "8_1", name:"Lomé" },{id: "8_2", name:"Sokodé" },{id: "8_3", name:"Kara" },{id: "8_4", name:"Atakpamé" },{id: "8_5", name:"Palimé" },{id: "8_6", name:"Dapaong" },{id: "8_7", name:"Bassar" },{id: "8_8", name:"Tsévié" },{id: "8_9", name:"Aného" },{id: "8_10", name:"Sansanné-Mango" },],"Ghana":[{id: "9_1", name:"Accra" },{id: "9_2", name:"Kumasi" },{id: "9_3", name:"Tamale" },{id: "9_4", name:"Cape Coast" },{id: "9_5", name:"Tema" },{id: "9_6", name:"Takoradi" },{id: "9_7", name:"Sekondi-Takoradi" },{id: "9_8", name:"Achiaman" },{id: "9_9", name:"Teshie" },{id: "9_10", name:"Obuasi" },]} ,

	dict: {"1_1":"Yaoundé","1_2":"Douala","1_3":"Garoua","1_4":"Bamenda","1_5":"Bafoussam","1_6":"Maroua","1_7":"Kousséri","1_8":"Ngaoundéré","1_9":"Bertoua","1_10":"Mokolo","2_1":"Abidjan","2_2":"Yamoussoukro","2_3":"Bouaké","2_4":"San-Pédro","2_5":"Daloa","2_6":"Abobo","2_7":"Man","2_8":"Korhogo","2_9":"Gagnoa","2_10":"Divo","3_1":"Ibadan","3_2":"Lagos","3_3":"Kano","3_4":"Kaduna","3_5":"Benin City","3_6":"Maiduguri","3_7":"Port Harcourt","3_8":"Abuja","3_9":"Jos","3_10":"Aba","4_1":"Porto-Novo","4_2":"Cotonou","4_3":"Parakou","4_4":"Djougou","4_5":"Abomey-Calavi","4_6":"Kandi","4_7":"Ouidah","4_8":"Bohicon","4_9":"Lokossa","4_10":"Abomey","5_1":"Conakry","5_2":"Nzérékoré","5_3":"Kindia","5_4":"Kankan","5_5":"Camayenne","5_6":"Port Kamsar","5_7":"Gueckedou","5_8":"Coyah","5_9":"Labé","5_10":"Kissidougou","6_1":"Monrovia","6_2":"Gbarnga","6_3":"Kakata","6_4":"Harper","6_5":"Buchanan","6_6":"Bensonville","6_7":"Voinjama","6_8":"Zwedru","6_9":"Greenville","6_10":"New Yekepa","7_1":"Freetown","7_2":"Kenema","7_3":"Bo","7_4":"Makeni","7_5":"Koidu","7_6":"Port Loko","7_7":"Lunsar","7_8":"Waterloo","7_9":"Kabala","7_10":"Segbwema","8_1":"Lomé","8_2":"Sokodé","8_3":"Kara","8_4":"Atakpamé","8_5":"Palimé","8_6":"Dapaong","8_7":"Bassar","8_8":"Tsévié","8_9":"Aného","8_10":"Sansanné-Mango","9_1":"Accra","9_2":"Kumasi","9_3":"Tamale","9_4":"Cape Coast","9_5":"Tema","9_6":"Takoradi","9_7":"Sekondi-Takoradi","9_8":"Achiaman","9_9":"Teshie","9_10":"Obuasi"},
	dict_gps: {"1_1":[3.86667, 11.51667],"1_2":[4.04827, 9.70428],"1_3":[9.30143, 13.39771],"1_4":[5.9597, 10.14597],"1_5":[5.47775, 10.41759],"1_6":[10.59095, 14.31593],"1_7":[12.07689, 15.03063],"1_8":[7.32765, 13.58472],"1_9":[4.57728, 13.68459],"1_10":[10.74244, 13.80227],"2_1":[5.30966, -4.01266],"2_2":[6.82055, -5.27674],"2_3":[7.69385, -5.03031],"2_4":[4.74851, -6.6363],"2_5":[6.87735, -6.45022],"2_6":[5.41613, -4.0159],"2_7":[7.41251, -7.55383],"2_8":[9.45803, -5.62961],"2_9":[6.13193, -5.9506],"2_10":[5.83739, -5.35723],"3_1":[7.37756, 3.90591],"3_2":[6.45407, 3.39467],"3_3":[12.00012, 8.51672],"3_4":[10.52641, 7.43879],"3_5":[6.33815, 5.62575],"3_6":[11.84692, 13.15712],"3_7":[4.77742, 7.0134],"3_8":[9.05785, 7.49508],"3_9":[9.92849, 8.89212],"3_10":[5.10658, 7.36667],"4_1":[6.49646, 2.60359],"4_2":[6.36536, 2.41833],"4_3":[9.33716, 2.63031],"4_4":[9.70853, 1.66598],"4_5":[6.44852, 2.35566],"4_6":[11.13417, 2.93861],"4_7":[6.36307, 2.08506],"4_8":[7.17826, 2.0667],"4_9":[6.63869, 1.71674],"4_10":[7.18286, 1.99119],"5_1":[9.53795, -13.67729],"5_2":[7.75624, -8.8179],"5_3":[10.05692, -12.86576],"5_4":[10.38542, -9.30568],"5_5":[9.535, -13.68778],"5_6":[10.66667, -14.6],"5_7":[8.56744, -10.1336],"5_8":[9.70643, -13.38465],"5_9":[11.31823, -12.28332],"5_10":[9.1848, -10.09987],"6_1":[6.30054, -10.7969],"6_2":[6.99543, -9.47122],"6_3":[6.53104, -10.35368],"6_4":[4.3782, -7.71081],"6_5":[5.88109, -10.04472],"6_6":[6.44716, -10.61283],"6_7":[8.42194, -9.74778],"6_8":[6.06846, -8.13559],"6_9":[5.01133, -9.0388],"6_10":[7.57944, -8.53778],"7_1":[8.484, -13.22994],"7_2":[7.87687, -11.19025],"7_3":[7.96472, -11.73833],"7_4":[8.88605, -12.04417],"7_5":[8.64387, -10.9714],"7_6":[8.76609, -12.78696],"7_7":[8.68439, -12.53499],"7_8":[8.3389, -13.07091],"7_9":[9.58893, -11.55256],"7_10":[7.99471, -10.9502],"8_1":[6.13748, 1.21227],"8_2":[8.98333, 1.13333],"8_3":[9.55111, 1.18611],"8_4":[7.53333, 1.13333],"8_5":[6.9, 0.63333],"8_6":[10.86225, 0.20762],"8_7":[9.25025, 0.78213],"8_8":[6.42611, 1.21333],"8_9":[6.22798, 1.5919],"8_10":[10.35917, 0.47083],"9_1":[5.55602, -0.1969],"9_2":[6.68848, -1.62443],"9_3":[9.40079, -0.8393],"9_4":[5.10535, -1.2466],"9_5":[5.6698, -0.01657],"9_6":[4.88447, -1.75536],"9_7":[4.934, -1.7137],"9_8":[5.7, -0.33333],"9_9":[5.58365, -0.10722],"9_10":[6.20602, -1.66191]},
	selected: "Accra",
	selectedgps: [5.55602, -0.1969],
	listarg:{"Accra": ["Transport"]},
	addon: "Transport",


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
		},
		url : "",
		refreshurl: function(){
		var temp = window.location.href.split('#');
		Data.url = 'http://beta.dataspace.fr/worldpop/#'+temp[1];
	},
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
		m(Population),
		]
	}
}

var Population = {

	oncreate: Data.refreshurl,
	onupdate: Data.refreshurl,
	view: function(){

		return m("a", {href:Data.url, class: "btn btn-default"},"Mesurer des indicateurs")
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
		return m("select", {class:"select",onchange : function(){ 
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
		return m("select", {class: "select", onchange : function(){ 
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

		if (Country.selected == option.name) {
		return m("option", { selected:"selected", value: option.id }, option.name );

		}else {
		return m("option", { value: option.id }, option.name );
	}
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



