//map variable
var map = L.map('my-map').setView([32.775729, -96.814270], 9);

//basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var options = {
    radius: 6,
    opacity: 1,
    fillColor: "#0018a3",
    fillOpacity: 0.9,
    color: '#0018a3',
    weight: 2,
  };

var dallas = $.getJSON("data/dallas3.geojson");
dallas.then(function(data) {
    var allStops = L.geoJson(data);
    var january = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-01");
        },
        pointToLayer: function(feature, latlng) {
  var raceColor = 'black';
  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
  if (feature.properties.driver_race === 'White') raceColor = 'green';
  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
  var options = {
      radius: 6,
      opacity: 1,
      fillColor: raceColor,
      fillOpacity: 0.9,
      color: raceColor,
      weight: 2,
    };
					var raceColor = 'black';
					if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
					if (feature.properties.driver_race === 'White') raceColor = 'green';
					if (feature.properties.driver_race === 'Black') raceColor = 'orange';
					var options = {
							radius: 6,
							opacity: 1,
							fillColor: raceColor,
							fillOpacity: 0.9,
							color: raceColor,
							weight: 2,
						};
						return L.circleMarker(latlng, options).on('click', function() {
                this.bindPopup(feature.properties.violation).openPopup();
            });
        }
    });
		var february = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-02");
        },
        pointToLayer: function(feature, latlng) {
  var raceColor = 'black';
  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
  if (feature.properties.driver_race === 'White') raceColor = 'green';
  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
  var options = {
      radius: 6,
      opacity: 1,
      fillColor: raceColor,
      fillOpacity: 0.9,
      color: raceColor,
      weight: 2,
    };
            return L.circleMarker(latlng, options).on('click', function() {
                this.bindPopup(feature.properties.violation).openPopup();
            });
        }
    });
		var march = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-03");
        },
        pointToLayer: function(feature, latlng) {
  var raceColor = 'black';
  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
  if (feature.properties.driver_race === 'White') raceColor = 'green';
  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
  var options = {
      radius: 6,
      opacity: 1,
      fillColor: raceColor,
      fillOpacity: 0.9,
      color: raceColor,
      weight: 2,
    };
            return L.circleMarker(latlng, options).on('click', function() {
                this.bindPopup(feature.properties.violation).openPopup();
            });
        }
    });
		var april = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-04");
        },
        pointToLayer: function(feature, latlng) {
  var raceColor = 'black';
  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
  if (feature.properties.driver_race === 'White') raceColor = 'green';
  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
  var options = {
      radius: 6,
      opacity: 1,
      fillColor: raceColor,
      fillOpacity: 0.9,
      color: raceColor,
      weight: 2,
    };
            return L.circleMarker(latlng, options).on('click', function() {
                this.bindPopup(feature.properties.violation).openPopup();
            });
        }
    });
		var may = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-05");
        },
        pointToLayer: function(feature, latlng) {
  var raceColor = 'black';
  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
  if (feature.properties.driver_race === 'White') raceColor = 'green';
  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
  var options = {
      radius: 6,
      opacity: 1,
      fillColor: raceColor,
      fillOpacity: 0.9,
      color: raceColor,
      weight: 2,
    };
            return L.circleMarker(latlng, options).on('click', function() {
                this.bindPopup(feature.properties.violation).openPopup();
            });
        }
    });
		var june = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-06");
        },
        pointToLayer: function(feature, latlng) {
  var raceColor = 'black';
  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
  if (feature.properties.driver_race === 'White') raceColor = 'green';
  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
  var options = {
      radius: 6,
      opacity: 1,
      fillColor: raceColor,
      fillOpacity: 0.9,
      color: raceColor,
      weight: 2,
    };
            return L.circleMarker(latlng, options).on('click', function() {
                this.bindPopup(feature.properties.violation).openPopup();
            });
        }
    });
		var july = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-07");
        },
        pointToLayer: function(feature, latlng) {
  var raceColor = 'black';
  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
  if (feature.properties.driver_race === 'White') raceColor = 'green';
  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
  var options = {
      radius: 6,
      opacity: 1,
      fillColor: raceColor,
      fillOpacity: 0.9,
      color: raceColor,
      weight: 2,
    };
            return L.circleMarker(latlng, options).on('click', function() {
                this.bindPopup(feature.properties.violation).openPopup();
            });
        }
    });
		var august = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-08");
        },
        pointToLayer: function(feature, latlng) {
  var raceColor = 'black';
  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
  if (feature.properties.driver_race === 'White') raceColor = 'green';
  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
  var options = {
      radius: 6,
      opacity: 1,
      fillColor: raceColor,
      fillOpacity: 0.9,
      color: raceColor,
      weight: 2,
    };
            return L.circleMarker(latlng, options).on('click', function() {
                this.bindPopup(feature.properties.violation).openPopup();
            });
        }
    });
		var september = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-09");
        },
        pointToLayer: function(feature, latlng) {
  var raceColor = 'black';
  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
  if (feature.properties.driver_race === 'White') raceColor = 'green';
  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
  var options = {
      radius: 6,
      opacity: 1,
      fillColor: raceColor,
      fillOpacity: 0.9,
      color: raceColor,
      weight: 2,
    };
            return L.circleMarker(latlng, options).on('click', function() {
                this.bindPopup(feature.properties.violation).openPopup();
            });
        }
    });
		var october = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-10");
        },
        pointToLayer: function(feature, latlng) {
  var raceColor = 'black';
  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
  if (feature.properties.driver_race === 'White') raceColor = 'green';
  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
  var options = {
      radius: 6,
      opacity: 1,
      fillColor: raceColor,
      fillOpacity: 0.9,
      color: raceColor,
      weight: 2,
    };
            return L.circleMarker(latlng, options).on('click', function() {
                this.bindPopup(feature.properties.violation).openPopup();
            });
        }
    });
		var november = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-11");
        },
        pointToLayer: function(feature, latlng) {
  var raceColor = 'black';
  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
  if (feature.properties.driver_race === 'White') raceColor = 'green';
  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
  var options = {
      radius: 6,
      opacity: 1,
      fillColor: raceColor,
      fillOpacity: 0.9,
      color: raceColor,
      weight: 2,
    };
            return L.circleMarker(latlng, options).on('click', function() {
                this.bindPopup(feature.properties.violation).openPopup();
            });
        }
    });
		var december = L.geoJson(data, {
        filter: function(feature, layer) {
						return feature.properties.stop_date.includes("2015-12");
        },
        pointToLayer: function(feature, latlng) {
  var raceColor = 'black';
  if (feature.properties.driver_race === 'Asian') raceColor = 'purple';
  if (feature.properties.driver_race === 'White') raceColor = 'green';
  if (feature.properties.driver_race === 'Black') raceColor = 'orange';
  var options = {
      radius: 6,
      opacity: 1,
      fillColor: raceColor,
      fillOpacity: 0.9,
      color: raceColor,
      weight: 2,
    };
            return L.circleMarker(latlng, options).on('click', function() {
                this.bindPopup(feature.properties.violation).openPopup();
            });
        }
    });
    map.fitBounds(allStops.getBounds(), {
        padding: [50, 50]
    });
		january.addTo(map);
    february.addTo(map);
		march.addTo(map);
    april.addTo(map);
		may.addTo(map);
    june.addTo(map);
		july.addTo(map);
    august.addTo(map);
		september.addTo(map);
    october.addTo(map);
		november.addTo(map);
    december.addTo(map);
    // The JavaScript below is new
    $("#Jan").click(function() {
        map.removeLayer(january);
				map.removeLayer(february);
				map.removeLayer(march);
				map.removeLayer(april);
				map.removeLayer(may);
				map.removeLayer(july);
				map.removeLayer(august);
				map.removeLayer(september);
				map.removeLayer(october);
				map.removeLayer(november);
				map.removeLayer(december);
				map.addLayer(january);
    });
		$("#Feb").click(function() {
        map.removeLayer(january);
				map.removeLayer(february);
				map.removeLayer(march);
				map.removeLayer(april);
				map.removeLayer(may);
				map.removeLayer(july);
				map.removeLayer(august);
				map.removeLayer(september);
				map.removeLayer(october);
				map.removeLayer(november);
				map.removeLayer(december);
				map.addLayer(february);
    });
		$("#Mar").click(function() {
        map.removeLayer(january);
				map.removeLayer(february);
				map.removeLayer(march);
				map.removeLayer(april);
				map.removeLayer(may);
				map.removeLayer(july);
				map.removeLayer(august);
				map.removeLayer(september);
				map.removeLayer(october);
				map.removeLayer(november);
				map.removeLayer(december);
				map.addLayer(march);
    });
		$("#Apr").click(function() {
        map.removeLayer(january);
				map.removeLayer(february);
				map.removeLayer(march);
				map.removeLayer(april);
				map.removeLayer(may);
				map.removeLayer(july);
				map.removeLayer(august);
				map.removeLayer(september);
				map.removeLayer(october);
				map.removeLayer(november);
				map.removeLayer(december);
				map.addLayer(april);
    });
		$("#May").click(function() {
        map.removeLayer(january);
				map.removeLayer(february);
				map.removeLayer(march);
				map.removeLayer(april);
				map.removeLayer(may);
				map.removeLayer(july);
				map.removeLayer(august);
				map.removeLayer(september);
				map.removeLayer(october);
				map.removeLayer(november);
				map.removeLayer(december);
				map.addLayer(may);
    });
		$("#Jun").click(function() {
        map.removeLayer(january);
				map.removeLayer(february);
				map.removeLayer(march);
				map.removeLayer(april);
				map.removeLayer(may);
				map.removeLayer(july);
				map.removeLayer(august);
				map.removeLayer(september);
				map.removeLayer(october);
				map.removeLayer(november);
				map.removeLayer(december);
				map.addLayer(june);
    });
		$("#Jul").click(function() {
        map.removeLayer(january);
				map.removeLayer(february);
				map.removeLayer(march);
				map.removeLayer(april);
				map.removeLayer(may);
				map.removeLayer(july);
				map.removeLayer(august);
				map.removeLayer(september);
				map.removeLayer(october);
				map.removeLayer(november);
				map.removeLayer(december);
				map.addLayer(july);
    });
		$("#Aug").click(function() {
        map.removeLayer(january);
				map.removeLayer(february);
				map.removeLayer(march);
				map.removeLayer(april);
				map.removeLayer(may);
				map.removeLayer(july);
				map.removeLayer(august);
				map.removeLayer(september);
				map.removeLayer(october);
				map.removeLayer(november);
				map.removeLayer(december);
				map.addLayer(august);
    });
		$("#Sep").click(function() {
				map.removeLayer(january);
				map.removeLayer(february);
				map.removeLayer(march);
				map.removeLayer(april);
				map.removeLayer(may);
				map.removeLayer(july);
				map.removeLayer(august);
				map.removeLayer(september);
				map.removeLayer(october);
				map.removeLayer(november);
				map.removeLayer(december);
				map.addLayer(september);
		});
		$("#Oct").click(function() {
				map.removeLayer(january);
				map.removeLayer(february);
				map.removeLayer(march);
				map.removeLayer(april);
				map.removeLayer(may);
				map.removeLayer(july);
				map.removeLayer(august);
				map.removeLayer(september);
				map.removeLayer(october);
				map.removeLayer(november);
				map.removeLayer(december);
				map.addLayer(october);
		});
		$("#Nov").click(function() {
				map.removeLayer(january);
				map.removeLayer(february);
				map.removeLayer(march);
				map.removeLayer(april);
				map.removeLayer(may);
				map.removeLayer(july);
				map.removeLayer(august);
				map.removeLayer(september);
				map.removeLayer(october);
				map.removeLayer(november);
				map.removeLayer(december);
				map.addLayer(november);
		});
		$("#Dec").click(function() {
				map.removeLayer(january);
				map.removeLayer(february);
				map.removeLayer(march);
				map.removeLayer(april);
				map.removeLayer(may);
				map.removeLayer(july);
				map.removeLayer(august);
				map.removeLayer(september);
				map.removeLayer(october);
				map.removeLayer(november);
				map.removeLayer(december);
				map.addLayer(december);
		});
		$("#Full").click(function() {
				map.removeLayer(january);
				map.removeLayer(february);
				map.removeLayer(march);
				map.removeLayer(april);
				map.removeLayer(may);
				map.removeLayer(july);
				map.removeLayer(august);
				map.removeLayer(september);
				map.removeLayer(october);
				map.removeLayer(november);
				map.removeLayer(december);
				map.addLayer(january);
				map.addLayer(february);
				map.addLayer(march);
				map.addLayer(april);
				map.addLayer(may);
				map.addLayer(july);
				map.addLayer(august);
				map.addLayer(september);
				map.addLayer(october);
				map.addLayer(november);
				map.addLayer(december);
		});
	});

	$('#Asian').click(function(layer) {

	});

	$('#White').click(function() {

	});

	$('#Black').click(function() {

	});

	$('#Hispanic').click(function() {

	});

	$('#AllEthnicities').click(function() {

	});
