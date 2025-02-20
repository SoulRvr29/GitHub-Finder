import UserResults from "../components/users/UserResults";
import ReducerTest from "../components/context/github/GithubReducer";

function Home() {
  return (
    <div className="h-full p-4">
      <UserResults />
      <ReducerTest />
    </div>
  );
}

export default Home;
