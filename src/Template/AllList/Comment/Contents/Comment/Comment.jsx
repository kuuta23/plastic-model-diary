import React from 'react'
import DisplayText from '../../../../DisplayText/DisplayText'

const Comment = ({comment}) => {
  return (
    <div>
      <DisplayText
      text={comment}/>
    </div>
  )
}

export default Comment
