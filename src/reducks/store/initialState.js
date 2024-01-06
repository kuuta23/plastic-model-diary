const initialState={
    user:{
        isSignedIn:false,
        uid:"",
        email:"",
        updateTime:""
    },
    userError:{
        userError:false
    },
    loading:{
        loading:false
    },
    record:{
        name:""
    },
    recordError:{
        name:false
    }
}
export default initialState
