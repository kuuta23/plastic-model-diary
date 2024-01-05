import React, { useCallback, useState } from 'react'
import styles from './SignIn.module.css'
import { InputEmail, InputPassword, Submit, VerticalAlignmentOfInputs } from '../../../Template'
import { signInAnonymously } from 'firebase/auth';
import signIn from '../../../reducks/user/operations/signIn';
import { useDispatch } from 'react-redux';

const SignIn = () => {
  const [email,setEmail]=useState(""),
        [password,setPassword]=useState("");
  const dispatch=useDispatch();
  const inputEmail=useCallback((event)=>{
    setEmail(event.target.value);
  },[setEmail]);
  const inputPassword=useCallback((event)=>{
    setPassword(event.target.value)
  },[setPassword]);
  const onSubmit=(event)=>{
    event.preventDefault();
    dispatch(signIn({email:email,password:password}))
  }
  return (
    <div
    className={styles.Frame}>
      <form action=""
      className={styles.Form}>
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
