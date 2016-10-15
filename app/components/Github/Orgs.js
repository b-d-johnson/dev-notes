import React from 'react';

const Orgs = ({orgs}) => {
  return (
    <div>
      <h3> Public Organizations </h3>
      <ul className="list-group">
        {orgs.map((orgs, index) => {
          return (
            <li className="list-group-item" key={index}>
              {orgs.login && <a href={orgs.url}><h4>{orgs.login}</h4></a>}
              {orgs.description && <p> {orgs.description}</p>}
              {orgs.repos_url && <p><a href={orgs.repos_url}>Repos</a></p>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Orgs.propTypes = {
  username: React.PropTypes.string.isRequired,
  orgs: React.PropTypes.array.isRequired
}

export default Orgs;
