import React, { Component } from 'react';

import collegeProject from '../../assets/images/college-project.jpeg';
import webinarSessions from '../../assets/images/webinar-sessions.png';
import websitesAndMobileApps from '../../assets/images/websites-and-mobile-apps.jpeg';

class OurServicesDetails extends Component {
  render() {
    return (
      <div className="wrapper consulting-wrapper">

        <div id="teaching" className="service-cards clearfix">
          <img src={webinarSessions} />
          <div className="service-details">
            <h2>Skill building webinars and personal coaching</h2>
            <p>
              Gain knowledge and tools from the industry experts in your field in interest. 
              Connect with them through webinars and unlock yourpotential by taking courses.
            </p>
            <ul>
              <li>Connect with the expert from industry</li>
              <li>Get hands on experience</li>
              <li>Solve problems with guidance</li>
              <li>Get to see case studies</li>
            </ul>
          </div>
        </div>

        <div id="business-websites" className="service-cards clearfix">
          <img src={websitesAndMobileApps} className="mobile-show" />
          <div className="service-details">
            <h2>Build websites, mobile apps for your business </h2>
            <p>
              Whatever your ideas are, explore them and take it to next level. 
              Our highly efficient teams can work hand in hand with you to bring your ideas in reality.
            </p>
             <ul>
              <li>Digital design includes ideation, persona mapping, info Architecture, Task flow and user journeys mapping</li>
              <li>User experience design and Visual design</li>
              <li>Websites and web application development</li>
              <li>Mobile application development</li>
            </ul>
          </div>
          <img src={websitesAndMobileApps} className="mobile-hide" />
        </div>

        <div id="college-projects" className="service-cards clearfix">
          <img src={collegeProject} />
          <div className="service-details">
            <h2>Design/development guide for college projects</h2>
            <p>
              Get consultation and development support for your final year
              college projects. Our team will cover techinal concepts from stratch and you will get better understanding/overview all recent technologies.  
            </p>
             <ul>
              <li>Project workflow and architecture designing</li>
              <li>Preparing presentations</li>
              <li>Make understand all the aspects of the project from techinal perspective</li>
              <li>Development and testing the projects</li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default OurServicesDetails;
