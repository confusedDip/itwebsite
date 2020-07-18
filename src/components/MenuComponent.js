import React from 'react';
import { NavLink } from 'react-router-dom';
import {Nav} from 'reactstrap';

function Menu(){
    return(
        <div className="col-12 col-md-2 order-last order-md-first menu">
            <Nav>
                <ul className="list-unstyled">
                    <p className="menu-link">
                        <NavLink to="/home" activeClassName="menu-active" >Home</NavLink>
                    </p>
                    <p className="menu-link">
                        <NavLink to="/academics" activeClassName="menu-active">Academic Programs</NavLink>
                    </p>
                    <p className="menu-link">
                        <NavLink to="/facilities" activeClassName="menu-active">Facilities</NavLink>
                    </p>
                    <p className="menu-link">
                        <NavLink to="/research" activeClassName="menu-active">Research Areas</NavLink>
                    </p>
                    <p className="menu-link">
                        <NavLink to="/faculty" activeClassName="menu-active">Faculty Members</NavLink>
                    </p>
                    <p className="menu-link">
                        <NavLink to="/staffs" activeClassName="menu-active">Staff Members</NavLink>
                    </p>
                    <p className="menu-link">
                        <NavLink to="/scholars" activeClassName="menu-active">Research Scholars</NavLink>
                    </p>
                    <p className="menu-link">
                        <NavLink to="/project" activeClassName="menu-active">Projects</NavLink>
                    </p>
                    <p className="menu-link">
                        <NavLink to="/publication" activeClassName="menu-active">Publications</NavLink>
                    </p>
                    <p className="menu-link">
                        <NavLink to="/gallery" activeClassName="menu-active">Gallery</NavLink>
                    </p>
                    <p className="menu-link">
                        <NavLink to="/updates" activeClassName="menu-active">Updates</NavLink>
                    </p>
                    <p className="menu-link">
                        <NavLink to="/contact" activeClassName="menu-active">Contact Us</NavLink>
                    </p>
                </ul>
            </Nav>
            <hr/>
        </div>
    );
}

export default Menu;