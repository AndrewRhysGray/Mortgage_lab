import React, {Component} from 'react'
import MortgageList from '../components/MortgageList'

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
      <MortgageList mortgages={this.state.mortgages}/>
      </article>
    )
  }

}





export default MortgageBox
