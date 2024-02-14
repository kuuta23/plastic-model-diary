import { collection, doc, documentId, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "../../../firebase"
import {commentsAction} from "../actions"

const selectorSigleComment=()=>{
    return async (dispatch,setState)=>{
        const singleCommnetDocs=collection(db,"singleComment");
        const uids=[];
        const q=query(
            singleCommnetDocs,
            orderBy('uploadDate','asc'),
            limit(20));
        await getDocs(q)
        .then(async(commentSnapShot)=>{
            const data=commentSnapShot.docs.map((value)=>{
                uids.push(value.data().uid)
                return{
                    type:"comment",
                    uid:value.data().uid,
                    comment:value.data().comment,
                    photoUrl:value.data().photoUrl,
                    uploadDate:value.data().uploadDate
                }
            })


            const profileDocs=collection(db,"profile");
            const q=query(profileDocs,where(documentId(),"in",uids))
            await getDocs(q)
            .then((profileSnapshot)=>{
                profileSnapshot.docs.forEach((value)=>{
                    for(var i=0;i<data.length;i++){
                        if(data[i].uid===value.id){
                            
                            Object.assign(data[i],value.data())
                        }
                    }
                })
            })
            dispatch(commentsAction({comments:data}))
        })
        
        
    }
}
export default selectorSigleComment