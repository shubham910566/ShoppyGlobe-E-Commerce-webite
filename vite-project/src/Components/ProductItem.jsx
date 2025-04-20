import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import "./ProductItem.css";

// Displays a single product with add-to-cart button
function ProductItem({ item }) {
  const dispatch = useDispatch(); // To dispatch actions to the Redux store
  const [showPopup, setShowPopup] = useState(false); // Manages the display of a "Added to Cart" popup
  const popupTimeoutRef = useRef(null); // Ref to track the popup timeout for clearing later

  // Handles cases where the `item` prop might be undefined or invalid
  if (!item || !item.id) {
    return null; // Safeguard: Return null to avoid rendering an incomplete component
  }

  // Function to handle adding an item to the cart
  function handleAddToCart() {
    try {
      // Dispatches the item along with default quantity to the Redux store
      dispatch(addToCart({ ...item, quantity: 1 }));

      // Clears any existing timeout to prevent overlapping timers
      if (popupTimeoutRef.current) {
        clearTimeout(popupTimeoutRef.current);
      }

      // Sets the popup to visible and initializes a timeout to hide it after 2 seconds
      setShowPopup(true);

      popupTimeoutRef.current = setTimeout(() => {
        setShowPopup(false);
        popupTimeoutRef.current = null; // Resets the ref for future reuse
      }, 2000);
    } catch (err) {
      console.error("Add to Cart Error:", err); // Handles potential errors in the add-to-cart flow
    }
  }

  return (
    <div className="product-item">
      {/* Product image */}
      <img
        className="product-thumbnail"
        src={item.thumbnail || "placeholder.jpg"} // Fallback to a placeholder if the thumbnail is missing
        alt={`Image of ${item.title || "Product"}`} // Dynamic alt text for accessibility
      />
      <h3 className="product-title">{item.title || "Untitled Product"}</h3> {/* Fallback title */}
      <p className="product-price">${item.price || 0}</p> {/* Fallback price */}

      <div className="product-buttons">
        {/* Link to product details */}
        <button className="view-details-btn">
          <Link to={`/product/${item.id}`} className="view-link">
            View Details
          </Link>
        </button>

        {/* Add-to-cart button */}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      {/* Display popup when an item is added to the cart */}
      {showPopup && (
        <div className="cart-popup">
          ✅ Added to cart!
        </div>
      )}
    </div>
  );
}

// Type-checking for `item` prop
ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired, // Ensures `id` is a required number
    title: PropTypes.string,         // Optional string for product title
    price: PropTypes.number,         // Optional number for product price
    thumbnail: PropTypes.string,     // Optional string for product thumbnail URL
  }).isRequired, // Ensures `item` is required
};

export default ProductItem;