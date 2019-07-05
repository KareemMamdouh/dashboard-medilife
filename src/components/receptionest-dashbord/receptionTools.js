import React from 'react'
import { Link } from 'react-router-dom'
function receptionTools(props) {
    if (props.name === 'receptionist') {
        return (
            <>
                <li className="nav-item">
                    <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-user-md pr-2 "></i>
                        <span>Add Employee</span>
                    </Link>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Employee:</h6>
                            <Link className="collapse-item" to="/doctorRegist"> <i className="fas fa-user-md pr-2 "></i>Add Doctors</Link>
                            <Link className="collapse-item" to="/doctorRegist"> <i className="fas fa-bong pr-2 "></i>Add LabSpcialist</Link>
                            <Link className="collapse-item" to="/doctorRegist"> <i className="fas fa-first-aid pr-2 "></i>Add Pharmacest</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsemanage" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="far fa-list-alt pr-2"></i>
                        <span> Manage Employee</span>
                    </Link>
                    <div id="collapsemanage" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Employee:</h6>

                            <Link className="collapse-item" to="cards.html"> <i className="fas fa-user-md pr-2 "></i>Manage Doctors</Link>
                            <Link className="collapse-item" href="cards.html"><i className="fas fa-bong pr-2 "></i>Manage LabSpcialist</Link>
                            <Link className="collapse-item" href="cards.html"><i className="fas fa-first-aid pr-2 "></i>Manage Pharmacest</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseapp" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="far fa-list-alt pr-2"></i>
                        <span>Appointment</span>
                    </Link>
                    <div id="collapseapp" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Appointment:</h6>

                            <Link className="collapse-item" href="cards.html">Create Appointment </Link>
                            <Link className="collapse-item" href="cards.html">Show Appointments </Link>
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
                    <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapselab" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-bong pr-2"></i>
                        <span>Invoice</span>
                    </Link>
                    <div id="collapselab" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom :</h6>
                            <Link className="collapse-item" href="cards.html">Doctors Invoice </Link>
                            <Link className="collapse-item" href="cards.html">LabSpcialist Invoice </Link>
                            <Link className="collapse-item" href="cards.html">Pharmacest Invoice </Link>


                        </div>
                    </div>
                </li>

            </>)
    } else {
        return <></>
    }
}

export default receptionTools
