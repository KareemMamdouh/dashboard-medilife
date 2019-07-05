import React, { Component } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'
 class reportHistory extends Component {
    componentDidMount(){
    
        $('#dataTable').DataTable();
    
}
    render() {
        return (
            <div>
                <h4>Report History for : <sapn className='text-primary'>Ahmed Ali</sapn></h4>
                <hr className="sidebar-divider my-0" />
                <div className="table-responsive mt-4">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>APP.No</th>
                                <th>Patient Name</th>
                                <th>Doctor Name</th>
                                <th>Report Date </th>
                                <th>Report description </th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Ahmed Ali</td>
                            <td>Dr Mohamed Salah</td>
                            <td>10/8/2018</td>
                            <td>description for what Patient do</td>
                            <td><Link to="/appiontmentReport/generalInfo/addReport" className="btn btn-primary"> Edit</Link></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default reportHistory
