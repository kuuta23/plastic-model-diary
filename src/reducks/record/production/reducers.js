import initialState from "../../store/initialState";
import * as Actions from "./actions";

export const  RecordProductionReducer=(state=initialState.recordProduction,action)=>{
    switch (action.type){
        case Actions.UPDATE_NAME:
            console.log({
                ...state,
                name:action.payload
            });
            return{
                ...state,
                name:action.payload
            }
        case Actions.UPDATE_COLOR:
            return{
                ...state,
                color:action.payload
            }
        case Actions.UPDATE_COMMENT:
            return{
                ...state,
                comment:action.payload
            }
        case Actions.UPDATE_SERIES:
            return{
                ...state,
                series:action.payload
            }
        case Actions.UPDATE_SITUATION:
            return{
                ...state,
                situation:action.payload
            }
        case Actions.UPDATE_HOW_TO_GET:
            return{
                ...state,
                howToGet:action.payload
            }
        case Actions.UPDATE_IMAGES:
            return{
                ...state,
                images:action.payload
            }
        default:
            return state
    }
}
