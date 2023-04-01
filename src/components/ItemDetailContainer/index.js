import "./styles.scss";
import { useState, useEffect } from "react";
import products from "../../products/products";
import { useParams } from "react-router-dom";
import Button from "../Button";
import ItemCount from "../ItemCount";
import { useContext } from "react";
import cartContext from "../../context/cartContext";

//-------------------------------------------------------------//

function getSingleItemsFromDatabase(idItem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let encontrado = products.find((item) => item.id === Number(idItem));
      resolve(encontrado);
    }, 1000);
  });
}
//-------------------------------------------------------------//


function ItemDetailContainer({ greeting }) {
  const [user, setUser] = useState({});
  const [cartItems, setCartItems] = useState();

  const params = useParams();
  const idUser = params.idUser;

  
  /*   useEffect(() => {
    fetch("https://reqres.in/api/users/" + idUser)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log("respuesta", json);
        setUser(json.data);
      });
  }, []); */

  useEffect(() => {
    getSingleItemsFromDatabase(idUser).then(respuesta => {
      setUser(respuesta);
    });
  }, []);

  const { addItem } = useContext(cartContext)

  function OnAddToCart(count){
    alert(`Agregaste ${count} items al carrito de mentira`);
    addItem(user,count);
}

  return (
    <>
    {/* 
      <div className="item-list-container">
        <h2>{greeting}</h2>

        <ul className="item-list">
          <li className="item-card" key={user.id}>
            <img src={user.imagenP} alt={user.titulo} />
            <h5>${`${user.precioP}`}</h5>
            <h4>{user.titulo}</h4>
            <button>Agregar al carrito</button>
          </li>
        </ul>
      </div>
      */}
      <div className="container-detail-product">
        <div className="box">
          <div className="img-holder" key={user.id}>
            <img src={user.imagenP} alt={user.titulo} />
          </div>
          <div className="basic-info" key={user.id}>
          <h3>${user.precioP}</h3>
            <div className="button-detail">
              {/*<button className="button-detail-1"> Agregar al carrito</button> */}
              {/*<button className="button-detail-1">Comprar de inmediato</button>*/}
              <Button onTouchButton={() => alert("Agregarte al carrito")} >
          Agregar al carrito
          </Button>
          <Button onTouchButton={() => {console.log("clickeaste"); }} >
          Comprar de inmediato
          </Button>
          
          <ItemCount OnAddToCart={OnAddToCart} 
          initial={1} 
          stock={user.stock}
          />
          
            </div>
            
          </div>
          <div className="Description">
          <h4>{user.titulo}</h4>
            <p>{user.descripcion1}</p>
          </div>
          <div className="Description-2">
          <h4>Read it because</h4>
          <p>{user.descripcion2}</p>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default ItemDetailContainer;