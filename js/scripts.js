//map variable
var map = L.map('my-map').setView([31.081165, -99.678955], 6);

//basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var dallas_test = L.geoJSON(dallas, {
    style: {
      fillColor: 'black',
      weight: 0,
      opacity: 0,
      color: "lightgrey",
      // dashArray: '3',
      fillOpacity: 1
    }
});

dallas_test.addTo(map);
