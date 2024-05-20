import './Menu.css';
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <nav className='Menu'>
      <ul className='flex'>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about">О компании</Link>
        </li>
        <li>
          <Link to="/delivery">Доставка</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>
        <li>
          <Link to="/cart">Каталог</Link>
        </li>
      </ul>
    </nav>
    
  );
}

export default Menu;