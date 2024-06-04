import './Logo.css';
import imgLogo from "../../images/logo.jpg"
import { NavLink } from "react-router-dom";
function Logo() {
  return (
    <>
   <div className="logo">
   <NavLink to="/">
        <img src={imgLogo} alt="Faberlic Logo"/>
        </NavLink>
    </div>
    
    </>
  );
}

export default Logo;