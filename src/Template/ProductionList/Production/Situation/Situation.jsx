import React from 'react'
import styles from "./Situation.module.css"

const Situation = ({situation}) => {
    var color="gray"
    if(situation=="完成"){
        color="green"
    }else if(situation=="開発中"){
        color="blue"
    }else if(situation=="未完成"){
        color="red"
    }

  return (
    <div
    style={{"backgroundColor":color}}
    className={styles.Situation}>
      
    </div>
  )
}

export default Situation
