import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Checkout.css";

// Displays cart summary for checkout
function Checkout() {
  const cartItems = useSelector((state) => state.cart?.items) || [];

  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Checkout</h2>
        <p>Your cart is empty. Add items to proceed.</p>
        <Link to="/">Shop Now</Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-summary">
        <h3>Order Summary</h3>
        <ul className="checkout-items">
          {cartItems.map((item) => (
            <li key={item.id} className="checkout-item">
              <span>{item.title}</span>
              <span>Qty: {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="place-order-btn">Place Order</button>
        <Link to="/cart" className="back-to-cart">
          Back to Cart
        </Link>
      </div>
    </div>
  );
}

export default Checkout;