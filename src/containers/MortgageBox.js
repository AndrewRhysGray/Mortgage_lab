import React, {Component} from 'react'
import MortgageList from '../components/MortgageList'
import MortgageForm from '../components/MortgageForm'

class MortgageBox extends Component{

constructor(props) {
  super (props)
  this.state = {
    mortgages: []
  }
}



  render (){
    return (
      <article>
      <h1> Test! </h1>
      <MortgageForm />
      <MortgageList mortgages={this.state.mortgages}/>
      </article>
    )
  }

}





export default MortgageBox
