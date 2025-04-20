import { useSelector, useDispatch } from "react-redux";
import useFetchData from "../utils/hooks/useFetchData";
import ProductItem from "./ProductItem";
import { setSearchTerm } from "../utils/searchSlice";
import "./ProductList.css";

function ProductList() {
    const dispatch = useDispatch(); // Initializes the Redux dispatch function.
    const search = useSelector((state) => state.search); // Accesses the current search term from the Redux store.

    // Fetching data using a custom hook
    const { data, loading, error } = useFetchData("https://dummyjson.com/products");

    // Filtering products based on the search term
    const filteredData = Array.isArray(data)
        ? data.filter((item) =>
              (item.title || "").toLowerCase().includes(search.toLowerCase())
          )
        : [];

    // Conditional rendering for different states: loading, error, and results
    if (loading) return <div className="status-text">Loading...</div>;
    if (error) return <div className="status-text error">Error: {error}</div>;

    return (
        <div className="product-list-container">
            {/* Search input field */}
            <input
                type="text"
                className="search-input"
                placeholder="Search Products"
                value={search}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))} // Updates Redux store with user input.
            />
            <div className="product-grid">
                {/* Render filtered products or show 'no results' message */}
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <ProductItem key={item.id} item={item} />
                    ))
                ) : (
                    <p className="no-results">No products found</p>
                )}
            </div>
        </div>
    );
}

export default ProductList; // Exports the component for external use.