import React from 'react'
import { useSelector } from 'react-redux'
import { DisplayText } from '../../../../Template'

const Comment = () => {
    const production=useSelector(state=>state.production)
  return (
    <div>
      <DisplayText
      text={production.comment}/>
    </div>
  )
}

export default Comment
