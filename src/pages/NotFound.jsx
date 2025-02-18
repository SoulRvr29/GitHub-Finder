import { Link } from "react-router";

function NotFound() {
  return (
    <div className="text-center flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-3xl">404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">
        <button className="btn btn-primary">back to home</button>
      </Link>
    </div>
  );
}

export default NotFound;
