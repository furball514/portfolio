import React from 'react';
import { Link } from 'office-ui-fabric-react/lib/Link';

const NavBar = () => (
  <div>
    <h1 style={{ fontSize: '76px' }}>Portfolio</h1>
    <nav>
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Skills</Link>
        </li>
        <li>
          <Link>Showcase</Link>
        </li>
        <li>
          <Link>Tools</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavBar;
