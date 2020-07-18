import React from 'react';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

function Facilities() {
    return (
        < div className = "col-12 col-md-10 body">
            <h5>Academic and Research Facilities</h5>
            <div className="divider"></div>   
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3 facilities-body">
                    <div className="img-container">
                        <RenderSmoothImage src="assets/lab_1.jpg" alt="Research Lab 1"/>
                    </div>
                    <div className="desc-container">
                        <a href="https://www.iiests.ac.in/IIEST/Lab_Details/?id=MjE=" target="blank">Research Lab 1</a>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 facilities-body">
                    < div className = "img-container" >
                        <RenderSmoothImage src="assets/lab_2.jpg" alt="Research Lab 3"/>
                    </div>
                    < div className = "desc-container" >
                        <a href="https://www.iiests.ac.in/IIEST/Lab_Details/?id=MjI=" target="blank">Research Lab 3</a>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 facilities-body">
                    < div className = "img-container" >
                        <RenderSmoothImage src="assets/lab_3.jpg" alt="Research Scholars Lab"/>
                    </div>
                    < div className = "desc-container" >
                        <a href="https://www.iiests.ac.in/IIEST/Lab_Details/?id=MjM=" target="blank">Research Scholars Lab</a>
                    </div>
                </div>
                
            </div>
            <hr/>       
        </div>
    );
}

export default Facilities;