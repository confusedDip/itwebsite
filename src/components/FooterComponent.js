import React from 'react';

function Footer(){
    return (
      <React.Fragment>
        <div className="footer">
            <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <h6>Quick Links</h6>
                <div className="divider"></div>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <ul className="list-unstyled">
                      <li>
                        <a href="/home">Home</a>
                      </li>
                      <li>
                          <a href="/academics">Academic Programs</a>
                      </li>
                      <li>
                          <a href="/facilities">Facilities</a>
                      </li>
                      <li>
                          <a href="/research">Research Areas</a>
                      </li>
                      <li>
                          <a href="/faculty">Faculty Members</a>
                      </li>
                      <li>
                          <a href="/staffs">Staff Members</a>
                      </li>
                      <li>
                          <a href="/scholars">Research Scholars</a>
                      </li>
                      <li>
                          <a href="/project">Projects</a>
                      </li>
                      <li>
                          <a href="/publication">Publications</a>
                      </li>
                      <li>
                          <a href="/gallery">Gallery</a>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6">
                    <ul className="list-unstyled">
                      <li>
                        <a href="/updates">Updates</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                      <li>
                        <a href="https://www.iiests.ac.in/" target="blank">Institute Website</a>
                      </li>
                      <li>
                        <a href="https://oldwww.iiests.ac.in/" target="blank">Old Website</a>
                      </li>
                      <li>
                        <a href="http://online.iiests.ac.in:1977/CampusPortal/CampusPortal.jsp" target="blank">My-IIESTS</a>
                      </li>
                      <li>
                        <a href="mailto:souradipnath4@gmail.com" target="blank">Website Feedback</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <h6>External Links</h6>
                <div className="divider"></div>
                <ul className="list-unstyled">
                  <li><a href="http://innovisionaward.iiests.ac.in/" target="blank">Innovasion Award</a></li>
                  <li><a href="http://ieeekol.iiests.ac.in/" target="blank">IEEE Kolkata - IAS Chapter</a></li>
                  <li><a href="https://dasanit.org/dasa2019/" target="blank">DASA</a></li>
                  <li><a href="https://www.britishcouncil.in/study-uk/scholarships/commonwealth-scholarships" target="blank">Commonwealth</a></li>
                  <li><a href="http://www.nata.in/" target="blank">NATA</a></li>
                  <li><a href="http://teqip-iii.iiests.ac.in/" target="blank">TEQIP</a></li>
                  <li><a href="https://www.iiests.ac.in/IIEST/CMS" target="blank">Contributory Medical Scheme (CMS)</a></li>
                  <li><a href="https://www.iiests.ac.in/uploads/img01136.pdf" target="blank">DAAD Scholarship-WISE</a></li>
                  <li><a href="https://www.iiests.ac.in/uploads/ReActivation-of-NSP-2.0-87-Institutes.pdf" target="blank">NSP Portal for Scholarship</a></li>
                  <li><a href="https://www.ncs.gov.in/Pages/default.aspx" target="blank">National Career Service</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-3">
                <h6>National Missions</h6>
                <div className="divider"></div>
                <ul className="list-unstyled">
                  <li><a href="https://www.iiests.ac.in/IIEST/GIAN" target="blank">GIAN</a></li>
                  <li><a href="https://www.iiests.ac.in/IIEST/NIRF" target="blank">NIRF</a></li>
                  <li><a href="https://sparc.iitkgp.ac.in/" target="blank">SPARC</a></li>
                  <li><a href="https://josaa.nic.in/webinfocms/Public/home.aspx" target="blank">JOSAA</a></li>
                  <li><a href="http://a2ascholarships.iccr.gov.in/" target="blank">ICCR</a></li>
                  <li><a href="https://www.iiests.ac.in/IIEST/UBA" target="blank">Unnat Bharat Abhiyan</a></li>
                  <li><a href="https://www.vidyalakshmi.co.in/Students/" target="blank">Vidya Lakshmi</a></li>
                  <li><a href="https://digitalindia.gov.in/content/about-programme" target="blank">Digital India Programme</a></li>
                  <li><a href="https://www.iiests.ac.in/IIEST/Fellowship" target="blank">Prime Minister Research Fellowship</a></li>
                  <li><a href="https://imprint-india.org/" target="blank">Imprint India</a></li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-9">
                <div className="row">
                  <div className="col-12 col-md-2  text-center">
                    &copy; IIEST, Shibpur
                  </div>
                  <div className="col-12 col-md-10  text-center">
                    Development Courtesy: Souradip Nath, B.Tech., Dept. of
                    Information Technology(2018-22)
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-auto  text-center">
                <a href="https://www.facebook.com/souradip.nath.9/?id" className="facebook" target="blank">
                  <i className="fa fa-lg fa-facebook" aria-hidden="true"></i>
                </a>
                <a  href="https://www.linkedin.com/in/souradip-nath-532551168/" className="linkedin" target="blank">
                  <i className="fa fa-lg fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default Footer;