export const searchProduction=(list=[],color,scale,series,howToGet)=>{
    var colorList=[]
    if(color!=''){
        list.forEach((value)=>{
            if(color==value.color){
                colorList.push(value)
            }
            
        })
    }else{
        
        colorList=list
    }

    var scaleList=[]
    if(scale!=''){
        colorList.forEach((value)=>{
            if(scale==value.scale){
                scaleList.push(value)
            }
        })
    }else{
        
        scaleList=colorList
    }

    var seriesList=[]
    if(series!=''){
        scaleList.forEach((value)=>{
            if(value.series==series){
                seriesList.push(value)
            }
        })
    }else{
        
        seriesList=scaleList
    }

    var howToGetList=[]
    if(howToGet!=''){
        seriesList.forEach((value)=>{
            if(value.howToGet==howToGet){
                howToGetList.push(value)
            }
        })
    }else{
        
        howToGetList=seriesList
    }
    return howToGetList
}