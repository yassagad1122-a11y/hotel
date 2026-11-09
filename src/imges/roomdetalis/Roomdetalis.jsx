import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../../img/assets";
import "../roomdetalis/roomdetals.css";
import Animation from "../../componet/anmation/Animation";

function Roomdetalis() {
  const [dataroom, setdata] = useState();
  const [imagroom, setimg] = useState();
  const { id } = useParams();
  useEffect(() => {
    const onedataroom = roomsDummyData.find((element) => element._id == id);
    onedataroom && setdata(onedataroom);
    onedataroom && setimg(onedataroom.images[0]);
  }, [id]);

  return (
    
  
    dataroom && (
      <Animation>

     
      <div className="countenr" style={{ padding: "120px 0px 0px 0px" }}>
        {/* head */}
        <div className="headata">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              paddingBottom: "5px",
            }}
          >
            <h2>
              <span
                style={{
                  fontSize: "20px",
                }}
              >
                {dataroom.hotel.name}
              </span>{" "}
              <sub>({dataroom.roomType})</sub>
            </h2>

            <span
              style={{
                color: "white",
                fontSize: "12px",
                borderRadius: "20px",
                background: "#e99300",
                padding: "2px",
              }}
            >
              20% OFF
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
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
              flexWrap: "wrap",
            }}
          >
            <img
              style={{ width: "13px" }}
              src={assets.locationIcon}
              alt="location"
            />
            <span style={{ color: "#aeaeaec6" }}>{dataroom.hotel.address}</span>
          </div>
        </div>
        {/* head */}
        {/* rooms */}
        <div className="gridroom">
          <img style={{ borderRadius: "10px" }} src={imagroom} alt="bigroom" />
          <div className="fourgrid">
            {dataroom.images.map((ele,index) => (
              <img
              key={index}
                onClick={() => {
                  setimg(ele);
                }}
                style={{
                  cursor: "pointer",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 2px #b9b9b9ac",
                  border: imagroom == ele && "2px solid #e99300 ",
                }}
                src={ele}
                alt=""
              />
            ))}
          </div>
        </div>
        {/* rooms */}
        {/* adding */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <div>
            <h2 className="luxury" >
              Experience Luxury Like Never Before
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                padding: "10px 0px 70px 0px",
              }}
            >
              {dataroom.amenities.map((item,index) => (
                <div
                className="inicheck"
                key={index}
                  style={{
                    padding: "5px",
                    borderRadius: "10px",
                    
                    background: "#e9f0ef",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src={facilityIcons[item]} alt="item" />
                  <span> {item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ fontWeight: "600", fontSize: "20px" }}>
            ${dataroom.pricePerNight}/
            <sub style={{ color: "#bdbdbd" }}>night</sub>
          </div>
        </div>
        {/* adding*/}
        {/* form*/}
        <form className="flexform" action="">
          <div className="dataform">
            <div

            className="formcheck"
              // style={{
              //   display: "flex",
              //   flexDirection: "column",
              //   gap: "10px",
              //   alignItems: "start",
              // }}
            >
              <label htmlFor="check">Check-in</label>
              <input type="date" />
            </div>
            <div
            className="formcheck"
              // style={{
              //   display: "flex",
              //   flexDirection: "column",
              //   gap: "10px",
              //   alignItems: "start",
              // }}
            >
              <label htmlFor="check">Check-out</label>
              <input type="date" />
            </div>
            <div
            className="formcheck"
              // style={{
              //   display: "flex",
              //   flexDirection: "column",
              //   gap: "10px",
              //   alignItems: "start",
              // }}
            >
              <label htmlFor="check">Guests</label>
              <input className="inpwid" type="number" />
            </div>
          </div>
          <div className="btnform">
            <button>Check Availability</button>
          </div>
        </form>
        {/* form*/}
        {/* location*/}
        <div className="mt-25 space-y-4">
          {roomCommonData.map((ele, index) => (
            <div
              style={{ margin: "10px 0px" }}
              key={index}
              className="flex items-start gap-2"
            >
              <img src={ele.icon} alt="spa.tital" className="w-6.5" />
              <div>
                <p className="text-base">{ele.title}</p>
                <p className="text-gray-500">{ele.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* location*/}
        {/* pragraphe*/}
        <div
          className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500"
          style={{ padding: "40px 0px", margin: "50px 0px" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
          esse! Ipsum dolorem esse distinctio, modi hic pariatur consequuntur
          dolorum similique. Officiis cupiditate repellat fuga asperiores
          repellendus veniam dicta quas ipsum!
        </div>
        {/* pragraphe*/}
        {/* hosted*/}
        <div
          style={{ paddingBottom: "20px" }}
          className="flex  items-start gap-4"
        >
          <div>
            <img
              src={dataroom.hotel.owner.image}
              alt="Host"
              className="h-14 w-14 md:h-18 md:w-18 rounded-full"
            />
          </div>
          <div>
            <p className="text-lg md:text-xl">
              Hosted by {dataroom.hotel.name}
            </p>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
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
            </div>
          </div>
        </div>
        {/* hosted*/}{" "}
        <button style={{background:'#0f60e3',padding:'8px 8px',marginBottom:'100px'}} className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transation-all cursor-pointer">
          Contact Now
        </button>
      </div>
       </Animation>
    )
    
  );
}

export default Roomdetalis;
