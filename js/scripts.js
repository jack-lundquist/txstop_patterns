//map variable
var map = L.map('my-map').setView([32.775729, -96.814270], 8);

//basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.geoJSON(dallas3, {
    style: {
      // dashArray: '3 10',
      color: 'black',
      fillOpacity: 0,
    }
  }).addTo(map);


dallas3.forEach(function(dallas) {
  var latLon = [dallas.lat, dallas.lon];

  var color = '#FFF';

  var options = {
    radius: 6,
    opacity: 1,
    fillColor: color,
    fillOpacity: 0.9,
    color: '#FFF',
    weight: 2,
  };
  var marker = L.circleMarker(latLon, options)
      .bindPopup(dallas.violation, {offset: [0, -6]})
      .addTo(map)
  // add the marker to the markersArray
  markersArray.push(marker);
});
