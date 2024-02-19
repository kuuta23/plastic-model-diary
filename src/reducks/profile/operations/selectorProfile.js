import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { profileAction } from "../actions";

const selectorProfile=(uid)=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user
        if(!uid){uid=user.uid}
        const profileRef=doc(db,"profile",uid);
        const Snapshot= await getDoc(profileRef);
        dispatch(profileAction({
            uid:uid,
            edit:user.uid==uid,
            name:Snapshot.data().name,
            howToGetProduction:Snapshot.data().howToGetProduction,
            scale:Snapshot.data().scale,
            color:Snapshot.data().color,
            series:Snapshot.data().series
        }))
    }
}
export default selectorProfile