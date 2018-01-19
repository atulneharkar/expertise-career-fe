import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import * as actions from '../_actions';
import instagramIcon from '../assets/images/instagram-icon.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-wrapper clearfix">
          <div className="nav-links pull-left">
            <p className="copy-right-text">&copy; 2018 Skillunfold.com</p>
          </div>
          <div className="social-icons pull-right">
            <p>
              <a href="https://www.instagram.com/skillunfold/" rel="noopener noreferrer" target="_blank">
              <img src={instagramIcon} alt="instagram icon" width="32" height="32" />
              </a>
            </p>
          	<p>
              <a href="https://www.facebook.com/skillunfold/" rel="noopener noreferrer" target="_blank">
                <svg viewBox="0 0 64 64" fill="white" width="32" height="32"><g><circle cx="32" cy="32" r="31" fill="#3b5998"></circle></g><g><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"></path></g></svg>
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default connect(null, actions, null, {pure:false})(Footer);