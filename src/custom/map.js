import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }

  render() {
    return <div id="map" style = "width: 900px; height: 580px"></div>
  }
}
ReactDOM.render(<Map/>,document.getElementById('map'));
export default Map;