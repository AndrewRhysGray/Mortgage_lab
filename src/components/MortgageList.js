import React, { Fragment } from 'react'
import Mortgage from './Mortgage'



function MortgageList ({mortgages}){
const mortgageComponents = mortgages.map(mortgage => {
  return (
    <Mortgage
    salary={mortgage.salary}
    secondarySalary={mortgage.secondarySalary}
    deposit={mortgage.deposit}
    otherCommitments={mortgage.otherCommitments}
    propertyValue={mortgage.propertyValue}
    interestRate={mortgage.interestRate}
    amortization={mortgage.amortization}
    key={mortgage.id}
  >
  {mortgage.salary}
  // {mortgage.secondarySalary}
  </Mortgage>

  )
})



  return (
    <Fragment>
    <h1> Maximum combined value: </h1>
    <ul className="mortgage-list">
    {mortgageComponents}
    </ul>
    </Fragment>
  )
}






export default MortgageList
