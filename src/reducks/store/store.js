import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
}from "redux";
import { UsersReducer } from "../user/reducer";


export default function createStore(){
    return reduxCreateStore(
        combineReducers({
            user:UsersReducer,
        }),
        applyMiddleware()

    )
}
