import { useContext } from "react";
import { AppContext } from "../../App";
import "./OrderList.css";

export default function OrderList() {
  const { orders, products } = useContext(AppContext);

  if (!orders.length || !products.length) {
    return "No orders found.";
  }

  const output = orders.map(order => {
    const cartOutput = Object.keys(order.cart).map(productId => {
      const product = products.find(product => product.id === productId);

      if (!product) {
        return "Product not found";
      }

      return (
        <div className="product" key={product.id}>
          <li>
            <div className="product-name">{product.name}</div>
            <div>Amount: <span>{order.cart[productId]}</span></div>
            <div>Price: <span>{product.price}$</span></div>
            <div>Total price: <span>{order.cart[productId] * product.price}$</span></div>
          </li>
        </div>
      );
    })

    return (
      <ul className="Order" key={order.id}>
        <li>Name: <span>{order.name}</span></li>
        <li>Phone: <span>{order.phone}</span></li>
        <li>Address: <span>{order.address}</span></li>
        <li>Orders:
          <ul>
            {cartOutput}
          </ul>
        </li>
        <hr />
      </ul>
    );
  })

  return (
    <div className="OrderList">
      {output}
    </div>
  );
}