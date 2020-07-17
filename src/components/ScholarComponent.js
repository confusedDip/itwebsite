import React from 'react';
import {Table} from 'reactstrap';

function Scholar() {
    return (
        < div className = "col-12 col-md-10 body">
            <h5>Research Scholars</h5>
            <div className="divider"></div>
            <Table striped className="table-responsive-sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Supervisor</th>
                    <th>Research</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Anal Paul</td>
                        <td>Santi Prasad Maity</td>
                        <td>Cognitive Radio Networks</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Khokan Mondal</td>
                        <td>Tuhina Samanta</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Nashreen Nesa</td>
                        <td>Indrajit Banerjee</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Pratima Chatterjee</td>
                        <td>Prasun Ghosal</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Rakesh Das</td>
                        <td>Hafizur Rahaman</td>
                        <td>Optical Computing</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Sabyasachi Mukherjee</td>
                        <td>Arindam Biswas</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Srijit Chowdhury</td>
                        <td>Chandan Giri</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Sumit Adak</td>
                        <td>Sukanta Das</td>
                        <td></td>
                    </tr>    
                </tbody>
            </Table>
            <hr/>
        </div>
        
    );
}

export default Scholar;