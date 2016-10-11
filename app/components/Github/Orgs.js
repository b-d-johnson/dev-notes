var React = require('react');

var Orgs = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    orgs: React.PropTypes.array.isRequired
  },
  render: function(){
    console.log("Orgs: ", this.props.orgs);
    var orgs = this.props.orgs.map(function(orgs, index){
      return (
        <li className="list-group-item" key={index}>
          {orgs.login && <p> {orgs.login}</p>}
          {orgs.description && <p> {orgs.description}</p>}
          {orgs.repos_url && <p><a href={orgs.repos_url}>Repos</a></p>}
        </li>
      )
    });
    return (
      <div>
        <h3> Public Organizations </h3>
        <ul className="list-group">
          {orgs}
        </ul>
      </div>
    )
  }
})

module.exports = Orgs;
