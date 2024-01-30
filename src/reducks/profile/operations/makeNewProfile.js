import { collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { profileAction } from "../actions";

const makeNewProfile=()=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user;
               
        const profileRef=doc(db,"profile",user.uid);
        const Snapshot= await getDoc(profileRef);
        var data;
        // プロフィールの中にデータがないとき
        if(!Snapshot.data()){
            data={
                name:"name"
            }
            
            await setDoc(profileRef,data)
        }else{
            data={
                name:Snapshot.data().name
            }
            
        }
        dispatch(profileAction(data))
    }
}
export default makeNewProfile