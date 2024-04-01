import React, { useCallback, useEffect, useState } from 'react'
import styles from "./Series.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { SubInputText, overString } from '../../../../../../../Template'
import { recordProductinSeriesAction, recordProductionAction } from '../../../../../../../reducks/record/production/actions'
import { recordProductionErrorResetAction, recordProdutionErrorAction } from '../../../../../../../reducks/error/record/productions/actions'
const Series = () => {
    const profile=useSelector(state=>state.profile),
          production=useSelector(state=>state.recordProduction);
    const [series,setSeries]=useState("");
    const dispatch=useDispatch();
    useEffect(()=>{
      setSeries(production.series)
    },[])
    const inputSeries=useCallback((event)=>{
      setSeries(event.target.value);
      
      dispatch(recordProductinSeriesAction(event.target.value))
    },[setSeries])

  return (
    <div
    className={styles.Frame}>
      <SubInputText
      value={series}
      onChange={inputSeries}
      limit={30}
      placeholder='シリーズ'
      name='series'
      listName='seriesList'
      listValue={profile.series}
      />
    </div>
  )
}

export default Series
