import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
}from "redux";
import { UserReducer } from "../user/reducer";
import { thunk } from "redux-thunk";
import { UserErrorReducer } from "../error/user/reducers";
import { LoadingReducer } from "../loading/reduers";
import { ProductionsReducer } from "../productions/reducers";
import { ProfileReducer } from "../profile/reducers";
import { CommentsReducer } from "../singleComments/reducers";
import { MyProductionsReducer } from "../myProductions/reducers";
import { ProductionReducer } from "../production/reducers";
import { RecordProductionReducer } from "../record/production/reducers";
import { RecordProductionErrorReducer } from "../error/record/productions/reducers";

export default function createStore(){
    return reduxCreateStore(
        combineReducers({
            user:UserReducer,
            profile:ProfileReducer,
            userError:UserErrorReducer,
            recordProductionError:RecordProductionErrorReducer,
            loading:LoadingReducer,
            recordProduction:RecordProductionReducer,
            productions:ProductionsReducer,
            production:ProductionReducer,
            comments:CommentsReducer
        }),
        applyMiddleware(thunk)

    )
}
