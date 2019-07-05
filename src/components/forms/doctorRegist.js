import React, { Component } from 'react'
import axios from 'axios'
import './Forms.css'

class DoctorRegist extends Component {
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
      age: '',
      job_title: '',
      qualifcation: '',
      cost: '',
      department_id:'',
      avrg_time: '',
      // image: null,
      data: []
      // selectedOption: null
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/departments')
      .then(res => {
          this.setState({
            data: res.data
          })
        })
        .catch(error => {
            console.log(error);
        });
    }

setStateField = (fieldName) => e =>{
        console.log(e.target.value)
        this.setState({
            [fieldName]: e.target.value
            
        })
  }
  // setStateFile= (fileName) => e =>{
  //   this.setState({
  //     [fileName]: e.target.files[0],
  //     loaded: 0,
  //   })
  // }
//   setStatefiles = (fileName) => e =>{
//     console.log(e.target.files[0])
//     this.setState({
//         [fileName]: e.target.files[0]
        
//     })
// }

handleDoctorSave = e =>{
        e.preventDefault();
        const { name, email, address, password,gender, ssn, phone,age,job_title,cost,department_id,avrg_time,qualifcation,image} = this.state
    //call api
    // const df = new FormData()
    // df.append('image', this.state.image)
    axios.post(`http://localhost:5000/doctor`,{  name:name, email:email, address:address, password:password, gender: gender,
    ssn:ssn, phone:phone,age:age,job_title:job_title,cost:cost,department_id:department_id,avrg_time:avrg_time,qualifcation:qualifcation }).then(res =>{
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
    age: '',
    job_title: '',
    qualifcation: '',
    cost: '',
    department_id:'',
    avrg_time: '',
    // image:null
  })
}

  // changeHandler = (e) => {
  //   this.setState(
  //     { [e.target.name]: [e.target.value] }

  //   )
  // }





  render() {
   
    const { name, email, address, gender, ssn, phone,age,job_title,cost,department_id,avrg_time,qualifcation  } = this.state

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
          {/* <div className="form-group">
            <input type="file" name='image'  onChange={this.setStateFile('image')} className="form-control " />
          </div> */}
          
          <div className="form-group">
          <label>choose department</label>
          <select className="form-control " name='department_id' value={department_id} onChange={this.setStateField('department_id')} required>
          <option>choose department</option>
          {this.state.data.map((x, i) => {
                      return(<option key={i} value={x._id} >{x.name}</option>)})
          }
          </select>
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

export default DoctorRegist
