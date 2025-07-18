import React, { useCallback, useState } from 'react'
import styles from "./Situation.module.css"
import { InputRadio } from '../../../../../../../Template'
import { useDispatch, useSelector } from 'react-redux';
import { recordProductinSituationAction, recordProductionAction } from '../../../../../../../reducks/record/production/actions';

const Situation = () => {
  const dispatch=useDispatch();
  const production=useSelector(state=>state.recordProduction);
  const [situation,setSituation]=useState(production.situation);
  const inputSituation=useCallback((event)=>{
    setSituation(event.target.value)
    dispatch(recordProductinSituationAction(event.target.value))
  },[setSituation])
  return (
    <div
    className={styles.Frame}>
      <div>
        状態
      </div>
      <InputRadio
      start={situation}
      name='situation'
      onChange={inputSituation}
      radio={[
        {
          value:"完成",
          color:"green"
        },
        {
          value:"開発中",
          color:"blue"
        },
        {
          value:"未完成",
          color:"red",
        }]}/>
    </div>
  )
}

export default Situation
