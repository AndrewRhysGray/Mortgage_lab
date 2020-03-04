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
  const intMortgage = parseInt(mortgage.salary) + parseInt(mortgage.secondarySalary)
  const maximumAffordableProperty = intMortgage * 3
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
