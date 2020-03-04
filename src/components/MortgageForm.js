import React, {Component} from 'react'

class MortgageForm extends Component {

  constructor(props){
    super (props)
    this.state = {
      salary: '',
      secondarySalary: '0',
      deposit: '',
      otherCommitments: '',
      interestRate: '',
      amortization: ''
    }
    this.handlePrimarySalaryChange = this.handlePrimarySalaryChange.bind(this)
    this.handleSecondarySalaryChange = this.handleSecondarySalaryChange.bind(this)
    this.handleMortgageSubmit = this.handleMortgageSubmit.bind(this)
    this.handleDeposit = this.handleDeposit.bind(this)
    this.handleOtherCommitments = this.handleOtherCommitments.bind(this)
    this.handleInterestRate = this.handleInterestRate.bind(this)
    this.handleAmortization = this.handleAmortization.bind(this)


  }

  handlePrimarySalaryChange(event){
this.setState({salary: event.target.value})
  }

  handleSecondarySalaryChange(event){

    this.setState({secondarySalary: event.target.value})
  }

  handleDeposit(event){
    this.setState({deposit: event.target.value})
  }
handleOtherCommitments(event){
  this.setState({otherCommitments: event.target.value})
}

handleInterestRate(event){
  this.setState({ interestRate: event.target.value })
}
handleAmortization(event){
  this.setState({ amortization: event.target.value})
}
  handleMortgageSubmit(event){
    event.preventDefault()
    const newMortgage = {
      salary: this.state.salary,
      secondarySalary: this.state.secondarySalary,
      deposit: this.state.deposit,
      otherCommitments: this.state.otherCommitments,
      interestRate: this.state.interestRate,
      amortization: this.state.amortization

    }
    this.props.onMortgageAddition(newMortgage)
  }

  render(){
    return (
      <form onSubmit={this.handleMortgageSubmit}>
      <input
      type ='number'
      placeholder='Primary salary'
      value={this.state.salary}
      onChange = {this.handlePrimarySalaryChange}
      />
      <input
      type ='number'
      placeholder='Secondary salary'
      value={this.state.secondarySalary}
      onChange = {this.handleSecondarySalaryChange}
      />
      <input
      type ='number'
      placeholder='deposit'
      value={this.state.deposit}
      onChange = {this.handleDeposit}
      />
      <input
      type ='number'
      placeholder='otherCommitments'
      value={this.state.otherCommitments}
      onChange = {this.handleOtherCommitments}
      />
      <input
      type ='number'
      placeholder='interestRate'
      value={this.state.interestRate}
      onChange = {this.handleInterestRate}
      />
      <input
      type ='number'
      placeholder='amortization'
      value={this.state.amortization}
      onChange = {this.handleAmortization}
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
