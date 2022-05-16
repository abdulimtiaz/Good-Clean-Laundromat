import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const NavbarMain = () => {
	const [ { user }, dispatch ] = useStateValue();
	const logout = () => {
		dispatch({
			type: actionTypes.SET_USER,
			user: null
		});
	};
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">Good Clean Laundromat</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/home">Home Page</Nav.Link>
							{/* <Nav.Link href="#pricing">Sign</Nav.Link> */}
							<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
								{/* <NavDropdown.Item href="/Login"></NavDropdown.Item> */}
								{/* <NavDropdown.Item href="/Signup">Sign Up</NavDropdown.Item> */}
								<NavDropdown.Item href="/">Incoming Feature</NavDropdown.Item>

								{/* <NavDropdown.Item href="#action/3.3"></NavDropdown.Item> */}
								<NavDropdown.Divider />
								<NavDropdown.Item href="/SubmitProblem">Submit Problem</NavDropdown.Item>
							</NavDropdown>
						</Nav>

						{!user ? (
							<Nav>
								<Nav.Link href="/Login">Sign In</Nav.Link>
								<Nav.Link href="/Signup">Sign Up</Nav.Link>
							</Nav>
						) : (
							<Nav>
								<Nav.Link href="home" onClick={logout}>
									Log Out
								</Nav.Link>
							</Nav>
						)}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarMain;
