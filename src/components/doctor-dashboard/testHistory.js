import React, { Component } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'
 class testHistory extends Component {
    componentDidMount(){
    
        $('#dataTable').DataTable();
    
}
    render() {
        return (
            <div>
                <h4>Test History for : <sapn className='text-primary'>Ahmed Ali</sapn></h4>
                <hr className="sidebar-divider my-0" />
                <div className="table-responsive mt-4">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>APP.No</th>
                                <th>Patient Name</th>
                                <th>Test Name</th>
                                <th>Date </th>
                                <th>Result </th>
                                

                            </tr>
                        </thead>

                        <tbody>
                         <tr>
                          <td>1</td>
                          <td>Ahmed Ali</td>
                          <td>Blood Test</td>
                          <td> 13/6/2018</td>
                          <td><Link to="" className='btn btn-info'> View Result </Link></td>
                         
                          </tr>
                          <tr>
                          <td>2</td>
                          <td>Ahmed Ali</td>
                          <td> X-ray Test</td>
                          <td> 13/4/2018</td>
                          <td><Link to="" className='btn btn-info'> View Result </Link></td>
                          
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default testHistory
