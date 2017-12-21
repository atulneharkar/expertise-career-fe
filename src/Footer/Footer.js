import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../_actions';

class Footer extends Component {
  render() {
    return (
      <div>
        <p><Link to="/consulting">Consulting</Link></p>
        <p><Link to="/about-us">About Us</Link></p>
        <p><Link to="/contact-us">Contact Us</Link></p>
        <div>
        	<p><Link to="/facebook">Facebook</Link></p>
	        <p><Link to="/instagram">Instagram</Link></p>
	        <p><Link to="/twitter">Twitter</Link></p>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Footer);