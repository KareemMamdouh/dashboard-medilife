import React, { Component } from 'react'
import $ from 'jquery/dist/jquery'
import {Link} from 'react-router-dom'
import axios from 'axios'

 class MedicineStore extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              medicines:[]
         }
     }
     componentDidMount(){
         axios.get('http://localhost:5000/medicines').then(res=>{
            
            this.setState({
                medicines:res.data
               })
         }).catch(err=>{
             console.log(err)
         })
        
        $('#dataTable').DataTable(); 
     }
     
    render() {
        return (
            <>
                 <div className="table-responsive mt-4">
                    <table className="table table-bordered" id="data-table" width="100%" cellSpacing="0">
                         <thead>
                          <tr>
                                <th>Medicine.No</th>
                                <th>Medicine Name</th>
                                <th>Cost</th>
                                <th>Quantity </th>
                                <th>production_date </th>
                                <th> expired_date </th>
                                <th>Action</th>

                            </tr> 
                        </thead> 
                        <tbody>
                       {
                            this.state.medicines.map((x,i)=>{
                                return (
                                    <tr key={i}>
                                <td>{i === 0 ? i+1 : i}</td>
                            <td>{x.name}</td>
                            <td>{x.cost}</td>
                            <td>{x.Quantity}</td>
                            <td>{new Date(x.production_date ).toDateString()}</td>
                            <td>{new Date(x.exp_date).toDateString()}</td>
                          
                             </tr>
                                )
                            })
                        } 
                           
                        </tbody> 
                    </table>
                </div> 
            </>
        )
    }
}

export default MedicineStore
