import React from 'react'
import styles from './SignUp.module.css'
import { InputEmail, InputPassword, Submit, VerticalAlignmentOfInputs } from '../../../Template'

const SignUp = () => {
  return (
    <div
    className={styles.Frame}>
      <form action=""
      className={styles.Form}>
        <VerticalAlignmentOfInputs
        children={[
          <InputEmail/>,
          <InputPassword/>,
          <InputPassword/>,
          <Submit
          value={"新規登録"}/>
        ]}/>
      </form>
      SignUp
    </div>
  )
}

export default SignUp
