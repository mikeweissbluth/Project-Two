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

      // alert('You updated a neighbor for: ' + facility_id);
      $.post("/api/neighbor/", neighborPlusOne, function() {
        // window.location.href = "/";
      });
    };
    // This is the array that will store all of our facilities that our API brings back.
    var facilities = [];
    
    function setMarkers(map) {
        // Adds markers to the map.
        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.
        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.

    // This is our SVG for the orange plumes for facilities on the map.
    //   var image = {
    //     path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
    //     fillColor: '#FF7b00',
    //     fillOpacity: .9,
    //     anchor: new google.maps.Point(0,0),
    //     strokeWeight: 0,
    //     scale: 1
    //   };

    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
        coords: [0, 0, 100],
        type: 'circle'
    };

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
                var fac_chem = data[i].CHEM_NAME;
                var fac_carcinogenic = data[i].CARCINOGEN;
                var fac_neighbors;  
                // Function to return the chemical array list as a string. If it's not a string, it will say 'None reported'.
                function fac_chem_str() {
                    if (fac_chem) {
                        return fac_chem.toString();
                    }
                    else {
                        return "None reported";
                    }
                }

                

                // Console Logs for testing:
                console.log("Facilities Name: ", fac_name);
                // console.log("Facilities Latitude: ", fac_lat);
                // console.log("Facilities Longitude: ", fac_lon);
                console.log(fac_chem_str());
                // console.log(typeof fac_chem);

                // An array to store name, lat & lon for each facility in our db.
                var new_facility = [];
                // Add the current facility data to that empty array.
                new_facility.push(fac_name, fac_lat, fac_lon);
                // console.log("New Facility: " + new_facility);
                // Add the new facility to our big facilities array - the facilities array will contain all of our facilities.
                facilities.push(new_facility);

                // console.log("Facilities currently are: " + facilities);

                var popUpContent = '<h1>' + fac_name + '</h1><br>'+ '<h4>Chemicals:</h4><p>' + fac_chem_str() + '</p>' + '<h4>Any Chemicals Known Carcinogenic?</h4><br><p>' + fac_carcinogenic + '</p><br><h4>Facility ID:</h4><br><p>' + fac_id + '</p><br><h4>How many neighbors:</h4><br><p>' + '</p><br><h4>Are you a neighbor?</h4><br><button id=' + fac_id + ' onclick="updateNeighbor(this.id)">Yes?</button>';

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
                marker.addListener('click', function() {
                    infoWindow.open(map, marker);
                });
            }
            createMarkerPlumbing();
        }
    });

}

