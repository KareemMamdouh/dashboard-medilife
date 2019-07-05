import React, { Component } from 'react'

class login extends Component {

 constructor(props) {
     super(props)
 
     this.state = {
          email:"",
          password:""
     }
 }
 submitHandler = e=>{
     e.preventDefault()
     console.table(this.state)
 }
 
 changeHandler = (e) => {
    this.setState(
      { [e.target.name]: [e.target.value] }

    )
  }
    render() {
        const {email,password} = this.state
        return (
            <>
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-xl-10 col-lg-12 col-md-9">

                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">

                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image">
                                            <img className="" src="bg-login.jpg" alt="bg"/>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                </div>
                                                <form className="user" onSubmit={this.submitHandler}>
                                                    <div className="form-group">
                                                        <input type="email" name="email" value={email}  onChange={this.changeHandler} className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" name="password" value={password}  onChange={this.changeHandler} className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                                    </div>
                                                   
                                                    <button type="submit" className="btn btn-primary btn-user btn-block">
                                                        Login
                                                    </button>
                                                    <hr />
                                                </form>
                                                <div className="text-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </>
        )
    }
}

export default login
