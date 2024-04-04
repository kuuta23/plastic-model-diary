import React, { useCallback, useState } from 'react'
import styles from "./ChangeSituation.module.css"
import { useDispatch } from 'react-redux';
import { loadingAction } from '../../../../../reducks/loading/actions';
import changeSituation from '../../../../../reducks/productions/operations/changeStiation';
import { InputRadio, Submit } from '../../../../../Template';

const ChangeSituation = ({value}) => {
    const [click,setClick]=useState(false),
          [situation,setSituation]=useState(false);
    const inputSituation=useCallback((event)=>{
        setSituation(event.target.value)
    },[setSituation])
    const dispatch=useDispatch()
    const onSubmit=(event)=>{
        event.preventDefault()
        dispatch(loadingAction())
        dispatch(changeSituation(value,situation))
        setClick(click=>!click)

    }

  return (
    <div>
      <button
      className={styles.Button}
      onClick={()=>setClick((click)=>!click)}>状態変更</button>
      {click?(
        <form
        onSubmit={onSubmit}>
        <InputRadio
          name='situation'
          radio={[{value:"完成",color:"green"},{value:"開発中",color:"blue"},{value:"未完成",color:"red"}]}
          onChange={inputSituation}/>
          <Submit
          value="決定"/>
        </form>
      ):<></>}
      
    </div>
  )
}

export default ChangeSituation
