import { collection, doc, documentId, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { myProductionsAction, productionsAction } from "../actions";

const selectorMyProductions=()=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user
        const productionRef=collection(db,"productions");
        const q=query(productionRef,where("uid","==",user.uid))
        const productionSnapshot= await getDocs(q)
        
        const profileRef=doc(db,"profile",user.uid)
        const profileSnapshot=await getDoc(profileRef)
        const data=productionSnapshot.docs.map((value)=>{
            return{
                ...profileSnapshot.data(),
                ...value.data(),
                ...{
                    type:"production",
                    edit:user.uid==value.data().uid,
                    id:value.id,
                    profileUrl:"Profile/"+value.data().uid,
                    scale:value.data().scale,
                    color:value.data().color,
                    series:value.data().series,
                    howToGet:value.data().howToGetProduction,
                    uploadDate:value.data().uploadTime,
                    userName:profileSnapshot.data().name,
                    productionName:value.data().name
                }
            }
        })
        dispatch(myProductionsAction({myProductions:data}))
    }
}
export default selectorMyProductions