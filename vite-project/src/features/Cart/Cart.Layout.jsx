import { useSelector } from "react-redux";
import { removeFromCart,updateQuantity } from "./Cart.Slice";
import { useDispatch } from "react-redux";

const MyCart = () => {
  const cartList = useSelector((state) => state.myCart.data);
const dispatch = useDispatch();

   const onRemoveFromCart = (productId) => {
     dispatch(removeFromCart({ id: productId }));
     
  };

   const onUpdateQuantity = (productId, newQuantity) => {
    dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
  };


  return (
    <div>
      <h1>My Cart</h1>
      {cartList.length > 0 ? (
        cartList.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                gap: "4px",
                border: "1px solid silver",
                padding: "4px",
                borderRadius: "6px",
                alignItems: "center",
                marginBottom: 6,
              }}
              key={item.id}
            >
              <img src={item.image} width={20} />
              <span style={{ fontSize: "12px" }}>
                {item.title} : {item.price}$
              </span>

              { (
                  <div>
                    <button onClick={() => onRemoveFromCart(item.id)}>
                      Remove from cart
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={
                        (cartList &&
                          cartList.find((cartItem) => cartItem.id === item.id)
                            ?.quantity) ||
                        1
                      }
                      onChange={(e) =>
                        onUpdateQuantity(item.id, parseInt(e.target.value, 10))
                      }
                    />
                </div>
                

                )}
            </div>
          );
        })
      ) : (
        <p>No Products in the cart</p>
      )}
    </div>
  );
};

export default MyCart;