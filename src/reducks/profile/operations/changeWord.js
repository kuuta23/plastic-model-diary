import { collection, doc, documentId, getDocs, query, updateDoc, where } from "firebase/firestore"
import { profileAction } from "../actions"
import { db } from "../../../firebase"
import { update } from "firebase/database"

const changeWord=(wordBf,wordAf,type="color"|"series"|"glade"|"howToGet")=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const profile=state.profile
        const user=state.user
        if(type=="color"){
            const index=profile.color.indexOf(wordBf)
            profile.color.splice(index,1,wordAf)

            const productionRef=collection(db,"productions")
            const q=query(productionRef,where("color","==",wordAf),where("uid","==",user.uid))
            await updateDoc(q,{color:wordAf})

        }
        dispatch(profileAction(profile))
        const profileRef=doc(db,"profile",profile.uid)
        console.log(profile);
        await updateDoc(profileRef,profile)

        // プロフィールは変更できたので次はProductionの変更

        
    }
}
export default changeWord