import { assets } from "../../img/assets";

const Footer = () => {
  return (
    <div style={{ background: "rgb(15, 25, 49)"}}>
      <div
        style={{ padding: "30px 2px 2px 20px" }}
        className="countenr text-gray-400 pt-8 px-6 md:px-16 lg:px-24 xl:px-32"
      >
        <div className="flex flex-wrap justify-between gap-12 md:gap-6">
          <div className="max-w-80">
            <img
              src={assets.logo}
              alt="logo"
              style={{ marginBottom: "10px" }}
              className="mb-4  h-8 md:h-9"
            />
            <p style={{ paddingBottom: "10px" }} className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <div
              style={{ paddingBottom: "40px" }}
              className="flex items-center gap-3 mt-4"
            >
              {/* Instagram */}
              <img src={assets.instagramIcon} alt="ins" />
              <img src={assets.facebookIcon} alt="fes" />
              <img src={assets.linkendinIcon} alt="link" />
              <img src={assets.twitterIcon} alt="twi" />
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-100">COMPANY</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg text-gray-100">SUPPORT</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Safety Information</a>
              </li>
              <li>
                <a href="#">Cancellation Options</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>

          <div className="max-w-80">
            <p className="text-lg text-gray-100">STAY UPDATED</p>
            <p style={{ padding: "20px 0px" }} className="mt-3 text-sm">
              Subscribe to our newsletter for inspiration and special offers.
            </p>
            <div className="flex items-center mt-4">
              <input
                type="text"
                className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none"
                placeholder="Your email"
              />
              <button className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r">
                {/* Arrow icon */}
                <svg
                  className="w-4 h-4 text-white"
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
          </div>
        </div>
        <hr className="border-gray-300 mt-8" />
        <div
          style={{ padding: "20px 0px" }}
          className="flex flex-col md:flex-row gap-2 items-center justify-between py-5"
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
