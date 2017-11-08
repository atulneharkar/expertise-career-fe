import React, { Component } from 'react';

import Routes from '../routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
    	<div>
	    	<Header />
	      <Routes />
	      <Footer />
      </div>
    );
  }
}

export default App;
