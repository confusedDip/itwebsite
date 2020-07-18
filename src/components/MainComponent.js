import React, {Suspense} from 'react';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
// import Home from './HomeComponent';
// import Academic from './AcademicComponent';
// import Facilities from './FacilitiesComponent';
// import Research from './ResearchComponent';
// import Faculty from './FacultyComponent';
// import Staff from './StaffComponent';
// import Scholar from './ScholarComponent';
// import Project from './ProjectComponent';
// import Publication from './PublicationComponent';
// import Gallery from './GalleryComponent';
// import Update from './UpdateComponent';
// import Contact from './ContactComponents';


// import Loadable from "react-loadable"; 


import { Switch, Route, Redirect } from "react-router-dom";
import Loading from './LoadingComponent';


// const LoadableHome = Loadable({
//   loader: () => import("./HomeComponent"),
//   loading: () => <div>Loading ...</div>,
// });

// const LoadableAcademic = Loadable({
//   loader: () => import("./AcademicComponent"),
//   loading: () => <div>Loading ...</div>,
// });

// const LoadableFacilities = Loadable({
//   loader: () => import("./FacilitiesComponent"),
//   loading: () => <div>Loading ...</div>,
// });

// const LoadableResearch = Loadable({
//   loader: () => import("./ResearchComponent"),
//   loading: () => <div>Loading ...</div>,
// });

// const LoadableFaculty = Loadable({
//   loader: () => import("./FacultyComponent"),
//   loading: () => <div>Loading ...</div>,
// });

// const LoadableStaff = Loadable({
//   loader: () => import("./StaffComponent"),
//   loading: () => <div>Loading ...</div>,
// });

// const LoadableScholar = Loadable({
//   loader: () => import("./ScholarComponent"),
//   loading: () => <div>Loading ...</div>,
// });

// const LoadableProject = Loadable({
//   loader: () => import("./ProjectComponent"),
//   loading: () => <div>Loading ...</div>,
// });

// const LoadablePublication = Loadable({
//   loader: () => import("./PublicationComponent"),
//   loading: () => <div>Loading ...</div>,
// });

// const LoadableGallery = Loadable({
//   loader: () => import("./GalleryComponent"),
//   loading: () => <div>Loading ...</div>,
// });


// const LoadableUpdate = Loadable({
//   loader: () => import("./UpdateComponent"),
//   loading: () => <div>Loading ...</div>,
// });


// const LoadableContact = Loadable({
//   loader: () => import("./ContactComponents"),
//   loading: () => <div>Loading ...</div>,
// });

const LoadableHome = React.lazy(() => import("./HomeComponent"));

const LoadableAcademic = React.lazy(() => import("./AcademicComponent"));

const LoadableFacilities = React.lazy(() => import("./FacilitiesComponent"));

const LoadableResearch = React.lazy(() => import("./ResearchComponent"));

const LoadableFaculty = React.lazy(() => import("./FacultyComponent"));

const LoadableStaff = React.lazy(() => import("./StaffComponent"));

const LoadableScholar = React.lazy(() => import("./ScholarComponent"));

const LoadableProject = React.lazy(() => import("./ProjectComponent"));

const LoadablePublication = React.lazy(() => import("./PublicationComponent"));

const LoadableGallery = React.lazy(() => import("./GalleryComponent"));


const LoadableUpdate = React.lazy(() => import("./UpdateComponent"));


const LoadableContact = React.lazy(() => import("./ContactComponents"));

function Main() {

  return (
      <div>
          <Header />
          <div className="container">
            <div className="row mt-4">
              <Menu />
              <Suspense fallback={<Loading/>}>
                <Switch>
                    <Route path="/home" component={LoadableHome}/>
                    <Route path="/academics" component={LoadableAcademic}/>
                    <Route path="/facilities" component={LoadableFacilities}/>
                    <Route path="/research" component={LoadableResearch}/>
                    <Route path="/faculty" component={LoadableFaculty}/>
                    <Route path="/staffs" component={LoadableStaff}/>
                    <Route path="/scholars" component={LoadableScholar}/>
                    <Route path="/project" component={LoadableProject}/>
                    <Route path="/publication" component={LoadablePublication}/>
                    <Route path="/gallery" component={LoadableGallery}/>
                    <Route path="/updates" component={LoadableUpdate}/>
                    <Route path="/contact" component={LoadableContact}/>
                    < Redirect to = "/home" />
                </Switch>
              </Suspense>
                
            </div>
          </div>
          <Footer />
      </div>
  );
}

export default Main;
