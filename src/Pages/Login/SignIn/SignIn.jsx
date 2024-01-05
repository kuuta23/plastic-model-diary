import React, { useCallback, useState } from 'react'
import styles from './SignIn.module.css'
import { InputEmail, InputPassword, Submit, VerticalAlignmentOfInputs } from '../../../Template'
import { signInAnonymously } from 'firebase/auth';
import signIn from '../../../reducks/user/operations/signIn';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email,setEmail]=useState(""),
        [password,setPassword]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const selector =useSelector(state=>state);
  const userError=selector.UserError;
  const inputEmail=useCallback((event)=>{
    setEmail(event.target.value);
  },[setEmail]);
  const inputPassword=useCallback((event)=>{
    setPassword(event.target.value)
  },[setPassword]);
  const onSubmit=(event)=>{
    event.preventDefault();
    dispatch(signIn({email:email,password:password}))
    if(!userError.userError){navigate("/")}
  }
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
