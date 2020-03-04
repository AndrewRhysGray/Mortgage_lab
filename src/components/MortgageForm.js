import React, {Component} from 'react'

class MortgageForm extends Component {

  constructor(props){
    super (props)
    this.state = {
      salary: ''
    }
    this.handlePrimarySalaryChange = this.handlePrimarySalaryChange.bind(this)
    this.handleMortgageSubmit = this.handleMortgageSubmit.bind(this)


  }

  handlePrimarySalaryChange(event){
this.setState({salary: event.target.value})
  }

  handleMortgageSubmit(event){
    event.preventDefault()
    const newMortgage = {
      salary: this.state.salary
    }
    this.props.onMortgageAddition(newMortgage)
  }

  render(){
    return (
      <form onSubmit={this.handleMortgageSubmit}>
      <input
      type ='text'
      placeholder='Primary salary'
      value={this.state.salary}
      onChange = {this.handlePrimarySalaryChange}
      />
      <input
      type="submit"
      value="Calculate Mortgage"
      />
      </form>

    )
  }

}


export default MortgageForm
