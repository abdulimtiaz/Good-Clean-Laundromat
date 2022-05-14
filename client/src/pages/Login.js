import React, { Component } from 'react';
import '../stylesheets/Login.css';
import FormInputs from './FormInputs';
import { Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router';
import Joi from 'joi-browser';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			errors: {},
			submitSuccessfully: false,
			redirect: false
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.validate = this.validate.bind(this);
		this.validateOnChange = this.validateOnChange.bind(this);
	}

	schema = Joi.object().keys({
		username: Joi.string().label('Username').required(),
		password: Joi.string().required().label('Password')
	});

	validate() {
		const result = Joi.validate({ username: this.state.username, password: this.state.password }, this.schema, {
			abortEarly: false
		});

		if (result.error === null) return;

		const errors = {};

		for (let item of result.error.details) {
			errors[item.path[0]] = item.message;
		}
		return errors;
	}

	handleSubmit(e) {
		e.preventDefault();

		const errors = this.validate();

		this.setState({ errors: errors || {} });

		if (errors) return;

		console.log(errors);

		console.log('Form Submitted.');

		this.setState({ submitSuccessfully: true });
		this.setState({ redirect: true });
	}

	validateOnChange(currentTarget) {
		const obj = { [currentTarget.name]: currentTarget.value };

		const res = this.schema._inner.children.filter((item) => item.key === currentTarget.name);

		console.log(this.schema[currentTarget.name]);

		const schema = { [currentTarget.name]: res[0].schema };

		const { error } = Joi.validate({ obj }, schema);

		return error ? error.details[0].message : null;
	}

	handleInputChange({ currentTarget }) {
		const errors = { ...this.state.errors };

		const errorMessage = this.validateOnChange(currentTarget);

		if (errorMessage) errors[currentTarget.name] = errorMessage;
		else delete errors[currentTarget.name];

		this.setState({ [currentTarget.name]: currentTarget.value, errors });
	}
	render() {
		return (
			<div>
				{this.state.redirect ? <Redirect push to="/employee/homepage" /> : null}

				<div className="heading">
					<h1> Laundromat</h1>
					<h1>Employee Login</h1>
				</div>
				<div className="login_form">
					<form onSubmit={this.handleSubmit}>
						<FormInputs
							onChange={this.handleInputChange}
							errors={this.state.errors}
							value={this.state.username}
							htmlForId="username"
							type="text"
							label="Username"
						/>
						<FormInputs
							onChange={this.handleInputChange}
							errors={this.state.errors}
							value={this.state.password}
							htmlForId="password"
							type="password"
							label="Password"
						/>
						<button disabled={this.validate()} className="btn btn-primary">
							Login
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
