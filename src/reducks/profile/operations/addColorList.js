const addColorList=(add)=>{
    return async(dispatch,setState)=>{
        const state =setState()
        const list =state.profile.color;
        list.push(add);
        dispatch(profileAction({color:list}))
    }
}