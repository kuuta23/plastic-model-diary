import React from 'react'
import { InputTextarea } from '../../../../../Template'
import { useSelector } from 'react-redux'

const Comment = ({limit,onChange,value,overValue,noValue}) => {
  return (
    <div>
      <InputTextarea
      limit={limit}
      value={value}
      onChange={onChange}
      overValue={true}
      noValue={true}/>
    </div>
  )
}

export default Comment
