import { useState, useContext } from "react";
import GithubContext from "../context/github/GithubContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users } = useContext(GithubContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  const handleClear = () => {};

  return (
    <div className="flex flex-col items-center gap-4">
      <form onSubmit={handleSubmit}>
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn  absolute right-0">OK</button>
        </div>
      </form>
      {users.length > 0 && (
        <button className="btn btn-ghost" onClick={() => handleClear}>
          clear
        </button>
      )}
    </div>
  );
}

export default UserSearch;
