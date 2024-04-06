import { GoogleAuthProvider, getRedirectResult, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, db, provider } from "../../../firebase";
import { Timestamp, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { signInAction } from "../actions";
import { userClearingTheError, userErrorAction } from "../../error/user/actions";
import makeNewProfile from "../../profile/operations/makeNewProfile";
import { resetLoadingAction } from "../../loading/actions";

const googleSignIn=()=>{
  return async (dispatch,getState)=>{
    auth.languageCode = 'it';
    signInWithPopup(auth, provider)
    .then(async(result) => {
        const user = result.user;

        const userRef=doc(db,"users",user.uid);

        const userSnap= await getDoc(userRef)
        if(userSnap.exists()){
            const data={
                email:user.email,
                uid:user.uid,
                updateTime:Timestamp.now()
              }
              
              await updateDoc(doc(db,"users",data.uid),data);
              dispatch(signInAction(data));
              dispatch(userClearingTheError())
              dispatch(resetLoadingAction())
        }else{
            // ユーザー情報の制作
            const data={
            uid:user.uid,
            email:user.email,
            createAccounntTime:Timestamp.now(),
            updateTime:Timestamp.now()
            }
            // ユーザー情報の登録
            await setDoc(doc(db,"users",data.uid),data);
            // storeにユーザー情報の保存
            dispatch(signInAction(data));
            dispatch(userClearingTheError())
            dispatch(makeNewProfile())
            dispatch(resetLoadingAction())
        }
        // IdP data available using getAdditionalUserInfo(result)
    // ...
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });


//     signInWitconst provider=new GoogleAuthProvider()hRedirect(auth, provider)
//     .then(async(result) => {
//         // This gives you a Google Access Token. You can use it to access Google APIs.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;

//         // The signed-in user info.
//         const user = result.user;
//         console.log(user);
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//         const data={
//             email:user.email,
//             uid:user.uid,
//             updateTime:Timestamp.now()
//           }
          
//           await updateDoc(doc(db,"users",data.uid),data);
//           dispatch(signInAction(data));
//           dispatch(userClearingTheError())
//           dispatch(makeNewProfile())
//           dispatch(resetLoadingAction())
//         }).catch((error) => {
//             console.log(false);
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // The email of the user's account used.
//             const email = error.customData.email;
//             // The AuthCredential type that was used.
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             dispatch(userErrorAction())
//             dispatch(resetLoadingAction())
//         // ...
//     });

  }
}
export default googleSignIn
