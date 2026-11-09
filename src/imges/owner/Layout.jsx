import { Outlet } from "react-router-dom"
import Navbar from "../../componet/owenr/Navbar"
import Siderbar from "../../componet/owenr/Siderbar"
import Animation from "../../componet/anmation/Animation"


function Layout() {
  return (
  

  
    <div className="flex flex-col h-screen">
      <Navbar/>
  <Animation>
      <div className='flex h-full'>
        <Siderbar/>
        <div className="flex-1 p-4 pt-10 md:px-10 h-full">
            <Outlet/>
        </div>
      </div>
      </Animation>
    </div> 
     
  )
}

export default Layout
