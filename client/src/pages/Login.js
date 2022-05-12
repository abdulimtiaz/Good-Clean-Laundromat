import React, { Fragment } from 'react';
import '../stylesheets/Login.css'

const Login = () => {
    return (
        <Fragment>
            <p id="p1">Local Laundromat<br/>Employee login<br/></p>
            <br/><br/><br/>
            
            <div id="form">Employee id<br/>
            <input type="text" id="employeeid" class="text-input"><br/>Password<br/></input>
            <input type="text" id="password" class="text-input"><br/></input>
            <a href="p5.html">
                <button id="submit">Submit</button><br/>
            </a>
            <br/><br/><br/><br/>
        
            <a id = "h1" href = "p1.html">Homepage<br/></a></div>
        </Fragment>
    );
};

export default Login;