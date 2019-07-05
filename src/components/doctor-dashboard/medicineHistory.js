import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
class medicineHistory extends Component {
    componentDidMount(){
    
        $('#dataTable').DataTable();
    
}
    render() {
        return (
            <Fragment>
                <h4>Medicine History for : <sapn className='text-primary'>Ahmed Ali</sapn></h4>
                <hr className="sidebar-divider my-0" />
                <div className="table-responsive mt-4">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>APP.No</th>
                                <th>Patient Name</th>
                                <th>Date </th>
                                <th>Medicine Des</th>
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Ahmed Ali </td>
                                <td>2017-4-12</td>
                                <td>
                                    <ul className='list-unstyled'>
                                        <li>
                                            <tr>
                                                <th>Medicine Name</th>
                                                <th>Duration</th>

                                            </tr>
                                            <tr>
                                                <td>panadol</td>
                                                <td>one pill after lunch</td>

                                            </tr>

                                        </li>

                                    </ul></td>
                                <td><Link className='btn btn-info' to='/'>View</Link></td>

                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )
    }
}

export default medicineHistory
