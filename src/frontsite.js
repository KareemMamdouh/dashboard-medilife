import React, { Component,Fragment } from 'react'
import Sidebar from './components/sidebar/sidebar'
import Topbar from './components/topbar.js/topbar'
import Main from './components/main';
import Footer from './components/footer'

 class Frontsite extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
         
       }
     }
     
  render() {
    return (
    
        <Fragment>
        <div id="wrapper" >
          <Sidebar  />
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
        
      
      </Fragment>

       
       
    )

  
  }


}

export default Frontsite
