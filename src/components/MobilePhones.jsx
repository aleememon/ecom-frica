import React from "react";
import { phones } from "../data/data";
import { useDispatch } from "react-redux";
import { addToCart, items } from "../features/cartSlice";

const MobilePhones = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (phone) => {
    dispatch(items());
    dispatch(addToCart(phone));
  };
  return (
    <>
      <h1 className="uppercase text-center m-8 text-[#143A51] font-semibold text-4xl">
        mobile phones
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:ml-14 gap-6">
        {phones.map((phone) => (
          <div
            key={phone.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="p-8 rounded-t-lg"
              src={phone.img}
              alt="product image"
            />
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {phone.name}
                </h5>
              </a>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${phone.price}
                </span>
                <button
                  onClick={() => handleAddToCart(phone)}
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MobilePhones;
