import React, { Component } from 'react'
import Select from 'react-select'
import chroma from 'chroma-js'
import './Forms.css'


class createTest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            PatientName: '',
            notes: '',
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
            PatientName: '',
            notes: '',
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
            { selectedOption }
        )
    }






    render() {
        const options = [
            { label: "Boold Test", value: 1, color: 'Red' },
            { label: "Sugar Test", value: 2, color: 'Green' },
            { label: "X-ray Test", value: 3, color: 'Blue' },

        ];

        const { PatientName, notes, selectedOption } = this.state
        const colourStyles = {
            control: styles => ({ ...styles, backgroundColor: 'white' }),
            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                const color = chroma(data.color);
                return {
                  ...styles,
                  backgroundColor: isDisabled
                    ? null
                    : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
                  color: isDisabled
                    ? '#ccc'
                    : isSelected
                      ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
                      : data.color,
                  cursor: isDisabled ? 'not-allowed' : 'default',
                };
              },
            multiValue: (styles, { data }) => {
                const color = chroma(data.color);
                return {
                    ...styles,
                    backgroundColor: color.alpha(0.1).css(),
                };
            },
            multiValueLabel: (styles, { options }) => ({
                ...styles,
                color: options.color,
            }),
            multiValueRemove: (styles, { options }) => ({
                ...styles,
                color: options.color,
                ':hover': {
                    backgroundColor: 'yellow',
                    color: 'red',
                },
            }),
        };
        
        return (
            <>
                <form className="user" onSubmit={this.submitHandler}>


                    <div className="form-group">
                        <input type="text" name='PatientName' value={PatientName} onChange={this.changeHandler} className="form-control form-control-user" id="exampleInputName" placeholder="Patient Name" />
                    </div>

                    <div className="form-group">

                        <Select
                           
                            name={selectedOption}
                            value={selectedOption}
                            onChange={this.optionChange}
                            options={options}
                            isMulti={true}
                            styles={colourStyles}

                            placeholder={'-- Select Test --'}
                        />
                    </div>

                    <div className="form-group">
                        <textarea type="text" name={'notes'} value={notes} onChange={this.changeHandler} className="form-control form-control-user" id="exampleInputTextarea" placeholder="Notes" />
                    </div>

                    <button className="btn btn-success btn-user ">
                        Create Test
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

export default createTest
