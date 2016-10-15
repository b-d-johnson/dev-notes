import React from 'react';
import SearchGithub from './SearchGithub';

const Main = ({children, history}) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-2 col-sm-offset-1">
          <h3>Dev Notes</h3>
        </div>
        <div className="col-sm-2 col-sm-offset-1" style={{marginTop: 15}}>
          <h4>Learning Queue</h4>
        </div>
        <div className="col-sm-2" style={{marginTop: 15}}>
          <h4>Graphs</h4>
        </div>
        <div className="col-sm-4" style={{marginTop: 15}}>
          <SearchGithub history={history}/>
        </div>
      </nav>
      <div className="container">
        {children}
        </div>
    </div>
  )
}

export default Main;
