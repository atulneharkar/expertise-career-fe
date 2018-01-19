import React, { Component } from 'react';

class AboutUs extends Component {
  render() {
    return (
      <div className="wrapper about-us-wrapper clearfix">
        <h2 className="page-heading">About Us</h2>
        <p>
      	  We are IT professionals with 5+ years of experience in Web development with technologies like HTML, CSS, JavaScript, 
          React, Angular, Node, Mongo, Ionic, React Native and User Experience Design (UX) and Visual Designing (VD). 
        </p>
        <p>
        	Our motive is to provide guidance/support to students and professional and help them grow their career in 
          Web development, Mobile apps development, UX and VD.  
        </p>
        <p>
          We also help individual to grow their business by building websites and mobile apps for their business and also provide
           consultation in digital marketing.
        </p>

        <h3>Our Team</h3>
        <div className="team-info-wrapper">
        	<div className="team-info">
            <div className="basic-info">
          	  <p className="name-wrapper">Atul</p>
          	  <p className="designation-wrapper">Web and Mobile apps specialist (5+ years of industry experience)</p>
            </div>
            <p className="description">
              Atul is an experienced Consultant with a demonstrated history of working in the Advertising, Education and Health care industry. 
              Skilled in Web technologies like Angular, React/Redux, Node and Mongo DB with Bachelor's degree 
              focused in Computer Engineering.
            </p>
        	</div>

        	<div className="team-info">
            <div className="basic-info">
          	  <p className="name-wrapper">Mahesh</p>
          	  <p className="designation-wrapper">Sr. UX Designer (6+ years of industry experience) </p>
            </div>
            <p className="description">
              Mahesh is a Sr. Ux in a multi national IT firm. Studied Mechanical Engineering and Post Grad from NID as Automotive Designer. 
              Work experiences include entrepreneurship, working as UX designer from last  5+ Years. He has worked in service and product sector. 
            </p>
        	</div>
        </div>

      </div>
    );
  }
}

export default AboutUs;
