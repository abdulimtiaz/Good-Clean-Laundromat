import React, { Fragment } from 'react';
import '../stylesheets/Home.css';

const Home = () => {
	return (
		<Fragment>
			<p id="p1">
				Local Laundromat<br />Welcome to Local Laundromat<br />
			</p>
			<br />
			<br />
			<br />
			<br />
			<br />

			<div id="links">
				<a id="h1" href="/Login">
					Login<br />
				</a>
				{/* <a id = "h2" href = "/">Customer login<br/></a> */}
				<a id="h3" href="/Signup">
					Customer Signup<br />
				</a>
			</div>
			<br />
			<br />
			<br />
			<br />

			<p id="p2">
				Address:123-45 HelloWorld Blvd, Washington Heights, New York<br />Phone:(123)-111-1111<br />Email:<ins>localaundromat@gmail.com</ins>
				<br />Hours of operations:<b>We are open 24/7!</b>
				<br />
			</p>
		</Fragment>
	);
};

export default Home;
