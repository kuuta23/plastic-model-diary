import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const updateProfile=()=>{
    return async (dispatch,setState)=>{
        const state=setState()
        const user=state.user;
        const userRef=doc(db,"users",user.uid);
        updateDoc(userRef,{
            updateTime:serverTimestamp()
        }) 
    }
}
export default updateProfile