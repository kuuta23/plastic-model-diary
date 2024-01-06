export const RECORD_ERROR="RECORD_ERROR";
export const recordErrorAction=(recordState)=>{
    return{
        type:"RECORD_ERROR",
        payload:{
            name:recordState.name
        }
    }
}
export const RECORD_ERROR_RESET="RECORD_ERROR_RESET";
export const recordErrorResetAction=()=>{
  return{
    type:"RECORD_ERROR_RESET",
    payload:{
      name:false
    }
  }
}
