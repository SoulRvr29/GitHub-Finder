import React from "react";

function RepoList({ repos }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Latest Repositories</h2>
      {repos.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
}

export default RepoList;
