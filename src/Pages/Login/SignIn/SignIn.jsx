import React, { useCallback, useState } from 'react'
import styles from './SignIn.module.css'
import { InputEmail, InputPassword, Submit, VerticalAlignmentOfInputs } from '../../../Template'

const SignIn = () => {
  const [email,setEmail]=useState(""),
        [password,setPassword]=useState("");
  const inputEmail=useCallback((event)=>{
    setEmail(event.target.value);
  },[setEmail]);
  const inputPassword=useCallback((event)=>{
    setPassword(event.target.value)
  },[setPassword]);
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
