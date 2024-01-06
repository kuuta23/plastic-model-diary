import * as Actions from "./actions";
import initialState from "../store/initialState";

export const  LoadingReducer=(state=initialState.loading,action)=>{
    switch (action.type){
        case Actions.LOADING:
            return{
                ...state,
                ...action.payload
            }
        case Actions.RESETLOADING:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
