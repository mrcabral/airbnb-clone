import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import FlatList from '../FlatList';
import FlatMarker from '../FlatMarker';
import './App.scss';

const FLATS_URL = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1Ijoic2hpcHN0ZXJucyIsImEiOiJjazZjOWszbmUwOG9vM25vbWdsaGVxMDBlIn0.OMP8u1zl2OyUbA79NgBhow"
});

class App extends Component {
  state = {
    flats: [],
    center: [2.3522, 48.8566]
  };

  componentDidMount() {
    fetch(FLATS_URL)
    .then (response => response.json())
    .then (data => this.setState({flats: data, center: [data[0].lng, data[0].lat]}));
  }

  handleSelect = (flatId) => {
    const { flats } = this.state;
    const selectedFlat = flats.find(flat => flat.id === flatId);

    this.setState({ center: [selectedFlat.lng, selectedFlat.lat]})
  }

  render () {
    const { flats, center } = this.state;

    return (
      <div className="app">
        <div className="main">
          <input className="search" />
          <FlatList flats={flats} onSelect={this.handleSelect} />
        </div>
        <div className="map">
          <Map
            zoom={[14]}
            center={center}
            containerStyle={{height: '100vh',width: '100%'}}
            style="mapbox://styles/mapbox/streets-v8">
            {flats.map(flat => {
              return (
                <FlatMarker
                  key={flat.id}
                  price={flat.price}
                  lng={flat.lng}
                  lat={flat.lat}
                  priceCurrency={flat.priceCurrency}
                />
              )
            })}
          </Map>
        </div>
      </div>
    )
  };
};

export default App;
