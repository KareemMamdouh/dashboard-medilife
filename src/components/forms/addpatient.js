import React, { Component } from 'react'
import axios from 'axios'
import './Forms.css'

class addpatient extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      address: '',
      password: '',
      ssn: '',
      gender:'',
      phone: '',
      age: ''
      
      
    }
  }


setStateField = (fieldName) => e =>{
        console.log(e.target.value)
        this.setState({
            [fieldName]: e.target.value
            
        })
  }

handleDoctorSave = e =>{
        e.preventDefault();
        const { name, email, address, password,gender, ssn, phone,age} = this.state
    //call api
    axios.post(`http://localhost:5000/patient`,{  name:name, email:email, address:address, password:password, gender: gender,
    ssn:ssn, phone:phone,age:age}).then(res =>{
      console.log("done")
    })
    .catch(err=>{
      console.log(err.message)
    })
    
}

resetHandler = (e) => {
  this.setState({
    name: '',
    email: '',
    address: '',
    password: '',
    ssn: '',
    gender:'',
    phone: '',
    age: ''
  })
}
  render() {
   
    const { name, email, address, gender, ssn, phone,age } = this.state

    return (
      <>
      <div className="home">
      
      </div>
        <form className="user" method="post" enctype="multipart/form-data">
          <div className="form-group ">
          <label>Your Name</label>
              <input type="text" name='name' value={name} onChange={this.setStateField('name')} className="form-control "  placeholder="Your Name"required />
          </div>
          <div className="form-group">
          <label>email</label>
            <input type="email" name='email' value={email} onChange={this.setStateField('email')} className="form-control " placeholder="Email Address" />
          </div>
          <div className="form-group">
          <label>password</label>

            <input type="password" name='password' onChange={this.setStateField('password')} className="form-control"  placeholder="password"required />
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
          <label>gender</label>

            <input type="text" name='gender' value={gender} onChange={this.setStateField('gender')} className="form-control "  placeholder="gender"required />
          </div>
          <div className="form-group">
          <label>ID</label>
            <input type="number" name='ssn' value={ssn} onChange={this.setStateField('ssn')} className="form-control "  placeholder="ssn"required />
          </div>
          

          <input  className="btn btn-success btn-user " type="submit" value="Create Account" onClick={this.handleDoctorSave} />
          <a className="btn btn-warning btn-user ml-2 text-white" onClick={this.resetHandler}>
            Reset
                </a>
          <hr />

        </form>
      </>
    )
  }
}

export default addpatient
