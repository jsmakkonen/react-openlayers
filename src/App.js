import React, { Component } from 'react';
import Header from './components/Header';
import MyMap from './components/MyMap';
import Footer from './components/Footer';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {

  constructor() {
      super();

      this.state = {
          title: 'OpenLayers map in React',
          subtitle: 'React App - 2019'
      };
  }

  render() {
      return (
          <div>
              <Header title={this.state.title} />
              <div className="mt-5">
                  <MyMap />
              </div>
              <Footer subtitle={this.state.subtitle} />
          </div>
      );
  }
}