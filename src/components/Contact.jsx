import React from "react";

const Contact = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col ">
      <h1 className="font-bold text-4xl uppercase mb-10">contact us</h1>
      <form className="flex flex-col gap-10 w-[300px] sm:w-[400px] md:w-[500px]">
        <input
          type="text"
          className="outline-none  border-black border-b-[1px] placeholder:text-gray-500 placeholder:text-lg"
          placeholder="Name"
          name="name"
          required
        />
        <input
          type="email" // Use type="email" for email validation
          className="outline-none  border-black border-b-[1px] placeholder:text-gray-500 placeholder:text-lg"
          placeholder="Email"
          name="email"
          required
        />
        <input
          type="tel" // Use type="tel" for phone numbers
          className="outline-none  border-black border-b-[1px] placeholder:text-gray-500 placeholder:text-lg"
          placeholder="Phone Number"
          required
          pattern="[0-9]{10}" // This pattern enforces a 10-digit phone number
        />
        <textarea
          name="message"
          type="text"
          rows="2"
          placeholder="Message"
          className="outline-none  border-black border-b-[1px] placeholder:text-gray-500 placeholder:text-lg"
          required
        />
        <div className="flex justify-center items-center">
          <input
            type="submit"
            className="px-5 py-2.5 text-2xl w-36 rounded-full cursor-pointer hover:bg-black duration-500 bg-red-400 text-white"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
