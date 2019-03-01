import React, { Component, Fragment } from 'react';
import {Header, Footer} from './components/layouts/';
import './App.css';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
