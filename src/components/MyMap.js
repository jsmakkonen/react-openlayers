import React, { Component } from 'react';
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";

class PublicMap extends Component {
  constructor(props) {
    super(props);

    this.state = { center: [0, 0], zoom: 3 };

    this.olmap = new OlMap({
      target: null,
      layers: [
        new OlLayerTile({
          source: new OlSourceOSM()
        })
      ],
      view: new OlView({
        center: this.state.center,
        zoom: this.state.zoom
      })
    });
  }

  updateMap() {
    this.olmap.getView().setCenter(this.state.center);
    this.olmap.getView().setZoom(this.state.zoom);
  }

  componentDidMount() {
    this.olmap.setTarget("map");

    this.olmap.on("moveened", () => {
      let center = this.olmap.getView().getCenter();
      let zoom = this.olmap.getView().getZoom();
      this.setState({ center, zoom });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    let center = this.olmap.getView().getCenter();
    let zoom = this.olmap.getView().getZoom();
    if (center === nextState.center && zoom === nextState.zoom) return false;
    return true;
  }

  userAction() {
    this.setState({ center: [2100000, 8688000], zoom: 6 });
  }

  render() {
    this.updateMap();
    return (
      <div class="container"> 
        <div id="map" style={{ width: "100%", height: "450px" }} >
        </div>
        <div class="button"><button onClick={e => this.userAction()}>Center view</button></div>
      </div>
    );
  }
}

export default PublicMap;