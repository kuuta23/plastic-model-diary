import React from 'react'
import styles from "./Detail.module.css"
import { Color, HowToGet, Scale, Series } from './Contents'

const Detail = ({value}) => {
  return (
    <div
    className={styles.Frame}>
      <Color
      color={value.color}/>
      <HowToGet
      howToGetProduction={value.howToGet}/>
      <Scale
      scale={value.scale}/>
      <Series
      series={value.series}/>
    </div>
  )
}

export default Detail
