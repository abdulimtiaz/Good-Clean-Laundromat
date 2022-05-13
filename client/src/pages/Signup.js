import React, { Fragment } from 'react';
import '../stylesheets/Signup.css'

const Signup = () => {
    return (
        <Fragment>
            <p id="p1">
        Local Laundromat<br/>
        Customer Signup form<br/>
    </p>
    <form id="form">
        <label>First Name:</label>
        <input type="text" id="firstname" class="box"></input><br/><br/>
        <label>Last Name:</label>
        <input type="text" id="lastname" class="box"></input><br/><br/>
        <label>Phone:</label>
        <input type="text" id="phone" class="box"></input><br/><br/>
        <label>Address:</label>
        <input type="text" id="address" class="box"></input><br/><br/>
        <label>Email address:</label>
        <input type="text" id="email" class="box"></input><br/><br/>
        <label>User name:</label>
        <input type="text" id="username" class="box"></input><br/><br/>
        <label>Password:</label>
        <input type="text" id="password" class="box"></input><br/><br/>

    </form>
    <a href = "p1.html">
        <button id="submit">Submit</button><br/>
    </a>
    <br/><br/><br/>
    <a id = "h1" href = "p1.html">
        Homepage<br/>
    </a>
        </Fragment>
    );
};

export default Signup;