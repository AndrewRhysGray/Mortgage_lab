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

handleMortgageAddition(mortgageToAdd){
  mortgageToAdd.id = Date.now()
  const updatedMortgages = [...this.state.mortgage, mortgageToAdd]

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
