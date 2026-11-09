import Header from "./componet/nav/Header";
// import hero from "../../img/heroImage.png";
import "./app.css";
// import Viewdatals from "./componet/nav/viewdetalia";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./imges/home/Home";
import Footer from "./componet/footer/Footer";
import Room from "./imges/room/Room";
import Roomdetalis from "./imges/roomdetalis/Roomdetalis";
import Mybook from "./imges/mybook/Mybook";
import Layout from "./imges/owner/Layout";
import Listroom from "./imges/owner/Listroom";
import Addroom from "./imges/owner/Addroom";
import Dashboardd from "./imges/owner/Dashboard";
import { useUser } from "@clerk/react";
import Reload from "./componet/reload/Reload";
// import Rigister from "./imges/rigsiter/Rigister";

function App() {
  const { user, isLoaded } = useUser();
   const isowenr = useLocation().pathname.includes("owenr");

  if (!isLoaded) {
    return <div style={{display:'flex',height:'100vh',justifyContent:'center',alignItems:'center'}}><Reload/></div>;
  }

  const myemail = import.meta.env.VITE_OWNER_EMAIL;
  // شيل السطر القديم بتاع isowenr واكتب ده واكتب إيميلك الحقيقي مكانه
  const isemail = user?.primaryEmailAddress?.emailAddress === myemail;


  return (
    <div className="flex flex-col min-h-screen">
      {!isowenr && <Header />}
      
      {/* <Rigister/> */}

      <div className="flex-grow">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room" element={<Room />} />
          <Route path="/room/:id" element={<Roomdetalis />} />
          <Route path="/mybook" element={<Mybook />} />

          <Route
            path="/owenr"
            element={isemail ? <Layout /> : <Navigate to="/" replace />}
          >
            <Route index element={<Dashboardd />} />
            <Route path="listroom" element={<Listroom />} />
            <Route path="addroom" element={<Addroom />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
