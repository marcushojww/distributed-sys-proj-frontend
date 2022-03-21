import React from "react";
import Navbar from "../components/Navbar";

function Cart() {
  return (
    <div className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar />
      <div className="flex flex-col items-center h-screen w-full ">
        <div className="flex flex-col items-center w-3/6 rounded mt-8 p-8 mb-8 bg-slate-100"></div>
      </div>
    </div>
  );
}

export default Cart;
