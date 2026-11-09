import { useState } from "react";
import { assets } from "../../img/assets";
import Animation from "../../componet/anmation/Animation";

function Addroom() {
  const [images,setimages]=useState({
    1:null,
    2:null,
    3:null,
    4:null,
   
  })
  const [inputs,setinputs]=useState({
    roomtype:'',
    pricepernight:0,
    amenities:{
      'Free Wifi':'false',
      'Free Breakfast':'false',
      'Room Service':'false',
      'Mountain View':'false',
      'Pool Access':'false',
    }
  })
  return (
    <Animation>

   
    <form style={{padding:'0px 0px 0px 30px',overflow:'auto',maxHeight:'90vh'}}>
      <div className="excl">
        <div className="offer">
          <h2 style={{ lineHeight: "21px" }}>Exclusive Offers</h2>
        </div>
        <p className="detal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          officia ratione nemo, autem quidem minima veritatis ullam fugiat iusto
          non vero? Iusto nam suscipit dolore!center
        </p>
      </div>

      <p style={{paddingTop:'20px'}} className="text-gray-800vmt-10">Images</p>
      <div  className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {Object.keys(images).map((key)=>(
          <label htmlFor={`roomImage${key}`} key={key}>
            <img className="max-h-13 cursor-pointer opacity-80" src={images[key]?URL.createObjectURL(images[key]):assets.uploadArea} alt="" />
            <input type="file" accept="image/*" id={`roomImage${key}`} hidden onChange={(e)=>{setimages({...images,[key]:e.target.files[0]})}}/>
          </label>
        ))}
        

      </div>
      <div style={{padding:'20px 0px'}} className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Room Type</p>
          <select value={inputs.roomtype} onChange={(e)=>{setinputs({...inputs,roomtype:e.target.value
          })}} className="border opacuty-70 border-gray-300 mt-1 rpunded p-2 w-full">
            <option value="">Select Room Type</option>
            <option value="Singel Bes">Singel Bed</option>
            <option value="Double Bes">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Singel Suite">Family Suite
            </option>
          </select>
        </div>
        <div>
          <p className="mt-4 text-gray-800">
            Price <span className="text-xs">/night</span>
          </p>
          <input type="number" placeholder="0" className="border border-gray-300 mt-1 rounded p-2 w-24" onChange={(e)=>{setinputs({...inputs,pricepernight:e.target.validationMessage})
          }} value={inputs.pricepernight} id="" />
        </div>
      </div>

      <p className="text-gray-800 mt-4">Amenoties</p>
      <div  className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
        {Object.keys(inputs.amenities).map((amen,indx)=>(
          <div key={indx}>
            <input type="checkbox" id={`amenities${indx+1}`}checked={!inputs.amenities[amen]} onChange={()=> setinputs({...inputs,amenities:{...inputs.amenities,[amen]:!inputs.amenities[amen]}})} />
            <label style={{marginLeft:'2px'}} htmlFor={`amenities${indx+1}`}>{amen}</label>
          </div>
        ))}
      </div>
      <button style={{padding:'6px 15px',margin:'20px 0px'}} className="bg-blue-600 text-white px-8 py-2 rounded mt-8 cursor-pointer">
        Add Room
      </button>
    </form> 
    </Animation>
  );
}

export default Addroom;
