//====================================== MENU ======================================================

// Load country dashboard from the select list of countries
    function displayData(valueTheme) {
        var pays= document.getElementById("country_select").value;
        var url="countrydashboards/Dashboard"+pays+"-"+valueTheme+"_hztl.html"
        console.log(pays)
        console.log(valueTheme)
        console.log(url)
        $("#dashboards").load(url);
         window.scrollBy(0, 125);
    };
    
// Load country dashboard from the select list of countries
    function Glance() {
        console.log("displayGlance")
        var pays_glance= document.getElementById("glance_select").value;
        console.log(pays_glance)
        var url_glance="themes/Glance/glance_"+pays_glance+".html" 
        console.log(url_glance)
        $("#glance").load(url_glance);
         window.scrollBy(0, 125);
    };
    
//----------------------- Script to naviguate to the sections --------------------------------------

        $(document).on("click", "#countrydashboard_click", function(){
            console.log("click sur #countrydashboard_click")
            document.location.href = "#section-dashboards";
		  })
                
        $(document).on("click", "#thematique_click", function(){
            console.log("click sur #thematique_click")
            document.location.href = "#section-thematique";
            });
        
        $(document).on("click", "#story_click", function(){
            console.log("click sur #story_click")
            document.location.href = "#section-story";
            });
        
          $(document).on("click", "#outils_click", function(){
            console.log("click sur #outils_click")
            document.location.href = "#section-tools";
           });
        
        $(document).on("click", "#about_click", function(){
            console.log("click sur #about_click")
            document.location.href = "#section-about";
            });
     

//---------------  Script for menu within country dashboard for Eco, DHD, inst ---------------------
      $(document).on("click", "#box3", function(){
            console.log("click sur #box3")
           window.scrollBy(0, -125);
           displayData("eco")
            });
     
      $(document).on("click", "#box2", function(){
            console.log("click sur #box2")
          window.scrollBy(0, -125);
           displayData("DHD")
            });
     
      $(document).on("click", "#box1", function(){
            console.log("click sur #box1")
           window.scrollBy(0, -125);
           displayData("inst")
            });
     
//----- Expand icon opens country dashboards (vertical V1) in a new tab
        $(document).on("click", "#expand", function(){
            console.log("click sur #expand")
            var pays= document.getElementById("country_select").value;
            var url="countrydashboards/vertical/Country_dashboard"+pays+".html"
            console.log(url)
            window.open(url, '_blank');
            });
//====================================== FIN MENU ======================================================