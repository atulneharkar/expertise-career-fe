import React, { Component } from 'react';

import libraryImg from '../../assets/images/library.jpg';
import employeeImg from '../../assets/images/employee-management.jpg';
import foodImg from '../../assets/images/online-food-ordering.jpg';
import timesheetImg from '../../assets/images/timesheet.jpg';

class CollegeProjects extends Component {
  render() {
    return (
      <div className="wrapper college-projects-wrapper clearfix">
       <h2 className="page-heading">College Projects</h2>
        <p>
      	  We build final year college projects for Computer and IT students. We also help students with the presentations and make them understand 
          all the technical aspect of the project.
        </p>
        <p>
        	Below are some of the projects we provide. If you want to build your own project apart from the list below then give us the details and we will build it for you. 
        </p>

        <div className="sub-heading">
          <p>This are the common modules across all the projects:</p>
          <ul>
            <li>Authentication module - User registration and Login</li>
            <li>Forgot password and Reset password module</li>
            <li>Login with Facebook and Google</li>
          </ul>
        </div>

        <div className="project-list-wrapper clearfix">
          <div className="projects">
            <p className="project-heading">Library Management</p>
            <img src={libraryImg} alt="libraryImg" />
            <ul>
              <li>Books Module (Add/Edit/Delete books)</li>
              <li>User can browse through different categories of book and based on its availabilty user can claim that book</li>
              <li>Assignment of books to users</li>
              <li>Admin Panel to check which book is assigned to whom and when its return date</li>
              <li>User dashboard to check which book is currently been taken and its return date</li>
            </ul>
          </div>

          <div className="projects">
            <p className="project-heading">Employee (Resource) Management for HR's</p>
            <img src={employeeImg} alt="employeeImg" />
            <ul>
              <li>Admin (HR) dashboard to view all the employees along with their role, designation, skills and avalability status</li>
              <li>Project Managers can submit a request to HR asking for assignment of employee to his project</li>
              <li>HR can assign employee to projects based on the requirements</li>
              <li>HR can view project list and assigned employees</li>
            </ul>
          </div>
        </div>

        <div className="project-list-wrapper clearfix">
          <div className="projects">
            <p className="project-heading">Online food ordering</p>
            <img src={foodImg} alt="foodImg" />
            <ul>
              <li>Hotel owner can add categories and food menu list along with the price</li>
              <li>User can select the food based on preferences and can place the order</li>
              <li>The order will be seen on owner dashboard and he can deliver the food on the address provided by user</li>
              <li>User can track the delivery status on user dashboard</li>
            </ul>
          </div>

          <div className="projects">
            <p className="project-heading">Timesheet application</p>
            <img src={timesheetImg} alt="timesheetImg" />
            <ul>
              <li>Employees will be able to fill their timesheets based on work they have done for the day</li>
              <li>Admin or finance department can review timesheets submitted by employees and based on the hours entered they can charge money to clients</li>
              <li>Employees will have an option of submitting the timesheet daywise or for the entire week at once</li>
              <li>Employee dashboard will show a graph of their work/engagement based on the hours submitted by them</li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default CollegeProjects;
