var City = {
	mymap: "",

	list: [{id: 1, name:"Surabaya" },{id: 2, name:"Kénitra" },{id: 3, name:"Ngaoundéré" },{id: 4, name:"Brazzaville" },{id: 5, name:"Beni Khiar" },{id: 6, name:"Meknes" },{id: 7, name:"Sémé-Podji" },{id: 8, name:"Oujda" },{id: 9, name:"Fès" },{id: 10, name:"Safi" },{id: 11, name:"Bobo-Dioulasso" },{id: 12, name:"Garoua" },{id: 13, name:"Marrakech" },{id: 14, name:"Dassa-Zoumé" },{id: 15, name:"Maroua" },{id: 16, name:"Bafoussam" },{id: 17, name:"Tanger" },{id: 18, name:"Yaoundé" },{id: 19, name:"Fianarantsoa" },{id: 20, name:"Khourigba" },{id: 21, name:"Ej Jadida" },{id: 22, name:"Jakarta" },{id: 23, name:"Rabat" },{id: 24, name:"Bandung" },{id: 25, name:"Treichville" },{id: 26, name:"Agadir" },{id: 27, name:"Accra" },{id: 28, name:"Belel" },{id: 29, name:"Lomé" },{id: 30, name:"Khenisset" },{id: 31, name:"Cotonou" },{id: 32, name:"Settat" },{id: 33, name:"Beni melal" },{id: 34, name:"Nkongsamba" },{id: 35, name:"Laayoune" },{id: 36, name:"Santo Domingo" },{id: 37, name:"Yamoussoukro" },{id: 38, name:"Bocanda" },{id: 39, name:"Libreville" },{id: 40, name:"Bamenda" },{id: 41, name:"Tsévié" },{id: 42, name:"Douala" },] ,

	dict: {1:"Surabaya",2:"Kénitra",3:"Ngaoundéré",4:"Brazzaville",5:"Beni Khiar",6:"Meknes",7:"Sémé-Podji",8:"Oujda",9:"Fès",10:"Safi",11:"Bobo-Dioulasso",12:"Garoua",13:"Marrakech",14:"Dassa-Zoumé",15:"Maroua",16:"Bafoussam",17:"Tanger",18:"Yaoundé",19:"Fianarantsoa",20:"Khourigba",21:"Ej Jadida",22:"Jakarta",23:"Rabat",24:"Bandung",25:"Treichville",26:"Agadir",27:"Accra",28:"Belel",29:"Lomé",30:"Khenisset",31:"Cotonou",32:"Settat",33:"Beni melal",34:"Nkongsamba",35:"Laayoune",36:"Santo Domingo",37:"Yamoussoukro",38:"Bocanda",39:"Libreville",40:"Bamenda",41:"Tsévié",42:"Douala"},
	dict_gps: {1:[-7.2574719, 112.7520883],2:[34.2540503, -6.5890166],3:[7.338148800000001, 13.5668302],4:[-4.2633597, 15.2428853],5:[36.4596214, 10.7830826],6:[33.8730164, -5.5407299],7:[6.4224777, 2.5990835],8:[34.681962, -1.900155],9:[34.0181246, -5.0078451],10:[32.3008151, -9.2272033],11:[11.1649219, -4.3051542],12:[9.322601599999999, 13.393389],13:[31.6294723, -7.981084500000001],14:[7.784908700000001, 2.1990763],15:[10.5925289, 14.3210095],16:[5.4807517, 10.4284178],17:[35.7594651, -5.833954299999999],18:[3.8480325, 11.5020752],19:[-21.4546147, 47.08750449999999],20:[32.886023, -6.9208655],21:[33.2316326, -8.500711599999999],22:[-6.1744651, 106.822745],23:[33.9715904, -6.8498129],24:[-6.9174639, 107.6191228],25:[5.2920877, -4.013361],26:[30.4277547, -9.5981072],27:[5.6037168, -0.1869644],28:[7.0513571, 14.4344853],29:[6.1724969, 1.2313618],30:[33.8153704, -6.0573302],31:[6.3702928, 2.3912362],32:[32.99242419999999, -7.622266499999999],33:[32.342443, -6.375799],34:[4.974116899999999, 9.9353318],35:[27.1252867, -13.1625005],36:[18.4860575, -69.93121169999999],37:[6.827622799999999, -5.2893433],38:[7.0659131, -4.495428899999999],39:[0.4161976, 9.4672676],40:[5.9630513, 10.1591213],41:[6.432945699999999, 1.2073261],42:[4.0510564, 9.7678687]},
	selected: "Agadir",
	selectedgps: [30.4277547, -9.5981072],
	refresh: function() {
		
		m.mount(document.getElementById("leafletmap"), null);
		m.mount(document.getElementById("leafletmap"), Map);
		addmap(this.selectedgps, this.selected);
	}



};