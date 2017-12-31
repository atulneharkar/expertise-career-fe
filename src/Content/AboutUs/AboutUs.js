import React, { Component } from 'react';

import aboutUsAtulImg from '../../assets/images/about-us-atul.jpg';
//import aboutUsAtulImg from '../../assets/images/about-us-atul.jpg';

class AboutUs extends Component {
  render() {
    return (
      <div className="wrapper about-us-wrapper clearfix">
        <p>
      	  We are IT professionals with 5+ years of experience in Web technologies and aspects like HTML, CSS, JavaScript, 
          React, Angular, Node, Mongo, Inonic, React Native and User Experience Design (UX) and Visual Designing (VD). 
        </p>
        <p>
        	Our motive is to consult students and professional with proper guidance and make them professional in 
          Web development, Mobile apps development, UX and VD.  
        </p>
        <p>
          We also help individual to grow their business by providing consultation in Digital Marketing, building their websites and mobile apps.
        </p>

        <h3>Our Team</h3>
        <div className="team-info-wrapper">
        	<div className="team-info">
        	  <img src={aboutUsAtulImg} alt="profile pic" width="80" height="80" className="about-us-profile-image" />
            <div className="basic-info">
          	  <p className="name-wrapper">Atul Neharkar</p>
          	  <p className="designation-wrapper">Web and Mobile apps specialist (5+ years of industry experience)</p>
            </div>
            <p className="description">
              Atul is an experienced Consultant with a demonstrated history of working in the Advertising, Education and Health care industry. 
              Skilled in Web technologies like Html5, CSS3, Angular 2+, React JS and Redux, Node JS and Mongo DB with Bachelor's degree 
              focused in Computer Engineering.
            </p>
        	</div>

        	<div className="team-info">
        	  <img src={aboutUsAtulImg} alt="profile pic" width="80" height="80" className="about-us-profile-image" />
            <div className="basic-info">
          	  <p className="name-wrapper">Mahesh Shinde</p>
          	  <p className="designation-wrapper">Sr. UX Designer (6+ years of industry experience) </p>
            </div>
            <p className="description">
              Mahesh is a Sr. Ux in a multi national IT firm. Studied Mechanical Engineering and Post Grad from NID as Automotive Designer. 
              Work experiences include entrepreneurship, working as UX designer from last  6+ Years. He has worked in service and product sector. 
            </p>
        	</div>
        </div>

      </div>
    );
  }
}

export default AboutUs;
