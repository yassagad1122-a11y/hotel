import { useNavigate } from "react-router-dom";
import Head from "../../../componet/headdetails/Head";
import { roomsDummyData } from "../../../img/assets";
import Boxsfeatured from "./boxsfeatured";
import "./featured.css";
import MyComponent from "../../../componet/stateSroll/Mycomponeet";
function Featured() {
    const navgate=useNavigate()
  return (
   

 

  
    <div className="mainfeatured">
      <div className="countenr">
      <Head tital={'Featured Destination'} pragraph={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde perferendis ut, quidem placeat obcaecati hic minima nihil cumque aut magnam!'}/>
      
      <div className="gridfeaturid">
 
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <Boxsfeatured room={room} key={room._id} index={index} />
        ))}

      </div>  
      <MyComponent>

      
      <div className="x">
        <button onClick={()=>{
            navgate('/room')
            ;scrollTo(0,0)
        }}>
          View All Destiantion
        </button>
      </div>
      </MyComponent>
      </div>
      

    </div>
  
  );
}

export default Featured;
