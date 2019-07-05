import React, { Component } from 'react'
import axios from 'axios'
import './Forms.css'

class AddMedicine extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          name: "",
          cost: "",
          Quantity: "",
          production_date: "",
          exp_date: ''
        
        }
      }
    
    
      submitHandler = (e) => {
        e.preventDefault();
        const newData = this.state
        console.log(newData)
       axios.post('http://localhost:5000/medicines',newData).then(res=>{

       }).catch(err=>{
           console.log(err)

       })
        console.table(this.state)
    
      }
      resetHandler = (e) => {
    
    
        this.setState({
          ...this.state,
          name: '',
          cost: '',
          Quantity: '',
          production_date: '',
          exp_date: ''
        
          
        
        })
    
    
    
      }
      changeHandler = (e) => {
        this.setState(
          { [e.target.name]: [e.target.value] }
    
        )
      }
     
      render() {
       
        const { name, cost, Quantity, production_date,exp_date} = this.state
    
        return (
          <>
            <form className="user" onSubmit={this.submitHandler}>
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <label>Medicine Name</label>
                  <input type="text" name='name' value={name} onChange={this.changeHandler} className="form-control form-control-user" id="examplename" placeholder="Medicine Name" />
                </div>
                <div className="col-sm-6">
                <label>Cost</label>
                  <input type="number" name='cost' value={cost} onChange={this.changeHandler} className="form-control form-control-user" id="examplecost" placeholder="Cost" />
                </div>
              </div>
              <div className="form-group">
              <label>Quantity</label>
                <input type="number" name='Quantity' value={Quantity} onChange={this.changeHandler} className="form-control form-control-user" id="exampleInputQuantity" placeholder="Quantity" />
              </div>
              <div className="form-group">
                  <label>production_date</label>
                <input type="date" name='production_date'  value={production_date} onChange={this.changeHandler} className="form-control form-control-user" id="exampleInputQuantity" placeholder="production_date" />
              </div>
              <div className="form-group">
              <label>exp_date</label>
                <input type="date" name='exp_date' value={exp_date} onChange={this.changeHandler} className="form-control form-control-user" id="exampleInputQuantity" placeholder="exp_date" />
              </div>
            
            
             
              
    
             
              <button className="btn btn-success btn-user ">
                Create Account
                    </button>
              <button className="btn btn-warning btn-user ml-2" onClick={this.resetHandler}>
                Reset
                    </button>
              <hr />
    
            </form>
          </>
        )
      }
    }

export default AddMedicine

