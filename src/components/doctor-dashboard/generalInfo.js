import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './AppointDetails.css'

export class generalInfo extends Component {
    render() {
        return (
            <div className='general-info'>
                <h3 className=''>Appointment Num <span className='strong'>1</span> </h3>
                <hr className="sidebar-divider my-0" />

                <table class="table">

                    <tbody>
                        
                        <tr>
                            <td>Patient:</td>
                            <td className='text-muted'>Ahmed Ali</td>
                        </tr>
                        <tr>
                            <td>Date: </td>
                            <td className='text-muted'>11/7/2019</td>
                        </tr>
                        <tr>
                            <td>Timeslot:</td>
                            <td className='text-muted'>09:00 -09:30</td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td className='text-muted'>suffer from cold</td>
                        </tr>
                    </tbody>
                </table>
                <Link className='btn btn-info mr-4 mt-4' to='addReport'><i class="fas fa-pen-alt pr-2"></i> Add Report</Link>
                <Link className='btn btn-info mr-4 mt-4' to='reportHistory'><i class="fas fa-poll-h pr-2"></i>View Reports History</Link>
                <Link className='btn btn-info mr-4 mt-4' to='testHistory'><i class="fas fa-microscope  pr-2"></i> View Test History</Link>
                <Link className='btn btn-info  mt-4' to='medicineHistory'> <i class="fas fa-capsules pr-2"></i>View Test Medicine</Link>

            </div>
        )
    }
}

export default generalInfo
