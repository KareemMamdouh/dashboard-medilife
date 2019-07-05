import React, { Component } from 'react'
import Select from 'react-select'

 class createAppointment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: '',
      selectedOption: null
    }
  }


  submitHandler = (e) => {
    e.preventDefault();

    console.table(this.state)

  }
  resetHandler = (e) => {


    this.setState({
      ...this.state,
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    
      selectedOption: null
    })



  }
  changeHandler = (e) => {
    this.setState(
      { [e.target.name]: [e.target.value] }

    )
  }
  optionChange = (selectedOption) => {
    this.setState(
    {selectedOption}
   
    )
    console.log(selectedOption.name)
  }
  render() {
    const { firstName, lastName, email, message, selectedOption } = this.state
    const depats = [
      { label: "depart1", value: 1 },
      { label: "depart2", value: 2 },
      { label: "depart3", value: 3 },
      { label: "depart4", value: 4 },
      { label: "depart5", value: 5 },
      { label: "depart6", value: 6 },
    ];
    const doctors = [
      { label: "Dr Mohamed", value: 1 },
      { label: "Dr Alaa", value: 2 },
      { label: "Dr khaled", value: 3 },
      { label: "Dr Ahmed", value: 4 },
      { label: "Dr Tariq", value: 5 },
      { label: "Dr Kareem", value: 6 },
    ];
    const date = [
      { label: "Friday (3/5/2019)", value: 1 },
      { label: "Saturday ( Off )", value: 2 },
      { label: "Sunday (5/5/2019)", value: 3 },
    
    ];
    const time = [
      { label: "09:00 - 09:30 pm", value: 1 },
      { label: "10:00 - 10:30 pm", value: 2 },
      { label: "11:00 - 11:30 pm", value: 3 },
    
    ];
    return (
      <>
          <form className="user" onSubmit={this.submitHandler}>
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" className="form-control form-control-user" name='firstName' value={firstName} onChange={this.changeHandler} id="exampleFirstName" placeholder="First Name"/>
                  </div>
                  <div className="col-sm-6">
                    <input type="text" className="form-control form-control-user"  name='lastName' value={lastName} onChange={this.changeHandler}  id="exampleLastName" placeholder="Last Name"/>
                  </div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control form-control-user"  name='email' value={email} onChange={this.changeHandler} id="exampleInputEmail" placeholder="Email Address"/>
                </div>
               
                <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                <Select
              className=" "
              name= 'depats'
              options={depats}
              isMulti={false}
              placeholder={'-- Departments --'}
              />
              </div>
                <div className="col-sm-6 mb-3 mb-sm-0">
                <Select
              className=" "
              name= 'doctors'
              options={doctors}
              isMulti={false}
              placeholder={'-- doctors --'}
            />
                </div>
              
                
                </div>
               <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                <Select
              className=" "
              options={date}
              isMulti={false}
              placeholder={'Date '}
              />
              </div>
                <div className="col-sm-6 mb-3 mb-sm-0">
                <Select
              className=" "
              options={time}
              isMulti={false}
              placeholder={'Time'}
            />
                </div>
              
                
                </div> 
                <div className="form-group">
                  <textarea type="text" name='message' value={message} onChange={this.changeHandler} className="form-control form-control-user pl-4" id="exampleInputTextarea" placeholder="Message"/>
                </div>
               
               
                <hr/>
                <button className="btn btn-success btn-user ">
            Make Appointment
                </button>
          <button className="btn btn-warning btn-user ml-2" onClick={this.resetHandler}>
            Reset
                </button>
              </form>
      </>
    )
  }
}

export default createAppointment
