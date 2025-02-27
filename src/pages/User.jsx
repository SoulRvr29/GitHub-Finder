import { useEffect, useContext } from "react";
import GithubContext from "../components/context/github/GithubContext";
import { useParams, Link } from "react-router";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import RepoList from "../components/repos/RepoList";

function User() {
  const { getUser, user, loading, getUserRepos, repos } =
    useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
  }, []);

  const {
    avatar_url,
    login,
    name,
    bio,
    type,
    hireable,
    html_url,
    location,
    blog,
    twitter_username,
    followers,
    following,
    public_gists,
    public_repos,
    created_at,
  } = user;

  return loading === true ? (
    <div className="fixed top-0 left-0 w-screen h-screen grid place-content-center">
      <div className="loader"></div>
    </div>
  ) : (
    <div className="w-full mx-auto lg:w-10/12">
      <Link to="/" className="btn btn-ghost mb-4">
        Back To Search
      </Link>
      {/* STATS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
        <div className="custom-card-image mb-6 md:mb-0">
          <div className="rounded-lg shadow-xl card image-full">
            <figure>
              <img src={avatar_url} alt="avatar" className="brightness-75" />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title mb-0 drop-shadow-[1px_1px_1px_black]">
                {name}
              </h2>
              <p className="flex-grow-0 drop-shadow-[1px_1px_1px_black]">
                {login}
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="mb-6 px-4">
            <h1 className="text-3xl card-title">
              {name}
              <div className="ml-2 mr-1 badge badge-secondary badge-outline text-nowrap">
                since {created_at && created_at.slice(0, 4)}
              </div>
              <div className="ml-2 mr-1 badge badge-success">{type}</div>
              {hireable && (
                <div className="mx-1 badge badge-info">Hireable</div>
              )}
            </h1>
            <p>{bio}</p>
            <div className="mt-4 card-actions">
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Visit Github Profile
              </a>
            </div>
          </div>

          <div className="w-full rounded-lg shadow-md bg-base-100 stats flex flex-col md:flex-row">
            {location && (
              <div className="stat">
                <div className="stat-title text-md">Location</div>
                <div className="text-lg stat-value">{location}</div>
              </div>
            )}
            {blog && (
              <div className="stat">
                <div className="stat-title text-md">Website</div>
                <div className="text-lg stat-value">
                  <a href={blog} target="_blank" rel="noreferrer">
                    {blog}
                  </a>
                </div>
              </div>
            )}
            {twitter_username && (
              <div className="stat">
                <div className="stat-title text-md">Twitter</div>
                <div className="text-lg stat-value">
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {twitter_username}
                  </a>
                </div>
              </div>
            )}
            {twitter_username && (
              <div className="stat">
                <div className="stat-title text-md">Twitter</div>
                <div className="text-lg stat-value">
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-4xl md:text-5xl" />
            </div>
            <div className="stat-title text-sm pr-5">Followers</div>
            <div className="stat-value pr-5 text-4xl md:text-2xl">
              {followers}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-4xl md:text-5xl" />
            </div>
            <div className="stat-title text-sm pr-5">Following</div>
            <div className="stat-value pr-5 text-4xl md:text-2xl">
              {following}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-4xl md:text-5xl" />
            </div>
            <div className="stat-title text-sm pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-4xl md:text-2xl">
              {public_repos}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-4xl md:text-5xl" />
            </div>
            <div className="stat-title text-sm pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-4xl md:text-2xl">
              {public_gists}
            </div>
          </div>
        </div>
      </div>
      <RepoList repos={repos} />
    </div>
  );
}

export default User;
