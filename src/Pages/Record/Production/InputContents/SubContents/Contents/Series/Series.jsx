import React, { useCallback, useEffect, useState } from 'react'
import styles from "./Series.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { SubInputText } from '../../../../../../../Template'
import { recordProductionAction } from '../../../../../../../reducks/record/production/actions'
const Series = ({value,limit,onChange}) => {
    const profile=useSelector(state=>state.profile),
          production=useSelector(state=>state.recordProduction);
    const [series,setSeries]=useState("");
    const dispatch=useDispatch();
    useEffect(()=>{
      setSeries(production.series)
    },[])
    const inputSeries=useCallback((event)=>{
      setSeries(event.target.value);
      dispatch(recordProductionAction({
        ...production,
        ...{series:event.target.value}
      }))
    },[setSeries])

  return (
    <div
    className={styles.Frame}>
      <SubInputText
      value={series}
      onChange={inputSeries}
      limit={limit}
      placeholder='シリーズ'
      name='series'
      listName='seriesList'
      listValue={profile.series}
      warningTextList={["未入力の場合は、「不明」になります。"]}
      />
    </div>
  )
}

export default Series
