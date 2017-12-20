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
			return <div class="loading">loading</div>;
		} else if(this.props.successMessage) {
			return <div class="success-message">Query sent successfully! Admin will contact you shortly.</div>;
		} else if(this.props.errorMessage) {
			return <div class="error-message">{this.props.errorMessage}</div>;
		}
	}

  handleInputChange(event) {
    const value = event.value;;
    const key = event.target.name;
		
		const queryData = this.state.queryData;
    queryData[key] = value;

    this.setState(queryData);
  }

	handleFormSubmit(props) {
    this.props.addQuery(props);
  }

  render() {
		const { handleSubmit } = this.props;

		return (
		  <div>
		    <div>
		      <p><a href="mailto: info@expertisecareer.com">info@expertisecareer.com</a></p>
		      <p>Mobile: 8767067878/98273782293</p>
		    </div>

				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					<Field
		        name="name"
		        type="text"
		        component={renderInputField}
		        label="Name"
		        onValueChange={(e) => this.handleInputChange(e)}
		        validate={[required]}
		      />
		      <Field
		        name="phone"
		        type="number"
		        component={renderInputField}
		        label="Phone"
		        onValueChange={(e) => this.handleInputChange(e)}
		        validate={[required, phoneNumber]}
		      />
		      <Field
		        name="email"
		        type="text"
		        component={renderInputField}
		        label="Email"
		        onValueChange={(e) => this.handleInputChange(e)}
		        validate={[required, email]}
		      />
		      <Field
		        name="description"
		        component={renderTextAreaField}
		        label="Description"
		        onValueChange={(e) => this.handleInputChange(e)}
		        validate={[required]}
		      />
		      <div>
		        <button type="submit">Send</button>
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
