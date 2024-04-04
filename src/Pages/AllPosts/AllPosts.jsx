import { useSelector } from "react-redux"
import styles from "./AllPosts.module.css"
import uploadDateAsc from "../../Template/functions/uploadDateAsc";
import Production from "./Production/Production";
const AllPosts = (
    local=false
) => {
    const user=useSelector(state=>state.user);
    const allProductions=useSelector(state=>state.productions).productions;
    console.log(allProductions);
    const comments=useSelector(state=>state.comments)
    const profile=useSelector(state=>state.profile)
    const productions=[];
    if(!local){
        
        console.log(true);
    }
    let mixList=productions.concat(allProductions)
    productions.concat(allProductions)
    console.log(productions);
    console.log(mixList);
    const ascList=uploadDateAsc(mixList)
    
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