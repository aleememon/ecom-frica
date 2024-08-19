import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#143A51] mt-10 md:mt-20 w-full h-auto py-10 text-white">
      <div className="flex flex-col md:flex-row md:mx-20 justify-between md:items-center p-10">
        <h1 className="uppercase text-2xl md:text-5xl font-bold">frica</h1>
        <ul className="flex gap-6 text-2xl mt-5 md:mt-0 md:text-4xl">
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-youtube"></i>
          </li>
        </ul>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-y-4 md:gap-y-0  mx-10 md:mx-32 mt-4">
        <div>
          <h1 className="font-bold text-3xl">About</h1>
          <p className="text-gray-300 ">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation u
          </p>
        </div>
        <div className="md:ml-10">
          <h1 className="font-bold text-3xl">Menu</h1>
          <ul className="flex text-gray-300 flex-col gap-y-5 mt-4">
            <li>Home</li>
            <li>Mobile Phones</li>
            <li>Computers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-3xl">Useful Link</h1>
          <ul className="flex flex-col gap-y-5 mt-4 text-gray-300 ">
            <li>Adipiscing</li>
            <li>Elit, sed do</li>
            <li>Eiusmod</li>
            <li>Tempor</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-3xl">Contact</h1>
          <ul className="flex flex-col gap-y-5 mt-4  ">
            <li>
              <i className="fa-solid fa-location-dot mr-3"></i>{" "}
              <span className="text-gray-300">London 145 United Kingdom</span>
            </li>
            <li>
              <i className="fa-solid fa-phone mr-3"></i>
              <span className="text-gray-300">+7586656566</span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot mr-3"></i>{" "}
              <span className="text-gray-300">volim@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
