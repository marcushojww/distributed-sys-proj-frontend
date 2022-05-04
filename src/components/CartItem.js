import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import * as api from "../api/index";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/user";

function CartItem({ name, price, desc, img, iid }) {
  const [user, setUser] = useRecoilState(userState);

  const removeCartItem = async () => {
    try {
      const response = await api.removeCartItem(`${user.userId}-${iid}`);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <img className="w-full h-32 object-cover" src={img} alt="shopping item" />
      <div className="px-6 py-4">
        <div className="font-bold text-md">{name}</div>
        <div className="text-md">{desc}</div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-md rounded-xl">{price}</div>
          <FaTrashAlt
            className="text-2xl hover:cursor-pointer"
            onClick={removeCartItem}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
