import React, { Component } from 'react';

import Header from './Header';
import Detail from './Detail';
import Footer from './Footer';

import './App.css'

class App extends Component {
  render() {
    return(
      <div className="container">
        <Header />
        <Detail />
        <Footer />
      </div>
    )
  }
}

export default App
