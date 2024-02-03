export const RECORD_ERROR="RECORD_ERROR";
export const recordErrorAction=(recordState)=>{
    return{
        type:"RECORD_ERROR",
        payload:{
            noValue:recordState.noValue,
            overValue:recordState.overValue
        }
    }
}
export const RECORD_ERROR_RESET="RECORD_ERROR_RESET";
export const recordErrorResetAction=()=>{
  return{
    type:"RECORD_ERROR_RESET",
    payload:{
      noValue:false,
      overValue:false
    }
  }
}
