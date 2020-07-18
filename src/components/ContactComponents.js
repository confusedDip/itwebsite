import React from 'react';

function Contact() {
    return (
        < div className = "col-12 col-md-10 body">
            <h5>Contact Us</h5>
            <div className="divider"></div>
            <p>
                <strong>Contact our HOD for more information</strong>
            </p>
            <p>
                <a href="https://www.iiests.ac.in/IIEST/Faculty/it-sukanta" target="blank">Prof Sukanta Das</a>
            </p>
            <p>
                <strong>Email:</strong> <a href="mailto:hod@it.iiests.ac.in">hod@it.iiests.ac.in</a><br/>
                <a href="mailto:sukanta@it.iiests.ac.in">sukanta@it.iiests.ac.in</a><br/>
                <strong>Phone:</strong> 033 2668 4561-63 (Extn 260)
            </p>
            <hr/>
        </div>
    );
}

export default Contact;