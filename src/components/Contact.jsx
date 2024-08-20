import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const schema = z.object({
  name: z.string().nonempty("Name is Required"),
  email: z
    .string()
    .email("Invalid Email Address")
    .nonempty("Email is Required"),
  phone: z.string().regex(/^\d{4}\s\d{7}$/, "Phone number must be 11 digits"),
  message: z.string().nonempty("Message is Required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "contact-us"), {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        timestamp: new Date(),
      });
      console.log(data); // Log the data if needed for debugging
      reset(); // Clear the form fields
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="flex h-screen mt-36 md:mt-32 justify-center items-center flex-col ">
      <h1 className="font-bold text-4xl uppercase mb-10">Contact Us</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10 w-[300px] sm:w-[400px] md:w-[500px]"
      >
        <input
          {...register("name")}
          type="text"
          className="outline-none border-black border-b-[1px] placeholder:text-gray-500 placeholder:text-lg"
          placeholder="Name"
        />
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}

        <input
          {...register("email")}
          type="email"
          className="outline-none border-black border-b-[1px] placeholder:text-gray-500 placeholder:text-lg"
          placeholder="Email"
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}

        <input
          {...register("phone")}
          type="tel"
          className="outline-none border-black border-b-[1px] placeholder:text-gray-500 placeholder:text-lg"
          placeholder="Phone Number"
        />
        {errors.phone && (
          <div className="text-red-500">{errors.phone.message}</div>
        )}

        <textarea
          {...register("message")}
          rows="2"
          placeholder="Message"
          className="outline-none border-black border-b-[1px] placeholder:text-gray-500 placeholder:text-lg"
        />
        {errors.message && (
          <div className="text-red-500">{errors.message.message}</div>
        )}

        <div className="flex justify-center items-center">
          <button
            disabled={isSubmitting}
            type="submit"
            className="px-5 py-2.5 md:text-2xl md:w-52 rounded-full cursor-pointer hover:bg-black duration-500 bg-red-400 text-white"
          >
            {isSubmitting ? "Submitting..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
