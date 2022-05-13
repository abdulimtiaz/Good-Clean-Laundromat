import React, { Fragment } from 'react';
import '../stylesheets/EmployeeHome.css'

const EmployeeHome = () => {
    return (
        <Fragment>
        <p id="p1">
        Local Laundromat<br/>
        Employee Homepage<br/>
        
    </p>

    <p id="p2">
        Employee name
        <input type="text" id="employeename" class="order" placeholder="Lily" readonly></input><br/><br/>
    </p>

        
    <p id="p">
    <ol id="p">
        List of orders: <br>
        <li><a href="p9.html"><input type="text" id="order1" class="order" placeholder="Ms. Lynn" readonly></input><br/><br/></a></li>
        <li><a href="p9.html"><input type="text" id="order2" class="order" placeholder="Ms. Hansen" readonly></input><br/><br/></a></li>
        <li><a href="p9.html"><input type="text" id="order3" class="order" placeholder="Ms. Anderson" readonly></input><br/><br/></a></li>
        <li><a href="p9.html"><input type="text" id="order4" class="order" placeholder="Ms. Patel" readonly></input><br/><br/></a></li>
    </ol></p>
    
<p id="p4">
    <a id = "h1" href = "p7.html">
        Report a Problem<br/>
    </a>

    
        <a id = "h1" href = "p1.html">
            Homepage<br/>
        </a>
    </p>
            
        </Fragment>
    );
};

export default EmployeeHome;
