// src/App.jsx
import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

// Lazy-loaded components for code-splitting
const ProductList = lazy(() => import("./Components/ProductList"));
const ProductDetail = lazy(() => import("./Components/ProductDetails"));
const Cart = lazy(() => import("./Components/Cart"));
const Checkout = lazy(() => import("./Components/Checkout"));
const NotFound = lazy(() => import("./Components/NotFound"));

function App() {
    // State management for dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggles between light and dark modes
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode"); // Applies a global class for dark mode styling
    };

    return (
        <Router>
            <div className={`app ${isDarkMode ? "dark" : ""}`}>
                {/* Header component with theme toggling functionality */}
                <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

                {/* Suspense for lazy-loaded components */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>

                {/* Footer component */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;