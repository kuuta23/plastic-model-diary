export const searchProduction=(list=[],color,scale)=>{
    var colorList=[]
    if(color){
        list.forEach((value)=>{
            if(color==value.color){
                colorList.push(value)
            }
            
        })
    }else{
        colorList=list
    }

    var scaleList=[]
    if(scale){
        colorList.forEach((value)=>{
            if(scale==value.scale){
                scaleList.push(value)
            }
        })
    }else{
        scaleList=colorList
    }
    return scaleList
}