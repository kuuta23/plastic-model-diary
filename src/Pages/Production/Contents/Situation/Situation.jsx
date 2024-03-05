import React from 'react'
import styles from "./Situation.module.css"
import { useSelector } from 'react-redux'

const Situation = () => {
    const production=useSelector(state=>state.production)
    var color="gray"
    if(production.situation=="完成"){
        color="green"
    }else if(production.situation=="開発中"){
        color="blue"
    }else if(production.situation=="未完成"){
        color="red"
    }
  return (
    <div
    className={styles.Situation}
    style={{'backgroundColor':color}}>
      
    </div>
  )
}

export default Situation
