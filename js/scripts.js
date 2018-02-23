var map = L.map('my-map').setView([32.764181,-97.124634], 10);

//basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// var myRenderer = L.canvas({ padding: 0.5 });

var month = 'all';
var search = '0';
var contraband = '0';

function month_type_filt(feature) {
	if((search=='0') && (contraband=='0') && (month=='all'))
	{return true};
	if(search=='0' && contraband=='0' && month!='all')
	{return feature.properties.stop_date.includes(month)};
	if(search=='1' && contraband=='1' && month=='all')
	{return feature.properties.contraband_found == "1" && feature.properties.search_conducted == "1"};
	if(search=='1' && contraband=='0' && month=='all')
	{return feature.properties.search_conducted == "1"};
	if(search=='0' && contraband=='1' && month=='all')
	{return feature.properties.contraband_found == "1"};
	if(search=='1' && contraband=='1' && month!='all')
	{return (feature.properties.contraband_found == "1" && feature.properties.search_conducted == "1" && feature.properties.stop_date.includes(month))};
	if(search=='1' && contraband=='0' && month!='all')
	{return (feature.properties.search_conducted == "1" && feature.properties.stop_date.includes(month))};
	if(search=='0' && contraband=='1' && month!='all')
	{return (feature.properties.contraband_found == "1" && feature.properties.stop_date.includes(month))};
	};

var geojson = L.geoJSON(dallas3, {
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

geojson.addTo(map);

$(".month").click(function(e) {
	month = e.target.getAttribute("data-month").toString();
	if ($('#contrabandYes').is(":checked"))
	{contraband = "1";};
	if ($('#searchYes').is(":checked"))
	{search = "1";};
	if (!($('#contrabandYes').is(":checked")))
	{contraband = "0";};
	if (!($('#searchYes').is(":checked")))
	{search = "0";};
	geojson.removeFrom(map);
	geojson = L.geoJSON(dallas3, {
			filter: month_type_filt,
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
	geojson.addTo(map);
});
