import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { profileAction } from "../actions";

const selectorProfile=()=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user;
        
        const profileRef=doc(db,"profile",user.uid);
        const Snapshot= await getDoc(profileRef);
        dispatch(profileAction({
            name:Snapshot.data().name
        }))
    }
}
export default selectorProfile