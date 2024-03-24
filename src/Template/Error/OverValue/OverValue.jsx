import React from 'react'
import { useSelector } from 'react-redux'

const OverValue = () => {
    const error=useSelector(state=>state.error)
  return (
    <div>
      制限数を超えました。
    </div>
  )
}

export default OverValue
