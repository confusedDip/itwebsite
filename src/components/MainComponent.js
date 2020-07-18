import React from 'react';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Academic from './AcademicComponent';
import Facilities from './FacilitiesComponent';
import Research from './ResearchComponent';
import Faculty from './FacultyComponent';
import Staff from './StaffComponent';
import Scholar from './ScholarComponent';
import Project from './ProjectComponent';
import Publication from './PublicationComponent';
import Gallery from './GalleryComponent';
import Update from './UpdateComponent';
import Contact from './ContactComponents';


import { Switch, Route, Redirect } from "react-router-dom";

function Main() {

  return (
      <div>
          <Header />
          <div className="container">
            <div className="row mt-4">
              <Menu />
              <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/academics" component={Academic}/>
                <Route path="/facilities" component={Facilities}/>
                <Route path="/research" component={Research}/>
                <Route path="/faculty" component={Faculty}/>
                <Route path="/staffs" component={Staff}/>
                <Route path="/scholars" component={Scholar}/>
                <Route path="/project" component={Project}/>
                <Route path="/publication" component={Publication}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/updates" component={Update}/>
                <Route path="/contact" component={Contact}/>
                < Redirect to = "/home" />
              </Switch>  
            </div>
          </div>
          <Footer />
      </div>
  );
}

export default Main;
