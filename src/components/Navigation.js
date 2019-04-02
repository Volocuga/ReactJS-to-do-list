import React from 'react';

 const Navigation = (props) => (
  <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#/">Navbar</a>
  <button className="navbar-toggler" type="button">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
      </li>
    </ul>
     <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
)

export default Navigation;