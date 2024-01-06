import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import { normalValueCondition } from "../../../Template"
import { db } from "../../../firebase";
import { recordAction } from "../actions";
import { resetLoadingAction } from "../../loading/actions";

const record=({name})=>{
    return async (dispatch,setState)=>{
        const state=setState()
        const user = state.user
        const nameCnd=normalValueCondition(name);
        if(nameCnd){
            const data={
                uid:user.uid,
                uploadTime:Timestamp.now(),
                name:name
            }
            await addDoc(collection(db,"productions"),data)
            .then(()=>{
                dispatch(resetLoadingAction());
            })
            .catch(()=>{
                dispatch(resetLoadingAction());
            })
        }else{
            dispatch(resetLoadingAction());
        }
    }
}
export default record