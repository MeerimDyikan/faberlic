import './Menu.css';
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <nav className='Menu'>
      <ul className='flex'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/delivery">Delivery</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;