import React from 'react'
import styles from './SignIn.module.css'
import { InputEmail, InputPassword, Submit, VerticalAlignmentOfInputs } from '../../../Template'

const SignIn = () => {
  return (
    <div
    className={styles.Frame}>
      <form action=""
      className={styles.Form}>
        <VerticalAlignmentOfInputs
        children={[
          <InputEmail/>,
          <InputPassword/>,
          <Submit
          value={"ログイン"}/>
        ]}/>
      </form>
    </div>
  )
}

export default SignIn
