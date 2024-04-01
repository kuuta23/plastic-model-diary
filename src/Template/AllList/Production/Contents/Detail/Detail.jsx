import React from 'react'
import styles from "./Detail.module.css"
import { Color, HowToGet, Scale, Series } from './Contents'

const Detail = ({
  color="",
  howToGet="",
  scale="",
  series=""
}) => {
  if(color||howToGet||scale||series){
    return (
      <div
      className={styles.Frame}>
        <Color
        color={color}/>
        <HowToGet
        howToGetProduction={howToGet}/>
        <Scale
        scale={scale}/>
        <Series
        series={series}/>
      </div>
    )
  }

}

export default Detail
