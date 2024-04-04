import * as Actions from "./actions";
import initialState from "../store/initialState";

export const  ProductionsReducer=(state=initialState.productions,action)=>{
    switch (action.type){
        case Actions.PRODUCTIONS:
            return{
                ...state,
                productions:action.payload
            }
        case Actions.MY_PRODUCTIONS:
            return{
                ...state,
                myProduction:action.payload
            }
        case Actions.PRODUCTIONS_RESET:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
