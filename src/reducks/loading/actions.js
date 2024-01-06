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
export const resetLoadingAction=()=>{
    return{
        type:"RESETLOADING",
        payload:{
            loading:false
        }
    }
}