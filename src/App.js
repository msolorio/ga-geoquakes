import React from 'react';
import GoogleMap from './GoogleMap';
import './App.css';

class App extends React.Component {
  state = {
    quakes: []
  }

  componentDidMount() {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
      .then((response) => response.json())
      .then((data) => {
        const quakes = data.features.slice(0, 10);

        this.setState({ quakes });
      });
  }

  renderQuakeList() {
    return this.state.quakes.map((quake) => {
      return <p key={quake.id}>{quake.properties.title}</p>
    });
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <GoogleMap quakes={this.state.quakes} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week:</h1>
          {this.renderQuakeList()}
        </div>
      </div>
    );
  }
}

export default App;
