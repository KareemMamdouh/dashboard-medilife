import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery/dist/jquery'



class appiontmentReport extends Component {
    
    componentDidMount(){
    
            $('#dataTable').DataTable();
        
    }
    render() {
        return (
           
               <Fragment>


                    <h1 className="h3 mb-2 text-gray-800">APPOINTMENTS</h1>


                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Appiontments List </h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>APP.No</th>
                                            <th>Patient Name</th>
                                            <th>Doctor Name</th>
                                            <th>Date Time</th>
                                            
                                            <th>Action</th>
                                            
                                        </tr>
                                    </thead>
                                  
                                    <tbody>
                   <tr>
                     <td>1</td>
                     <td>Ahmed Ali</td>
                     <td>Dr Mohamed Salah</td>
                     <td>10/7/2019</td>
                     <td> <Link to="/generalInfo" className="btn btn-info">View</Link></td>
                   </tr>
                   <tr>
                     <td>2</td>
                     <td>tariq mahmoud</td>
                     <td>Dr Mohamed Salah</td>
                     <td>11/7/2019</td>
                     <td> <Link to="/" className="btn btn-info">View</Link></td>
                   </tr>
                   <tr>
                     <td>3</td>
                     <td>Ali Waheed</td>
                     <td>Dr Mohamed Salah</td>
                     <td>10/7/2019</td>
                     <td> <Link to="/" className="btn btn-info">View</Link></td>
                   </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

              </Fragment>
           
        )
    }
}

export default appiontmentReport
