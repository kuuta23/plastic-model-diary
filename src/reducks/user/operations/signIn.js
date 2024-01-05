import { signInWithEmailAndPassword } from "firebase/auth";
import { Timestamp, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { signInAction } from "../actions";
import { emailCondition, passwordCondition } from "../../../Template";

const signIn=({password,email})=>{
  return async (dispatch,getState)=>{
    const emailCnd = emailCondition(email),
          passwordCnd = passwordCondition(password);
    if (emailCnd&&passwordCnd){
      // ログイン
      signInWithEmailAndPassword(auth,email,password)
      .then(async (userCredential)=>{
        const user = userCredential.user;
        if(user){

          const data={
            email:user.email,
            uid:user.uid,
            updateTime:Timestamp.now()
          }
          
          updateDoc(doc(db,"users",data.uid),data);
          dispatch(signInAction(data));
        }
      })
    }
  }
}
export default signIn
