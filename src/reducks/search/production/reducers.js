import initialState from "../../store/initialState";
import * as Actions from "./actions";

export const  ProductionSearchWordReducer=(state=initialState.productionSearchWord,action)=>{
    switch (action.type){
        case Actions.COLOR:
            return{
                ...state,
                color:action.payload
            }
        case Actions.SCALE:
            return{
                ...state,
                scale:action.payload
            }
        case Actions.SERIES:
            return{
                ...state,
                series:action.payload
            }
        case Actions.HOW_TO_GET:
            return{
                ...state,
                howToGet:action.payload
            }
        case Actions.RESET:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
