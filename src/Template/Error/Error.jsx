import React from 'react'
import NoValue from './NoValue/NoValue'
import OverValue from './OverValue/OverValue'
import styles from "./Error.module.css"

const Error = ({noValue=false,overValue=false}) => {
  return (
    <div
    className={styles.Frame}>
      {noValue?(<NoValue/>):<></>}
      {overValue?(<OverValue/>):<></>}
    </div>
  )
}

export default Error
