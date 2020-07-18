import React from 'react';
import {Card, CardTitle, CardBody, CardFooter, CardText, Button } from 'reactstrap';

function Home(){
    return(
        <React.Fragment>
            < div className = "col-12 col-md-7 body">
                <h5>About the Department</h5>
                <div className="divider"></div>
                <p className="home-text">The Department of Information Technology started its journey in 2000. It is one of the youngest departments of this 163 years old institute. The department has produced excellent IT engineers who are serving in different reputed organizations and pursuing higher studies at various Institutes of Excellence. The department provides state-of-the-art computational facilities for the students. The strength of the department has been in its diverse areas of research in which it has made remarkable contributions.</p>
                <hr/>
            </div>
            <div className="col-12 col-md-3 body">
                <Card id="updates-card">
                    <CardTitle className="text-center card-header card-head">
                        <h5>Updates</h5>
                    </CardTitle>
                    <CardBody className="card-body">
                        <CardText></CardText>
                    </CardBody>
                    <CardFooter>
                        <div className="row">
                            <div className="col-12 text-center">
                                <Button className="know-more-btn">Know More</Button>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </React.Fragment>
            
    );
}

export default Home;