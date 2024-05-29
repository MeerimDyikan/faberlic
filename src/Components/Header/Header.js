import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Icons from '../Icons/Icons';


function Header() {
  return (
    <header className="header">
    <Logo/>
   <Menu/>
   <Icons/>
   <Button/>
     
    
    
  
</header>

    
     
   
  );
}

export default Header;