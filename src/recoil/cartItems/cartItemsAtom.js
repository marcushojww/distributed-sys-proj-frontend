import { atom } from "recoil";

const cartItemsState = atom({
  key: "cartItemsState",
  default: [],
});

export default cartItemsState;
