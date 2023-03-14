import React from "react";
import { Link } from "react-router-dom";
import { IconName } from "react-icons/fa";
export default function ItemList({ users }) {
 
  return (
    
    <div className="item-list-container">
      <ul className="item-list">
        {users.map((user) => (
          /* remplazar por componente <Item> */
          <li className="item-card" key={user.id}>
            <img src={user.imagenP} alt={user.precioP} />
            <h3>{user.titulo}</h3>
            <h4>${`${user.precioP}`}</h4>
            {/*<icon>{`${user.last_name}`}</icon>*/}
            <br />

            <Link to={`/detalle/${user.id}`}>
              <button className="button-detail-1">Ver más</button>
            </Link>
          </li>
          /* hasta aca </Item> */
        ))}
      </ul>
    </div>
  );
}