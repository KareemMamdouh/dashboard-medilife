import React from 'react'
import { Link } from 'react-router-dom'

function labSpecailistTools(props) {
    if (props.name === 'labspecailist') {
        return (
            <>


                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapseapp" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="far fa-list-alt pr-2"></i>
                        <span>Lab</span>
                    </Link>
                    <div id="collapseapp" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Lab:</h6>

                            <Link className="collapse-item" to="/createTest">Create Test </Link>
                            <Link className="collapse-item" to="/createTest">Show TestHistory </Link>
                        </div>
                    </div>
                </li>


            </>)
    } else {
        return <></>
    }
}


export default labSpecailistTools
