import React from 'react';
import { NavLink } from 'react-router-dom';
import {Nav} from 'reactstrap';

function Menu(){
    return(
        <div className="col-12 col-md-2 order-md-first menu">
            
                <ul className="list-unstyled row">
                    <div className="menu-link  col-12">
                        <NavLink to="/home" activeClassName="menu-active" >Home</NavLink>
                    </div>
                    <div className="menu-link  col-12">
                        <NavLink to="/academics" activeClassName="menu-active">Academic Programs</NavLink>
                    </div>
                    <div className="menu-link   col-12">
                        <NavLink to="/facilities" activeClassName="menu-active">Facilities</NavLink>
                    </div>
                    <div className="menu-link  col-12">
                        <NavLink to="/research" activeClassName="menu-active">Research Areas</NavLink>
                    </div>
                    <div className="menu-link  col-12">
                        <NavLink to="/faculty" activeClassName="menu-active">Faculty Members</NavLink>
                    </div>
                    <div className="menu-link  col-12">
                        <NavLink to="/staffs" activeClassName="menu-active">Staff Members</NavLink>
                    </div>
                    <div className="menu-link  col-12">
                        <NavLink to="/scholars" activeClassName="menu-active">Research Scholars</NavLink>
                    </div>
                    <div className="menu-link  col-12">
                        <NavLink to="/project" activeClassName="menu-active">Projects</NavLink>
                    </div>
                    <div className="menu-link  col-12">
                        <NavLink to="/publication" activeClassName="menu-active">Publications</NavLink>
                    </div>
                    <div className="menu-link  col-12">
                        <NavLink to="/gallery" activeClassName="menu-active">Gallery</NavLink>
                    </div>
                    <div className="menu-link  col-12">
                        <NavLink to="/updates" activeClassName="menu-active">Updates</NavLink>
                    </div>
                    <div className="menu-link  col-12">
                        <NavLink to="/contact" activeClassName="menu-active">Contact Us</NavLink>
                    </div>
                </ul>

            <hr/>
        </div>
    );
}

export default Menu;