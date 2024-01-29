export const PRODUCTIONS="PRODUCTIONS";
export const productionsAction=(productionsState)=>{
    return{
        type:"PRODUCTIONS",
        payload:{
            productions:productionsState.productions
        }
    }
}
export const PRODUCTIONS_RESET="PRODUCTIONS_RESET";
export const productionsResetAction=()=>{
  return{
    type:"PRODUCTIONS_RESET",
    payload:{
      productions:[]
    }
  }
}
