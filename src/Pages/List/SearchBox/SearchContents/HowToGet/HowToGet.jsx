import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./HowToGet.module.css"
import { SearchBox } from '../../../../../Template'

const HowToGet = ({
    onChange
}) => {
    const profile=useSelector(state=>state.profile)
    const radio=profile.howToGetProduction.map((value)=>{
      return{
        display:value,
        output:value
      }
    })
    radio.push(...[{display:"選択なし",output:""}])
    return (
      <div
      className={styles.Frame}>
        <SearchBox
        onChange={onChange}
        title='入手方法'
        radioName='howToGet'
        id='hoToGet'
        radio={radio}/>
      </div>
    )
}

export default HowToGet
