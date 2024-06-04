import { useContext } from "react";
import "./CartLink.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink" >
      <Link to="/cart" className="Cart_ic">
        <span>{total}</span>
      </Link>
    </div>
  )
}