import { useState } from "react";
import { assets, dashboardDummyData } from "../../img/assets";
import Animation from "../../componet/anmation/Animation";

function Dashboardd() {
  const [dashboard,setdashboard]=useState(dashboardDummyData)
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


      <div style={{padding:"30px 0px"}} className="flex gap-4 my-8">
        <div style={{padding:"10px",background:"whitesmoke",borderColor:'#e8e8e8'}}className="bg-whitesmoke border border-red rounded flex p-4 pr-8">
          <img src={assets.totalBookingIcon} alt="total"className="max-sm:hidden h-10" />
          <div  className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Toytal Booking</p>
            <p className="text-neutral-400 text-base">{dashboard.totalBookings}</p>
          </div>

        </div>
        <div style={{padding:"10px",background:"whitesmoke",borderColor:'#e8e8e8'}}className="bg-#444 border border-#666 rounded flex p-4 pr-8">
          <img src={assets.totalBookingIcon} alt="total"className="max-sm:hidden h-10" />
          <div  className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Toytal Revenue</p>
            <p className="text-neutral-400 text-base">{dashboard.totalRevenue}</p>
          </div>

        </div>

      </div>
      <h2 className="text-xl text-blue-950/70 foont-medium mb-5">Recent Booking</h2>

      <div style={{margin:'30px 0px'}} className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll ">

        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th style={{padding:'10px'}} className="py-3 px-4 text-gray-800 font-medium">User Name</th>
              <th style={{padding:'10px'}} className="py-3 px-4 text-gray-800 font-medium">Room Name</th>
              <th style={{padding:'10px'}} className="py-3 px-4 text-gray-800 font-medium">Total Amount</th>
              <th style={{padding:'10px'}} className="py-3 px-4 text-gray-800 font-medium">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {dashboard.bookings.map((item,index)=>(
              <tr  key={index}>
                <td style={{padding:'10px'}} className="py-3 px-4 text-gray-700 border-t border-gray-300">{item.user.username}</td>

                <td style={{padding:'10px'}} className="py-3 px-4 text-gray-700 border-t border-gray-300">{item.room.roomType}</td>
                <td style={{padding:'10px'}} className="py-3 px-4 text-gray-700 border-t border-gray-300">$ {item.totalPrice}</td>

                <td style={{padding:'10px'}} className="py-3 px-4 text-gray-700 border-t border-gray-300 flex">
                  <button style={{padding:'4px',borderRadius:'10px'}} className={`py-1 px-3 text-xs rounded-fulll mx-auto ${item.isPaid?'bg-green-200 text-green-600':'bg-yellow-200 text-yellow-600'}`}>{item.isPaid?'Completed':'Pending'}</button>
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

export default Dashboardd;
