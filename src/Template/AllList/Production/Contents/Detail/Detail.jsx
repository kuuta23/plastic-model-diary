import React from 'react'
import styles from "./Detail.module.css"
import { Color, HowToGet, Scale, Series } from './Contents'

const Detail = () => {
  return (
    <div
    className={styles.Frame}>
      <Color/>
      <HowToGet/>
      <Scale/>
      <Series/>
    </div>
  )
}

export default Detail
