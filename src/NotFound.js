import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page can NOT be found..</p>
      <Link to="/">Back to our homepage...</Link>
    </div>
  );
};

export default NotFound;
