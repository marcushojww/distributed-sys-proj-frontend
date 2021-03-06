import React from "react";
import { FaCartPlus } from "react-icons/fa";
import * as api from "../api/index";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/user";

function Item({ name, price, desc, img, iid, uid }) {
  const [user, setUser] = useRecoilState(userState);

  async function addToCart() {
    try {
      const response = await api.addToCart(
        {
          iid,
          uid: uid.toString(),
          img,
          desc,
          price,
          name,
        },
        uid
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <img className="w-full h-32 object-cover" src={img} alt="shopping item" />
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
