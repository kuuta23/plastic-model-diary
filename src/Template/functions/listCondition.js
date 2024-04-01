export const noList=(list=[])=>{
    if(list.length===0){
        return true
    }
}

export const overList=(list=[],limit)=>{
   if(limit){
    if(list.length>limit){
        return true
    }
   } 
}