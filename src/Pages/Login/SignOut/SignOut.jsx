import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignOut = () => {
    const navigetion =useNavigate();
    useEffect(()=>{
        navigetion("/")
    },[])
  return (
    <div>
      
    </div>
  )
}

export default SignOut
