import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import * as api from "../api/index";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/user";
import { FaShopify } from "react-icons/fa";
import CartItem from "../components/CartItem";

function Cart() {
  const [user, setUser] = useRecoilState(userState);
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    async function getCartItems() {
      try {
        const response = await api.getCartItems(user.userId);
        setCartItems(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getCartItems();
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar />
      <div className="flex flex-col items-center w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex flex-col items-center w-3/6 rounded mt-8 p-8 mb-8 bg-slate-100">
          <div className="flex justify-center items-center mb-8">
            <FaShopify className="mr-4 text-2xl" />
            {user && (
              <p className="text-xl italic">
                User {user.userId}'s Shopping Cart
              </p>
            )}
            <FaShopify className="ml-4 text-2xl" />
          </div>
          <div className="grid grid-cols-2 gap-8 w-full px-4">
            {cartItems &&
              cartItems.map((item) => {
                let { desc, iid, img, name, price, uid } = item;
                return (
                  <CartItem
                    key={iid}
                    iid={iid}
                    name={name}
                    price={price}
                    desc={desc}
                    img={img}
                  ></CartItem>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
