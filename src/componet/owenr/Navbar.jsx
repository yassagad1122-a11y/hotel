import { Link } from "react-router-dom"
import { assets } from "../../img/assets"
import { UserButton } from "@clerk/react"


function Navbar() {
  return (
    <div style={{padding:'10px 20px'}} className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <Link to='/'>
        <img src={assets.logo} alt="logo" className="h-9 invert opacity-80"/>
        </Link>
      <UserButton/>
    </div>
  )
}

export default Navbar
