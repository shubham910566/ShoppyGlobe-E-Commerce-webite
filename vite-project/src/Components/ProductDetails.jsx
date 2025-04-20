import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

// Fetches and displays product details
function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError("Unable to load product details. Please try again.");
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!data) return null;

  return (
    <div className="product-details">
      <h1 className="product-title">{data.title}</h1>
      <img className="product-image" src={data.thumbnail} alt={data.title} />
      <p className="product-description">{data.description}</p>
      <p className="product-price">
        Price: <span>${data.price}</span>
      </p>
      <p className="product-brand">
        <strong>Brand:</strong> {data.brand}
      </p>
      <p className="product-category">
        <strong>Category:</strong> {data.category}
      </p>
      <p className="product-rating">
        <strong>Rating:</strong> ⭐ {data.rating}
      </p>
      <p className="product-stock">
        <strong>In Stock:</strong> {data.stock} units
      </p>
    </div>
  );
}

export default ProductDetails;