import { collection, documentId, getDocs, query, where } from "firebase/firestore";
import { productionsAction } from "../../actions";
import { db } from "../../../../firebase";

const profiles=()=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const productions=state.productions.productions
        console.log(productions);
    
        const uids=Array.from(new Set(productions.map(({uid})=>uid)));
        console.log(uids);

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

        dispatch(productionsAction(data))
    }
}
export default profiles