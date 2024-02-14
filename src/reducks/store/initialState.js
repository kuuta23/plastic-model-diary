const initialState={
    user:{
        isSignedIn:false,
        uid:"",
        email:"",
        updateTime:""
    },
    profile:{
        name:"name",
        howToGetProduction:[],
        scale:[]
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
        nameNoValue:false,
        nameOverValue:false,
        commentNoValue:false,
        commentOverValue:false,
        howToGetProductionOverValue:false,
        scaleOver:false,
        colorOver:false,
        seriesOver:false,
    },
    productions:{
        productions:[
            
        ]
    },
    comments:{
        comments:[
            
        ]
    }
}
export default initialState
