import React from 'react';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

function Gallery() {
    return (
        < div className = "col-12 col-md-10 body">
            <h5>Gallery</h5>
            <div className="divider"></div>
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3 gallery-body">
                    <div className="img-container">
                        <RenderSmoothImage src="assets/lab_1.jpg" alt="Research Lab 1"/>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 gallery-body">
                    < div className = "img-container" >
                        <RenderSmoothImage src="assets/lab_2.jpg" alt="Research Lab 3"/>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 gallery-body">
                    < div className = "img-container" >
                        <RenderSmoothImage src="assets/lab_3.jpg" alt="Research Scholars Lab"/>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 gallery-body">
                    < div className = "img-container" >
                        <RenderSmoothImage src="assets/dept_img.jpg" alt="Department Banner"/>
                    </div>
                </div>
                
            </div>
            <hr/>
        </div>
    );
}

export default Gallery;