const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoidG9wa29vbmciLCJhIjoiY2pvZzdiNm8yMGMzcDNxcXd1MzMxNTdsbCJ9.NX2ugRQ960LN91jVC82eWg';





const icons = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png'
};


module.exports = (type, coordinates) => {
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${icons[type]})`;
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
};
