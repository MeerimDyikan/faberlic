import "./Auth.css";
import { useContext } from "react";
import { LogIn, LogOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button className="blueBtn" onClick={LogIn}>Sign in</button> : null}
      {user ? <span><Link to="/orders">{user.displayName}</Link></span> : null}
      {user ? <button className="icon"><Link to="/orders"><i class="fa-solid fa-user" /></Link></button> : null}
      {user ? <button className="blueBtn" onClick={LogOut}>Sign out</button> : null}
    </div>
  );
}