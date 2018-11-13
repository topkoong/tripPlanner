const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
});

const marker2 = buildMarker('activity', [-72.009, 40.705]);
const marker3 = buildMarker('hotel', [-70.009, 40.705]);
const marker4 = buildMarker('restaurant', [-90.009, 40.705]);

marker2.addTo(map);
marker3.addTo(map);
marker4.addTo(map);