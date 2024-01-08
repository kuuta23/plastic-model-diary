export const SAVE="SAVE";
export const saveAction=(saveState)=>{
    return{
        type:"SAVE",
        payload:{
            productions:saveState.productions
        }
    }
}
export const SAVE_RESET="SAVE_RESET";
export const saveResetAction=()=>{
  return{
    type:"SAVE_RESET",
    payload:{
      productions:[]
    }
  }
}
