import React, {Component} from 'react'

class MortgageForm extends Component {

  constructor(props){
    super (props)
    this.state = {
      salary: ''
    }
    this.handlePrimarySalaryChange = this.handlePrimarySalaryChange.bind(this)
  }

  handlePrimarySalaryChange(event){
this.setState({salary: event.target.value})
  }

  render(){
    return (
      <form>
      <input
      type ='text'
      placeholder='Primary salary'
      value={this.state.salary}
      onChange = {this.handlePrimarySalaryChange}
      />
      </form>

    )
  }

}


export default MortgageForm
