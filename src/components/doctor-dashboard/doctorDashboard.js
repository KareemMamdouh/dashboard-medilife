import React, { Component } from 'react'
import Sidebar from '../sidebar/sidebar';
import Topbar from '../topbar.js/topbar';
import Main from '../main';
import Footer from '../footer';

 class doctorDash extends Component {
  render() {
    return (
      <>
           <div id="wrapper">
          <Sidebar/>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div className="container-fluid">
                <Main />
              </div>
            </div>
            <Footer />
          </div>
        </div>
        
      </>
    )
  }
}

export default doctorDash
