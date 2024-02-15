import { collection, doc, documentId, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "../../../firebase"
import {commentsAction} from "../actions"

const selectorSigleComment=(length=10,openUid=false)=>{
    return async (dispatch,setState)=>{
        const state=setState()
        const user=state.user
        const singleCommnetRef=collection(db,"singleComment");
        
        var q;
        if(openUid){
            q=query(singleCommnetRef,
                where("uid","==",openUid),
                orderBy("uploadDate","desc"),
                limit(length))
        }else{
            q=query(singleCommnetRef,
                orderBy("uploadDate","desc"),
                limit(length))
        }
        const singleCommentSnapshot=await getDocs(q);
        const uids=[]
        singleCommentSnapshot.docs.forEach((value)=>{uids.push(value.data().uid)})
        if(uids.length==0){return}
        const profileRef=collection(db,"profile");
        const profileQuery=query(profileRef,where(documentId(),"in",uids))
        const profileSnapshot=await getDocs(profileQuery)

        const data=singleCommentSnapshot.docs.map((comment)=>{
            var profileData={}
            profileSnapshot.docs.forEach((profile)=>{
                if(comment.data().uid==profile.id){
                    profileData=profile.data()
                }
            })
            return(
                {
                    ...comment.data(),
                    ...profileData,
                    ...{
                        id:comment.id,
                        edit:user.uid==comment.data().uid,
                        type:"comment",
                        profileUrl:"/Profile/"+comment.data().uid,
                        userName:profileData.name
                    }
                }
            )
        })

        dispatch(commentsAction({comments:data}))     
    }
}
export default selectorSigleComment