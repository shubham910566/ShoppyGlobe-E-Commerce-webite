import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";

// Displays cart items with total price
function Cart() {
  const cartItems = useSelector((state) => state.cart?.items) || [];

  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  if (!cartItems || cartItems.length === 0) {
    return <div className="empty-cart">🛒 Your cart is empty</div>;
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛍️ Cart Items</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <h3 className="cart-total">
        Total: <span>${totalPrice.toFixed(2)}</span>
      </h3>
    </div>
  );
}

export default Cart;