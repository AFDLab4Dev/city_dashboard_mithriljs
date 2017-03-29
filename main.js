//Declaration of useful variables for the application



var root = document.body;

//request url for wikipedia component

function showOptions(s) {
  console.log(s[s.selectedIndex].value); // get value
}
//"https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Agadir&callback=?&origin=*";

//variable for request
var Data = {
	wiki: {
		fetch: function() {
			m.jsonp({
				url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Agadir&callback=?&origin=*",
			})
			.then(function(data) {
				// fonction de parsing

				var text = data.parse.text["*"].split("table");
				var pText = "<table"+text[1]+"table>";
				
				Data.wiki.content = pText
				console.log(Data);


			})
			.catch(function(e) {
				Data.wiki.error = e.message
				console.log("Error")
			})
		}
	}
}

var City = {

	list: [
	{id:1, name:"Agadir"},
	{id:2,name:"Casablanca"},
	],
	selected: 1
	
	
};
console.log(City)


//Declaration of components

//Menu component

var Menuafd = {
	view: function(vnode){
		return m("ul",
			[
			m("li", 
				m("a", {class: "active", href:"",id:'home'}, 
					m("i.fa.fa-home.w3-xlarge")
					)
				),
			m("li", 
				m("a",{href:'Country_dashboard.html',id:"Country_Dashboard"}, 
					"Country Dashboard "
					)
				),
			m("li", 
				m("a",{href:'Glance.html',id:'Glance'}, 
					"At a Glance "
					)
				),
			m("li", 
				m("a",{href:'inequalityDashboard.html',id:'Inequality'}, 
					"Inégalités"
					)
				),
			m("li", 
				m("a", {href:'/dataviz/local/Country_dashboard_local.html', id:'local'}, 
					"Cartes DHS"
					)
				),
			m("li", {class:"dropdown"},
				[
				m("a", {class:"dropbtn",href:'javascript:void(0)'}, 
					"#DataStory"
					),
				m("a", {class:"dropdown-content"}, 
					m("a", {href:'http://afd.countrydashboards.com/datastory/Initiative+Sahel.html', id:'Initiative_sahel'}, 
						"Initiative Sahel - construction"
						)
					)
				]
				),
			m("li", {class:"dropdown"},
				[
				m("a", {class:"dropbtn", href:'javascript:void(0)'}, 
					"Big Browser"
					),
				m("div", {class:"dropdown-content"},
					[
					m("a",{href:'http://afd.countrydashboards.com/WDI+browser.html',id:'WDI'}, 
						"World Bank WDI"
						),
					m("a", {href:'http://afd.countrydashboards.com/DHS+browser.html', id:'DHS'}, 
						"Demographic Health Surveys"
						),
					m("a",{href:'http://afd.countrydashboards.com/FAO+browser.html', id:'FAO'}, 
						"FAO crop prices"
						)
					]
					)
				]
				),
			m("li", {style: {float: "right"}}, 
				m("a",{href:'',id:'Data'}, 
					"#DataDriven wiki"
					)
				)
			]
			)
}
}


//Map component
var Map = {
	oncreate: function(vnode){
		// At the creation of component, we create the map
		var mymap = L.map("mapid", {
			center: [30.4277547, -9.5981072],
			zoom: 13,
			minZoom: 12
		});

		L.tileLayer('https://api.mapbox.com/styles/v1/etibdv/cj0kv2vnc003a2rt8m01gpf4h/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXRpYmR2IiwiYSI6ImNpejhvdWJmcjAwMW8yd28weTkzMnA1aDkifQ.i8UKq0M_sIN1qq8F6UAgFw', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'mapbox.streets'
		}).addTo(mymap);
	},

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



var Select = {

	view: function(ctrl) {
		return m("select", {onchange : function(){  City.selected = this.value;}},
      City.list.map(function(option) {
				return m("option", { value: option.id }, option.name );
			})
		);
	}
};

//Select city
/*
var App = {
  view: function() {
    // Create a DIV.container
    return m('.container', [
      // Add <h1>Countries</h1>
      m('h1', 'Countries'),
      // Add a Select component
      m(Select, { 
        // CSS classes
        className: 'form-control',
        // With the Countries model
        options: Countries.get(function(option) {
          return option.name.indexOf('A', 0) === 0;
        }),
        // On change method
        change: function(event) {
          event.preventDefault();
          m.render(document.getElementById('country'), m(Country, { name: event.target.value })) ;
			  }
      }),
      // Add a horizontal rule
      m('hr'),
      m('#country', m(Country, { name: 'Select a country' }))
    ]);
  }
}

var Country = {
  view: function(ctrl, args) {
		return m("h2", { className: 'text-primary' }, args.name);
	}
}

var Countries = {
  get: function(filter) {
    filter = filter || function(option) { return option; };
    return m.request({method: "GET", url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/170817/countries.json' })
      .then(function(list) {
        return list.filter(filter);
      });
  }
}



var Select = {

	view: function(ctrl) {
		return m("select", { 
        onchange: ctrl.select 
      }, 
      ctrl.options().map(function(option) {
				return m("option", { value: option.id }, option.name);
			})
		);
	}
};

*/



m.mount(document.getElementById("wikiintro"),Wiki);

m.mount(document.getElementById("afdmenu"), Menuafd);

m.mount(document.getElementById("leafletmap"), Map);

m.mount(document.getElementById("selectcities"), Select);


