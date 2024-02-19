import * as Actions from "./actions";
import initialState from "../store/initialState";

export const  MyProductionsReducer=(state=initialState.myProductions,action)=>{
    switch (action.type){
        case Actions.MY_PRODUCTIONS:
            return{
                ...state,
                ...action.payload
            }
        case Actions.MY_PRODUCTIONS_RESET:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
