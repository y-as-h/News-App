import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand nav_editor mr-4" to="/"><span>News</span>zilla</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between">
              <li className="nav-item">
                <Link className="nav-link mx-4" aria-current="page" style={{ fontSize: '18px', fontFamily: 'Comic Sans MS' }} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" style={{ fontSize: '18px', fontFamily: 'Comic Sans MS' }} to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" style={{ fontSize: '18px', fontFamily: 'Comic Sans MS' }} to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" style={{ fontSize: '18px', fontFamily: 'Comic Sans MS' }} to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" style={{ fontSize: '18px', fontFamily: 'Comic Sans MS' }} to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" style={{ fontSize: '18px', fontFamily: 'Comic Sans MS' }} to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" style={{ fontSize: '18px', fontFamily: 'Comic Sans MS' }} to="/technology">Technology</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    )
  }
}
