import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import signOut from '../../../reducks/user/operations/signOut';
import { useDispatch } from 'react-redux';

const SignOut = () => {
    const navigetion =useNavigate();
    const dispatch=useDispatch();
    console.log(true);
    useEffect(()=>{
      dispatch(signOut())
      navigetion("/")
    },[])
    
    return(<></>)
}

export default SignOut
