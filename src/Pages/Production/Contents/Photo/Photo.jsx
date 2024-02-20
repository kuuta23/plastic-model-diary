import React from 'react'
import { DisplayImage } from '../../../../Template'
import { useSelector } from 'react-redux'

const Photo = () => {
    const production=useSelector(state=>state.production)
  return (
    <div>
      <DisplayImage
      imageUrl={production.photoUrl}/>
    </div>
  )
}

export default Photo
