export const noString=(value)=>{
    if(value==""){
        return true
    }
}

export const overString=(value,limit)=>{
   if(limit){
    if([...value].length>limit){
        return true
    }
   } 
}