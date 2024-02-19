import React, { useEffect, useState } from 'react'
import styles from "./SearchBox.module.css"
import { Color, HowToGet, Scale, Series } from './SearchContents'

const SearchBox = (
  {
    inputColor,
    inputScale,
    inputSeries,
    inputHowToGet
  }
) => {
  return (
    <div
    className={styles.Frame}
    >
      <div
      className={styles.Color}>
        <Color
        onChange={inputColor}/>
      </div>
      <div
      className={styles.Scale}>
        <Scale
        onChange={inputScale}/>
      </div>
      <div
      className={styles.Series}>
        <Series
        onChange={inputSeries}/>
      </div>
      <div
      className={styles.HowToGet}>
        <HowToGet
        onChange={inputHowToGet}/>
      </div>
    </div>
  )
}

export default SearchBox
