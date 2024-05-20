import './Cart.css';
import { Link } from 'react-router-dom';
import catImg from "../../images/cat-001.jpg"
function Cart() {
  return (
    <>
     <Link className="Catalogue" to ="https://faberlic.com/index.php?option=com_flippingbook&view=catalog"> <img src={catImg} alt="" /> </Link>
    </>
  );
}

export default Cart;