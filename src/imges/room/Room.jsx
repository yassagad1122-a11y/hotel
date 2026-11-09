import { useNavigate } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../../img/assets";
import "./room.css";
import {  useState } from "react";
import Animation from "../../componet/anmation/Animation";

const ViewInp = ({ room, selected = false, onChange = () => {} }) => (
  <label style={{padding:'5px 0px 5px 10px'}} className="flex gap-3 items-center cursor-pointer text-sm">
    <input
      type="checkbox"
      checked={selected}
      onChange={(e) => onChange(e.target.checked, room)}
    />
    <span className="font-light select-none">{room}</span>
  </label>
);
const ViewRad = ({ room, selected = false, onChange = () => {} }) => (
  <label style={{padding:'5px 0px 5px 10px'}} className="flex gap-3 items-center cursor-pointer text-sm">
    <input type="radio" checked={selected} onChange={() => onChange(room)} />
    <span className="font-light select-none">{room}</span>
  </label>
);

function Room() {

  const [hiden,sethiden]=useState(false)



  
  const navagate = useNavigate();

  const roomTypes = ["Single Bed", "Double Bed", "luxury Room", "Family Suite"];
  const priceRanges = [
    "0 to 500",
    "500 t0 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];
  const sortOpation = [
    "Price Low to High",
    "Price High to low",
    "Newest Frist",
  ];

  return (
    <Animation>

  
    <div className="countenr">
      <div className="rooms">
        {/* hotel */}
        <div  style={{ paddingTop: "10px" }} className="roomdet">
          <div className="roomhead">
            <h2 style={{ fontSize: "30px" }}>Hotel Rooms</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              ipsa cumque odio incidunt, voluptate facere.
            </p>
          </div>
          {roomsDummyData.map((room) => (
            <div className="sameroom" key={room._id}>
              <img
              className="iniimg"
                onClick={() => {
                  navagate(`/room/${room._id}`);
                  scrollTo(0,0)
                }}
                src={room.images[0]}
                alt="img"
              />
              <div style={{flex:'1'
              }}>
                <span style={{ color: "#d3d3d3c5" }}>{room.hotel.city}</span>
                <h2 style={{ fontSize: "25px", fontWeight: "300" }}>
                  {room.hotel.name}
                </h2>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: "15px",
                   
                   
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      style={{ width: "13px" }}
                      src={assets.starIconFilled}
                      alt="star"
                    />
                    <img
                      style={{ width: "13px" }}
                      src={assets.starIconFilled}
                      alt="star"
                    />
                    <img
                      style={{ width: "13px" }}
                      src={assets.starIconFilled}
                      alt="star"
                    />
                    <img
                      style={{ width: "13px" }}
                      src={assets.starIconFilled}
                      alt="star"
                    />
                    <img
                      style={{ width: "13px" }}
                      src={assets.starIconOutlined}
                      alt="star"
                    />
                  </div>
                  <p style={{ fontSize: "14px" }}>
                    200+ <sub>review</sub>
                  </p>
                </div>
                <div
                  style={{
                
                    display: "flex",
                    justifyContent: "start",
                    padding: "10px 0px",
                    alignItems: "center",
                    gap: "10px",
                    flexWrap:'wrap'
                  }}
                >
                  <img
                    style={{ width: "13px" }}
                    src={assets.locationIcon}
                    alt="location"
                  />
                  <span style={{ color: "#aeaeaec6" }}>
                    {room.hotel.address}
                  </span>
                </div>
                <div
                  style={{
                    width: "300px",
                    paddingBottom: "30px",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {room.amenities.map((ele, index) => (
                    <div
                    className="inicheck"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "5px 3px",
                        borderRadius: "5px",
                        color: "black",
                        background: "#dfdfdf",
                      }}
                      key={index}
                    >
                      <img
                        style={{ width: "17px" }}
                        src={facilityIcons[ele]}
                        alt={ele}
                      />
                      <span style={{ fontSize: "13px" }}>{ele}</span>
                    </div>
                  ))}
                </div>
                <div>
                  ${room.pricePerNight}/<sub>nighit</sub>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* hotel */}

        {/* table */}
        <div className="flex1">
          <div  style={{ width: "70%", border: "1px solid #b7b7b7" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #b7b7b7",
                padding: "5px",
              }}
            >
              <h5>Fliters</h5>
              <span className="clear" style={{ color: "#b7b7b7", fontSize: "14px" }}>Cleaar</span>
              <span onClick={()=>{
                sethiden(!hiden)
                console.log('sd')
              }} className="hidden" style={{height:'100%',color: "#b7b7b7", fontSize: "14px" ,cursor:"pointer"}}>{hiden?'Hide':'Show'}</span>

            </div>
            <div className="nonetable"style={{height:hiden?'410px':'' }} >
              <div className="px-5 pt-5">
                <h6 style={{ fontSize: "14px" }}>Poupulor filiter</h6>
                {roomTypes.map((ele,index) => (
                  <ViewInp room={ele} key={index}/>
                ))}
              </div>
              <div className="px-5 pt-5">
                <h6 style={{ fontSize: "14px" }}>Price Range</h6>
                {priceRanges.map((ele,index) => (
                  <ViewInp room={`$${ele}`} key={index}/>
                ))}
              </div>
              <div  className="px-5 pt-5">
                <h6 style={{ fontSize: "14px" }}>Sort By</h6>
                {sortOpation.map((ele,index) => (
                  <ViewRad room={`${ele}`} key={index}/>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* table */}
      </div>
    </div> 
     </Animation>
  );
}

export default Room;
