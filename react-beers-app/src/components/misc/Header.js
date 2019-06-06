import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" href="#">Active</Link>
      </li>
    </ul>
  )
}

export default Header;