import React from 'react'
import { Link } from 'react-router-dom'

function pharmacistTools(props) {
    if (props.name === 'pharmacist') {
        return (
            <>


                <li className="nav-item">
                    <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseapp" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="far fa-list-alt pr-2"></i>
                        <span>Medicine Store</span>
                    </Link>
                    <div id="collapseapp" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Store:</h6>

                            <Link className="collapse-item" href="cards.html"> Show Medicine </Link>
                            <Link className="collapse-item" href="cards.html">Add Medicine </Link>
                        </div>
                    </div>
                </li>


            </>)
    } else {
        return <></>
    }
}


export default pharmacistTools
