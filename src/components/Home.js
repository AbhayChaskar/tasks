import Myfunc from "./Myfunc";
const Home=(props)=>{
    return(
        <div>
            <h3 style={{color:"white",backgroundColor:"salmon"}}>My Home Component</h3>
            <p>React Training</p>
        <ul>
            {props.mycourses.map(latestTechno=>
            <li>{latestTechno}</li>
            )}
        </ul>
        <hr/>
            <Myfunc myproductdata={props.productdata}/>
        </div>
    )
}
export default Home;