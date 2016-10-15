import React from 'react';

const Repos = ({repos}) => {
  return (
    <div>
      <h3> User Repos </h3>
      <ul className="list-group">
        {repos.map((repo, index) => {
          return (
            <li className="list-group-item" key={repo.name}>
              <h4><a href={repo.html_url}>{repo.name}</a></h4>
              <p>{repo.description}</p>
              {repo.languages_url && <p><a href={repo.languages_url}>{repo.language}</a></p>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}

export default Repos;
