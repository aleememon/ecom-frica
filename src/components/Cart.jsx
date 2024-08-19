import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem, updateItemQuantity } from "../features/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.items);
  let totalPrice = cart
    .map((item) => item.price * item.qty)
    .reduce((acc, curr) => acc + curr, 0);

  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  const handleIncrementItem = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      dispatch(updateItemQuantity({ id, qty: item.qty + 1 }));
    }
  };

  const handleDecrementItem = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.qty > 0) {
      dispatch(updateItemQuantity({ id, qty: item.qty - 1 }));
    }
  };

  return (
    <>
      <div className="flex flex-col items-center p-4">
        <h1 className="text-[#143A51] uppercase text-2xl md:text-4xl font-bold mb-8">
          Shopping Cart
        </h1>
        <div className="bg-gray-100 rounded-lg p-4 md:p-8 w-full max-w-4xl">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 mb-4 p-4 bg-white rounded-lg shadow-md"
              >
                <img
                  className="w-full md:w-72 h-32 md:h-72 object-cover rounded-lg"
                  src={item.img}
                  alt={item.name}
                />
                <div className="flex flex-col justify-between w-full md:w-64">
                  <h1 className="font-bold text-lg md:text-xl">{item.name}</h1>
                  <div className="mt-3 md:mt-0 flex flex-row items-center">
                    <button
                      onClick={() => handleDecrementItem(item.id)}
                      className="md:px-2 px-1 text-white font-semibold text-center rounded-md bg-red-500"
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <p className="px-2 font-bold text-lg">{item.qty}</p>
                    <button
                      onClick={() => handleIncrementItem(item.id)}
                      className="md:px-2 px-1 text-white font-semibold text-center rounded-md bg-red-500"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  {/* Adjust quantity based on actual data */}
                  <h2 className="font-bold text-xl mt-2">${item.price}</h2>
                </div>
                <div
                  onClick={() => handleDeleteItem(item.id)}
                  className="flex flex-row items-start h-auto w-full text-red-500 hover:text-red-700 duration-300 cursor-pointer md:w-32"
                >
                  <i className="fa-solid fa-trash-can  cursor-pointer text-lg md:text-xl"></i>
                  <span className="ml-2">Remove</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-2xl md:text-4xl font-semibold text-[#143A51] mt-5">
              Your Cart is Empty 😢
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {totalPrice ? (
          <div className="md:text-4xl text-2xl font-bold items-center gap-20 md:gap-[700px] flex">
            <h1 className="">Total</h1>
            <h1>${totalPrice}</h1>
          </div>
        ) : (
          ""
        )}
        {totalPrice ? (
          <Link
            to={"/checkout"}
            className="mt-5 px-5 py-2.5 text-center text-white text-xl hover:bg-black duration-300 rounded-md bg-red-500 w-40"
          >
            Checkout
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Cart;
