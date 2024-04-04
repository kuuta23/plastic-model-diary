import React from 'react'
import styles from "./SubContents.module.css"
import { Color, HowToGetProduction, Scale, Series, Situation } from './Contents'

const SubContents = (
    {
        inputSeries,
        series,
        seriesLimit,
        inputColor,
        color,
        colorLimit,
        inputhowToGetProduction,
        howTogetProduction,
        howTogetProductionLimit,
        inputScale,
        scale,
        scaleLimit,
        inputSituation

    }) => {
  return (
    <div
    className={styles.Frame}>
        <Series
        value={series}
        onChange={inputSeries}
        limit={seriesLimit}/>
        <Color
        value={color}
        onChange={inputColor}
        limit={colorLimit}/>
        <HowToGetProduction
        value={howTogetProduction}
        onChange={inputhowToGetProduction}
        limit={howTogetProductionLimit}/>
        <Scale
        value={scale}
        onChange={inputScale}
        limit={scaleLimit}/>
        <Situation
        onChange={inputSituation}/>
    </div>
  )
}

export default SubContents
