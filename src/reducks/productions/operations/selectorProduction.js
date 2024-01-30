import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { productionsAction } from "../actions";

const selectorProductions=(length=10)=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user;
        const productionRef=collection(db,"productions");

        const q=query(productionRef,
                orderBy("name"),
                orderBy("uid"),
                orderBy("uploadTime","desc"),
                limit(length));
        const Snapshot= await getDocs(q);

        const profileRef=collection(db,"profile");

        const profileSnapShot=await getDocs(profileRef)
        
        var name="none"
        const values=Snapshot.docs.map((value)=>{
            for(var i=0;i<profileSnapShot.docs.length;i++){
                if(profileSnapShot.docs[i].id==value.data().uid){
                    name=profileSnapShot.docs[i].data().name
                }
            }
            return{
                uid:value.data().uid,
                userName:name,
                name:value.data().name,
                id:value.id
            }

            
        })
        dispatch(productionsAction({productions:values}))
    }
}
export default selectorProductions