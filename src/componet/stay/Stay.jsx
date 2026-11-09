// import Head from "../headdetails/Head";

import MyComponent from "../stateSroll/Mycomponeet";

const Stay = () => {
  return (
    <MyComponent>

  
    <div style={{ background: "rgb(245, 245, 245)", padding: "80px 0px " }}>
      <div className="countenr">
        <div className="flex flex-col items-center w-full max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
          {/* <Head
            tital={"Stay Inspired"}
            pragraph={
              "Good iam studen an feculty a comuters a ainformation sohag unviristy iam hazve skills "
            }
          /> */}
             
    <div style={{
          display: 'flex',
    flexDirection: 'column',
   
    alignItems: 'center',
    gap: '15px',
    textAlign: 'center',
    }}>
        <div style={{fontSize: '29px',
lineHeight: '33px',
fontWeight: '400',
margin: '60px 0px 5px 0px'}}>
            <h2>Stay Inspired</h2>
        </div>
        <p className="details">Good iam studen an feculty a comuters a ainformation sohag unviristy iam hazve skills</p>
      
    </div>
          <div
            style={{ paddingBottom: "30px" }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6"
          >
            <input
              style={{ padding: "10px 5px 15px 10px" }}
              type="text"
              className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full"
              placeholder="Enter your email"
            />
            <button
              style={{ padding: "10px 15px", cursor: "pointer" }}
              className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all"
            >
              Subscribe
              <svg
                className="w-4 h-4 text-white group-hover:translate-x-1 transition-all"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
          <p
            style={{ paddingBottom: "50px" }}
            className="text-gray-500 mt-6 text-xs text-center"
          >
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates.
          </p>
        </div>
      </div>
    </div>  
    </MyComponent>
  );
};

export default Stay;
