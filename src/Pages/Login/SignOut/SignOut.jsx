import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import signOut from '../../../reducks/user/operations/signOut';
import { useDispatch } from 'react-redux';
import { profileResetAction } from '../../../reducks/profile/actions';
import { productionsResetAction } from '../../../reducks/productions/actions';

const SignOut = () => {
    const navigetion =useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(signOut())
      dispatch(productionsResetAction())
      dispatch(profileResetAction())
      navigetion("/")
    },[])
    
    return(<></>)
}

export default SignOut
