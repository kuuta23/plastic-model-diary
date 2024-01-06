import React from 'react'
import styles from "./Home.module.css"
import { ProductionList } from '../../Template'

const Home = () => {
    const list=[{
        name:"ゼータガンダム"
    }]
  return (
    <div
    className={styles.Frame}>
      <ProductionList
      productionList={list}/>
    </div>
  )
}

export default Home
