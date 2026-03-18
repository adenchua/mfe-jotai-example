import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div>
      <p>This is the host landing page</p>
      <Link to="/products/list">Products Listing Page</Link>
    </div>
  );
}
