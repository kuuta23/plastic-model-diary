import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import { normalValueCondition } from "../../../Template"
import { db } from "../../../firebase";
import { recordAction } from "../actions";
import { resetLoadingAction } from "../../loading/actions";
import { recordErrorAction, recordErrorResetAction } from "../../error/record/actions";

const record=({name})=>{
    return async (dispatch,setState)=>{
        const state=setState()
        const user = state.user
        const nameCnd=normalValueCondition({value:name});
        if(nameCnd){
            const data={
                uid:user.uid,
                uploadTime:Timestamp.now(),
                name:name
            }
            await addDoc(collection(db,"productions"),data)
            .then(()=>{
                dispatch(resetLoadingAction());
                dispatch(recordErrorResetAction())
            })
            .catch(()=>{
                dispatch(resetLoadingAction());
                dispatch(recordErrorAction({name:true}))
            })
        }else{
            dispatch(recordErrorAction({name:true}))
            dispatch(resetLoadingAction());
        }
    }
}
export default record