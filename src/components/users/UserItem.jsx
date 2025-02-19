import { Link } from "react-router";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="flex items-center gap-4 w-70 rounded-2xl p-4 shadow-md bg-base-300 ">
      <div>
        <img className="rounded-full" width={50} src={avatar_url} alt="" />
      </div>
      <div>
        <div>{login}</div>
        <Link
          className="opacity-50 hover:opacity-100 hover:text-accent"
          to={`/users/${login}`}
        >
          Visit profile
        </Link>
      </div>
    </div>
  );
}

export default UserItem;
