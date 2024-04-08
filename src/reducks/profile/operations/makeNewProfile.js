import { collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { profileAction } from "../actions";

const makeNewProfile=()=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user;
               
        const profileRef=doc(db,"profile",user.uid);
        const data={
            uid:user.uid,
            name:"name",
            howToGetProduction:[],
            scale:[],
            color:[],
            series:[],
        }
        await setDoc(profileRef,data)   
        dispatch(profileAction(data))
    }
}
export default makeNewProfile