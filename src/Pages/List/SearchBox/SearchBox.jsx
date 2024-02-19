import React, { useEffect, useState } from 'react'
import styles from "./SearchBox.module.css"
import { Color, Scale } from './SearchContents'

const SearchBox = (
  {
    inputColor,
    inputScale
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
      
    </div>
  )
}

export default SearchBox
