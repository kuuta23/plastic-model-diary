import React from 'react'
import { InputTextarea } from '../../../../../Template'
import { useSelector } from 'react-redux'

const Comment = ({limit,onChange,value,overValue,noValue}) => {
  const recordError=useSelector(state=>state.recordError)
  return (
    <div>
      <InputTextarea
      limit={limit}
      value={value}
      onChange={onChange}
      overValue={recordError.commentOverValue}
      noValue={recordError.commentNoValue}/>
    </div>
  )
}

export default Comment
