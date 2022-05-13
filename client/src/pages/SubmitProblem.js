import React, { Fragment } from 'react';
import '../stylesheets/p7.css'

const SubmitProblem = () => {
    return (
        <Fragment>
            <p id="p1">
                Local Laundromat<br/>
                Report your complaints!
            </p>
            <p id="p2">
                Name:
                <input type="text" id="name" placeholder="Type your name"></input><br/><br/>
                Problem:<br/>
                <input type="text" id="problem" placeholder="Type your problem"></input><br/><br/>

                <button id="submit">Submit</button>
            </p>
                <a id = "h1" href = "p1.html">
                    Homepage<br/>
                </a>


        </Fragment>
    );
};

export default Home;