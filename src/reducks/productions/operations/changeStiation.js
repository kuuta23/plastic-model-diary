import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../../firebase"
import { resetLoadingAction } from "../../loading/actions"

const changeSituation=(id,situation=false)=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const productions=state.productions.productions
        const productionsDoc=doc(db,"productions",id);
        await updateDoc(productionsDoc,{situation:situation});

        for(var i=0;i<productions.length;i++){
            if(productions[i].id==id){
                productions[i].situation=situation
                break
            }
        }
        dispatch(resetLoadingAction())
        

    }
}
export default changeSituation