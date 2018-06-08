    // This is for the slides layout.
    $('a[href*=#]').each(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname
            && this.hash.replace(/#/,'') ) {
          var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
          var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
          if ($target) {
              var targetOffset = $target.offset().top;
                $(this).click(function() {
                  $("#nav li a").removeClass("active");
                  $(this).addClass('active');
                  $('html, body').animate({scrollTop: targetOffset}, 1000);
                  return false;
                });
          }
      }
    });
  
 



// The callback function in the GMaps API (url) call. This grabs the above div with an id of map and renders the map.
function initMap() {
    // This is the map, which takes in an object with ALL of our styling objects in the styles key.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 41.8781, lng: -87.6298},
    styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]
  });
  // This actually calls our setMarkers function below.
  setMarkers(map);
}

    // Function to update the neighbors
    function updateNeighbor(facility_id) {
      event.preventDefault();
      var neighborPlusOne = {
        locationId: facility_id,
        yes: 1,
        no: 0
      }

      $.post("/api/neighbor/", neighborPlusOne, function() {
        // window.location.href = "/";
      });
      $.get("/api/neighbor/" + facility_id, function(data) {
        console.log("Neighbors data: " + data);
        $(".js-neighborcount").text(data);
      });
    };

    // This is the array that will store all of our facilities that our API brings back.
    var facilities = [];
    
    // Adds markers to the map.
    function setMarkers(map) {

    // Shapes define the clickable region of the icon or marker on our map.
    var shape = {
        coords: [0, 0, 100],
        type: 'circle'
    };

    // Function to return the chemical array list as a string. If it's not a string, it will say 'None reported'.
    function fac_chem_str(chemNameForUrl) {
      if (chemNameForUrl) {
          return chemNameForUrl.toString();
      }
      else {
          return "None reported";
      }
    }

    // Function to create the URLs for the compliance report links.
    function complianceURL(name, url) {
      return '<a href="' + url + '" target="_blank">' + ' <i class="far fa-3x fa-folder-open"></i></a>'
    }

    // This is to create a linkable list of chemical names in our pop up window.
    function createUrls(bigData) {
      var urlList = [];
      for (s = 0; s < bigData.length; s++) {
        urlList.push('<a href="' + bigData[s].url + '" target="_blank">' + bigData[s].title + ', </a>');
      }
      // console.log(urlList);
      var urlListStr = urlList.join("");
      return urlListStr;
    };

    // This is to return an object, but if it's null, it will say 'None Reported'.
    function createChemObjects(chem_array, chem_url, objects) {
      if (chem_array) {
        objects = chem_array.map((key, i) => ({ title: key, url: chem_url[i]}));
      }
      else {
        objects = {title: "None Reported", url: "#"};
      }
      return objects;
    };

    function yesOrNo(answer) {
      if (answer == 'N') {
        return "No";
      }
      if (answer == 'Y') {
        return "Yes";
      }
    }

    // This is our actual jQuery $get API call to our database. This does all the heavy-lifting.
    $.get("/api/all", function(data) {

        for (var i = 0; i < data.length; i++) {
            // Wrap the marker creation in a function so everything stays in scope.
            function createMarkerPlumbing() { 
                // Variables to store info from our API call.
                var fac_id = data[i].FACILITY_ID;
                var fac_name = data[i].FACILITY_NAME;
                var fac_lat = parseFloat(data[i].LATITUDE);
                var fac_lon = parseFloat(data[i].LONGITUDE);
                var fac_chem = data[i].CHEM_NAME_FOR_URL;
                var fac_chem_url = data[i].HSDB_URL;
                var fac_compliance_url = data[i].FACILITY_COMPLIANCE_REPORT_URL;
                var fac_carcinogenic = data[i].CARCINOGEN;
                var fac_neighbors;  
                
                let chem_objects;

                // createChemObjects(fac_chem, fac_chem_url, chem_objects);
                console.log('chem_objects is:');
                console.log(createUrls(createChemObjects(fac_chem, fac_chem_url, chem_objects)));

                // An array to store name, lat & lon for each facility in our db.
                var new_facility = [];
                // Add the current facility data to that empty array.
                new_facility.push(fac_name, fac_lat, fac_lon);

                // Add the new facility to our big facilities array - the facilities array will contain all of our facilities.
                facilities.push(new_facility);

                var popUpContent = '<h1>' + fac_name + '</h1> <h4>Chemicals:</h4><p>' + createUrls(createChemObjects(fac_chem, fac_chem_url, chem_objects)) + '</p> <h4>Any Chemicals Known Carcinogens?</h4><p>' + yesOrNo(fac_carcinogenic) + '</p><h4>Compliance History:</h4><p>' + complianceURL(fac_id, fac_compliance_url) + '</p><h4>How many concerned neighbors:</h4><span class="js-neighborcount">' + fac_neighbors + '</span><p>' + '</p><h4>Are you a neighbor?</h4><br><button class="button" id=' + fac_id + ' onclick="updateNeighbor(this.id)">Yes</button>';

                // Creates the info window
                var infoWindow = new google.maps.InfoWindow({
                    content: popUpContent
                });

                // This creates a marker for every new facility.
                var marker = new google.maps.Marker({
                    position: {lat: fac_lat, lng: fac_lon},
                    map: map,
                    icon: './../images/orange-diamond-85.ico',
                    shape: shape,
                    title: fac_name,
                    // zIndex: facility[3]
                });

                //creating an on-click functionality that removes the pop-up window when the facility is clicked a second time. (
                // let popUpContent= true;

                var activeInfoWindow;

                // This adds the click listener to the markers on the map
                marker.addListener('click', function(e) {

                    $.get("/api/neighbor/" + fac_id, function(data) {
                      console.log("Neighbors data: " + data);
                      $(".js-neighborcount").text(data);
                      // fac_neighbors = data;
                    });
                  
                    if (activeInfoWindow) { activeInfoWindow.close();}
                    infoWindow.open(map, marker);
                    activeInfoWindow = infoWindow;
                
                  
                });
                
                
            
            }
            createMarkerPlumbing();
        }
    });

}


