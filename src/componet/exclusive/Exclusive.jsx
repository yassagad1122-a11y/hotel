import { assets, exclusiveOffers } from "../../img/assets";
import MyComponent from "../stateSroll/Mycomponeet";
import Boxsexclusive from "./Boxsexclusive";
import "./exclusive.css";
function Exclusive() {
  return (
    <div className="exclusive">
      <div className="countenr">
        <MyComponent>

        
        <div className="allex">
          <div className="excl">
            <div className="offer">
              <h2 style={{lineHeight:'21px'}}>Exclusive Offers</h2>
            </div>
            <p className="detal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              officia ratione nemo, autem quidem minima veritatis ullam fugiat
              iusto non vero? Iusto nam suscipit dolore!center
            </p>
          </div>
          <div 
         className="arrodiv"
          >
            <span className="arrowview" style={{cursor:'pointer'}}>View All Offers</span>
            <img src={assets.arrowIcon}  className="arrowicon"alt="arrowicon" />
          </div>
        </div>
</MyComponent>
        <div  className="gridexclusive">
            {exclusiveOffers.map((box,index)=>(
                <Boxsexclusive key={index} box={box}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Exclusive;
