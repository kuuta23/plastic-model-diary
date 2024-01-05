import { createUserWithEmailAndPassword } from "firebase/auth";
import { Timestamp, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { signInAction } from "../actions";
import { passwordCondition ,emailCondition} from "../../../Template";
const signUp=({password,checkPassword,email})=>{
  return async (dispatch,getState)=>{
    // パスワードの条件確認（例：半角、文字数、確認用のパスワードと同じか）
    const passwardCdn= passwordCondition(password),
          checkPasswordCdn=passwordCondition(checkPassword),
          emailCdn=emailCondition(email);

    if(passwardCdn&&checkPasswordCdn&&emailCdn&&(password==checkPassword)){
        // 新規登録
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredentail)=>{
            const user = userCredentail.user
            // ユーザー情報の制作
            const data={
            uid:user.uid,
            email:email,
            createAccounntTime:Timestamp.now(),
            updateTime:Timestamp.now()
            }
            // ユーザー情報の登録
            setDoc(doc(db,"users",data.uid),data);
            // storeにユーザー情報の保存
            dispatch(signInAction(data))
        })
        .catch((error)=>{
          const errorCode=error.code;
          // 登録済みのアカウントの時にエラーを出す
          
        })
    }else{

    }

  }
}
export default signUp


