import { Link } from "react-router-dom";
import { assets } from "../../../img/assets";
import MyComponent from "../../../componet/stateSroll/Mycomponeet";

function Boxsfeatured({ room, index }) {
  return (




    <MyComponent key={room._id}>


    <Link to={"/room/" + room._id} onClick={()=>{
        scrollTo(0,0)
    }}>
      <div
      className="animbox"
        style={{
          borderRadius: "12px",
          width: "100%",
          cursor: "pointer",
          boxShadow: "0px 1px 9px #94949476",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <img
          style={{ borderRadius: "10px 10px 0px 0px", width: "100%" }}
          src={room.images[0]}
          alt="photo"
        />
        <div style={{ padding: "15px 5px 10px 10px",width:'100%' }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h5>{room.hotel.name}</h5>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={assets.starIconFilled} alt="" />
              <span>4.5</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "3px 0px 15px 0px",
                color: "#555555c2",
              }}
            >
              <img src={assets.locationIcon} alt="" />
              <p style={{ fontSize: "14px" }}>Main Rood 123 street,23 Colony</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>
              $ {room.pricePerNight}/
              <sub style={{ color: "#444444a5" }}>night</sub>
            </p>
            <button
              style={{
                padding: "5px 10px",
                borderRadius: "8px",
                border: "1px solid #adaaaab5",
                color:'rgba(174, 174, 174, 0.72)',
                cursor:'pointer'
              }}
            >
              Book Now
            </button>
          </div>

        </div>

      </div>

    </Link>

    </MyComponent>
  );
}

export default Boxsfeatured;
