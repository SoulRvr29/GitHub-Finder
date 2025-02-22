import { useState, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import AlertContext from "../context/alert/AlertContext";
import Alert from "../Alert";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const handleClear = () => {
    clearUsers();
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit}>
        <Alert />
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn absolute right-0" type="submit">
            OK
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-ghost m-4"
          onClick={() => {
            handleClear();
          }}
        >
          clear
        </button>
      )}
    </div>
  );
}

export default UserSearch;
