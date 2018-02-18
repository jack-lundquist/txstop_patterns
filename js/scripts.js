//map variable
var map = L.map('my-map').setView([32.775729, -96.814270], 8);

//basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

$.getJSON('data/dallas3.geojson', function(dallas) {
  L.geoJSON(dallas, {
    style: {
      // dashArray: '3 10',
      color: 'black',
      fillOpacity: 0,
    }
  }).addTo(map);
});
