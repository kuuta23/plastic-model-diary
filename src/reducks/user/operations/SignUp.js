import { createUserWithEmailAndPassword } from "firebase/auth";
import { Timestamp, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { CreatedAccountAction, UnconditionalPasswordAction } from "../../error/actions";
import initialValue from "../../profile/operations/initialValue";
import { signInAction } from "../actions";
import { passwordCondition ,emailCondition} from "../../../Template";
const newUserSignIn=({password,checkPassword,email})=>{
  return async (dispatch,getState)=>{
    // パスワードの条件確認（例：半角、文字数、確認用のパスワードと同じか）
    const passwardCdn= passwordCondition(password),
          checkPasswordCdn=passwardCondition(checkPassword),
          emailCdn=emailCondition(email);
    if(passwardCdn&&checkPasswordCdn&&emailCdn){
        // 新規登録
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredentail)=>{
            const user = userCredentail.user
            const uid=user.uid;
            // ユーザー情報の制作
            const userData={
            uid:uid,
            email:email,
            createAccounntTime:Timestamp.now()
            }
            // ユーザー情報の登録
            setDoc(doc(db,"users",uid),userData);
            // storeにユーザー情報の保存
            dispatch(signInAction({
            uid:uid,
            }))
        })
        .catch((error)=>{
          const errorCode=error.code;
          // 登録済みのアカウントの時にエラーを出す
          if(errorCode==="auth/email-already-in-use"){dispatch(CreatedAccountAction())}
        })
    }else{
        
    }

  }
}
export default newUserSignIn

const passwordCheck=({password,checkPassword})=>{
  const bothPassword=(password===checkPassword);
  const hanakaku=(password.match(/[^\uFF65-\uFF9F]/))
  if(bothPassword&&hanakaku){
    return true
  }else{
    return false
  }
}

const emailCheck=({email})=>{
    return true
}
