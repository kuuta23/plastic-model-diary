import { useSelector } from "react-redux"
import styles from "./AllPosts.module.css"
import uploadDateAsc from "../../Template/functions/uploadDateAsc";
import Production from "./Production/Production";
import filterProduction from "./filterCondition/filterProduction";
import Advertisement from "../Advertisement/Advertisement";
const AllPosts = (
    {
        local=false,
        filter=false
    }
) => {
    const allProductions=useSelector(state=>state.productions).productions;
    const myProductions=useSelector(state=>state.productions).myProductions;
    const searchWords=useSelector(state=>state.productionSearchWord)
    let productions=[]
    if(local){
        myProductions.forEach((value) => {
            productions.push(value)
        });
    }else{
        allProductions.forEach((value) => {
            productions.push(value)
        });
    }
    if(filter){
        productions= filterProduction(productions,searchWords.color,searchWords.series,searchWords.howToGet,searchWords.scale)
    };
    const ascList=uploadDateAsc(productions)
    
    return (
        <div
        className={styles.Frame}>
        {
            ascList.map((value,key)=>{
                console.log(key);
                if(value.type=="production"&&(key+1)%2==0){
                    return(
                        <>
                        <Production
                        key={key}
                        value={value}/>
                        <Advertisement/>
                        </>
                    
                    )  
                }
                return(
                    <Production
                    key={key}
                    value={value}/>
                )
                })
        }
        </div>
    )
}

export default AllPosts