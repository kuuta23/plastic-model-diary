import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { productionsAction } from "../actions";
import { withExtraArgument } from "redux-thunk";

const selectorProductions=(length=10,original_only=false)=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user;
        const productionRef=collection(db,"productions");

        var q;
        if(original_only){
            q=query(productionRef,
            where("uid","==",user.uid),
            orderBy("uploadTime","desc"),
            orderBy("name"),
            limit(length))
        }else{
            q=query(productionRef,
            orderBy("uploadTime","desc"),
            orderBy("name"),
            limit(length));
        }
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
                comment:value.data().comment,
                howToGetProduction:value.data().howToGetProduction,
                scale:value.data().scale,
                id:value.id,
                color:value.data().color,
                series:value.data().series
            }

            
        })
        dispatch(productionsAction({productions:values}))
    }
}
export default selectorProductions