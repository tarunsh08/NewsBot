import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsBot</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

