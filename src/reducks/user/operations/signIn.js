import { signInWithEmailAndPassword } from "firebase/auth";
import { Timestamp, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { signInAction } from "../actions";
import { emailCondition, passwordCondition } from "../../../Template";
import { userClearingTheError, userErrorAction } from "../../error/user/actions";
import { loadingAction, resetLoadingAction } from "../../loading/actions";
import selectorMyProfile from "../../profile/operations/selectorMyProfile";

// サインイン
// ロードの開始
// パスワードとメールアドレスの確認
// ユーザーデータの更新
// ユーザーデータをstoreに保存
// プロファイルのデータをstoreに保存
// ロードの終了


const signIn=({password,email})=>{
  return async (dispatch,getState)=>{
    dispatch(loadingAction())
    const emailCnd = emailCondition(email),
          passwordCnd = passwordCondition(password);
    if (emailCnd&&passwordCnd){
      console.log(true);
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
          dispatch(selectorMyProfile())
        }
      })
      .catch(()=>{
        dispatch(userErrorAction())
      })
    }else{
        dispatch(userErrorAction())
    }
    dispatch(resetLoadingAction())
  }
}
export default signIn
