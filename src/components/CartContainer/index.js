import React, { useContext } from 'react';
import cartContext from '../../context/cartContext';
import CheckoutCart from "./CheckoutCart";
import "./styles.css";

function CartContainer() {
  const { cart, removeItemFromCart, getPriceInCart } = useContext(cartContext);

  return (
    <>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Iamgen</th>
            <th>Productos</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id} className="cartList_row">
                <td>
                  <img height={50} src={item.imagenP} alt={item.titulo} />
                </td>
                <td>{item.titulo}</td>
                <td>$ {item.precioP}</td>
                <td>{item.count}</td>                
                <td>
                  <button onClick={()=> removeItemFromCart(item.id)}>X</button>
                </td>
                <th className="precio"> $ {item.precioP * item.count}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
        
      <div className="cartList_detail">
        <h4>El total de tu compra es de $ {getPriceInCart()}</h4>
      </div>

      <CheckoutCart total={getPriceInCart()} cart={cart}/>
    </>
  );
}

export default CartContainer;
