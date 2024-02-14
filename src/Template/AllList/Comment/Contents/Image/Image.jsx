import React from 'react'
import DisplayImage from '../../../../DisplayImage/DisplayImage'

const Image = ({imageUrl}) => {
  return (
    <div>
      <DisplayImage
      imageUrl={imageUrl}/>
    </div>
  )
}

export default Image
