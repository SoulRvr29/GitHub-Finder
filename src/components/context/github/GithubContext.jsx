import { useState, createContext } from "react";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_URL}/users?per_page=10`
    );
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };
  return (
    <GithubContext.Provider value={{ users, loading, getUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
