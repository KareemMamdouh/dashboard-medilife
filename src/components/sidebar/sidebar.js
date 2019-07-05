import React, { Component, Fragment } from 'react'

import { Link } from 'react-router-dom'
import $ from 'jquery'
import DoctorTools from '../doctor-dashboard/doctorTools';
import ReceptionTools from '../receptionest-dashbord/receptionTools';
import PharmacistTools from '../pharmaclist-dashboard/pharmacistTools';
import LabSpecailistTools from '../labSpecailist-dashbord/labSpecailistTools';
import AdminTools from '../hospitalManager-dashboard/adminTools';
import './Sidebar.css'


class sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type:"admin"
        }
    }



    componentDidMount() {
        $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
            $("body").toggleClass("sidebar-toggled");
            $(".sidebar").toggleClass("toggled");
            if ($(".sidebar").hasClass("toggled")) {
                $('.sidebar .collapse').collapse('hide');
            };
        });
        $(window).resize(function() {
            if ($(window).width() < 768) {
              $('.sidebar .collapse').collapse('hide');
            };
          });
          $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
            if ($(window).width() > 768) {
              var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
              this.scrollTop += (delta < 0 ? 1 : -1) * 30;
              e.preventDefault();
            }
          });
        
        
        
        
    }
    render() {

        return (
            <Fragment>
                <ul className="navbar-nav bg-info sidebar sidebar-dark accordion" id="accordionSidebar">


                    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-stethoscope"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">MIDELIFE</div>
                    </Link>


                    <hr className="sidebar-divider my-0" />


                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            <i className="fas fa-fw fa-radiation fa-spin"></i>

                            <span>Dashboard</span>
                        </Link>
                    </li>


                    <hr className="sidebar-divider" />


                    <div className="sidebar-heading">
                        Interface
                     </div>

                    
                    <AdminTools name={this.state.type}/>
                    <DoctorTools name={this.state.type}/>
                    <ReceptionTools name={this.state.type}/>
                    <PharmacistTools name={this.state.type}/>
                    <LabSpecailistTools name={this.state.type}/>


                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>

                </ul>

            </Fragment>

        )
    }
}

export default sidebar
