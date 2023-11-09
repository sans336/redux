// MyCart.js

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./Cart.Slice";

const MyCart = () => {
  const dispatch = useDispatch();
 
  const cartList = useSelector((state) => state.myCart|| []);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  const isInCart = (itemId) => {
    return cartList.some((item) => item.id === itemId);
  };

  return (
    <div>
      <h1>My Cart</h1>
      {cartList.length> 0 ? (
        cartList.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.image} width={20} alt={item.title} />
              <span>
                {item.title} : {item.price}$
              </span>
            </div>
            <div>
              {isInCart(item.id) ? (
                <>
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    Remove from cart
                  </button>
                  {/* You can add more functionality related to updating quantity here */}
                  
                </>
              ) : (
                <button onClick={() => handleAddToCart(item)}>
                  Add to cart
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No Products in the cart</p>
      )}
    </div>
  );
};

export default MyCart;
