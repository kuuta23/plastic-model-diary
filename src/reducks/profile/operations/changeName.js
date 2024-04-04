import { doc,  updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { nameChange, productionsAction, profileAction } from "../actions";

const changeName=(name)=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user;
        const profile=state.profile;

        const profileRef=doc(db,"profile",user.uid);
        // 名前の変更が行われたとき
        // 名前が未入力でないとき
        if((name != profile.name) && (name != '')){
            const data={
                name:name
            }
            
            await updateDoc(profileRef,data);
            dispatch(nameChange(name))
            
        }
        
    }
}
export default changeName