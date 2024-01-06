export const LOADING="LOADING"
export const loadingAction=()=>{
    return{
        type:"LOADING",
        payload:{
            loading:true
        }
    }
}

export const RESETLOADING="RESETLOADING"
export const reserLoadingAction=()=>{
    return{
        payload:"RESETLOADING",
        payload:{
            loading:false
        }
    }
}