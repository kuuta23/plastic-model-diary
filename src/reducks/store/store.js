import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
}from "redux";
import { UserReducer } from "../user/reducer";
import { thunk } from "redux-thunk";
import { UserErrorReducer } from "../error/user/reducers";
import { LoadingReducer } from "../loading/reduers";
import { RecordReducer } from "../record/reducers";
import { RecordErrorReducer } from "../error/record/reducers";
import { ProductionsReducer } from "../productions/reducers";
import { ProfileReducer } from "../profile/reducers";

export default function createStore(){
    return reduxCreateStore(
        combineReducers({
            user:UserReducer,
            profile:ProfileReducer,
            userError:UserErrorReducer,
            loading:LoadingReducer,
            record:RecordReducer,
            recordError:RecordErrorReducer,
            productions:ProductionsReducer
        }),
        applyMiddleware(thunk)

    )
}
