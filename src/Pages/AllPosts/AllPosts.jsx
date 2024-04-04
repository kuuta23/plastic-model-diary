import { useSelector } from "react-redux"
import styles from "./AllPosts.module.css"
import uploadDateAsc from "../../Template/functions/uploadDateAsc";
import Production from "./Production/Production";
const AllPosts = (
    {
        local=false
    }
) => {
    const allProductions=useSelector(state=>state.productions).productions;
    const myProductions=useSelector(state=>state.productions).myProductions;
    const productions=[]
    if(local){
        myProductions.forEach((value) => {
            productions.push(value)
        });
    }else{
        allProductions.forEach((value) => {
            productions.push(value)
        });
    }
    const ascList=uploadDateAsc(productions)
    
    return (
        <div
        className={styles.Frame}>
        {
            ascList.map((value,key)=>{
            if(value.type=="production"){
                return(
                <Production
                key={key}
                value={value}/>
                )  
            }
            })
        }
        </div>
    )
}

export default AllPosts