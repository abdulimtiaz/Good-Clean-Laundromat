import React, { Fragment } from 'react';
import '../stylesheets/Signup.css';

const Signup = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<p id="p1">
				Local Laundromat<br />
				Customer Signup form<br />
			</p>
			<div className="signup-form">
				<form id="form" onSubmit={handleSubmit}>
					<label>First Name:</label>
					<input type="text" id="firstname" class="box" />
					<br />

					<label>Last Name:</label>
					<input type="text" id="lastname" class="box" />
					<br />

					<label>Phone:</label>
					<input type="text" id="phone" class="box" />
					<br />

					<label>Address:</label>
					<input type="text" id="address" class="box" />

					<label>Email address:</label>
					<input type="text" id="email" class="box" />
					<br />

					<label>User name:</label>
					<input type="text" id="username" class="box" />
					<br />

					<label>Password:</label>
					<input type="text" id="password" class="box" />
					<br />
					<a href="p1.html" type="submit">
						<button id="submit">Submit</button>
						<br />
					</a>
				</form>
			</div>
		</div>
	);
};

export default Signup;
