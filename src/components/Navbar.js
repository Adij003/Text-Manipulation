import React from 'react';
import PropTypes from 'prop-types';
// we have to pass props as parameter
export default function Navbar(props) {
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.titlehead}</a>

    {/* note here we are accepting the prop that is passed */}

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.about}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {
        titlehead: PropTypes.string,
        about: PropTypes.string
}
// setting default props in case we do not pass it in the App.js file while using Navbar
Navbar.defaultProps = {
    titlehead: 'Set Title Here',
    about: 'Set About here'
}