import React, { useContext } from 'react';
import cartContext from '../../context/cartContext';

function CartContainer() {
    const { cart } = useContext(cartContext);


    /*Condicional carrito vacio */
    if(cart.length === 0)
    return( <div>
        <h2>carrito vacio</h2>
    </div>)
  /*listado de esos productos*/
  return(
    <div>
    <h1>tu carrito</h1>
  {cart.map ((item) =>{
    return (
        <div>
             <img src={item.imagenP} alt={item.titulo} />
            <p>Producto: {item.titulo}</p>
            <p>Cantidad de unidades: {item.count}</p>
            <p>Precio: ${item.precioP}</p>
            <p>Total Cantidad: ${item.precioP*item.count}</p>
            <hr></hr>
        </div>
    );
    <h1>El total de tu compra es: ${item.precioP*item.count}</h1>
  })}
</div>
  ); 
}

export default CartContainer;