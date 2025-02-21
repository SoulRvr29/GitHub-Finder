import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import UserItem from "./UserItem";

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext);
  useEffect(() => {
    setTimeout(() => {
      // fetchUsers();
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70vh] grid place-content-center text-2xl animate-pulse">
        <span className="loader"></span>
      </div>
    );
  } else
    return (
      <>
        <div className="flex flex-wrap gap-4 justify-center">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </>
    );
}

export default UserResults;
