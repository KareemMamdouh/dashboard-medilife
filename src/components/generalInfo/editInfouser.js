import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './AppointDetails.css'
import axios from 'axios'

class editInfouser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: '',
            age: '',
            
          user: []
        }
      }
      setStateField = (fieldName) => e =>{
        console.log(e.target.value)
        this.setState({
            [fieldName]: e.target.value
            
        })
  }
componentDidMount(){
    const id = this.props.match.params.id 
    axios.get(`http://localhost:5000/users/profile/${id}`)
        .then(res => {
            this.setState({
            user: res.data

            });
            this.setState({
                name: this.state.user.name,
                address: this.state.user.address,
                phone: this.state.user.phone,
                age: this.state.user.age
                
            })
        })
        .catch(error => {
            console.log(error);

        });
        
}
    handleDoctorSave = e =>{
        e.preventDefault();
        const { name,address, phone,age} = this.state
    //call api
    const id = this.props.match.params.id 
    let url = window.location.pathname.split('/','2')[1]

    axios.patch(`http://localhost:5000/users/profile/edit/${id}`,{  name:name,  address:address, phone:phone,age:age }).then(res =>{
    console.log("done")
    window.location.replace("/"+url+"/generalInfousers/"+id)

    })
    .catch(err=>{
    console.log(err.message)
    })

    }

    render() {
        const { name, address, phone,age  } = this.state

        return (
            <div className='general-info'>
                <h3 className=''>Edit Info Doctor <span className='strong'>1</span> </h3>
                <hr className="sidebar-divider my-0" />

    <form className="user" method="post" enctype="multipart/form-data">
          <div className="form-group ">
          <label>Your Name</label>
              <input type="text" name='name' value={name} onChange={this.setStateField('name')} className="form-control "  placeholder="Your Name"required />
          </div>
          <div className="form-group">
          <label>phone</label>
            <input type="number" name='phone' value={phone} onChange={this.setStateField('phone')} className="form-control "  placeholder="phone" required/>
          </div>
          <div className="form-group">
          <label>Address</label>
            <input type="text" name='address' value={address} onChange={this.setStateField('address')} className="form-control "  placeholder="address"required />
          </div>
          <div className="form-group">
          <label>Age</label>
            <input type="number" name='age' value={age} onChange={this.setStateField('age')} className="form-control " placeholder="age"required />
          </div>
          
          <input  className="btn btn-success btn-user " type="submit" value="Create Account" onClick={this.handleDoctorSave} />
          <hr/>
        </form>
    </div>
    )}
}

export default editInfouser
