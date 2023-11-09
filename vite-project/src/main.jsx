import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";

// import Counter from "./features/counter/counter.layout.jsx";
// import Calculator from "./features/calculator/Calculator.jsx";
import Products from "./features/Products/Products.layout.jsx";
import MyCart from "./features/Cart/Cart.Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    
    {/* <Counter />
      <Calculator /> */}
      {/* <Products/> */}
   <div style={{ display: "flex", gap: 12 }}>
      <div style={{ flex: "70%" }}>
        <Products />
      </div>
      <div style={{ flex: "30%" }}>
        <MyCart />
      </div>
    </div>
  </Provider>
);
