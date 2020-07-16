import React from 'react';
import {Table} from 'reactstrap';


function Academic() {
    return (
        < div className = "col-12 col-md-10">
            <h5>Academic Programs</h5>
            <hr/>
            <Table striped>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Duration</th>
                    <th>Specialization</th>
                    <th>Curriculum</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Bachelor of Technology (B. Tech.)</td>
                    <td>4 years</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Master of Technology (M. Tech.)</td>
                    <td>2 years</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Doctor of Philosophy (Ph. D.)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
            </Table> 
        </div>
    );
}

export default Academic;