import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/main-image.png';
import logoMobile from '../../assets/images/main-image720-500.png';

class OurServicesCardView extends Component {
  render() {
    return (
      <div className="services-card-wrapper">
        <img src={logo} alt="main pic" className="main-image" />
        <img src={logoMobile} alt="main pic" className="main-image-mobile" />

        <div className="floating-text">
        
	        <div className="tag-line">
	          <p>Excel your business with us.</p>
	        	<p>Choose a topic, take webinars and become a pro within no time.</p>	        
	        </div>

	        <div className="service-cards">
	          <Link to="/consulting">
		        	<div className="card">
		        		<span>Skill building webinars and personal coaching</span>
		        	</div>
	        	</Link>

	        	<Link to="/consulting">
		        	<div className="card">
		        		<span>Build websites, mobile apps for your business</span>
		        	</div>
	        	</Link>

	        	<Link to="/consulting">
		        	<div className="card">
		        		<span>Design/development guide for college projects</span>
		        	</div>
	        	</Link>

	        </div>
        </div>
      </div>
    );
  }
}

export default OurServicesCardView;
