import Animation from "../../componet/anmation/Animation";
import {  roomsDummyData } from "../../img/assets";

function Listroom() {
  return (
    <Animation>

   
    <div style={{padding:'0px 0px 0px 30px'}}>
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

      <div style={{margin:'30px 0px'}} className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th style={{padding:'10px'}} className="py-3 px-4 text-gray-800 font-medium">Name</th>
              <th style={{padding:'10px'}} className="py-3 px-4 text-gray-800 font-medium">Facility
              </th>
              <th style={{padding:'10px'}} className="py-3 px-4 text-gray-800 font-medium">Price / night</th>
              <th style={{padding:'10px'}} className="py-3 px-4 text-gray-800 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roomsDummyData.map((ele,index)=>(
              <tr key={index}>
                <td style={{padding:'10px'}} className="py-3 px-4 text-gray-700 border-gray-300">
                  {ele.roomType}
                </td>
                <td style={{padding:'10px'}} className="py-3 px-4 text-gray-700 border-gray-300 max-sm-hidden">
                  {ele.amenities.join(',')}
                </td>
                <td style={{padding:'10px'}} className="py-3 px-4 text-gray-700 border-gray-300 ">
                  {ele.pricePerNight}
                </td>
                <td style={{padding:'10px'}} className="py-3 px-4 text-gray-700 border-gray-300 text-sm text-red-500 text-center">
                  <label className="relative inline-flex items-cente cursor-pointer text-gray-900 gap-3">
                    <input type="checkbox" className="sr-only peer" checked={ele.isAvailable}/>
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition--transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
</div>
    </div>
     </Animation>
  );
}

export default Listroom;
