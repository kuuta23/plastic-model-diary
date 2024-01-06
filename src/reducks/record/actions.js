export const RECORD="RECORD";
export const recordAction=(recordState)=>{
    return{
        type:"RECORD",
        payload:{
            name:recordState.name
        }
    }
}
export const RECORD_RESET="RECORD_RESET";
export const recordResetAction=()=>{
  return{
    type:"RECORD_RESET",
    payload:{
      name:""
    }
  }
}
