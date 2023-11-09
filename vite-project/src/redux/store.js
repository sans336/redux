import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/counter/counter.slice";

import ProductSlice from "../features/Products/Product.slice";
import CartSlice from "../features/Cart/Cart.Slice";

const store = configureStore({
  reducer: {
    Counter: CounterSlice,
    romeshproduct: ProductSlice,
    gokulCounter: CounterSlice,

    myCart: CartSlice,
  },
});
export default store;
