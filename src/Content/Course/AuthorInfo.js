import React, { Component } from 'react';

import aboutUsMaheshImg from '../../assets/images/mahesh.jpg';

class AuthorInfo extends Component {
  render() {
    return (
      <div>

        <p className="title">About the Author</p>
        <div className="basic-info">
          <img src={aboutUsMaheshImg} alt="profile pic" width="200" height="200" className="about-us-profile-image" />
          <p className="name-wrapper">Mahesh Shinde</p>
          <p className="description">
            Mahesh Shinde is a Sr. Ux in a multi national IT firm. Studied Mechanical Engineering and Post Grad from NID as Automotive Designer. 
            Work experiences include entrepreneurship, working as UX designer from last  6+ Years. He has worked in service and product sector. 
          </p>
        </div>

        <div className="general-faq">
          <h3>
            What do I need to have before taking the webinar?
          </h3>
          <p>
            You need to have a laptop/ tablet or mobile to access Gooogle Hangout as the session will happen on hangout link sent 
            in your email. A pen and paper for jotting down points. And ofcourse, a good network connectivity.
          </p>
        </div>

        <div className="general-faq">
          <h3>
            How does this work ?
          </h3>
          <p>
            Each webinar is designed in such a way that it gives you knowledge and hands on experience theoritically as well as practically. Also you will get
            a task at the end of each webinar which will include case studies/callenges faced on live environments in Industry.
          </p>
        </div>

      </div>
    );
  }
}

export default AuthorInfo;
