import { useReducer, createContext } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || "https://api.github.com";

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const getUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users?per_page=10`);
    const data = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };
  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, getUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
