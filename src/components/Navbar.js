import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../logo.png';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: ''
    };
  }

 
  
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light btn-light sticky-top">
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            <img src={logo} alt="logo"/>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav"> 
            <ul className="navbar-nav text-right">
              <Link className="btn btn-primary text-left" to="/add-hackathon">
                Add hackathon
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

