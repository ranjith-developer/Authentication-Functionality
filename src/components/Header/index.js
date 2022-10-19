// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <ul className="nav-menu">
        <li className="link-item">
          <Link to="/">Home</Link>
        </li>
        <li className="link-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
