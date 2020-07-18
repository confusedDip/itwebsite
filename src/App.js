import React from 'react';
import './App.css';
import Footer from './components/FooterComponent';
import Header from './components/HeaderComponent';
import Menu from './components/MenuComponent';
import Home from './components/HomeComponent';
import Academic from './components/AcademicComponent';

 
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Facilities from './components/FacilitiesComponent';
import Research from './components/ResearchComponent';
import Faculty from './components/FacultyComponent';
import Staff from './components/StaffComponent';
import Scholar from './components/ScholarComponent';
import Project from './components/ProjectComponent';
import Publication from './components/PublicationComponent';
import Gallery from './components/GalleryComponent';
import Update from './components/UpdateComponent';
import Contact from './components/ContactComponents';


function App() {

  return (
    <BrowserRouter>
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
          <hr/>
          </div>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
