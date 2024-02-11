import React, { useState } from 'react'

const InputImage = ({onChange}) => {
  return (
    <div>
      <label htmlFor="">
      <input
      type="file" 
      accept='image/*,.jpg'
      src="" alt=""
      onChange={onChange}/>
      </label>
      
    </div>
  )
}

export default InputImage
