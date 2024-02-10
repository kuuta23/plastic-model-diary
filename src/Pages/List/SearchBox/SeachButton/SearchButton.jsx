import React from 'react'
import styles from "./SearchButton.module.css"

const SearchButton = ({onClick}) => {
  return (
    <div
    className={styles.Frame}>
      <button
      className={styles.Button}
      onClick={onClick}>条件</button>
    </div>
  )
}

export default SearchButton
