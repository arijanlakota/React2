import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { forApi, forCat, forEnt } from "../actions";
import { publicApi } from "../api";
import "../App.css"

function PublicSearch(props) {
  const showList = useSelector((state) => state.publicer.publicList);
  const catList = useSelector((state) => state.publicer.categoryList )
  const dispatch = useDispatch();
  const navigate = useNavigate()
  function funcPub(e){
    publicApi.get("entries").then((result) => {dispatch(forApi(result.data.entries))}).catch((error) => {console.log(error)})
  }
  function funcCut(e){
    publicApi.get("categories").then((result) => {dispatch(forCat(result.data))}).catch((error) => {console.log(error)})
  }

  
  return <>
    <button onClick={funcPub}>All entries one page</button>
    <button onClick={funcCut}>Category</button>
      <div className="veliki">
      {showList.map((el,index) => {
          return(
          <div className="kartica" key={index}>
          <p>{el[`API`]}</p>
          <a href={el.Link}>{el.Link}</a>
          <button onClick={() => {
            dispatch(forEnt(el))
            navigate("../entry",{state:{...el}});
          }}>Click me</button>
          </div>)
      })} 
      {catList.map((el) => {return <p>{el}</p>})}
      </div>
      </>
}
export default PublicSearch