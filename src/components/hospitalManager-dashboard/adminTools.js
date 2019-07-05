import React from 'react'
import { Link } from 'react-router-dom'

function adminTools(props) {
    if (props.name === 'admin') {
        return (
            <div>

<li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-user-md pr-2 "></i>
                        <span>Add User</span>
                    </Link>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Employee:</h6>
                            <Link className="collapse-item" to="/doctorRegist"> <i className="fas fa-user-md pr-2 "></i>Add Doctors</Link>
                            <Link className="collapse-item" to="/addempolyee"> <i className="fas fa-bong pr-2 "></i>Add Empolyee</Link>
                            <Link className="collapse-item" to="/addpatient"><i className="fas fa-first-aid pr-2 "></i>Add patient</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsemanage" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="far fa-list-alt pr-2"></i>
                        <span> Manage Users</span>
                    </Link>
                    <div id="collapsemanage" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Users:</h6>

                            <Link className="collapse-item" to="/managedoctors"> <i className="fas fa-user-md pr-2 "></i>Manage Doctors</Link>
                            <Link className="collapse-item" to="/managelabspialist"><i className="fas fa-bong pr-2 "></i>Manage LabSpcialist</Link>
                            <Link className="collapse-item" to="/managephamacest"><i className="fas fa-first-aid pr-2 "></i>Manage Pharmacest</Link>
                            <Link className="collapse-item" to="/managereceptionist"><i className="fas fa-first-aid pr-2 "></i>Manage Receptionist</Link>
                            <Link className="collapse-item" to="/managepatient"><i className="fas fa-first-aid pr-2 "></i>Manage patient</Link>

                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseapp" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="far fa-list-alt pr-2"></i>
                        <span>Appointment</span>
                    </Link>
                    <div id="collapseapp" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Appointment:</h6>

                            <Link className="collapse-item" to="/createAppointment">Create Appointment </Link>
                            <Link className="collapse-item" to="/appiontmentReport">Show Appointments </Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseReport" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="far fa-list-alt pr-2"></i>
                        <span>Reports</span>
                    </Link>
                    <div id="collapseReport" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Reports:</h6>

                            <Link className="collapse-item" to="addReport">Create Report </Link>
                            <Link className="collapse-item" to="/">Show Report </Link>
                        </div>
                    </div>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/" >
                        <i className="far fa-list-alt pr-2"></i>
                        <span>Resrevation Online</span>
                    </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseInvoce" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-bong pr-2"></i>
                        <span>Invoice</span>
                    </Link>
                    <div id="collapseInvoce" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom :</h6>
                            <Link className="collapse-item" to="/">Doctors Invoice </Link>
                            <Link className="collapse-item" to="/">LabSpcialist Invoice </Link>
                            <Link className="collapse-item" to="/">Pharmacest Invoice </Link>
                        </div>
                    </div>
                </li>
            </div>)
    } else {
        return <></>
    }
}


export default adminTools
