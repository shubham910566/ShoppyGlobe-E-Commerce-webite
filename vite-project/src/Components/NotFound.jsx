import { Link } from "react-router-dom";
import "./NotFound.css";

// Displays 404 page for invalid routes
function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default NotFound;