import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { itemsState } from "../recoil/items";
import Navbar from "../components/Navbar";
import Item from "../components/Item";
import { FaShopify } from "react-icons/fa";
import * as api from "../api/index";

function Home() {
  const [items, setItems] = useRecoilState(itemsState);

  useEffect(() => {
    async function getItems() {
      try {
        const response = await api.getItems();
        setItems(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getItems();
  }, []);

  return (
    <div className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar />
      <div className="flex flex-col items-center h-screen w-full ">
        <div className="flex flex-col items-center w-3/6 rounded mt-8 p-8 mb-8 bg-slate-100">
          <div className="flex justify-center items-center mb-8">
            <FaShopify className="mr-4 text-2xl" />
            <p className="text-xl italic">Items on Sale</p>
            <FaShopify className="ml-4 text-2xl" />
          </div>
          <div className="grid grid-cols-2 gap-8 w-full px-4">
            {items &&
              items.map((item) => {
                let { name, price, desc, id } = item;
                return <Item key={id} name={name} price={price} desc={desc} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
