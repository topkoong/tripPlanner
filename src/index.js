const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

const fullstackCoords = [-74.009, 40.705] // NY

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);