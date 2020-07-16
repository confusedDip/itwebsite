import React from 'react';
import { NavLink } from 'react-router-dom';
import {Nav} from 'reactstrap';

function Menu(){
    return(
        <div className="col-12 col-md-2 order-last order-md-first">
            <Nav>
                <ul className="list-unstyled">
                    <p>
                        <NavLink to="/home">Home</NavLink>
                    </p>
                    <p>
                        <NavLink to="/academics">Academic Programs</NavLink>
                    </p>
                    <p>
                        <NavLink to="/facilities">Facilities</NavLink>
                    </p>
                    <p>
                        <NavLink to="/research">Research Areas</NavLink>
                    </p>
                    <p>
                        <NavLink to="/faculty">Faculty Members</NavLink>
                    </p>
                    <p>
                        <NavLink to="/staffs">Staff Members</NavLink>
                    </p>
                    <p>
                        <NavLink to="/scholars">Research Scholars</NavLink>
                    </p>
                    <p>
                        <NavLink to="/project">Projects</NavLink>
                    </p>
                    <p>
                        <NavLink to="/pubpcation">Publications</NavLink>
                    </p>
                    <p>
                        <NavLink to="/gallery">Gallery</NavLink>
                    </p>
                    <p>
                        <NavLink to="/updates">Updates</NavLink>
                    </p>
                    <p>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </p>
                </ul>
            </Nav>
        </div>
    );
}

export default Menu;