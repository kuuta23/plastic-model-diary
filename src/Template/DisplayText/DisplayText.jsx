import React from 'react'
import styles from "./DisplayText.module.css"

const DisplayText = ({text}) => {
  if(text){
    return (
      <div
      className={styles.Frame}>
        {text}
      </div>
    )
  }

}

export default DisplayText
