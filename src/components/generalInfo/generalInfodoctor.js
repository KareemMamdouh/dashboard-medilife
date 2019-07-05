import React, { Component } from 'react'
import {Redirect } from 'react-router'
import {Link } from 'react-router-dom'
import './AppointDetails.css'
import axios from 'axios'

class generalInfodoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: [],
          doctor:[],
          departments:[]
          
        }
      }
   

      
componentDidMount(){
    const id = this.props.match.params.id 
    axios.get(`http://localhost:5000/doctor/profile/${id}`)
        .then(res => {
            this.setState({
            user: res.data.user,
            doctor: res.data.doctor,
            departments:res.data.departments

            });
        })
        .catch(error => {
            console.log(error);

        });
}

getUserData = () => {
    if(this.state.user.acc_status == true){
        return(       <button className='btn btn-info mr-4 mt-4'  onClick={this.stopDoctor}><i class="fas fa-ban" > </i> stop membership</button>
        )
    }else{
        return(        <button className='btn btn-info mr-4 mt-4' onClick={this.runDoctor}><i class="fas fa-ban" > </i> run membership</button>
        )
    }
                         

   }
deletedoctor = e =>{
    e.preventDefault();
    const id = this.props.match.params.id
            axios.delete(`http://localhost:5000/doctor/${id}`).then(res =>{
            console.log("delete")

            })
            .catch(err=>{
            console.log(err.message)
            })
            window.location.replace("/managedoctors");

}
stopDoctor = e =>{
    e.preventDefault();
    const id = this.props.match.params.id 
            axios.patch(`http://localhost:5000/doctor/profile/edit/${id}`,{acc_status:false }).then(res =>{
            console.log("done 1")
            console.log(res)

            })
            .catch(err=>{
            console.log(err.message)
            })
            window.location.reload();


}
runDoctor = e =>{
    e.preventDefault();
    const id = this.props.match.params.id 
    axios.patch(`http://localhost:5000/doctor/profile/edit/${id}`,{acc_status:true}).then(res =>{
    console.log("done 2")
    console.log(res)

    })
    .catch(err=>{
    console.log(err.message)
    }) 
    window.location.reload();

}
    render() {
       
        return (
            <div className='general-info'>
                <h3 className=''>Info Doctor<span className='strong'>1</span> </h3>
                <hr className="sidebar-divider my-0" />

                <table class="table">
                    
                        <tbody >
                                <tr>
                                    <td>Name:</td>
                                    <td className='text-muted'>{this.state.user.name}</td>
                                </tr>
                                <tr>
                                    <td>email: </td>
                                    <td className='text-muted'>{this.state.user.email}</td>
                                </tr>
                                <tr>
                                    <td>phone:</td>
                                    <td className='text-muted'>{this.state.user.phone}</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td className='text-muted'>{this.state.user.address}</td>
                                </tr>
                                <tr>
                                    <td>age:</td>
                                    <td className='text-muted'>{this.state.user.age}</td>
                                </tr>
                                <tr>
                                    <td>gender:</td>
                                    <td className='text-muted'>{this.state.user.gender}</td>
                                </tr>
                                <tr>
                                    <td>ID:</td>
                                    <td className='text-muted'>{this.state.user.ssn}</td>
                                </tr>
                                <tr>
                                    <td>job title:</td>
                                    <td className='text-muted'>{this.state.doctor.job_title}</td>
                                </tr>
                                <tr>
                                    <td>qualifcation:</td>
                                    <td className='text-muted'>{this.state.doctor.qualifcation}</td>
                                </tr>
                                <tr>
                                    <td>cost:</td>
                                    <td className='text-muted'>{this.state.doctor.cost}</td>
                                </tr>
                                <tr>
                                    <td>avrg time:</td>
                                    <td className='text-muted'>{this.state.doctor.avrg_time}</td>
                                </tr>
                                <tr>
                                    <td>department id:</td>
                                    <td className='text-muted'>{this.state.departments.name}</td>
                                </tr>
                                {console.log(this.state.user.acc_status)}
                            </tbody>
                        
                </table>
                <Link className='btn btn-info mr-4 mt-4' to={'/managedoctors/generalInfodoctor/edit/'+this.state.user._id}><i class="fas fa-pen-alt pr-2"></i>Edit info</Link>
                
                {
                   this.getUserData()
                }

                <button type="button" class="btn btn-info mr-4 mt-4" data-toggle="modal" data-target="#exampleModal">
                Delete
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Delete doctor</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        all data will be cleared from database
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger " onClick={this.deletedoctor}>DELETE</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default generalInfodoctor
