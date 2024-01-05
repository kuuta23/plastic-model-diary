import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
}from "redux";
import { UserReducer } from "../user/reducer";
import { thunk } from "redux-thunk";
import { UserErrorReducer } from "../error/user/reducers";


export default function createStore(){
    return reduxCreateStore(
        combineReducers({
            user:UserReducer,
            UserError:UserErrorReducer,
        }),
        applyMiddleware(thunk)

    )
}
