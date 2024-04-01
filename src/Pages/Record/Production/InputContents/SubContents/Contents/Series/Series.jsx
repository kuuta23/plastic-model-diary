import React, { useCallback, useEffect, useState } from 'react'
import styles from "./Series.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { SubInputText, overString } from '../../../../../../../Template'
import { recordProductinSeriesAction, recordProductionAction } from '../../../../../../../reducks/record/production/actions'
import { recordProductionErrorResetAction, recordProdutionErrorAction } from '../../../../../../../reducks/error/record/productions/actions'
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
      if(overString(series)){
        dispatch(recordProdutionErrorAction())
      }else{
        dispatch(recordProductionErrorResetAction())
      }
      
      dispatch(recordProductinSeriesAction(event.target.value))
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
