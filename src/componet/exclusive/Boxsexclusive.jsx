import { assets } from "../../img/assets";
import MyComponent from "../stateSroll/Mycomponeet";

function Boxsexclusive({ box }) {
  return (
    <MyComponent>

   
    <div
    className="anioffer"
      style={{
        backgroundImage: `url(${box.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "75px 10px 50px 0px",
        position: "relative",
        color: "white",
        borderRadius: "10px",
      }}
    >
      <h5 style={{ paddingLeft: "10px" }}>{box.title}</h5>
      <p style={{ fontSize: "14px", color: "#9b9b9bc7", paddingLeft: "10px" }}>
        {box.description}
      </p>
      <p
        style={{
          paddingLeft: "10px",
          background: "white",
          width: "fit-content",
          color: "black",
          padding: "2px",
          borderRadius: "10px",
          position: "absolute",
          fontSize: "13px",
          top: "15px",
          left: "10px",
        }}
      >
        <span>{box.priceOff}</span>% OFF{" "}
      </p>
      <span style={{ paddingLeft: "10px", fontSize: "12px", color: "#b5b5b5" }}>
        Expering {box.expiryDate}
      </span>
      <div
        style={{
          position: "absolute",
          bottom: "5px",
          left: "10px",
          display: "flex",
          alignItems: "end",
        }}
      >
        <div
          className="btnarrow"
          style={{
            width: "fit-content",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "10px",
            padding: "2px",
          }}
        >
          {" "}
          <button style={{ cursor: "pointer" }}>View Offer</button>
          <img
            className="arrow invert"
            src={assets.arrowIcon}
            alt="arrowicon"
          />
        </div>
      </div>
    </div>
 </MyComponent>
  );
}

export default Boxsexclusive;
