export const ERROR="ERROR";
export const userErrorAction=()=>{
    return{
        type:"ERROR",
        payload:{
            userError:true
        }
    }
}
export const CLEAR_ERROR="CLEAR_ERROR"
export const userClearingTheError=()=>{
    return{
        type:"CLEAR_ERROR",
        payload:{
            userError:false
        }
    }
}
