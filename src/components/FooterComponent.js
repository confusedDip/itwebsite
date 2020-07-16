import React from 'react';
import styles from '../mycss/Footer.module.css';

function Footer(){
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
                Contact Us
                <hr/>
            </div>
            <div className="col-12">
              <p>
                <strong>Office:</strong> &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-lg fa-map-marker" aria-hidden="true"></i> Botanic Garden,
                 Dist: Howrah, West Bengal, India - 711103  <i class="fa fa-lg fa-phone" aria-hidden="true"></i> +91
                (033) 2668 4561 to 63 <i class="fa fa-lg fa-fax" aria-hidden="true"></i> +91 (033) 2668 2916 (Fax)
              </p>
              <p>
                <strong>Public Relation Officer:</strong>&nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-lg fa-envelope" aria-hidden="true"></i> pro@iiests.ac.in 
                &nbsp;<i class="fa fa-lg fa-phone" aria-hidden="true"></i> 033 - 2668
                8081(Direct) / 2668 4561 / 62 / 63 Extn: 629 / 9831212905(M)
              </p>
              <p>
                <strong>Security Personnel:</strong>&nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-lg fa-envelope" aria-hidden="true"></i> debanjan.das15@gmail.com <i class="fa fa-lg fa-phone" aria-hidden="true"></i> + 91 986390527 /
                7980754940
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <h6>Quick Links</h6>
              <hr />
              <div className="row">
                <div className="col-12 col-sm-6">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Downloads</a>
                    </li>
                    <li>
                      <a href="#">Old Website</a>
                    </li>
                    <li>
                      <a href="#">My-IIESTS</a>
                    </li>
                    <li>
                      <a href="#">Right To Information Act</a>
                    </li>
                    <li>
                      <a href="#">Chief Vigilance Officer</a>
                    </li>
                    <li>
                      <a href="#">Tenders</a>
                    </li>
                    <li>
                      <a href="#">Employment Notices</a>
                    </li>
                    <li>
                      <a href="#">Transcripts/Academic Record Verification</a>
                    </li>
                    <li>
                      <a href="#">Sixth Annual Convocation (YT)</a>
                    </li>
                    <li>
                      <a href="#">Faculty Email Directory</a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Website &amp; Network Group</a>
                    </li>
                    <li>
                      <a href="#">Email Service</a>
                    </li>
                    <li>
                      <a href="#">Email Accounts - Password Change</a>
                    </li>
                    <li>
                      <a href="#">Alumni Cell</a>
                    </li>
                    <li>
                      <a href="#">Publicity and Media Cell</a>
                    </li>
                    <li>
                      <a href="#">Reservation Cell</a>
                    </li>
                    <li>
                      <a href="#">राजभाषा प्रकोष्ठ</a>
                    </li>
                    <li>
                      <a href="#">Internal Complaints Committee</a>
                    </li>
                    <li>
                      <a href="#">Events Gallery</a>
                    </li>
                    <li>
                      <a href="#">Website Feedback</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <h6>External Links</h6>
              <hr />
              <ul className="list-unstyled">
                <li><a href="#">Innovasion Award</a></li>
                <li><a href="#">IEEE Kolkata - IAS Chapter</a></li>
                <li><a href="#">DASA</a></li>
                <li><a href="#">Commonwealth</a></li>
                <li><a href="#">NATA</a></li>
                <li><a href="#">TEQIP</a></li>
                <li><a href="#">Contributory Medical Scheme (CMS)</a></li>
                <li><a href="#">DAAD Scholarship-WISE</a></li>
                <li><a href="#">NSP Portal for Scholarship</a></li>
                <li><a href="#">National Career Service</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <h6>National Missions</h6>
              <hr />
              <ul className="list-unstyled">
                <li><a href="#">GIAN</a></li>
                <li><a href="#">NIRF</a></li>
                <li><a href="#">SPARC</a></li>
                <li><a href="#">JOSAA</a></li>
                <li><a href="#">ICCR</a></li>
                <li><a href="#">Unnat Bharat Abhiyan</a></li>
                <li><a href="#">Vidya Lakshmi</a></li>
                <li><a href="#">Digital India Programme</a></li>
                <li><a href="#">Prime Minister Research Fellowship</a></li>
                <li><a href="#">Imprint India</a></li>
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
              <a href="https://www.facebook.com/souradip.nath.9/?id" className={styles.facebook} target="blank">
                <i className="fa fa-lg fa-facebook" aria-hidden="true"></i>
              </a>
              <a  href="https://www.linkedin.com/in/souradip-nath-532551168/" className={styles.linkedin} target="blank">
                <i className="fa fa-lg fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default Footer;