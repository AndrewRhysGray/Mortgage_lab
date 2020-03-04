import React, { Fragment } from 'react'
import Mortgage from './Mortgage'



function MortgageList ({mortgages}){
const mortgageComponents = mortgages.map(mortgage => {
  return (
    <Mortgage
    salary={mortgage.salary}
    propertyValue={mortgage.propertyValue}
    key={mortgage.id}
  >
  {mortgage.salary}
  </Mortgage>

  )
})



  return (
    <Fragment>
    <h1> Maximum values displayed: </h1>
    <ul className="mortgage-list">
    {mortgageComponents}
    </ul>
    </Fragment>
  )
}






export default MortgageList
