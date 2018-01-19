import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/images/main-image.png';
import logoMobile from '../../assets/images/main-image720-500.png';
import leftArrow from '../../assets/images/left-arrow.png';
import leftArrowWhite from '../../assets/images/left-arrow-white.png';

class OurServicesCardView extends Component {
  render() {
    return (
      <div className="services-card-wrapper">
        <img src={logo} alt="main pic" className="main-image" />
        <img src={logoMobile} alt="main pic" className="main-image-mobile" />

        <div className="floating-text">
        
	        <div className="tag-line">
	          <p>Excel your business with us.</p>
	        	<p className="sub-tag-line">Want to build a website for your business but don't have a digital team?</p>	 
	        	<NavLink to="/contact-us" className="contact-us-btn">Contact Us</NavLink>    
	        </div>

	        <div className="service-cards">
	          
	        	<Link to="/our-services">
		        	<div className="card">
		        		<span>Build websites and mobile apps</span>
		        		<img src={leftArrow} alt="left-arrow" className="left-arrow" />
		        		<img src={leftArrowWhite} alt="left-arrow-white" className="left-arrow-white" />
		        	</div>
	        	</Link>

	        	<Link to="/college-projects">
		        	<div className="card">
		        		<span>Development of college projects</span>
		        		<img src={leftArrow} alt="left-arrow" className="left-arrow" />
		        		<img src={leftArrowWhite} alt="left-arrow-white" className="left-arrow-white" />
		        	</div>
	        	</Link>

	        	<Link to="/our-services">
		        	<div className="card">
		        		<span>Webinars and personal coaching</span>
		        		<img src={leftArrow} alt="left-arrow" className="left-arrow" />
		        		<img src={leftArrowWhite} alt="left-arrow-white" className="left-arrow-white" />
		        	</div>
	        	</Link>

	        </div>
        </div>
      </div>
    );
  }
}

export default OurServicesCardView;
