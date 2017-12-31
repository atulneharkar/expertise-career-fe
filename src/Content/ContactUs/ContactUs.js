import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../_actions';
import { required, email, phoneNumber } from '../../_helpers';
import { renderInputField, renderTextAreaField } from '../../_components';

class ContactUs extends Component {
  constructor(props) {
		super(props);

		this.state = {
			queryData: {
				name: '',
				phone: '',
				email: '',
				description: ''
			}
		}
	}

	renderQueryResponse() {
		if(this.props.loading) {
			return <div className="loading">loading</div>;
		} else if(this.props.successMessage) {
			return <div className="success-message">Your query sent successfully! Admin will contact you shortly.</div>;
		} else if(this.props.errorMessage) {
			return <div className="error-message">{this.props.errorMessage}</div>;
		}
	}

  handleInputChange(event) {
    const value = event.target.value;
    const key = event.target.name;
		
		const queryData = this.state.queryData;
    queryData[key] = value;

    this.setState(queryData);
  }

	handleFormSubmit(props) {
    this.props.addQuery(props);
    this.setState({
			queryData: {
				name: '',
				phone: '',
				email: '',
				description: ''
		  }
	  });
  }

  render() {
		const { handleSubmit } = this.props;

		return (
		  <div className="contact-form">
		    <h2 className="form-text">
			  	Connect with experts on below contacts or submit your query and we will get back to you.
			  </h2>

		    <div className="contact-info clearfix">
		      <div>
		        <p className="name">Atul Neharkar</p>
		        <p><a href="mailto: neharkaratul9@gmail.com">neharkaratul9@gmail.com</a></p>
		        <p>8767067878</p>
		      </div>
		      <div>
		        <p className="name">Mahesh Shinde</p>
		        <p><a href="mailto: mahesh.shinde99@gmail.com">mahesh.shinde99@gmail.com</a></p>
		        <p>98273782293</p>
		      </div>
		    </div>

				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					<Field
		        name="name"
		        type="text"
		        component={renderInputField}
		        label="Name"
		        setValue={this.state.queryData.name}
		        onValueChange={(e) => this.handleInputChange(e)}
		        validate={[required]}
		      />
		      <Field
		        name="phone"
		        type="number"
		        component={renderInputField}
		        label="Phone"
		        onValueChange={(e) => this.handleInputChange(e)}
		        setValue={this.state.queryData.phone}
		        validate={[required, phoneNumber]}
		      />
		      <Field
		        name="email"
		        type="text"
		        component={renderInputField}
		        label="Email"
		        onValueChange={(e) => this.handleInputChange(e)}
		        setValue={this.state.queryData.email}
		        validate={[required, email]}
		      />
		      <Field
		        name="description"
		        component={renderTextAreaField}
		        label="Description"
		        onValueChange={(e) => this.handleInputChange(e)}
		        setValue={this.state.queryData.description}
		        validate={[required]}
		      />
		      <div>
		        <button type="submit" className="submit-btn-link">Send</button>
		      </div>

		      {this.renderQueryResponse()}
				</form>
			</div>
		);
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.contactUs.queryError,
  loading: state.contactUs.queryLoading,
  successMessage: state.contactUs.querySuccess
});

ContactUs = connect(
  mapStateToProps,
  actions
)(ContactUs);

export default reduxForm({
  form: 'ContactUs'
})(ContactUs);
