import React, { useCallback, useState } from 'react'
import styles from './SignUp.module.css'
import { InputEmail, InputPassword, Submit, VerticalAlignmentOfInputs } from '../../../Template'

const SignUp = () => {
  const [email,setEmail]=useState(""),
        [password,setPassword]=useState(""),
        [checkPassword,setCheckPassword]=useState("");
  const inputEmail=useCallback((event)=>{
    setEmail(event.target.value);
  },[setEmail]);
  const inputPassword=useCallback((event)=>{
    setPassword(event.target.value)
  },[setPassword]);
  const inputCheckPassword=useCallback((event)=>{
    setCheckPassword(event.target.value)
  },[setCheckPassword])
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
