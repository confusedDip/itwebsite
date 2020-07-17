import React from 'react';
import {Media} from 'reactstrap';

function Header(){
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mt-2 mb-2">
                        <Media left start>
                            <Media object src="/assets/iiest.png" alt="IIEST Logo" className="iiestlogo"/>
                        </Media>
                    </div>
                    <div className="col-12 col-md-6 mt-2 mb-2">
                        <Media start className="ml-auto">
                            <Media object src="/assets/banner2.png" alt="IIEST Banner" className="iiestbanner"/>
                        </Media>
                    </div>
                </div>
            </div>
            <div className="heading">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Information Technology</h1>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    );
}

export default Header;