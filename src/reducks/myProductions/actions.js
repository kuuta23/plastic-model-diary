export const MY_PRODUCTIONS="MY_PRODUCTIONS";
export const myProductionsAction=(myProductionsState)=>{
    return{
        type:"MY_PRODUCTIONS",
        payload:{
            myProductions:myProductionsState.myProductions
        }
    }
}
export const MY_PRODUCTIONS_RESET="MY_PRODUCTIONS_RESET";
export const myProductionsResetAction=()=>{
  return{
    type:"MY_PRODUCTIONS_RESET",
    payload:{
      myProductions:[]
    }
  }
}
