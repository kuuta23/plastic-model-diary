import React from 'react'
import styles from "./Situation.module.css"
import { InputRadio } from '../../../../../../../Template'

const Situation = ({onChange}) => {
  return (
    <div
    className={styles.Frame}>
      <div>
        状態
      </div>
      <InputRadio
      name='situation'
      onChange={onChange}
      radio={[
        {
          value:"完成",
          color:"green",
          checked:"checked"
        },
        {
          value:"開発中",
          color:"blue"
        },
        {
          value:"未完成",
          color:"red",
        }]}/>
    </div>
  )
}

export default Situation
