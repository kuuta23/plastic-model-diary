import React from 'react'
import { DisplayProductionName } from '../../../../Template'
import { useSelector } from 'react-redux'

const ProductionName = () => {
  const production=useSelector(state=>state.production)
  return (
    <div>
      <DisplayProductionName
      name={production.productionName}
      to=''/>
    </div>
  )
}

export default ProductionName
