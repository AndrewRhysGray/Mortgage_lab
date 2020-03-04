import React, {Component} from 'react'
import MortgageList from '../components/MortgageList'
import MortgageForm from '../components/MortgageForm'

class MortgageBox extends Component{

constructor(props) {
  super (props)
  this.state = {
    mortgages: [
      {
        id: 1,
        salary: 500
      }
    ]
  }
  this.handleMortgageAddition =  this.handleMortgageAddition.bind(this)

}

handleMortgageCalculation(mortgage){
  const intMortgage = parseInt(mortgage.salary)
  const maximumAffordableProperty = intMortgage * 3
  return maximumAffordableProperty
  // return maximumAffordableProperty
}


handleMortgageAddition(mortgageToAdd){
const maxPropertyValue = this.handleMortgageCalculation(mortgageToAdd)
console.log(maxPropertyValue);
  mortgageToAdd.id = Date.now()
  mortgageToAdd.salary = maxPropertyValue
  const updatedMortgages = [...this.state.mortgages, mortgageToAdd]

  this.setState({ mortgages: updatedMortgages})
}


  render (){
    return (
      <article>
      <h1> Test! </h1>
      <MortgageForm
      onMortgageAddition = {this.handleMortgageAddition}/>
      <MortgageList mortgages={this.state.mortgages}/>
      </article>
    )
  }

}





export default MortgageBox
