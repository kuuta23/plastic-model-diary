export const PRODUCTIONS="PRODUCTIONS";
export const productionsAction=(productions)=>{
  console.log(productions);
    return{
        type:"PRODUCTIONS",
        payload:productions,
    }
}

export const MY_PRODUCTIONS="MY_PRODUCTIONS"
export const myProductionAction=(productions)=>{
  return{
    type:"MY_PRODUCTIONS",
    payload:productions
  }
}

export const PRODUCTIONS_RESET="PRODUCTIONS_RESET";
export const productionsResetAction=()=>{
  return{
    type:"PRODUCTIONS_RESET",
    payload:{
      productions:[],
      myProduction:[]
    }
  }
}
