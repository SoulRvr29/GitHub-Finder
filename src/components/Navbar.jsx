import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="navbar bg-neutral px-4 flex justify-between">
      <div className="flex items-center gap-2">
        <FaGithub />
        <Link to="/" className=" text-xl">
          GitHub Finder
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/" className="btn btn-ghost ">
          home
        </Link>
        <Link to="/about" className="btn  btn-ghost">
          about
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
