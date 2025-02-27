import {
  FaEye,
  FaInfo,
  FaLink,
  FaStar,
  FaUtensils,
  FaCalendarAlt,
} from "react-icons/fa";

import PropTypes from "prop-types";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
    created_at,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} target="_blank">
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div
            title="created"
            className="mr-2 mb-2 badge badge-outline badge-secondary badge-lg"
          >
            <FaCalendarAlt className="mr-2" />{" "}
            {created_at && created_at.slice(0, 4)}
          </div>
          <div title="watchers" className="mr-2 mb-2 badge badge-info badge-lg">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div
            title="stargazers"
            className="mr-2 mb-2 badge badge-success badge-lg"
          >
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div title="issues" className="mr-2 mb-2 badge badge-error badge-lg">
            <FaInfo className="mr-2" /> {open_issues}
          </div>
          <div title="forks" className="mr-2 mb-2 badge badge-warning badge-lg">
            <FaUtensils className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
