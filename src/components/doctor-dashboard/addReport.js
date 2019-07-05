import React, { Component, Fragment } from 'react'
import Select from 'react-select'

class addReport extends Component {

    constructor(props) {
        super(props)

        this.state = {
            AppointmentId: 1,
            date: '',
            medicien: '',
            description: '',
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
            AppointmentId: '',
            date: '',
            medicien: '',
            description: '',
            selectedOption: null
        })



    }
    changeHandler = (e) => {
        this.setState(
            { [e.target.name]: [e.target.value] }
        
        )
    }
    optionChange =(selectedOption) => {
        this.setState (
            {selectedOption}
        )
    }

    render() {
        const options = [
            { value: 'Boold', label: 'Boold Test' },
            { value: 'sugar', label: 'Sugar Test' },
            { value: 'xray', label: 'X-ray Test' }
        ];
        const { AppointmentId, date,medicien, description, selectedOption } = this.state
        return (
            <Fragment>
                <h3 className=''>Appointment Num <span className='strong'>1</span> </h3>
                <hr className="sidebar-divider my-0" />
                <div className='container mt-5'>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group ">
                            AppointmentID: <input type='number' className="form-control mt-3 no-spinners" name='AppointmentId' value={AppointmentId} onChange={this.changeHandler} />
                        </div >
                        <div className="form-group ">

                            Date: <input type='date' className="form-control  mt-3 " name='date' value={date} onChange={this.changeHandler} placeholder='Name' />
                        </div >

                        <div className="form-group ">
                            Select Test :
                            <Select
                                name={selectedOption}
                                value={selectedOption}
                                onChange={this.optionChange}
                                options={options}
                                isMulti={true}
                                placeholder={'-- Plz Choose --'}
                            />
                        </div >
                        <div className="form-group ">
                          Medicine: <input type='text' className="form-control mt-3 no-spinners" name='medicien' value={medicien} onChange={this.changeHandler} placeholder="ex: panadol for 5 days"  />
                          </div >


                        <div className="form-group">
                            Note:  <textarea className="form-control mt-3" rows="3" name='description' value={description} onChange={this.changeHandler} placeholder='Report' ></textarea>
                        </div>
                        <button type='submit' className="btn btn-success mr-3" > Submite</button>
                        <button type='reset' className="btn btn-warning " onClick={this.resetHandler} > Reset</button>

                    </form>

                </div>
            </Fragment>
        )
    }
}


export default addReport
