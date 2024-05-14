import './Logo.css';
import imgLogo from "../../images/logo.jpg"

function Logo() {
  return (
    <>
   <div className="logo">
        <img src={imgLogo} alt="Faberlic Logo"/>
    </div>
      
    </>
  );
}

export default Logo;