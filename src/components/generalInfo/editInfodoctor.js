import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './AppointDetails.css'
import axios from 'axios'

class editInfodoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: '',
            age: '',
            job_title: '',
            qualifcation: '',
            cost: '',
            department_id:'',
            avrg_time: '',
          user: [],
          doctor:[],
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
    axios.get(`http://localhost:5000/doctor/profile/${id}`)
        .then(res => {
            this.setState({
            user: res.data.user,
            doctor: res.data.doctor,

            });
            this.setState({
                name: this.state.user.name,
                address: this.state.user.address,
                phone: this.state.user.phone,
                age: this.state.user.age,
                job_title: this.state.doctor.job_title,
                qualifcation: this.state.doctor.qualifcation,
                cost: this.state.doctor.cost,
                avrg_time: this.state.doctor.avrg_time
            })
        })
        .catch(error => {
            console.log(error);

        });
        
}
    handleDoctorSave = e =>{
        e.preventDefault();
        const { name,address, phone,age,job_title,cost,avrg_time,qualifcation} = this.state
    //call api
    const id = this.props.match.params.id 
    axios.patch(`http://localhost:5000/doctor/profile/edit/${id}`,{  name:name,  address:address, phone:phone,age:age,job_title:job_title,cost:cost,avrg_time:avrg_time,qualifcation:qualifcation }).then(res =>{
    console.log("done")
    })
    .catch(err=>{
    console.log(err.message)
    })

    }

    render() {
        const { name, address, phone,age,job_title,cost,avrg_time,qualifcation  } = this.state

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
          <div className="form-group">
          <label>job title</label>
            <input type="text" name='job_title' value={job_title} onChange={this.setStateField('job_title')} className="form-control " placeholder="job title"required />
          </div>
          <div className="form-group">
          <label>qualifcation</label>
            <input type="text" name='qualifcation' value={qualifcation} onChange={this.setStateField('qualifcation')} className="form-control" placeholder="qualifcation"required />
          </div>
          <div className="form-group">
          <label>cost</label>
            <input type="text" name='cost' value={cost} onChange={this.setStateField('cost')} className="form-control " placeholder="cost"required />
          </div>
          <div className="form-group">
          <label>avrg time</label>
            <input type="text" name='avrg_time' value={avrg_time} onChange={this.setStateField('avrg_time')} className="form-control " placeholder="avrg time"required />
          </div>
          <input  className="btn btn-success btn-user " type="submit" value="Create Account" onClick={this.handleDoctorSave} />
          <hr/>
        </form>
    </div>
    )}
}

export default editInfodoctor
