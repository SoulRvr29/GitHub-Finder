import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <div className="h-full p-4">
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
