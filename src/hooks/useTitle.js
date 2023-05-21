import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title =`${title} - Humpty Dumpty`;
    },[title])
}
export default useTitle;