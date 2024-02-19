import { collection, documentId, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { productionsAction } from "../actions";
import { withExtraArgument } from "redux-thunk";
import { loadingAction, resetLoadingAction } from "../../loading/actions";

const selectorProductions=(length=10,openUid=false)=>{
    return async(dispatch,setState)=>{
        const state=setState()
        const user=state.user
        const productionRef=collection(db,"productions");

        var q;
        if(openUid!="null"&&openUid){
            q=query(productionRef,
            where("uid","==",openUid),
            orderBy("uploadTime","desc"),
            limit(length))
        }else if(openUid=="null"||!openUid){
            q=query(productionRef,
            orderBy("uploadTime","desc"),
            limit(length));
        }
        const productionSnapshot= await getDocs(q);

        const uids=[]
        productionSnapshot.docs.forEach((value)=>{uids.push(value.data().uid)})
        if(uids.length==0){return}
        const profileRef=collection(db,"profile");
        const profileQuery=query(profileRef,where(documentId(),"in",uids))
        const profileSnapshot=await getDocs(profileQuery)


        const data=productionSnapshot.docs.map((production,i)=>{
            var profileData={}
            profileSnapshot.docs.forEach((profile)=>{
                if(production.data().uid==profile.id){
                    profileData=profile.data()
                }
            })
            return(
                {
                    ...production.data(),
                    ...profileData,
                    ...{
                        type:"production",
                        edit:user.uid==production.data().uid,
                        id:production.id,
                        profileUrl:"Profile/"+production.data().uid,
                        scale:production.data().scale,
                        color:production.data().color,
                        series:production.data().series,
                        howToGetProduction:production.data().howTogetProduction,
                        uploadDate:production.data().uploadTime,
                        userName:profileData.name,
                        productionName:production.data().name
                    },
                    
                }
            )
        })
        dispatch(productionsAction({productions:data}))
    }
}
export default selectorProductions