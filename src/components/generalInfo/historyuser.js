import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery/dist/jquery'
import axios from 'axios'

class historyuser extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: []
        }
      }
    componentDidMount(){
    
            $('#dataTable').DataTable();
            axios.get('http://localhost:5000/patients')
            .then(res => {
                this.setState({
                data: res.data
                })
            })
            .catch(error => {
                console.log(error);
            }); 
    }

    render() {
        return (
               <Fragment>
                    <h1 className="h3 mb-2 text-gray-800"> List</h1>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Manage Doctors List </h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Numper</th>
                                            <th>Doctor Name</th>
                                            <th>Doctor phone</th>
                                            <th>Doctor email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            this.state.data.map((x,i)=>{           
                                                return(<tr key={i} >
                                                    <td >{i}</td>
                                                    <td>{x.name}</td>
                                                    <td>{x.phone}</td>
                                                    <td>{x.email}</td>
                                                    <td> <Link to={"/managepatient/generalInfousers/"+x._id} className="btn btn-info">View</Link></td>
                                                </tr>)
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
              </Fragment>
        )
    }
}

export default historyuser
