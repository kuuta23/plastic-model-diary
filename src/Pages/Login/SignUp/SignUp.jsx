import React, { useCallback, useState } from 'react'
import styles from './SignUp.module.css'
import { InputEmail, InputPassword, Submit, VerticalAlignmentOfInputs } from '../../../Template'
import { useDispatch, useSelector } from 'react-redux';
import signUp from '../../../reducks/user/operations/signUp';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email,setEmail]=useState(""),
        [password,setPassword]=useState(""),
        [checkPassword,setCheckPassword]=useState("");
  const dispatch=useDispatch();
  const selector=useSelector(state=>state)
  const navigate=useNavigate();
  const userError=selector.UserError;
  const inputEmail=useCallback((event)=>{
    setEmail(event.target.value);
  },[setEmail]);
  const inputPassword=useCallback((event)=>{
    setPassword(event.target.value)
  },[setPassword]);
  const inputCheckPassword=useCallback((event)=>{
    setCheckPassword(event.target.value)
  },[setCheckPassword])
  const onSubmit=(event)=>{
    event.preventDefault();
    dispatch(signUp({
      password:password,
      checkPassword:checkPassword,
      email:email
    }))
    if(!userError.userError){navigate("/")}

  }
  return (
    <div
    className={styles.Frame}>
      <form action=""
      className={styles.Form}
      onSubmit={onSubmit}>
        <VerticalAlignmentOfInputs
        children={[
          <InputEmail
          onChange={inputEmail}/>,
          <InputPassword
          onChange={inputPassword}/>,
          <InputPassword
          onChange={inputCheckPassword}/>,
          <Submit
          value={"新規登録"}/>
        ]}/>
      </form>
    </div>
  )
}

export default SignUp
