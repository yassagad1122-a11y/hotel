import { assets, cities } from "../../img/assets"
import '../rigsiter/rigister.css'
function Rigister() {
  return (
 

   
    <div className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70">
        <form action=""className="flex bg-white rounded-xl max-w-4xl max-md:mx-2" >
            <img style={{width:'250px',marginRight:'15px'}} src={assets.regImage} alt="reimage" className="mdhibl w-1/2 rounded-xl"/>
            <div className="relative flex flex-col items-center md:1/2 p-8 md:p-10">
            <img src={assets.closeIcon} alt="close" className="absolate top-4 right-4 h-4 w-4 cursor-pointer"/>
            <p className="tetx-2xl font-semibold mt-6">Register Your Hotel</p>

            <div className="w-full mt-4">
                <label htmlFor="name" className="font-medium text-gray-500">
                    Hotel Name
                </label>
                <input style={{padding:'6px',margin:'2px 0px'}} id="name" type="text" placeholder="Type here"  className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" required />
            </div>

            <div className="w-full mt-4">
                <label htmlFor="contact" className="font-medium text-gray-500">
                    Phone
                </label>
                <input style={{padding:'6px',margin:'2px 0px'}} id="contact" type="text" placeholder="Type here"  className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" required />
            </div>
            <div className="w-full mt-4">
                <label htmlFor="adders" className="font-medium text-gray-500">
                    Address
                </label>
                <input style={{padding:'6px',margin:'2px 0px'}} id="adders" type="text" placeholder="Type here"  className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light" required />
            </div>
            <div  className="w-full mt-4  mr-auto">
                <label htmlFor="city" className="font-medium text-gray-500">City</label>
                <select style={{padding:'6px',margin:'2px 0px'}}  className='className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"' required id="city">
                    <option value="">Select City</option>
                    {cities.map((city)=>(
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
            </div>
            <div style={{width:'100%'}}>
                            <button style={{padding:'4px 9px',marginTop:'20px'}} className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer">Register</button>

            </div>

            </div>
        </form>
    </div>
   
  )
}

export default Rigister
