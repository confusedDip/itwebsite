import React from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function Update() {
    return (
        <div className = "col-12 col-md-10 body">
            <h5>Updates</h5>
            <div className="divider"></div>
        <Tabs defaultActiveKey="achievements" id="updates-tab">
          <Tab eventKey="achievements" title="Achievements">
            <div className="UpdateBody"></div>
          </Tab>
          <Tab eventKey="notices" title="Notices">
            <div className="UpdateBody"></div>
          </Tab>
          <Tab eventKey="events" title="Events">
            <div className="UpdateBody"></div>
          </Tab>
        </Tabs>
        
        
        <hr/>
        </div>
    );
}

export default Update;