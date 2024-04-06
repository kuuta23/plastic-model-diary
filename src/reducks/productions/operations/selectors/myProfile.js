import { collection, documentId, getDocs, query, where } from "firebase/firestore";
import { myProductionAction, productionsAction } from "../../actions";
import { db } from "../../../../firebase";

const myProfiles=()=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const productions=state.productions.myProductions
    
        const uids=Array.from(new Set(productions.map(({uid})=>uid)));
        uids.push("a")

        const profilesRef=collection(db,"profile")
        const q=query(
            profilesRef,
            where(documentId(),'in',uids)
        )
        const profilesSnapshot=await getDocs(q)

        const data=productions.map((production)=>{
            let profile={}
            profilesSnapshot.docs.forEach((value,i)=>{
                if(value.id===production.uid){
                    profile=value.data()
                }
            })
            return(
                {
                    ...production,
                    ...{
                        userName:profile.name,
                    }
                }
            )
        })

        dispatch(myProductionAction(data))
    }
}
export default myProfiles