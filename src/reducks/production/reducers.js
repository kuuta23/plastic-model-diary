import * as Actions from "./actions";
import initialState from "../store/initialState";

export const  ProductionReducer=(state=initialState.production,action)=>{
    switch (action.type){
        case Actions.PRODUCTION:
            return{
                ...state,
                ...action.payload
            }
        case Actions.PRODUCTION_RESET:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
