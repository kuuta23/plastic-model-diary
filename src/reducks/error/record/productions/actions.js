export const RECORD_ERROR="RECORD_ERROR";
export const recordProdutionErrorAction=()=>{
    return{
        type:"RECORD_ERROR",
        payload:{
          error:true
        }
    }
}
export const RECORD_ERROR_RESET="RECORD_ERROR_RESET";
export const recordProductionErrorResetAction=()=>{
  return{
    type:"RECORD_ERROR_RESET",
    payload:{
      error:false
    }
  }
}
