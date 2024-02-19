import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import signOut from '../../../reducks/user/operations/signOut';
import { useDispatch } from 'react-redux';
import { myProductionsResetAction } from '../../../reducks/myProductions/actions';
import { profileResetAction } from '../../../reducks/profile/actions';

const SignOut = () => {
    const navigetion =useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(signOut())
      dispatch(myProductionsResetAction())
      dispatch(profileResetAction())
      navigetion("/")
    },[])
    
    return(<></>)
}

export default SignOut
