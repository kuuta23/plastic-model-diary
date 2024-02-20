import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../../firebase"
import { resetLoadingAction } from "../../loading/actions"
import { myProductionsAction } from "../actions"

const changeSituation=(value,situation=false)=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const productions=state.myProductions.myProductions
        const productionsDoc=doc(db,"productions",value.id);
        await updateDoc(productionsDoc,{situation:situation});

        for(var i=0;i<productions.length;i++){
            if(productions[i].id==value.id){
                productions[i].situation=situation
                break
            }
        }
        dispatch(myProductionsAction({myProductions:productions}))
        dispatch(resetLoadingAction())
        

    }
}
export default changeSituation