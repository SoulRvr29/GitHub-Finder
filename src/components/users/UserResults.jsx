import { useEffect, useState } from "react";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getUsers();
    }, 1000);
  }, []);

  const getUsers = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_URL}/users?per_page=10`
    );
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };
  if (loading) {
    return (
      <div className="h-full grid place-content-center text-2xl animate-pulse">
        Loading...
      </div>
    );
  } else
    return (
      <>
        <ul className="flex flex-wrap gap-4 justify-center">
          {users.map((item) => (
            <li
              key={item.login}
              className="text-center bg-base-300 p-4 rounded-xl"
            >
              <img
                className="size-32 rounded-full"
                src={item.avatar_url}
                alt={item.login}
              />
              <p>{item.login}</p>
            </li>
          ))}
        </ul>
      </>
    );
}

export default UserResults;
