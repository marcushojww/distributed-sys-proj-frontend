import React from "react";
import { FaCartPlus } from "react-icons/fa";
import * as api from "../api/index";

function Item({ name, price, desc }) {
  async function addToCart() {
    try {
      const response = await api.addToCart({
        id: "4",
        name: "test",
        price: "$1.00",
        desc: "description",
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-32 object-cover"
        src="https://media.wired.com/photos/60d27192a86e5ac15953a056/1:1/w_1458,h_1458,c_limit/Business-Amazon-Shopping-1279794636.jpg"
        alt="shopping item"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-md">{name}</div>
        <div className="text-md">{desc}</div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-md rounded-xl">{price}</div>
          <FaCartPlus
            className="text-2xl hover:cursor-pointer"
            onClick={addToCart}
          />
        </div>
      </div>
    </div>
  );
}

export default Item;
