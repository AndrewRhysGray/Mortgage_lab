import React, {Component} from 'react'
import MortgageList from '../components/MortgageList'
import MortgageForm from '../components/MortgageForm'

class MortgageBox extends Component{

constructor(props) {
  super (props)
  this.state = {
    mortgages: [

    ]
  }
  this.handleMortgageAddition =  this.handleMortgageAddition.bind(this)

}

handleMortgageCalculation(mortgage){
  let intMortgage = parseInt(mortgage.salary) + parseInt(mortgage.secondarySalary) - parseInt(mortgage.otherCommitments)
  const annualInterestRate = (parseInt(mortgage.interestRate) / 100)
  for (let year = 0; year <= parseInt(mortgage.amortization); year++){
    let annualInterestPayment = intMortgage * annualInterestRate
    intMortgage -= annualInterestPayment
  }
  let maximumAffordableProperty = intMortgage * 3
    maximumAffordableProperty += parseInt(mortgage.deposit)
  return maximumAffordableProperty
  // return maximumAffordableProperty
}


handleMortgageAddition(mortgageToAdd){
const maxPropertyValue = this.handleMortgageCalculation(mortgageToAdd)
console.log(maxPropertyValue);
  mortgageToAdd.id = Date.now()
  mortgageToAdd.propertyValue = maxPropertyValue
  const updatedMortgages = [...this.state.mortgages, mortgageToAdd]

  this.setState({ mortgages: updatedMortgages})
}


  render (){
    return (
      <article>
      <h1> Mortgage Calculator </h1>
      <h5> Please enter primary and secondary salaries </h5>
      <MortgageForm
      onMortgageAddition = {this.handleMortgageAddition}/>
      <MortgageList mortgages={this.state.mortgages}/>
      </article>
    )
  }

}





export default MortgageBox
