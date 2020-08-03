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
    center: [2.3522, 48.8566],
    selectedFlat: null,
    search: ''
  };

  componentDidMount() {
    fetch(FLATS_URL)
    .then (response => response.json())
    .then (data => this.setState({flats: data, center: [data[0].lng, data[0].lat]}));
  }

  handleSearch = (event) => {
    const { value } = event.target;

    this.setState({search: value})
  }

  handleSelect = (flatId) => {
    const { flats } = this.state;
    const selectedFlat = flats.find(flat => flat.id === flatId);

    this.setState({
      center: [selectedFlat.lng, selectedFlat.lat],
      selectedFlat: selectedFlat
    })
  }

  render () {
    const { flats, center, selectedFlat, search } = this.state;

    const filteredFlats = flats.filter(flat => {
      return flat.name.match(new RegExp(search, 'i'));
    })

    return (
      <div className="app">
        <div className="main">
          <input className="search" onChange={this.handleSearch} />
          <FlatList selectedFlat={selectedFlat} flats={filteredFlats} onSelect={this.handleSelect} />
        </div>
        <div className="map">
          <Map
            zoom={[14]}
            center={center}
            containerStyle={{height: '100vh',width: '100%'}}
            style="mapbox://styles/mapbox/streets-v8">
            {filteredFlats.map(flat => {
              return (
                <FlatMarker
                  selected={flat === selectedFlat}
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
