import "./styles.scss";
import { useState, useEffect } from "react";
import products from "../../products/products";
import { useParams } from "react-router-dom";


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
              <button className="button-detail-1"> Agregar al carrito</button>
              <button className="button-detail-1">Comprar de inmediato</button>
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