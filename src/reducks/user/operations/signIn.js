import { signInWithEmailAndPassword } from "firebase/auth";
import { Timestamp, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { signInAction } from "../actions";
import { emailCondition, passwordCondition } from "../../../Template";
import { userClearingTheError, userErrorAction } from "../../error/user/actions";
import { resetLoadingAction } from "../../loading/actions";
import makeNewProfile from "../../profile/operations/makeNewProfile";

const signIn=({password,email})=>{
  return async (dispatch,getState)=>{
    const emailCnd = emailCondition(email),
          passwordCnd = passwordCondition(password);
    if (emailCnd&&passwordCnd){
      // ログイン
      await signInWithEmailAndPassword(auth,email,password)
      .then(async (userCredential)=>{
        const user = userCredential.user;
        if(user){

          const data={
            email:user.email,
            uid:user.uid,
            updateTime:Timestamp.now()
          }
          
          await updateDoc(doc(db,"users",data.uid),data);
          dispatch(signInAction(data));
          dispatch(userClearingTheError())
          dispatch(makeNewProfile())
          dispatch(resetLoadingAction())
        }
      })
      .catch(()=>{
        dispatch(userErrorAction())
        dispatch(resetLoadingAction())
      })
    }else{
        dispatch(userErrorAction())
        dispatch(resetLoadingAction())
    }
  }
}
export default signIn
