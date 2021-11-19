import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate} from "react-router"

function EntryPublic(props){
    const showApi = useSelector((state) => state.publicer.activeApi)
    const navigate = useNavigate()
    useEffect(() => {
        if(!showApi.Link){
            navigate("../entries",{replace:true})
        }
    })
    return(
        <div>
            {showApi.Link}
        </div>
    )
    
}
export default EntryPublic