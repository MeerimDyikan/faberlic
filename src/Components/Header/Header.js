import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className="header">
    <Logo/>
   <Menu/>
   <Button/>
</header>

    
     
   
  );
}

export default Header;