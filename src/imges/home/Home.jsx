import Animation from "../../componet/anmation/Animation";
import Exclusive from "../../componet/exclusive/Exclusive";
import Guests from "../../componet/guests/Guests";
import Stay from "../../componet/stay/Stay";
import Hero from "../../componet/viewhero/Hero";
import Featured from "./featured/featured";

function Home() {
  return (
    <>
    <Animation>

   
      <Hero />
      <Featured />

      <Exclusive />

      <Guests />

      <Stay />
       </Animation>
    </>
  );
}

export default Home;
