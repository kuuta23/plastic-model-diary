import { collection, doc, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { productionsAction, profileAction } from "../actions";

const selectorProfile=()=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user;
        
        const profileRef=doc(db,"profile",user.uid);
        const Snapshot= await getDoc(profileRef);
        dispatch(profileAction({
            uid:user.uid,
            name:Snapshot.data().name
        }))
    }
}
export default selectorProfile