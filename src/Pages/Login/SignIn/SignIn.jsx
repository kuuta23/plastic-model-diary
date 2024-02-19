import React, { useCallback, useEffect, useState } from 'react'
import styles from './SignIn.module.css'
import { InputEmail, InputPassword, Submit, VerticalAlignmentOfInputs } from '../../../Template'
import { signInAnonymously } from 'firebase/auth';
import signIn from '../../../reducks/user/operations/signIn';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadingAction, resetLoadingAction } from '../../../reducks/loading/actions';
import { profileAction } from '../../../reducks/profile/actions';
import selectorProfile from '../../../reducks/profile/operations/selectorProfile';
import selectorMyProductions from '../../../reducks/myProductions/operations/selectorMyProductions';

const SignIn = () => {
  const [email,setEmail]=useState(""),
        [password,setPassword]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const userError =useSelector(state=>state.userError);
  const user = useSelector(state=>state.user)
  const inputEmail=useCallback((event)=>{
    setEmail(event.target.value);
  },[setEmail]);
  const inputPassword=useCallback((event)=>{
    setPassword(event.target.value)
  },[setPassword]);
  const onSubmit=async(event)=>{
    event.preventDefault();
    await dispatch(loadingAction())
    await dispatch(signIn({email:email,password:password}))
    dispatch(selectorMyProductions())
    await dispatch(selectorProfile(user.uid))
  }
  useEffect(()=>{
    if(user.isSignedIn){navigate("/")}
  },[])
  return (
    <div
    className={styles.Frame}>
      <form
      className={styles.Form}
      onSubmit={onSubmit}>
        <VerticalAlignmentOfInputs
        children={[
          <InputEmail
          onChange={inputEmail}/>,
          <InputPassword
          onChange={inputPassword}/>,
          <Submit
          value={"ログイン"}/>
        ]}/>
      </form>
    </div>
  )
}

export default SignIn
