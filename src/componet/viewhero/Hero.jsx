import Animation from "../anmation/Animation"
import Viewdatals from "../nav/viewdetalia"

function Hero() {
  return (
  

    
    <div className="viewhero">
        
  
        <div
          className="details"
          style={{ position: "absolute", top: "50%", left: "10%" }}
        >
          <div
            style={{
              background: "#487ca7a3",
              maxWidth: "200px",
              textAlign: "center",
              padding: "5px 10px",
              borderRadius: "15px",
              color: "white",
              fontSize: "12px",
            }}
          >
            <p>The Uitmate Hotel Experience</p>
          </div>

          <h2 className="discover">
            Discover Your Perfect Gateway Destination
          </h2>
          <p
            style={{ color: "white", maxWidth: "400px", marginBottom: "20px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas
            tempora soluta.
          </p>

          <Viewdatals />
        </div>  
       
      </div>
  
  )
}

export default Hero
