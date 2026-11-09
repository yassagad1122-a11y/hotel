import { useState } from "react";
import {
  assets,
  userBookingsDummyData,
} from "../../img/assets";
import Animation from "../../componet/anmation/Animation";

function Mybook() {
  const [books, setbooks] = useState(userBookingsDummyData);
  return (
  

   <Animation>

 
    <div style={{paddingBottom:'150px'}} className="countenr py-28 md:pb md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <div
        style={{
          display: "flex",
          padding: "60px 0px",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <div className="addres" style={{ lineHeight: "55px" }}>
          <h2>My Bookings</h2>
        </div>
        <p className="details">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          ducimus qui placeat aliquam minus iste porro nihil impedit esse
          tempora.
        </p>
      </div>
      {/* tital */}
      <div className="max-w-6xl mt-8 w-full text-gray-800">
        <div className="md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>
      </div>
      {/* tital */}
      {/*  */}
      {books.map((book) => (
        <div
        
          key={book._id}
          className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 frist:border-t"
        >
          {/*  */}
          <div
            style={{ padding: "20px 0px" }}
            className="flex flex-col md:flex-row"
          >
            <img
              src={book.room.images[0]}
              alt="hotel-image"
              className="min-md:w-44 rounded shadow object-cover"
            />
            <div style={{paddingLeft:"10px"}} className="flex flex-col gap-1.5 max-md;mt-3 min-md:ml-4">
              <p className="text-2xl">
                {book.hotel.name}{" "}
                <span className="text-sm">({book.room.roomType})</span>
              </p>

              <div className="flex items-center gap-1 text-sm text-gray-500">
                <img src={assets.locationIcon} alt="location" />
                <span>{book.hotel.address}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <img src={assets.guestsIcon} alt="location" />
                <span>Guests: {book.guests}</span>
              </div>
              <p className="text-base">Total: ${book.totalPrice}</p>
            </div>
          </div>

          {/*  */}
          {/*  */}
          <div className="flex fclex-row md:items-center md:gap-12 mt-3 gap-8">
            <div>
                <p>Check-In:</p>
                <p className="className=text-gray-500 text-sm">
                    {new Date(book.checkInDate).toDateString()}
                </p>
            </div>
            <div>
                <p>Check-Out:</p>
                <p className="className=text-gray-500 text-sm">
                    {new Date(book.checkOutDate).toDateString()}
                </p>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex flex-col items-start justify-center pt-3">
            <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${book.isPaid?'bg-green-500':'bg-red-500'}`}></div>
                <p className={`text-sm ${book.isPaid?'text-green-500':'text-red-500'}`}>
                    {book.isPaid?"Paid":'Unpaid'}
                </p>
            </div>
            {!book.isPaid && (
                <button style={{padding:'5px',margin:'10px 0px'}} className="px-4 py-1.5 mt-4 text-xs border boredr-gray-400 rounded-full hover:bg-gray-50 transation-all cursor-pointer">Pay Now</button>
            )}
          </div>
          {/*  */}
        </div>
      ))}
      {/*  */}
    </div> 
    </Animation>
  );
}

export default Mybook;
