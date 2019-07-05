import React from 'react'
import { Link } from 'react-router-dom'
function doctorTools(props) {


    if (props.name === 'doctor') {
        return (  <li className="nav-item">
        <Link className="nav-link" to="/appiontmentReport">
            <i class="far fa-list-alt"></i>
            <span> My Appointments</span>
        </Link> 

    </li> )
    }
    else {
        return <> </>
    }




}

export default doctorTools
