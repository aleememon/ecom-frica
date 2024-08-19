import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex mt-28 md:mt-24">
      <div className="flex-1 flex flex-col justify-center items-center md:items-start">
        <p className="text-lg text-center px-4 md:text-left md:text-6xl text-[#143A51] font-bold md:ml-10 md:mt-24">
          Buy Latest Labtops and Mobile Phones at Affordable Prices.
        </p>
        <Link to={"/buynow"} className="text-white mt-5 ml-4 md:ml-16 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Buy Now
        </Link>
      </div>
      <div className="flex-1 hidden md:flex justify-center">
        <img
          className="h-auto rounded-lg md:pr-20 md:mt-20 mx-auto"
          src="https://www.honor.com/content/dam/honor/uk/blog/2022/how-to-connect-phone-to-laptop/img1.jpg"
          alt="hero-section-img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
